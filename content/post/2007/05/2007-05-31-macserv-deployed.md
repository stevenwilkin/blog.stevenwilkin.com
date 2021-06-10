---
title: "MacServ deployed"
date: "2007-05-31"
categories: 
  - "clerical"
  - "code"
---

The initial version of my latest project, MacServ, has just been deployed.

MacServ is intended to model the work-flow at [Mac-Sys](http://mac-sys.co.uk/) and to replace the existing paperwork.

Deployment was scheduled for close-of-play yesterday and I thought I was home clear: I'd uploaded the scripts, configured the database and at a quick glance things appeared to be working. I was getting ready to leave the office and hit the gym only for one of the staff to discover that one of the apps controllers wasn't operational...

I cranked up the debug level of the [framework](http://cakephp.org/) and it looked like a conflict between the version of PHP in use with the [hosting provider](http://pair.com/) and that which I'm running on my [development machine](http://nulltheory.com/). A few minutes fiddling with the `.htaccess` this morning got the problem resolved and we put the system through its paces.

I now have my latest list of required tweaks and from here on in it's going to be an endless process of reworking, enhancement and bug-fixing.

Future plans include: tweaking [Gcal.app](http://chip.cuccio.us/projects/gcal/) to provide a custom browser for the app; integration with [GSX](http://gsx.apple.com/) and offering the system as a commercial product to other Mac service providers.

I feel a bit strange, having people use the fruits of my labour, but I am relieved to have brought MacServ to its current stage of development. Even if I'm pretty much sick of the sight of it by now ;)
