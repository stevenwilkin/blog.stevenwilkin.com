---
title: "Fun with port forwarding"
date: "2007-02-02"
categories: 
  - "linux"
  - "screenshot"
  - "tech"
  - "m"
---

I've been having great fun with tunneling connections through SSH lately and today it dawned on me that I could close another hole in my firewall by connecting to my Jabber server via a tunnel. In the past, when I've been working remotely, I've made changes to my firewall by connecting to my public-facing machine; from there to my desktop machine through a DMZ\-pinhole and once a presence has been established within the "green zone" browsing to the routers web-interface with `lynx`.

I decided to try something a bit different today. I started by forwarded an arbitrary local port with PuTTY on my windows desktop at work:

[![Fun by proxy - PuTTY configuration](/wp-content/uploads/2007/02/proxy_putty.jpg)](/wp-content/uploads/2007/02/proxy_putty.jpg "Fun by proxy - PuTTY configuration")

Next up was to connect from my Slackware box over to my Kubuntu desktop and use it as a [SOCKS](http://en.wikipedia.org/wiki/SOCKS) proxy, using the previously forwarded port:

`steve@substance:~$ ssh -D 8100 steve@192.168.0.2`

Viola, my desktop was now acting as a proxy and was accessible through a local port. I added the details of my newly created proxy into the [SwitchProxy](http://mozmonkey.com/switchproxy/) extension for Firefox thusly:

[![Fun by proxy - SwitchProxy](/wp-content/uploads/2007/02/proxy_plugin.jpg)](/wp-content/uploads/2007/02/proxy_plugin.jpg "Fun by proxy - SwitchProxy")

I enabled the proxy and tested it out by browsing to [whatismyip.com](http://whatismyip.com/) with both browsers available to me:

[![Fun by proxy - different IP addresses](/wp-content/uploads/2007/02/proxy_ip.jpg)](/wp-content/uploads/2007/02/proxy_ip.jpg "Fun by proxy - different IP addresses")

Happy days. From there it was perfectly effortless to access the web-interface of my router and close the client-to-server Jabber port and to skip over to my download box and queue up a DVD to entertain me this evening.

The more I use Linux and the wealth of software bundled with the majority of distributions the more I see what is left out of windows by default. Instead of thinking "which application do I need to perform this task?" it is becoming more a question of "which protocol?" I love it!
