---
title: "iTerm on OS X"
date: "2007-03-07"
categories: 
  - "mac"
  - "tech"
---

Over the past week and a half I've been fine-tuning my Mac experience: getting used to the system in general, in particular the keyboard, and building up my arsenal of applications.

I'm not a Unix wizard, but I do make a lot of use of the command-line so I'm enjoying the underlying BSD-goodness of OS X and multiple terminal sessions are a necessity: one to tunnel select local ports to my home slackware box via `ssh`, one to perform local operations and one to host a `screen` session on our development box.

I initially used `Terminal.app` but running several instances of it proved a bit fiddly: if I avoid cluttering my screen real-estate by minimising my terminals and then try to switch to one it isn't automatically unminimised. Enter [iTerm](http://iterm.sourceforge.net/).

iTerm seems to solve my problem: it allows me to have multiple shells open and accessible via a single, tabbed interface without having to think about the implications of running a `screen` session within another `screen` session.

The only real difficulty I've had is the behavior of the arrow keys within `vim`, but after much head-scratching and googling [this post](http://www.wains.be/index.php/2007/02/16/my-review-of-mac-os-x/) came to my rescue: I added `export TERM=dtterm` into my `~/.profile`, executed a quick `source ~/.profile` to make the changes active and went about my merry way.

A minor niggle is when I create a new tab: it's background colour doesn't seem to match up with that I specified in the preferences, but this seems to be fixed by going to View > Show Session Info and turning Transparency on and then off.

All in all, I'm adjusting and next on my agenda might well be looking into [Quicksilver](http://quicksilver.blacktree.com/) and possibly [VirtueDesktops](http://virtuedesktops.info/). I still haven't found out how to go to the start or the end of a line in `vim` without using ^ or $ in normal mode though...
