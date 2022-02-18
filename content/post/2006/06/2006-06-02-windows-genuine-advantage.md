---
title: "Windows Genuine (?) Advantage"
date: "2006-06-02"
category:
  - windows
---

I made the mistake of blindly installing all the Windows Updates on my machine at work yesterday and so installed the lastest version of Windows Genuine Advantage... When I was creating a Ghost image for of our new desktops I didn't have access to our legitimate Volume License Code and so just used a pirated one, big mistake!

At login this morning I was welcomed with a dialog box like this (not my screenshot):

![Get Genuine Logon](/wp-content/uploads/2006/06/wga-notification1.jpg "Get Genuine Logon")

The domain logon dialog was delayed for 5 seconds and this was displayed in the bottom right hand corner of the screen:

![Genuine Victim](/wp-content/uploads/2006/06/wga-notification2.jpg "Genuine Victim")

Victim? haha! (perpetrator more like!) Upon getting into Windows WgaTray.exe continued to delightfully remind me of my past blunder with this:

![Balloon Victim](/wp-content/uploads/2006/06/wga-notification3-cropped.jpg "Balloon Victim")

My day seemed to be off to a bad start, but a quick bit of [googling](http://google.co.uk) claimed there was a [solution](http://www.raymond.cc/blog/archives/2006/05/05/bypass-remove-and-disable-windows-genuine-notification/) and some [P2P](http://emule-project.net) hi-jinks [provided it](http://homepage.ntlworld.com/s.j.wilkin/WGA_1.5.532.0.zip).

I restarted in Safe Mode and replaced WgaTray.exe, wgalogon.dll and LegitCheckControl.dll in C:\\Windows\\System32 with the files provided in the [archive](http://homepage.ntlworld.com/s.j.wilkin/WGA_1.5.532.0.zip), restarted and joy of joys, no nag screens :)
