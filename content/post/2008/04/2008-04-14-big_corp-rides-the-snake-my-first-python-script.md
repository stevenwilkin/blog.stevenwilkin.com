---
title: "$BIG_CORP rides the snake - my first Python script"
date: "2008-04-14"
category:
  - "clerical"
  - "code"
  - "distractions"
---

In between support tasks at $BIG\_CORP I've been slowly reading through O'Reilly's [Learning Python](http://www.oreilly.com/catalog/9780596513986/) and trying a few things out with the command-line interpreter.

The first script I've written that actually does something useful is `countdown.py`:

#!/usr/bin/env python
# countdown to 5pm
# 2008 SJW
import datetime
now = datetime.datetime.now()
home = datetime.datetime(now.year, now.month, now.day, 17, 0, 0, 0)
total\_secs = (home - now).seconds
hours = total\_secs / (60 \* 60)
minutes = (total\_secs - (hours \* 60 \* 60)) / 60
print hours, " hours and ", minutes, " minutes until 5pm"

Very simple I know but I just had to share it ;)

Thanks to [Clinton](http://www.byteclub.net/blog/cwoodward/) for the [GeSHi WordPress plugin](http://www.byteclub.net/wiki/WordPress_csh_GeSHi_Plugin).
