---
title: "ISP style mail server on Debian VPS"
date: "2008-01-01"
categories: 
  - "linux"
  - "tech"
---

Last month I decided to invest in a VPS from [VPSLink](http://vpslink.com/).

I had been considering this for a while, especially after my experience using an Ubuntu VPS with Infurious and after 2 power failures within as many weeks due to building work nearby to my home, my hand was forced. No more hosting on a Linux box on the end of a DSL connection for me!

I opted for a [XEN](http://en.wikipedia.org/wiki/Xen) based VPS running Debian Etch. I've really come to love [APT](http://en.wikipedia.org/wiki/Advanced_Packaging_Tool) based distros after running [Kubuntu on my desktop](/2006/09/13/first-post-from-kubuntu/) before I was [endowed with a Mac](/2007/10/27/back-in-mac/) and with the relative ease of setting up all the Infurious services on Ubuntu. So I decided to go upstream and it's a far cry from my past experiences with Slackware :)

My first priority was getting my LAMP stack up and running and I spent my free time over the past few days following [this excellent tutorial](http://workaround.org/articles/ispmail-etch/).

Just like many other things in the FLOSS world: you get the instructions, follow those instructions and it Just Works. This instance was no different and all I really had to so was copy and paste commands & configuration settings and I probably spent more time doing background reading, testing each part as I went along and keeping track of all the changes I made on my personal wiki.

The result is I can now host email accounts for as many domains I wish, provide access to those accounts over IMAPS and perform server-side virus scanning and spam filtering.

I've said it before and I'll say it again: I love free software!
