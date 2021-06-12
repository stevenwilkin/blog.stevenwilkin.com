---
title: Migrating from WordPress to Hugo
date: 2021-06-11
category:
  - meta
---

When I [started blogging in 2006](/2006/05/24/and-so-the-legend-grows/) the usual approach was to install WordPress on an Apache web server running PHP and MySQL. Shared web hosting accounts were widely available and more than adequate then but I was in the early stages of my professional life so instead I had a salvaged PC running 24/7 in my living room. I ran [Slackware](http://www.slackware.com/) on it and kept a domain name pointed at it via dynamic DNS.

While I didn't pay hosting fees the extra heat, sound and electricity charges _were_ noticable and the performance was terrible. Fortunately though it taught me the basics of what I was to eventually build a career upon so it was all worth it in the end.


## Static site generation

Not long after that time I was impressed with [the scripts JWZ had written](https://www.dnalounge.com/backstage/src/website/) to generate static content for one of his sites. I remember telling my boss at the time about it and he thought I was crazy. He loved being able to install a fresh copy of WordPress on his hosting account, upload a theme and have a site ready for a new project within a few minutes.

Over time dedicated WordPress hosting accounts appeared and as new web development frameworks were released many developers used their personal blogs as a testing ground for the latest software so I gave static site generation no more thought.

Eventually [Jekyll](https://jekyllrb.com/) emerged from the Ruby community and it became trendy to have sites generated as static content and served directly from cloud storage. What was old is new again.


## Late to the party

In recent years I've been keen to simplify as much of my life as possible. I've reduced my investment portfolios to a minimal number of funds, let unused domain names expire and when I reviewed my various hosting accounts it dawned on me that I could declutter here too.

If I migrated my blog to a static site I could do away with the VM I was running just for PHP and MySQL, I would also have the added benefit of version control and not having to worry about the database backup scripts ever failing. I'd missed the trend but it still seemed like a worthwhile project.


## The migration

Thankfully WordPress has a built-in option to export all it's contents in a single XML file. That file was easily converted into a series of individual Markdown files with [wordpress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown). 15 years of posts processed in moments.

I've been writing a lot of Go recently so I decided to use [Hugo](https://gohugo.io/) as the generator.

The quickstart guide gave me a skeleton site to which I added the post files. A copy of the WordPress uploads directory was dropped in as static content so image URLs in the content would still work. A few tweaks to the configuration and the theme were all that were left. I was genuinely expecting a much more painful process.

Running `hugo` generated the assets which were then deployed onto a VM running Nginx using `rsync`. Easy.

The content of this post and the rest of the blog are now found on [GitHub](https://github.com/stevenwilkin/stevenwilkin.com).
