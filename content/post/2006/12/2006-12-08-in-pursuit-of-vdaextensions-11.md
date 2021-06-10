---
title: "In Pursuit Of vdaExtensions 1.1"
date: "2006-12-08"
categories: 
  - "clerical"
  - "code"
  - "m"
---

![Blurred Code - C#](/wp-content/uploads/2006/12/blurred_code.jpg)The past fortnight has proved fruitful: each weekday I have risen early, went to the gym and spent the rest of the day at the office plugging away in Visual Studio. It's been good to get back into developing [vdaExtensions](/2006/08/09/its-alive/): it's first incarnation was completed in August and I asked a few members of staff to try it out and [Phil](http://philipadamson.blogspot.com/) was the only one to give me feedback, I don't know if anyone else even used it! I made a note of his suggestions and then proceeded to work on something else, the nature of which escapes me at this moment.

As usual I found the code easier to rewrite than to read and proceeded to tear the thing apart; if you were sitting near me you would have heard a sigh of relief escape my lips the first time I got the solution to build again. I separated as much of the logical operations from the user-interface code as I could and the data manipulation is now a bit more abstracted within my class definitions. I'm sure you can easily imagine it took persistent effort to bring the application _back_ to the level of function it had before I started "improving" it.

A sticking point I've reached is in using the ReportViewer class to generate a saveable/printable version of the applications data: I knew very little about reporting until yesterday and I had a lazy day of it today, but I'm sure with a bit of research I'll get it. Besides a few minor interface tweaks the only other issue that comes to mind concerns the layout and docking of the controls in my main form, but again, a job for another day. I suspect that for the size of the application my solution is over-engineered, but as the saying goes "half measures availed us nothing" and I just wouldn't be capable of sleeping at night if I thought I didn't put my absolute best into everything.

I'm currently sitting at home, sipping on some espresso, contemplating a weekend of serious [chillaxing](http://www.urbandictionary.com/define.php?term=Chillaxing) and first up is a viewing of [Night Watch](http://www.imdb.com/title/tt0403358/), laters!
