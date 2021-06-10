---
title: "First production Rails app"
date: "2009-02-15"
categories: 
  - "code"
  - "rails"
  - "ruby"
---

I released my first production [Rails](http://rubyonrails.org/) application, [hugagoth.com](http://hugagoth.com/), last night.

I first started playing with Rails [over 2 years ago](/2006/10/18/ruby-on-rails/) and it has taken me until now to take an app through from conception to initial deployment. And an interesting journey it has been.

When I first started investigating Rails I had never used a web framework before and the [Ruby](http://www.ruby-lang.org/) language really confused me, but there were a few things I liked. I liked the idea of convention over configuration, opinionated software and the amazing community that has built up around this set of technologies.

Not long after this, I started work on another project and considered using it as the motivation to fully get to grips with Rails, but getting the job done was more important so I headed down the PHP route, having had a bit of experience with it over the years. I'm amazed that I now have [2 years of CakePHP](/2007/02/07/cakephp/) development experience. It gets a bad rep concerning it's performance speed but if I'm doing any bespoke PHP work, [Cake](http://cakephp.org/) is never far away.

Deploying Rails apps a couple of years ago seemed like quite an involved process, what with application servers, web servers, proxies and clusters but now with [Passenger](http://www.modrails.com/), getting a production environment up and running is a breeze. I've also developed a great love for [Capistrano](http://capify.org/), using it with non-Rails apps.

Calling [hugagoth.com](http://hugagoth.com/) my first Rails app in the wild is a bit of a lie. When I discovered Passenger I wanted to see just how easy deployment now was so I converted my static, single-page [professional site](http://stevenwilkin.com) into a Rails app. A bit overkill I know as it doesn't even do anything, but a worthwhile experiment none-the-less.

It's unlikely I'll ever use Rails in my [current day job](/2008/06/04/a-developer-again-i-am/) so I'm unsure what I'll be doing with this framework in the future. I'll probably convert [stevenwilkin.com](http://stevenwilkin.com) to run on [Sinatra](http://www.sinatrarb.com/) just for kicks and if any interesting ideas come to mind, you never know!
