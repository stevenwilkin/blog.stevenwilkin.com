---
title: "An iOS client for my Coffee Tracker API"
date: "2012-05-20"
categories: 
  - "code"
  - "coffee"
  - "ios"
  - "objective-c"
---

About 9 hours ago I dandered down the road to see what was happening at the [FlackNite event](http://farsetlabs.org.uk/blog/flacknite/) being hosted in [Farset Labs](http://farsetlabs.org.uk/).

When I finally got myself settled down with network access and a cup of coffee and said hello to everyone it seemed I was the only one without a project to work on. Nightmare.

## Decisions, Decisions

I couldn't think of what to focus on but [Rob](https://twitter.com/robelkin) and [Pete](https://twitter.com/peteyhawkins) were sitting next to me and tinkering with some Objective-C and Cocoa. Considering that I'm now on the iOS developer program, doing something similar seemed like a good idea.

I needed to pick something that could be accomplished within a relatively short period of time and I've had a few small projects which I've wanted to get out of the way for a while but most of them would have required some research effort to take me into unchartered territory.

This constraint left me with a single task: the relatively straight-forward job of porting the [OS X client](https://github.com/stevenwilkin/coffee-tracker-client-osx) of my [Coffee Tracker API](https://github.com/stevenwilkin/coffee-tracker) to iOS.

## Double Jalapenos

Coffee was drank, pizza was eaten, many laughs were had and some Objective-C was cranked out.

Beyond creating a new iOS project and user interface, the existing code didn't require much change. Turning off ARC for AFNetworking was the most involved thing I had to do.

After the basic port I added a few finer details like turning on the network activity indicator when the web service was being accessed and making sure the count was refreshed whenever the app became active. Simple.

## Dive In

It was good again to sit down with a specific task, open Xcode and eventually come to a solution. Maybe some day I'll produce something more involved but I'm pleased with how things are progressing.

Full [source code is available on GitHub](https://github.com/stevenwilkin/coffee-tracker-client-ios) so fill your boots.
