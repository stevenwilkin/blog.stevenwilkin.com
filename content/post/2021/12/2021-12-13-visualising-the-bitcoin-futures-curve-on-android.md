---
title: Visualising the Bitcoin futures curve on Android
date: 2021-12-13
category:
  - code
  - android
  - go
  - kotlin
  - bitcoin
  - screenshot
---

During the summer I built a web application to
[visualise the Bitcoin futures curve](/2021/06/24/using-elixir-to-visualise-the-bitcoin-futures-curve/)
which proved very useful in informing my trading decisions.

As useful as it was however, each time I viewed it I had to wait for the
application to first boot on Heroku and then to perform a sequence of API calls
to [Deribit](https://www.deribit.com/reg-14453.3815) before the chart could
finally be rendered in the browser.


## Impatience as the mother of invention

I'd no other major projects that needed attention so building a more responsive
native application seemed like a reasonable task to take on.

As before, everything I needed to do from making network requests to integrating
a charting library was achievable with the help of a search engine. Knowing I'm
not using best-practice is frustrating but the experience has to come from
somewhere and it's ultimately the results that matter.

Building a network application with Go is straightforward and in this case the
service interrogates the exchange API once a minute, caching the results and
making them available as JSON over HTTP.


## Another bearish chart

![](/images/2021-12-13/screenshot.jpg)

Coincidentally like last time the resulting chart shows a lower annualised yield
on the shorter tenor contracts than on those that expire further out so a
bearish outlook for the short to medium term.

I've been pleased with how useful I've found this project and when it shows
signs of a more bullish sentiment I'll be keen to commit more capital after
closing out a couple of positions during the most recent dump.


## The code

Both the [web service](https://github.com/stevenwilkin/curve) and the
[Android app](https://github.com/stevenwilkin/curve-android) are available on
GitHub.
