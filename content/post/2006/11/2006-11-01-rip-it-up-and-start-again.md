---
title: "Rip It Up And Start Again"
date: "2006-11-01"
category:
  - "code"
  - "meta"
---

I've just finished putting the changes I've been making to this site live. The front page is now an integration of my latest blog post, a random image from my gallery and a short bio of myself.

Getting the latest post was explained well by [this post](http://ifelse.co.uk/archives/2005/04/10/make-wp-show-only-one-post-on-the-front-page/) and boils down to including the [WordPress](http://wordpress.org/) header file and calling _query\_posts()_ with the appropriate search criteria, from there it is a simple matter of making use of [The Loop](http://codex.wordpress.org/The_Loop) and [Template Tags](http://codex.wordpress.org/Template_Tags), just like when creating a theme. I was getting an error here, mentioned on [this forum](http://wordpress.org/support/topic/86399), depending on where abouts I included the header but solved it by declaring: _global $wpdb, $wp, $wp\_rewrite, $wp\_query;_ before the _require_ statement.

Displaying a random gallery image required the use of the [ImageBlock](http://codex.gallery2.org/index.php/Gallery2:GalleryEmbed:getImageBlock) module and thankfully was painless. The whole visual aspect of this kind of thing continues to perplex me and I'm thankful for tools like [colour wheels](http://wellstyled.com/tools/colorscheme2/index-en.html) which have come in handy. I'm still aware that this site has that "designed by a programmer" look and lacks a degree of finesse, but if I was a designer I probably wouldn't be a programmer!
