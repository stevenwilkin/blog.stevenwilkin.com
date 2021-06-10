---
title: "Updating WordPress via Subversion: it works!"
date: "2008-04-01"
category:
  - "linux"
  - "tech"
---

The last time a new version was released I decided to [update my WordPress installation with Subversion](/2008/03/05/updating-wordpress-via-subversion/) with the idea being that this would make future updates easier.

Well, the good news is that this technique works :)

All it took was 3 simple steps:

1. `$ cd /var/www/sickbiscuit.com/blog`
2. `$ svn switch http://svn.automattic.com/wordpress/tags/2.5/ .`
3. launch `wp-admin/upgrade.php` via web-browser

To be safe I backed up the database prior to the update and so far everything seems good, job's a good 'un!
