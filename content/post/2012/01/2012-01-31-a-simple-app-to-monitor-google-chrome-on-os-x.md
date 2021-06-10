---
title: "A simple app to monitor Google Chrome on OS X"
date: "2012-01-31"
categories: 
  - "code"
  - "mac"
  - "objective-c"
  - "open-source"
---

I was on-site with [Vigill](https://twitter.com/_vigill) one day before Christmas and I mentioned to [Oisin](https://twitter.com/oisin) an idea I had for an app.

I was sick of having endless tabs open in Chrome, hogging memory, each one some seeming important enough at the time that I read it but now just a contextless enigma.

If I at least knew how many tabs I had open, it would be a step in the right direction I thought. There's got to be an app for that, right? Not that I could see. Opportunity knocks.

## Enter AppleScript

I knew that [AppleScript](http://en.wikipedia.org/wiki/AppleScript) would likely give me the functionality I was after so that night in the hotel I installed the Ruby version of the easier to use though now abandoned [AppScript](http://appscript.sourceforge.net/) and was eventually able to get some details out of a running instance of Chrome concerning it's open tabs.

Over the Christmas holidays I spent an evening playing with the NSAppleScript class and figuring out how to add an item into the OS X status bar. Huzzah!

## Give it a name

Naming things and cache invalidation, 2 notoriously hard things. Inspiration soon struck though and I stumbled upon a catchy name for the app which corresponded to an available dot com domain. I didn't register it straight away but later in a moment of entusiasm I whipped out a card card and starting piecing together a single page site with [Bootstrap](http://twitter.github.com/bootstrap/) to give the app somewhere to live online.

Oisin and myself have been using Bootstrap a lot these last few months as we've been building out the Vigill platform and it's truely a godsend for those of use with the natural tendency to produce apps which look like they've been designed by a programmer. I recommended it highly.

## The Future

To date the app doesn't do much, it sits in you status bar, displaying the number of open tabs in Chrome. You can click on the number and choose to quit the app. Fits a need but it's nothing fancy.

Suggestions have included to show how long the oldest tab has been open, how much memory is being used and even an idea to apply some gamification and have an online leaderboard of tab fetishists.

As with all my personal projects I never know if I'll ever come back to them after the initial buzz of motivation has passed. In the early days of this blog, nearly [6 years ago now, I was hacking on desktop apps](/2006/08/09/its-alive/) and I can feel myself being drawn back to the world of compilers and executables so chances are good I'll revisit this app in order to sharpen my skills with Objective-C and Cocoa. Suggestions on a postcard please.

## Get It

The app is available to download from [chromitor.com](http://chromitor.com) and the code is available on [GitHub](https://github.com/stevenwilkin/chromitor), hopefully you'll find it useful.
