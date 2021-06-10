---
title: "An iOS client for my UK inflation app"
date: "2011-05-19"
categories: 
  - "code"
  - "objective-c"
  - "screenshot"
---

After last week's great [Xcake](http://digitalcircle.org/groups/mobile-apps-xcake) meet I felt a fresh surge to take on new challenges and bend some less-familiar pieces of technology to my will.

### Motivation

The first product of this enthusiasm was [a prototype web app](/2011/05/12/keeping-an-eye-on-uk-inflation-with-google-app-engine/) built to get a bit more experience with Python and Google App Engine. A few days later it got an API.

The resulting rapid feedback loop led me to pick up my copy of [Beginning iPhone Development](http://www.amazon.co.uk/gp/product/1430216263?tag=sickbiscuitco-21) which had been sitting gathering dust for the last couple of years and get stuck back into following the examples.

### Revisting Cocoa

I first dabbled with developing for Cocoa when [I first started using a Mac](/2007/02/28/first-post-from-os-x/) and managed a range of "Hello World" apps, simple calculators and embedded WebKit views, but nothing substantial came of it. Thankfully a few of the concepts seemed to have stuck and after working through the first few chapters of the book again I felt confident enough to get started on something of my own and an iOS client for [ukinflation.appspot.com](http://ukinflation.appspot.com/) seemed a logical choice.

This is the result: ![UK Inflation App - Screenshot](/wp-content/uploads/2011/05/20110519_uk_inflation_app-resized.png "UK Inflation App - Screenshot")

### What I Learnt

Even though this is a trivial app there have been a few aspects which have been useful from a learning perspective:

- accessing an external API
- decoding JSON
- local data persistence with a plist file
- interacting with view elements

These are all things which could make for useful reference material in the future.

### Moving on

I'm not part of the [paid iOS developer program](http://developer.apple.com/programs/ios/) at this time so I haven't been able to test the app on actual hardware, which would have been nice. I may stump up the 99 bucks to get my hands on Xcode 4 and have the ability to run my code on a device. I may decide to have a crack at developing a desktop Mac app. Who knows.

The topic of [push notifications](http://en.wikipedia.org/wiki/Push_technology) was mentioned at the last Xcake so there's another potential area of investigation involving both server and client technologies.

Stay tuned!
