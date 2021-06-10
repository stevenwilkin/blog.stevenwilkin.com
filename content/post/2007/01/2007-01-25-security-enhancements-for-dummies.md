---
title: "Security Enhancements for Dummies"
date: "2007-01-25"
category:
  - "linux"
  - "meta"
  - "tech"
---

I read a thread over on [linuxquestions.org](http://www.linuxquestions.org/) recently about [server "hardening"](http://www.linuxquestions.org/questions/showthread.php?t=518085) and got thinking about my own security measures and the lack there of. Here's an example of the content of **/var/log/auth** on the machine this site is hosted on:

`Jan 24 13:43:33 substance sshd[14182]: Invalid user test from 203.242.160.193 Jan 24 13:43:33 substance sshd[14182]: error: Could not get shadow information for NOUSER Jan 24 13:43:33 substance sshd[14182]: Failed password for invalid user test from 203.242.160.193 port 37298 ssh2`

The first time I checked the likes of that file and **/var/log/secure** it really disturbed me to see the megabytes-worth of failed login notifications. I felt the same way when I first started playing with Apache and saw the number of attempted FrontPage Extensions exploits logged in **/var/log/apache/access\_log**!

That thread led me to a more [detailed article](http://www.cromwell-intl.com/SECURITY/linux-hardening.html) which gave me much food for thought. Measures I had already taken included disabling root login via ssh by specifying `PermitRootLogin no` in **/etc/ssh/sshd\_config** and I'd spent a bit of time turning off unneeded network services. When I setup the MTA on this machine I fully intended to encrypt the traffic via TLS but I've never gotten in the practice of using public-key cryptography and don't personally know _anyone_ who is so that hasn't seen fruition _yet_. The consequence of this was plain-text traffic (including username/password!) which I put up with for a while but solved the problem by closing port 143 in my router and tunneling the IMAP connection through ssh.

Since grokking that info I've configured SSHD to only use the SSH2 protocol by specifying `Protocol 2` in **/etc/ssh/sshd\_config** and decided to see what would happen if I changed the port used to connect via ssh. Instead of changing the sshd configuration I took the lazy man's approach and closed port 22 in my router and forwarded a differently numbered port to port 22 on this machine. I didn't know if this would be effective but the logs have been unsullied since, take that [script kiddies](http://en.wikipedia.org/wiki/Script_kiddies)!

Future plans include only permitting login authentication via private keys, implementing packet filtering with [iptables](http://www.netfilter.org/) and scanning my home network with [nmap](http://insecure.org/nmap/). Be paranoid!
