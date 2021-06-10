---
title: "Synchronising production and development code with subversion"
date: "2007-06-06"
categories: 
  - "code"
  - "linux"
  - "tech"
---

Now that [MacServ has been deployed](/2007/05/31/macserv-deployed/) keeping development and production copies of the code synchronised has become an issue. The app is still very much a work in progress, with daily requests for fixes & tweaks from the technicians using it and instead of keeping track of modified files and then manually updating them via `scp`, I decided to let [laziness](http://blog.outer-court.com/archive/2005-08-24-n14.html) motivate me to utilise a less painful system.

I spent a bit of time researching the use of `rsync` but decided that [subversion](http://subversion.tigris.org/) would better suit my needs. I started by adding a new user and creating a directory for my repository:

$ su
# adduser svn
...
# su svn
$ cd ~
$ mkdir repo

Next was to create the repository and make it writable by all accounts in the `users` group:

$ svnadmin create repo/
$ chmod -R g+w repo/

Just to be awkward, I decided on having [multiple access methods](http://svnbook.red-bean.com/en/1.2/svn.serverconfig.multimethod.html) to the repository. For local access I added a username & password for myself into `repo/conf/passwd` and fired up the daemon, restricting it to `repo/`, thusly:

`$ svnserve -d -r /home/svn/repo/`

In order for remote access to preserve file permissions on the repository, wrappers for `svn`, `svnserve`, `svnadmin` and `svnlook` had to be created:

$ cat /usr/local/bin/svn
#!/bin/bash
umask 002
/usr/local/bin/svn-real "$@"

To prevent the logs on my development machine from filling with failed login attempts, `ssh` connections to it are [on a non-standard port](/2007/01/25/security-enhancements-for-dummies/), so the final step in enabling remote `svn+ssh://` access was to tweak the `ssh` settings on the hosting account:

$ cat ~/.ssh/config
Host nulltheory.com
Port port-number

Finally I was able to perform the initial check-in of my code and then check it out on the production side of things :)

I've still got a lot of things to learn about the day-to-day use of version control: for instance, I had problems with some configuration and `.htaccess` files which are required to be different between development & production. Having to enter my password multiple times to perform an update is also a bit of a drag, but it might motivate me to look into the use of [ssh-agent](http://www.securityfocus.com/infocus/1812) and public-key access to my development machine, doing away with login passwords altogether...

Geek out!
