---
title: "My also-ran Markdown Editor for OS X"
date: "2011-11-01"
category:
  - "business"
  - "code"
  - "mac"
  - "objective-c"
  - "open-source"
---

Quite often I feel the need to learn something new for the sake of learning something new. [Covey aficionados](http://en.wikipedia.org/wiki/The_Seven_Habits_of_Highly_Effective_People) would know this as _sharpening the saw_.

I usually struggle deciding upon something however as there are so many areas to choose from in the software world and it isn't everyday I feel drawn enough to something to put time and effort into it on top of holding down a day job.

Five years ago it was Rails, two years ago it was testing that I wanted to improve my skills with and I'm now waiting on whatever will be the next major piece of technology or practice I feel I need to push myself towards.

## Before the web

When I started out teaching myself to write code I didn't have access to the Internet and the web as we know it didn't exist. My output was to evolve from simple CLI programs to games to desktop apps.

These past years a lot of my work life has involved developing web software with scripting languages. Compilers, graphics routines and assembly language have all started to become lost in the mists of time.

Returning to desktop software development seemed like both an interesting challenge and a break from dealing with the web. As I've little interest in cross-platform toolkits this meant Objective-C and Cocoa, technologies which I pick up every once in a while but haven't produced much with. But what exactly to develop?

## Eating my own dog food

In May I was working on-site with a client in Dublin and had to produce some documentation for the analytics platform I was building at the time. As usual I chose [Markdown](http://daringfireball.net/projects/markdown/) and put up with the workflow of editing the content in Vi and running it through the supplied Perl script to see what the HTML, which was eventually to handed over to the client, looked like.

It struck me that here was repeated effort I could automate with software and there didn't appear to be a widespread, simple Markdown editor for OS X. An opportunity at last to start work on a first offering from my software company I thought.

## The possible beginnings of a product-based business

Over the course of a few months I added a bit of code here and an interface tweak there, mostly while staying in hotel rooms in Dublin. Any time I wanted to edit some Markdown I used the app and it suited my purposes fine.

I toyed with the idea of publishing what I had on the Mac App Store. I shared the binary with a couple of people to see what they made of it and was extremely pleased when one asked if it was ok to pass the app on. I could see a possible path opening before me allowing me to start stepping away from a consultancy business model to one centred on selling products.

## Beaten to it

Life moved on though, I started a new contract which gave me a lot of new technology to play with and development of this side project was put on hold.

About a month ago I spotted [Mou](http://mouapp.com/). Not only was it more complete than my effort but it was better designed than I could hope for considering the limitations on my time and Cocoa experience. "Fair play" I thought, I wasn't quick or decisive enough and as a result, if I'm to build this planned business it will have to be on the back of a different product.

Today I spotted [Marked](http://markedapp.com/) and a quick search turns up a number of other apps and text-editor plugins. Such is life.

## Open source

As of today it's been over 3 months since the last commit to the repo and many superior alternatives exist so I thought I may as well give it away.

The app suits my needs though it would be even better if it could saving/load files from the local filesystem. I may well tinker with it for my own learning purposes but who knows what side-project my interests will wander to next.

The code is available on [Github](https://github.com/stevenwilkin/markdown-app) and compiles with Xcode 4.1. Enjoy.
