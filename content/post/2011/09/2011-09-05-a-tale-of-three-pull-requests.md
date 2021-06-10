---
title: "A tale of three pull requests"
date: "2011-09-05"
category:
  - "geek"
  - "open-source"
---

After years of earning a living through using free software I've finally contributed back to the open-source world.

## Frustration

For the two and a half years I've been pushing some personal projects to [Github](https://github.com/stevenwilkin/) and some of my code I've been told has even been helpful for others. While this is certainly open-source none of my efforts have affected existing codebases.

Numerous times I've scoured the bug trackers of projects I've had some sort of interest in, on the lookout for an issue I could investigate, even getting as far as reading through upteen lines of foreign code but ultimately unable to add anything.

## A first attempt

The project I've been working on for my current client, like many other projects, makes use of a handful of libraries.

I discovered one library I'm using to access an API had failed to implement a feature I required. My choices were to abandon the library and the code I'd already written using it, open a feature request in the hopes it would be worked on or man up and do the needful myself. Can you guess what I decided upon?

After forking the repo and creating a feature branch I wrote a test for the needed behaviour, wrote some code to implement that behaviour, committed the changes when the test suite passed, pushed to GitHub and finally opened a pull request. Unfortunately the original author decided he didn't want that feature in the library at that time.

Such is life, the code fit my own purposes, I was able to get with the task at hand and at the end of the month invoiced my client. Things have been worse.

## Once more with feeling

A similar situation occured again a bit further down the line: another library I've been using required a small modification to fit in with the constraints placed upon this project. I went through the same procedure as above and this time there has been no response.

Ah well, things could still go either way and at the end of the day I still have the functionality I need.

## Third time lucky

Last week i was debugging an issue involving authenticating against a [SAML](http://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) Identify Provider. I was eventually to deduce that the library in question on this occasion didn't support the algorithm used to compute the digital signature of the authentication response.

I drank a lot of espresso, scratched my head a lot and then found a library supporting this algorithm. The downside was there was no documentation or tests.

There was nothing to do but read the code. I was able to get something working after a while and thought it would be a shame not to share my understanding so I wrote a quick test and put in place the mechanics to run the test which in itself yielding some more know how.

Forks, branches, pushes, pull requests, merges, deploys, happy client, problem solved, home time.

## Conclusion

All I basically contributed was a unit test. I didn't invent anything new or expend any great time or effort but I did give something of myself and didn't expect anything in return. This has always been the spirit of open-source software and it's why I use it all day, every day.

No matter how insignificant you feel your contribution may be, it's the small changes that keep the wheels of the open-source machine turning.

The pull request was [merged into master](https://github.com/wonnage/xmlsec-ruby), maybe you'll find it useful.
