---
title: "MySQL database backup with remote storage"
date: "2010-01-04"
categories: 
  - "linux"
  - "tech"
---

### Prevent a disaster

After reading [Jeff Atwood's backup failure](http://www.codinghorror.com/blog/archives/001315.html) last month I decided to finally get around to doing something I'd been intending to do "one of these days" but had in actual fact been putting off for _years_.

Here's the steps I took to ensure the databases on my webserver were backed up every night and copies of the dumps stored remotely.

### On the remote storage machine

Generate an ssh key pair with and empty password and put the public key on the remote server. This will give our script access to the server without requiring you to enter a password each time:

$ ssh-keygen -t rsa -f /home/steve/code/db\_backup/id\_rsa
$ scp /home/steve/code/db\_backup/id\_rsa.pub REMOTEHOST:

This script will fetch all the backups, logging in as the _rsync_ user and using the private key just generated. It's located at _/home/steve/code/db\_backup/sync\_backups.sh_:

#!/usr/bin/env bash
rsync -e "ssh -l rsync -i /home/steve/code/db\_backup/id\_rsa" -avz REMOTEHOST:mysql/ /data/primary/backup/mysql/

Have this happen automatically daily at 12:20am:

$ crontab -l
# m h  dom mon dow   command
20	0	\*	\*	\*	/home/steve/code/db\_backup/sync\_backups.sh
$

### On the machine to be backed up

Create a new user and allow ssh access with the previously generated key:

\# adduser rsync
# mkdir ~rsync/.ssh
# mv ~steve/id\_rsa.pub ~rsync/.ssh/authorized\_keys
# chown rsync:rsync ~rsync/.ssh/authorized\_keys
# chmod 400 ~rsync/.ssh/authorized\_keys

This script will dump all available databases and is located at _/root/bin/backup\_databases.sh_:

#!/usr/bin/env bash

# dump all available databases
# SJW

AUTH='-uroot -pROOTPASSWORD'
DBS=\`mysql $AUTH --skip-column-names -e 'SHOW DATABASES;'\`
BACKUPS='/home/rsync/mysql/'

for DB in $DBS
do
	mysqldump $AUTH $DB > $BACKUPS\`date +%Y%m%d%H%M\`\_$DB.sql
done

# delete backups older than 5 days
find $BACKUPS -mtime +5 -type f | awk '{print "rm "$1}' | sh

Have the script run nightly at 12:10am via cron:

\# crontab -l
# m h  dom mon dow   command
10  0 \* \* \* /root/bin/backup\_databases.sh
#

### Closing thoughts

This approach is realtively straight forward, everything happens automatically and it could easily be extended to cover mailboxes, source code repositories, uploaded content etc. However, for mission-critical databases [master-slave replication](http://dev.mysql.com/doc/refman/5.0/en/replication.html) may be more appropriate. For further reading you may enjoy [JWZ's thoughts on backups](http://jwz.livejournal.com/801607.html).
