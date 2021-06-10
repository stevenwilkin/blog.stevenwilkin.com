---
title: "Is it raining in Belfast? Redux"
date: "2010-08-01"
category:
  - "code"
  - "ruby"
  - "sinatra"
---

Last year I created a [nano-app](/2009/01/26/nano-apps/) which attempted to answer the question, [is it raining in Belfast?](http://isitraininginbelfast.com/)

I was never completely pleased with it but the objective was to get something done and get it done fast, which was achieved.

This weekend I've been tinkering with another project and hit a bit of a stumbling block getting various pieces of software to co-exist.

I decided a break from the problem would be beneficial but I still wanted to have some sense of achievement from the weekend and redeveloping this app seemed a good idea.

Some quick research showed that the [Yahoo! weather report for Belfast](http://weather.yahoo.com/northern-ireland/belfast/belfast-44544) could provide the necessary information so I hacked up an RSS processing script and converted the old PHP front-end to a quick and simple Sinatra app.

The app now operates as originally envisioned: it answers the question with a straightforward yes or no. Hopefully it will be accurate as well :)

The app is hosted at [isitraininginbelfast.com](http://isitraininginbelfast.com) and the code is on [GitHub](http://github.com/stevenwilkin/isitraininginbelfast.com)
