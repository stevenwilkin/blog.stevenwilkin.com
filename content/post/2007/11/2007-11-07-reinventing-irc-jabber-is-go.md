---
title: "Reinventing IRC - Jabber is go"
date: "2007-11-07"
categories: 
  - "infurious"
  - "linux"
  - "tech"
---

After a lot of frustration, reading of documentation and even giving up completely on certain paths of action I finally got Jabber up and running. The “Jabber burnout” as [Adian](http://godswearhats.com/) called it was terrible and only now do I feel de-stressed enough to write about it.

I initially setup an installation of [jabberd2](http://jabberd2.xiaoka.com/) as I have had previous experience with it and was comfortable with it's administration. I got it working without difficulty and could connect to it via a standalone client but ended up abandoning it when I tried to get a web interface working with it.

As is, jabberd2 doesn't have it's own http polling system, which is necessary for use with a web client and I looked at a couple of mplementations, including [Punjab](http://www.butterfat.net/wiki/Projects/PunJab)

but decided to throw in the towel and go with a different Jabber server which had this facility built-in, along with logging and multi-user chat: all things jabberd2 didn't provide. Enter [ejabberd](http://www.ejabberd.im/).

I found configuring ejabberd a bit awkward and the documentation a bit unclear but it eventually bent to my will. This was followed with a lot of playing about with [mod\_proxy](http://httpd.apache.org/docs/2.0/mod/mod_proxy.html) which made me want to cry more than once, but the result was that I got [JWChat](http://jwchat.sourceforge.net/) working and from behind a restrictive corporate firewall :)

Getting multi-user chat operational was the final piece of the puzzle and I learned an important lesson: ejabberd's `mod_muc` module likes to be configured to use a subdomain of the virtual host, even if it doesn't resolve to anything in DNS. This was a painful lesson to learn...

Today, we have a groupchat facility, with logging, that's accessible from anywhere on the web, magic!
