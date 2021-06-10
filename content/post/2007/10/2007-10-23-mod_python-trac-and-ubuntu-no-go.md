---
title: "mod_python, trac and ubuntu no go"
date: "2007-10-23"
category:
  - "infurious"
  - "linux"
  - "tech"
---

As I [previously mentioned](/2007/10/19/with-infurious-intent/), my current task as [Infurious](http://infurious.com/) system admin is providing the team with a bug/task tracking system, namely [Trac](http://trac.edgewall.org/).

My initial thought was: "our server runs Ubuntu, this should be easy..."

I could get Trac running via `tracd` and I could see that `mod_python` was working via `mod_python.testhandler` but the two didn't seem to want to play together. Last night, after much frustration, I just gave up and configured Trac to run as a CGI application. Problem solved.

Unfortunately this solution will introduce a performance penalty but at this stage it's my priority to get the system functional before I start worrying about access speed.

All I have left to do is get the Trac permissions set up and I'm going to move on to configuring a Jabber server which will free us from our dependency on [Campfire](http://campfirenow.com/).

Me? A Linux hippy? You bet!
