---
title: "An Android app to measure exercise performance"
date: "2021-06-04"
category:
  - "android"
  - "kotlin"
  - "mobile"
  - "screenshot"
  - "training"
---

During recent periods of restrictions due to the pandemic gyms have been closed and many people have resorted to doing body-weight exercises at home to maintain fitness and boost immune systems.

My own personal routine has focused on [burpees](https://en.wikipedia.org/wiki/Burpee_(exercise)) with secondary movements such as push-ups, squats, lunges, jumping jacks and mountain climbers. During the longest stretches of restrictions I was also able to do some resistance work using reusable shopping bags filled with large containers of water.

To enforce consistency and to gauge progress I used a combination of a tally counter and a timer so I would know how many rounds of my routine I had performed and in how much time. A bit clunky but it did the job.

## First new language in a long time

Last month I bought an Android tablet to use for monitoring and I thought it could be a useful exercise to develop an app for it. I'd [tinkered a bit with iOS development a decade ago](/2011/05/19/an-ios-client-for-my-uk-inflation-app/) but I've never owned an Android phone and the last time I picked up a new programming language was [nearly 7 years ago with Go](/2013/09/02/serving-up-a-static-site-using-go/).

The thought of starting from scratch with a completely new technology stack was daunting but I knew if I had a small, well defined problem to solve it would be achievable one step at a time. A simple app to count repetitions and track elapsed time seemed like the ideal candidate and I felt motivated so I put my concerns to the side, made some coffee and started reading the documentation.

## Only a handful of lines of code

Most of the effort involved getting to grips with the development tools and the Android application architecture itself.

Very few lines of [Kotlin](https://kotlinlang.org/) were actually needed and my objectives were satisfied with a barrage of search queries so I wouldn't say I've enough experience to form much of an opinion on the language though I'm bound to be biased after so many years of get paid to write Ruby and shirking away from the JVM ecosystem.

Goodness knows if there'll be more Android development in my future but as a first effort I can't complain:

![](https://github.com/stevenwilkin/reps/raw/master/screenshot.jpg)

The default colour scheme could do with some tweaking but I've been using this daily now and I'm happy with how it works. I can't wait until gyms open again here in Bangkok but I'm enjoying the feeling of physical fitness and I'm determined to make the best of the situation.

As always [the code is on GitHub](https://github.com/stevenwilkin/reps) for those who are interested.
