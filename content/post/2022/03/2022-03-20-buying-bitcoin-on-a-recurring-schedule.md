---
title: Buying Bitcoin on a recurring schedule
date: 2022-03-20
category:
  - code
  - go
  - bitcoin
---

The [house I was selling](/2022/02/18/a-year-of-not-working/) is finally gone and whilst it's nice
to have some cash the topic of inflation is getting a lot of attention in the current media cycle
so it could be argued that I've actually lost an asset whilst gaining a liability.

## Wealth preservation

There are no guarantees when it comes to investing and speculating but it *is* a certainty that cash
sitting in a bank will steadily lose it's purchasing power over time.

Anyone that's been self-employed will know the importance of keeping enough cash at hand to cover
the cost of living for a period of time, typically 6 to 12 months. Beyond that though I believe it's
necessary to acquire assets that will hold their value *or better* in order to preserve one's wealth
in the long run.

## Choosing an asset

The foundation of my investing strategy rests on passive
[equity and fixed-income index funds](/2015/07/02/five-years-of-contracting/) and I don't feel
lacking in either asset class. I may own a house again in the future but I'm not convinced about the
Thai property market and I've owned precious metals in the past but found the storage and
transaction fees to be disagreeable.

That leaves Bitcoin. The volatilty is an abject lesson in trading psychology but for my
circumstances it's ideal so until a more suitable opportunity comes along it makes sense to trickle
some of my burdensome fiat currency into it.

## Little but often

The pros and cons of [dollar cost averaging](https://en.wikipedia.org/wiki/Dollar_cost_averaging)
have been debated for decades but I've found it psychologically reassuring, especially when dealing
with an asset whose volatility is 10 times that of the S&P 500.

The system I built to automate this buying process and hence remove the emotion represents a crude
form of algorithmic trading: at a predefined schedule an order is sent via API to spend a specific
quantity of stablecoins. Simple but effective.

The [code is on GitHub](https://github.com/stevenwilkin/buyer).
