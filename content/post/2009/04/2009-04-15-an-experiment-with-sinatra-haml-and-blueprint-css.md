---
title: "An experiment with Sinatra, HAML and Blueprint CSS"
date: "2009-04-15"
categories: 
  - "code"
  - "ruby"
  - "sinatra"
---

In my [last post](/2009/02/15/first-production-rails-app/) I considered transforming [stevenwilkin.com](stevenwilkin.com) into a [Sinatra](http://www.sinatrarb.com/) app.

Well, I did it, although I'm only mentioning it now.

Not only was this my first experience with Sinatra but I also decided to try using [HAML](http://haml.hamptoncatlin.com/) for the markup and [Blueprint CSS](http://www.blueprintcss.org/) to help with the styling. If I'm going to play with _a_ new technology why not play with a _few_ new technologies?

I found Sinatra quite straight forward: you match up a HTTP verb (eg 'GET') and a url (eg '/') with a block of Ruby and the results can be sent directly to the browser or an optional view template can be rendered. Simple!

Instead of a Model-View-Controller pattern like many of us are accustomed to, Sinatra provides more of a Controller-View setup which I believe would make it more suited to smaller apps which don't necessarily make use of a database or where a full-stack framework like Rails would be overkill. If I create any more nano-apps in the future I'll more than likely use it again.

What really struck me during this experiment and made the whole thing worthwhile was HAML. The simplicity and clarity of it's syntax was super refreshing and meant I had to do a lot less typing and didn't have to remember to close divs etc, never mind it being white-space sensitive! All Ruby-based web development I've done since has used it.

I wasn't fussed on Blueprint. I found having a grid background during the \*ahem\* design phase to be great but I probably didn't make enough use of it's features for it to really shine through. In terms of styling and CSS I didn't take much time to look at [SASS](http://haml.hamptoncatlin.com/docs/rdoc/classes/Sass.html) and didn't use it, but I've since reread the documentation and may well make use of it in the future.

The app was deployed onto Passenger, like my previous experiments. It took a small bit of google-fu to get the Capfile and Rack configuration tweaked correctly but once this was done pushing the code into production with Capistrano was a breeze. How did I ever survive without Capistrano?

The deeper I get into Ruby the cruder PHP seems, not to mention C#. The future seems exciting.
