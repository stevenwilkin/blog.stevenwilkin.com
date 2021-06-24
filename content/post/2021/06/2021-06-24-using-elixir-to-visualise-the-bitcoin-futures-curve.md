---
title: Using Elixir to visualise the Bitcoin futures curve
date: 2021-06-24
category:
  - code
  - elixir
  - bitcoin
  - screenshot
---

For the last couple of years my cryptocurrency trading has focused on doing a carry trade between
the Bitcoin spot and derivatives markets. This has involved buying spot Bitcoin and selling short
a corresponding quantity of perpetual swap contracts and/or futures contracts. The mathematics of
this trade are
[described in this in-depth article](http://blog.omega-prime.co.uk/2018/03/28/making-money-in-cryptocurrency-without-price-risk/)
.

To trade futures I've been using [Deribit](https://www.deribit.com/reg-14453.3815) as they now
offer contracts that settle up to a year in the future which I've found useful for longer term
planning, especially when I'm borrowing against my spot holdings to increase the size of my
position.


## Data wants to be free

I had been using a free service to visualise the annualised yield across the various maturities but
it has since gone subscription only and since the market data is freely available via API I was
determined to create my own replacement.

Building something with [Elixir](https://elixir-lang.org/) has been on my list for a long time so
when a well-defined task like this came along I'd no excuses not to give it a go.

Pulling JSON down from APIs and rendering charts are things I've had to do regularly in the past so
it was mostly a matter of hammering queries into a search engine until I'd some code that gave me
the data I wanted and then figuring out how to jam that into a single page
[Phoenix](https://www.phoenixframework.org/) web application.


## Nasty market structure

![](/images/2021-06-24/futures_curve.png)

The end result shows us the strange looking combination of the front quarter contract being within a
day of settlement with backwardation creeping into the rest of the curve. This is a no-trade zone
for me and an explanation of why I have the time and motivation to tinker with this.

Producing something useful is always good and it was interesting to see the similarity between the
functional aspects of Elixir and Ruby. For a bog standard web application I'd probably stick with
Rails as that's what it's suited to but for something that needed a high level of fault-tolerance
and concurrency then I'd consider Elixir and Phoenix.


## Get it

The app is running at [deribit-futures-curve.herokuapp.com](https://deribit-futures-curve.herokuapp.com/)
and the code is available on [GitHub](https://github.com/stevenwilkin/deribit-futures-curve).
