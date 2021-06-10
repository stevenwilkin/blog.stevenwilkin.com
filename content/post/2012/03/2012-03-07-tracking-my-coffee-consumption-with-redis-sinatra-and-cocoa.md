---
title: "Tracking my coffee consumption with Redis, Sinatra and Cocoa"
date: "2012-03-07"
category:
  - "code"
  - "coffee"
  - "objective-c"
  - "redis"
  - "ruby"
  - "sinatra"
---

I've often joked about putting together an app to track my coffee consumption, such is my reputation for consuming the black goodness. Like a lot of my other personal projects, the idea had a prolonged gestation period and was finally born through a welcome spark of motivation.

## Crafting fine web APIs

Over the past 6 months the bulk of what I've been doing day to day with [Vigill](https://twitter.com/vigill) has involved building web APIs for consumption by mobile clients. This has involved lots of [Sinatra](http://www.sinatrarb.com/), [Redis](http://redis.io/) and [MongoDB](http://mongodb.org/).

In this time I've also put together a [couple more](/blog/2011/11/01/my-also-ran-markdown-editor-for-os-x/) [Cocoa apps](/blog/2012/01/31/a-simple-app-to-monitor-google-chrome-on-os-x/).

## Thick client boogie

An unexpected resurgance in enthusiam for developing desktop apps combined with a fluency in cranking out webservices put me in a good position to put together a simple API and client.

I'm not a big user of mobile apps but I do spend the bulk of my waking hours sitting in front of a Mac so producing a client for OS X was the logical choice.

For the API I considered using something a bit more esoteric than my standard toolkit, but no matter what combination of technologies I investigated not much seems to come close to the power and flexibilty I find with Ruby and it's frameworks for performing the bulk of tasks required by the web applications of today.

## Areas of note

A valid API key must be sent in the request headers when sending a POST to the Sinatra app. Validity of the key is determined by [checking set membership](http://redis.io/commands/sismember) in Redis. A 4xx status code is returned if the key is missing or invalid.

The daily count is boosted with an [atomic increment of a hash field](http://redis.io/commands/hincrby).

The client is not much more than a GUI wrapper around some HTTP requests sent using [AFNetworking](https://github.com/AFNetworking/AFNetworking/). A [previous native iOS client](/blog/2011/05/19/an-ios-client-for-my-uk-inflation-app/) I developed used [NSURLRequest](https://developer.apple.com/library/mac/#documentation/Cocoa/Reference/Foundation/Classes/NSURLRequest_Class/Reference/Reference.html) directly and I found AFNetworking _much_ simpler to use.

## Get the code

The [source for the API](https://github.com/stevenwilkin/coffee-tracker) and [the OS X client](https://github.com/stevenwilkin/coffee-tracker-client-osx) is available on GitHub as usual and some further technical details are available in the READMEs.

You can keep up to date with my coffee consumption at [coffee-tracker.herokuapp.com](http://coffee-tracker.herokuapp.com/).

Enjoy.
