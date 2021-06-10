---
title: "Friday Funk"
date: "2006-12-15"
categories: 
  - "linux"
  - "meta"
  - "tech"
---

I got into the office this morning and went through my usual routine; I'd put in a good workout and the weekend is fast approaching: life seemed good. I was logged on to my workstation, launched Outlook (I know, I know) and attempted to connect to [substance](http://substance.nulltheory.com/) via Jabber and SSH. My heart fell.

That [Slackware](http://slackware.com/) box has been online for nearly a year now and other than my own lack of technical ability, the only problem I've had was when I upgraded my version of [OpenSSL](http://www.openssl.org/) and [OpenSSH](http://www.openssh.com/) refused to restart. Hooking up my [KVM](http://en.wikipedia.org/wiki/KVM_switch) to the box and grabbing a fresh OpenSSH package solved the problem and I didn't even have to restart the machine. A similar procedure will probably be required now.

The funny thing is that I can write this post, which indicates that both Apache and MySQL are functioning. I've just tried using telnet to connect to port 22 and I'm getting a response, but no joy with [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/). Checking my [AWStats](http://awstats.sourceforge.net/) installation sometimes gives an _Internal Server Error_ from Apache, but other times not.

Ah well, there's nothing I can do until I get home other than to attempt to connect periodically. Not being able to get a VNC connection to my home desktop and the Debian box I use for downloading from Usenet is going to reduce the distraction from finishing off the next version of the application I'm developing. Expect an update later.
