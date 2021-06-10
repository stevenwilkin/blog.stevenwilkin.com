---
title: "Infurious Update"
date: "2007-12-18"
categories: 
  - "code"
  - "infurious"
---

Just a quick update on what I've been working on for Infurious recently.

Since finishing up on configuring Jabber I've been developing our website with the specific aim of allowing customers to download our products and purchase licenses for them.

For this I've returned to [CakePHP](http://cakephp.org/) and been tinkering with the PHP portion of the [AquaticPrime](http://aquaticmac.com/) framework which [Aidan](http://godswearhats.com/) has implemented in our upcoming application, Rickshaw.

Other highlights have been working with the [PayPal Sandbox](https://developer.paypal.com/) and writing a component which generates “Buy Now” buttons for our apps and then handles the Instant Payment Notification and Payment Data Transfer callbacks once the transaction has been completed.

My current task is generating the license details, emailing the details to the customer and finally bunging a copy into our database for future reference and backup purposes...

It beats making minor configuration changes for the world's largest financial institution any day!
