---
title: "Home time revisited - redeveloping a CakePHP application with Sinatra"
date: "2010-03-24"
category:
  - "code"
  - "javascript"
  - "ruby"
  - "sinatra"
  - "web"
---

I've just released the latest iteration of [hometi.me](http://hometi.me), a little [nano-app](/2009/01/26/nano-apps/) I've [mentioned](/2008/08/12/is-it-home-time-yet/) [before](/2008/09/09/home-time-is-a-little-closer/).

### Deliberate Practice

It's only a trivial app but I've a bit of free time before the start of a contract so I thought it would be good practice to redevelop it, a task I'd been ignoring for a long time.

### Goodbye CakePHP, Hello Sinatra

The original app was put together quickly with [CakePHP](http://cakephp.org/), a PHP-based framework I've used since my first paid programming gig. Since then though my interest and proficiency with Ruby and it's frameworks has come more to the forefront. By choosing [Sinatra](http://sinatrarb.com), the app was given access to the rich Ruby ecosystem, including the joyful [HAML](http://haml-lang.com/) and [SASS](http://sass-lang.com/).

The interesting aspect of this release is that all the logic is now implemented on the client-side using [Javascript](http://jquery.com/). Originally the countdown was calculated on the server-side and passed to the client with an AJAX call, but the server is more-or-less just hosting the markup, stylesheets and Javascript files required to get the app up and running in the browser.

### Heroku

As this app doesn't make use of a database or Cron jobs etc I thought I'd take the opportunity to move it from my own infrastructure and onto the awesomeness of [Heroku](http://heroku.com/) whose free offering is a lot more performant than my little [VPS](http://vpslink.com/?ref=CM6S0S). Heroku is a service I've been playing with for a while now and it makes deploying a Ruby web app into production a breeze, assuming your project can work within it's limitations.

All that's left now is for the DNS changes to propagate. I'd like to show a bit more love to this app in the future, the controls to specify your own home time could be more intuitive for instance, but for now I'm content with the improvements I've made to it and it's new home.

Is it passed your home time yet?
