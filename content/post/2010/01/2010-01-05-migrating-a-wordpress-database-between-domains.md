---
title: "Migrating a WordPress database between domains"
date: "2010-01-05"
categories: 
  - "mysql"
  - "tech"
---

Occassionally I find myself developing a [WordPress](http://wordpress.org/) theme which will then require moving from development into production or otherwise having to move a blog between domains.

Apart from the transfer of the files, including plugins, theme and core WordPress installation, there is only 1 slightly gotcha: the database. I've never been quite sure why but WordPress stores the URL of the blog in it's database, not once, but twice. For the blog to be migrated the database needs a slight tweak.

As always, create a backup before doing anything. This can be done with phpMyAdmin or using the _mysqldump_ command like so:

$ mysqldump -uUSER -pPASSWORD DATABASE > /path/to/backup.sql

If the database is to be hosted on a different machine you can then import this dump using using which ever method you're comfortable with. Finally, run the following query on the database, substituting your own domain name:

UPDATE
	wp\_options
SET
	option\_value = 'http://DOMAIN.TLD'
WHERE
	option\_name IN ('siteurl', 'home');

That's it!
