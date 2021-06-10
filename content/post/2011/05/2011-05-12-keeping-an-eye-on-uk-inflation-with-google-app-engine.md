---
title: "Keeping an eye on UK inflation with Google App Engine"
date: "2011-05-12"
category:
  - "code"
  - "python"
  - "web"
---

For a long time now whenever I'm on the search for something interesting to work on that could potentially be of value to myself and others my attention is brought to topics like [machine learning](http://en.wikipedia.org/wiki/Machine_learning), [data mining](http://en.wikipedia.org/wiki/Data_mining) and [natural language processing](http://en.wikipedia.org/wiki/Natural_language_processing).

These are all areas within computer science which are not particularly easy and have a higher barrier of entry compared to building a typical web application for instance. Yet, if implemented correctly they can provide great insight and fame and fortune are bound to be near.

Joking aside. I studied artificial intelligence at [university](http://www.qub.ac.uk/schools/eeecs/) and my undergraduate dissertation was focussed on [expert systems](http://en.wikipedia.org/wiki/Expert_system) so I've a bit of exposure to these topics but nothing decidedly practical nor within the past decade.

### Interesting Books

Some searching on Amazon turned up [a couple](http://www.amazon.co.uk/dp/1449388345?tag=sickbiscuitco-21) [of books](http://www.amazon.co.uk/gp/product/0596529325?tag=sickbiscuitco-21) which looked to be talking about the type of tasks I was interested in performing.

One thing these books have in common is that they use code examples in [Python](http://python.org/).

For nearly half a decade now a lot of my interest has been with [Ruby and related technologies](/2006/10/18/ruby-on-rails/) and so I've largely avoided Python considering the similarity of the space the two languages sit in. A look through the most popular AI books revealed none using examples written in Ruby however.

The other day I came across a copy of [another book using Python](https://www.packtpub.com/python-text-processing-nltk-20-cookbook/book) so I thought I may as well get a bit of hands on experience with the language and take it from there.

### Something Practical

In the past I've tried to teach myself many languages from books but it has never been until I've needed to use the language for something practical that the know-how stuck.

Thankfully I didn't have to wait long until inspiration struck. As a private investor in the current economic climate, a topic that has been in my mind has been the rate of inflation. Every time I want to check how quickly my assets are being eroded by inflation I have to unleash Google and hope I land on the correct page and from there find the current rate amongst all the other information. This seemed like the perfect fit for [yet another](/2010/03/24/home-time-revisited-redeveloping-a-cakephp-application-with-sinatra/) [single serving web app](/2010/08/01/is-it-raining-in-belfast-redux/).

My starting point was to write a Python script to scrape the [Office for National Statistics](http://www.statistics.gov.uk/cci/nugget.asp?id=19) for the current value for the [Retail Price Index](http://en.wikipedia.org/wiki/Retail_Price_Index).

Next up was creating a basic web-app with [App Engine](http://code.google.com/appengine/). I'd tinkering with App Engine a bit previously so it was relatively straight-forward to follow the tutorials and piece together a single page app. Slightly more complicated was reading up on the Datastore and Memcache APIs but there were plenty of examples to follow.

### Conclusion

The end result is [ukinflation.appspot.com](http://ukinflation.appspot.com/). It's basic but deals with the job at hand. It's also been a good introduction to various components of the App Engine environment: Datastore, Memcache, Cron, templates and the built-in webapp framework.

I've used in all of these types of technologies in other forms over the years and it's amazing that you get so much functionality out of the box and as long as you embrace the constraints, scaling out comes for free.

I've still to make my mind up about Python though, maybe I'm just too accustomed to Ruby. Still, I'm glad to have another tool in the toolbox and to not be restricted to any one set of tech.

### Share the Love

As always the [code is available on GitHub](https://github.com/stevenwilkin/ukinflation), fork away!
