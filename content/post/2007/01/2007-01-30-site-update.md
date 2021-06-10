---
title: "Site update"
date: "2007-01-30"
category:
  - "meta"
  - "tech"
---

Over the past bunch of days I've been back into web-development land and seeing as I was staring at code for prolonged periods I decided I might as well "enhance" this site a bit too.

I started with tweaking the frontpage: I rearranged things a bit and instead of displaying my latest blog entry in its entirety I now have excerpts from the previous 4 entries. I initially tried using the built-in `the_excerpt()` WordPress [template tag](http://codex.wordpress.org/Template_Tags) to achieve this but I wasn't too fussed with the result and after some brief searching I found a plugin called [the-exceprt-reloaded](http://guff.szub.net/2005/02/26/the-excerpt-reloaded/) which seems to do the job better.

It was only [a month ago](/2006/12/30/wordpress-205/) that I upgraded my WordPress installation to version 2.0.5 and I was aware that 2 other point releases had been since published which I ignored: I just couldn't be bothered with the hassle of upgrading and I knew that the next minor release was upcoming and was in fact [released 8 days ago](http://wordpress.org/development/2007/01/ella-21/).

I began the upgrade to 2.1 by packing the full site into a tarball and using the backup plugin to create a copy of the blog database. I deactivated the installed plugins, unpacked [latest.tar.gz](http://wordpress.org/latest.tar.gz) and replaced all the old files apart from `.htacces` and `wp-config.php` and `wp-content/`. After running `wp-admin/upgrade.php` the blog was up and running without _any_ problems and I could easily reactivate my plugins.

The rest of my site wasn't so lucky: the `require_once()` statement on my frontpage responsible for pulling in `wp-blog-header.php` was throwing a fatal error which I eventually solved by moving the statement into `/index.php` from its previous location.

So far the things I like about this upgrade are auto-saving of drafts and having the ability to switch between the WYSIWYG and code views smoothly which makes entering XHTML character entities and CSS classes etc much easier. The spellchecker will also come in handy when I'm blogging from my home desktop which doesn't yet have the benefit of the Firefox 2.0 spellchecker.
