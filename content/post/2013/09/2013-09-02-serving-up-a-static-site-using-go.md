---
title: "Serving up a static site using Go"
date: "2013-09-02"
categories: 
  - "business"
  - "code"
  - "go"
  - "web"
---

Like a lot of people in technology a portion of my time is spent wondering what will be the next programming language, framework or whatever to take off and become popular. Of greater personal importance is the matter of which one of them will get added to my toolboox next and press-ganged into productive use.

For years now [Ruby has been my goto](/category/ruby/) for a lot things and I've been doing more and more [OS X and iOS](/category/code/objective-c/) development but it had been some time since I last picked up something new and I had a hankering for some shinyness.

I started [tinkering with Node a few years back](/2010/03/19/node-shoutbox-a-simple-node-js-demo/) but it didn't have enough appeal to invest much of myself in it and [Scala](http://www.scala-lang.org/) looked a likely contender for a while but I didn't get any further than solving a few [Project Euler](http://projecteuler.net/) problems with it, mostly while spending my evenings in hotel rooms in Dublin.

## Enter Go

Earlier this year [I spent a month in Melbourne](/2013/03/05/two-years-of-working-away-from-home/) and thanks to having some time away from paid work I could see that my preference seemed to be leaning towards developing web services and then consuming those services with native client apps. I wanted to keep my skills sharp so started tinkering with a personal project and for the API piece the relatively new [Go](http://golang.org/) seemed ideal for the job at hand.

Once I got started what struck me was that I was producing a single, standalone binary which didn't need any external dependencies in order to be run on the target architecture. No need for a particular version of a language or a slew of packages to be installed, just a command to be executed. It's almost like I'd forgotten that that was how things used to be once upon a time after these years of using scripting languages and it was a liberating experience.

For that project I wanted to do everything test-first but unfortunately the depth of my knowledge of Go in general and web application development with it more specifically are not what I want them to be so when I hit a stumbling the project was abandoned. Perhaps I'll come back to it in the future.

## A Need Emerges

So I still wanted to get some Go out into the wild and when I decided to put together a new website for my limited company I thought I could use the situation as a learning experience.

Serving up a static site can be done any number of ways and I certainly didn't need to go re-inventing the wheel but with a bit of tinkering I had put together a simple app that could look at a requested path and if it corresponded to a file under `public/` then send the file's contents to the client.

What pleased me with the solution was that it was achieved with only what's provided out-of-box with Go and without too much code. Simple and to the point and getting it running on Heroku was trivial with the [Go buildpack](https://github.com/kr/heroku-buildpack-go).

## The End Result

The site, as simple as it may be, can be found at [nulltheory.com](http://nulltheory.com) and the code is [on GitHub](https://github.com/stevenwilkin/nulltheory.com). Bon appetit!
