---
title: "Updating WordPress via Subversion"
date: "2008-03-05"
category:
  - "linux"
  - "meta"
  - "tech"
---

I read a few months back that [Stuart Langridge was using Subversion to keep his WordPress up-to-date](http://www.kryogenix.org/days/2007/11/23/wordpress-through-subversion) and I thought: "that's clever" and didn't do anything about it.

Today I was talking to [Matt](http://cimota.com/blog) and he mentioned updating one of his WordPress installations and I noticed I was due an update myself. I downloaded the latest release and was having a quick skim through the [upgrade procedure](http://codex.wordpress.org/Upgrading_WordPress) to make sure I wasn't forgetting about anything and I spotted a link to the [Subversion update instructions](http://codex.wordpress.org/Installing/Updating_WordPress_with_Subversion)... I'm off work sick today and have the time so I decided to give it a go.

I [backed up my database](http://www.ilfilosofo.com/blog/wp-db-backup/) and checked out the latest stable version:

steve@decaf~$ cd /var/www/sickbiscuit.com
steve@decaf:/var/www/sickbiscuit.com$ svn co http://svn.automattic.com/wordpress/tags/2.3.3/

I copied over my database config file, theme, plugins and uploads and ran the `wp-admin/upgrade.php` script via my browser. The final act was to modify the symlink pointing to the WordPress directory and it worked first time. Profit!

Hopefully whenever I need to update in the future all I'll have to do is use the following:

svn sw http://svn.automattic.com/wordpress/tags/NEW\_VERSION/

followed by running the database upgrade script again. Quick and painless.
