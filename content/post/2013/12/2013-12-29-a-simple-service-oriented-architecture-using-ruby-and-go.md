---
title: "A simple service oriented architecture using Ruby and Go"
date: "2013-12-29"
category:
  - "code"
  - "go"
  - "ruby"
---

Some common pain points seem to keep cropping up time and time again as applications grow in size and complexity:

- tests get longer to run
- deployments become a much more involved process
- making a small fix to one area of code can often break something in another
- it can be much harder to reason about the system as a whole

These large, monolithic applications are affectionately known as _monorails_ in the Rails world and the common wisdom is to start splitting up the codebase into services: to extract areas of functionality out into self-contained, independent applications which work in unison to deliver the original capability.

Here's [how Songkick did it](http://devblog.songkick.com/2012/07/27/service-oriented-songkick/) and how [SoundCloud did similar](http://backstage.soundcloud.com/2012/08/evolution-of-soundclouds-architecture/) recently.

## Close, but no cigar

On a previous contract I worked on a platform which claimed 20 million users and the only way it was possible to handle that sort of capacity was to use services, lots of services.

The platform was centred around a legacy [ColdFusion](https://en.wikipedia.org/wiki/Adobe_ColdFusion) application hooked up to a MySQL database and the other applications had a variety of ways of accessing the central data:

- using [ActiveResource](https://github.com/rails/activeresource) or libraries derived from it to consume a RESTful API provided by the ColdFusion app
- connecting directly to the database and defining their own models and schemas
- using one of the two semi-aborted attempts at packaging up a collection of [ActiveRecord](http://api.rubyonrails.org/classes/ActiveRecord/Base.html) models into a shared library
- mixing and matching a selection of the above in different areas of their codebases

Unfortunately there was little consistency and the organisational culture encouraged quick fixes and neglect of old code. Both new development and maintenance work provided numerous challenges as you can well imagine.

## The ideal

As I progressed through the term of the contract and had to deal with the peculiarities of the technical ecosystem at hand I discussed with the other engineers what the ideal situation would look like, everything else being equal. The only sane solution seemed to be to develop both an API **and** the client used to access it.

Since moving on from that contract I've wanted to implement a proof of concept of that idea and I'm glad I've now codified the basics of it.

## A worked example

The API is written in Go and allows manipulation of resources in a standard RESTful manner. No surprises there other than everything is stored in-memory and will so be lost when execution stops.

The client library is in Ruby and basically just wraps a HTTP client with an ActiveRecord-like interface. The final piece is a demo script which uses the library to add and then manipulate a handful of items of data. All very straightforward but I believe it illustrates the concept.

This shameless display of hipster polyglotism can [all be found on GitHub](https://github.com/stevenwilkin/soa-ruby-go). Fill your boots!
