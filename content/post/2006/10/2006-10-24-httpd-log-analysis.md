---
title: "httpd Log Analysis"
date: "2006-10-24"
category:
  - "linux"
  - "meta"
---

What a fun day yesterday was. I thought it would be interesting to know how many (if any) vistors I am getting to this site and proceeded to install and configure some tools to analyse [Apache's](http://httpd.apache.org/) access logs.

Through prior research I knew of the existance of [Webalizer](http://www.mrunix.net/webalizer/) so I downloaded the source and attempted to build it. The build failed as I didn't have the [GD Graphics Library](http://www.boutell.com/gd/) installed. I tried to build _that_ but failed aswell, quite possibily because of another dependency. A bit of searching turned up a [pre-compiled package](http://www.slackware.com/~alien/slackbuilds/webalizer/) for which I was very grateful, but when I got the thing installed and processed the logs I decided I didn't like the look of the results and proceeded to try my luck with [AWStats](http://awstats.org/).

AWStats proved a bit easier to install and my only real gripe with it was having to change Apache's log format from common to combined which meant not getting any analysis on the period from Jan 2005 to present, but more information is now being logged, so it's all good. Something I've noticed though is that Apache isn't logging the domain name associated with each file being accessed so when I check the stats on each of my domains I'm seeing the same results. I'm sure that will be easily fixed though.

[Slackware](http://slackware.com/) continues to push my \*nix skills and I appreciate that it is forcing me to learn how Linux works, but on the other hand it shows me just how easy to use distros like [Kubuntu](http://kubuntu.com/) can be, especially when it comes to package management. Knowledge is power though and I fully intend to keep on learning this stuff and hopefully some day my skill set will be more filled out.
