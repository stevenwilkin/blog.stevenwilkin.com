---
title: "CakePHP 1.2alpha - model validation"
date: "2007-07-09"
categories: 
  - "code"
---

I thought I was out of the woods. I upgraded my development copy of [MacServ](/2007/05/31/macserv-deployed/) to the alpha version of CakePHP so I could make use of it's pagination features; I tweaked my views to replace calls to various deprecated html helper functions with the new ones in the form helper, made one or two minor changes and thought I was good to go...

First thing this morning one of [the engineers](http://www.mac-sys.co.uk/blog/?page_id=2) was having problems adding a new repair. It was obvious to me that the problem was due to not entering a required field but there no validation errors were being displayed, doh!

It turns out that model validation is specified in a completely different way in the 1.2.x.x branch and being an alpha release there is no "official" documentation. So I did what any geek would do: started reading through the [API](http://api.cakephp.org/1.2/classes.html) and [newsgroup](http://groups.google.com/group/cake-php) posts and after a short while was guided to [this article](http://cakebaker.42dh.com/2007/01/03/validation-with-cakephp-12/). Just what I needed :)

It's going to be a bit tedious making the required changes to all my models and views but from what I've seen so far I'm liking this version of CakePHP and wish I had settled on it in the first place instead of opting for the "stable" 1.1.x.x branch.

On a side note, the latest 1.2.x.x alpha was [released today](http://bakery.cakephp.org/articles/view/the-last-alpha-cake) with the next release slated to be have beta status. I look forward to upgrading but I'm going to play it safe and ensure my app is working correctly before making any further changes to the version of the framework I'm using!
