---
title: "Mashing up Twitter Trends and Google Images"
date: "2009-09-15"
categories: 
  - "code"
  - "ruby"
  - "sinatra"
---

I recently released the latest entry in my series of [nano-apps](/2009/01/26/nano-apps/).

As with my previous efforts, [istrending.com](http://istrending.com) serves serves no real purpose other than as an act of deliberate practice: going through the process of coming up with an idea, writing code, registering domain names, setting up Cron jobs and configuring deployment systems to get it all up and running in a production environment.

I questioned why I was even bothering with an app that was likely not going to see any traffic or be of use to people and when I hit a minor javascript problem the project was shelved for a few months. I recently had a fresh burst of enthusiasm though and got the usual sense of achievement when I deemed the code "ready enough" and a quick `cap deploy` took care of the rest.

The main problem I've faced with this app concerns the script used to update the list of trending topics: the Twitter search api has a known issue of returning HTML instead of JSON, which has on occasion caused my inbox to be filled with emails from the Cron daemon alerting me to failed jobs. I'm also not very happy with how the javascript carousel functions, so there's some scope for improvement there.

The code is available on [GitHub](http://github.com/stevenwilkin/istrending.com) as usual.

Next up is probably something bigger, very likely involving Rails. I've been reading up on the various testing methodologies used in the Ruby world and have written my first set of RSpec tests so I hoping my next release will at least have some test coverage. Other than that I'll just have to see what ideas come to mind between now and then.

Any suggestions on what I should do next?
