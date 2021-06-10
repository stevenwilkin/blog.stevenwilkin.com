---
title: "An experimental lifestream app"
date: "2010-06-27"
category:
  - "code"
  - "ruby"
  - "sinatra"
  - "web"
---

Some time ago [DW](http://twitter.com/davidbelfast) and myself had an enthusiastic conversation about logging various aspects of our electronic lives: emails sent and received, RSS feeds read, incoming and outgoing phone calls, the list goes on.

At that time I'd already started tinkering with apps to track my efforts in the gym and changes in my bodyweight, I've used notebooks for this for years and thought it'd be interesting to have this information in electronic form.

### Sharpening skills

While I was on the bench waiting for my current contract to start I was sharpening my skills through developing some small projects with the technologies I'd be using. One of those technologies was [SQLite](http://www.sqlite.org/) which I knew of but didn't have much hands on experience with.

I started by playing with the [Ruby interface to SQLite](http://github.com/luislavena/sqlite3-ruby), using it to insert and retrieve data from a simple database. I've since grown to love the simplicity and flexibility of SQLite and will no doubt use it again in the future.

I needed a practical application and thought back to my intentions to track my online activities. Now was as good a time as any to to tick this off the list of potential projects.

When I'd glued together some Ruby to parse the RSS feed of this blog I knew the basics were in place so I started on a simple Sinatra app to act as a web interface.

### Stumbling block

I scoured the web for design inspiration and got a good start to the visual aspect of this project but couldn't make my mind up over a few subtle items. Next thing my agent called: the purchase order finally came through and my contract was to start the next day.

The demands of adjusting to a new work environment meant I felt little motivation to work on anything on my own time and I became more interested in funneling my excess income into the stockmarket. The project joined those other half-finished unfortunates.

### A fresh jolt of motivation

After a couple of months on the contract I started feeling a renewed motivation to get something of my own out there. I couldn't bare the thought of starting another project to not finish it so I set out to to whip this latest app into shape and release it as soon as possible and no later.

I dug through the uncommited changes in my working copy and made some arbitrary decisions which resulted in a design I felt was "good enough." I modified my RSS parsing script to feed into SQLite and extended it to process my [Delicious bookmarks](http://delicious.com/stevebiscuit) and [loved tracks on Last.fm](http://www.last.fm/user/ahSyd). I created pagination links, wrote a README and sorted out the hosting and cron jobs. Bingo.

### Check it out

My original intention was to track much more of my online life and there's some details I'd like to change but I love releasing code and I'm pleased with this first iteration.

The app is hosted at [life.stevenwilkin.com](http://life.stevenwilkin.com) and the code is available on [GitHub](http://github.com/stevenwilkin/life.stevenwilkin.com), I hope you like it.
