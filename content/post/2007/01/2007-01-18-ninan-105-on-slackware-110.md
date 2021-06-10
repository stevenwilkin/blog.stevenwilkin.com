---
title: "Ninan 1.0.5 on Slackware 11.0"
date: "2007-01-18"
categories: 
  - "linux"
  - "tech"
---

A couple of weekends ago I decided to reconstruct the system I use for downloading from Usenet: I had been using a Debian machine which I had setup back when I was still trying to get into using Linux on my desktop and as such it was massively over-powered for the task at hand, namely, leeching files from binary newsgroups and making them available via a network share. What follows is a tidied up version of the notes I made as I went along.

I started off with a visit to my broom cupboard which is home to my fuse board and the ragtag collection of old boxen which have seen the end of their working lives and been donated to the cause. I selected the machine with the highest specifications: an old Dell desktop kitted out with a 600 MHz Pentium III processor, 128 MB RAM and a 10 GB HDD. I hooked it up to my KVM, grabbed my trusty [Slackware 11.0](http://slackware.com/) CDs and proceeded to do a full install excluding [X.Org](http://xorg.freedesktop.org/) and the X applications.

The install completed, the machine rebooted and my first action was to create a local user account for myself (_adduser <user>_), set its password (_passwd <user>_) and prevent root access via ssh, which meant specifying _PermitRootLogin no_ in **/etc/ssh/sshd\_config.**

By default, Slackware doesn't load the APM module, so I loaded **/etc/rc.d/rc.modules** in vi and uncommented the _/sbin/modprobe apm_ line to allow the machine to power down whenever _shutdown -h now_ is issued.

I shutdown the machine and transfered from the Debian system the drive which I had been downloading onto. It's a 250 GB Maxtor which has seen it's share of abuse and I eventually discovered that it wouldn't work when mounted in the chassis vertically: the system could see the drive but not access it and so I tried using an IDE controller card in case it was a BIOS issue. This worked and for whatever reason I had set the machine on it's side, which meant the drive was sitting horizontally, so I reconnected the drive to the onboard IDE channel and all was good. I did manage to wreck my KVM cable in the process though and all subsequent work was via ssh.

The drive was added into **/etc/fstab** with _/dev/hdd1 /mnt/data ext3 defaults 0 0_ and was successfully mounted to **/mnt/data**.

Previously I had been using Samba to access this drive but my home network is now Redmond-free so I opted for an NFS share. I had never used NFS before, but followed the documentation and added _/mnt/data 192.168.0.2(rw)_ to **/etc/exports** restarted the daemon with _sh /etc/rc.d/rc.nfsd restart_ and mounted the share on my desktop with _mount 192.168.0.3:/mnt/data /home/steve/usenet_. Thankfully this worked without any hitches and meant that only my desktop machine, which I specified by IP address, could access the share.

All that was left was to install the [NZB](http://en.wikipedia.org/wiki/Nzb) grabbing software. I downloaded the latest stable version of [Ninan](http://www.ninan.org/), extracted the files to **/usr/local/bin/ninan/** and enabled write access with _chown -R steve:users /usr/local/bin/ninan/_. I started up the program with _nohup ./ninancore.sh &_ and pointed my browser to _http://192.168.0.3:9090_. I was able to log on with the default username and password which I promptly changed and then entered the details of my newsserver and Newzbin accounts. **/mnt/data** was specified as the destination for the decoded files and I disabled automatic par recovery and unrar extraction, preferring to use my desktop machine for this.

One feature I've never been able to get working is the in-browser restart function, so I had to restart Ninan via the supplied scripts after which I had a fully working system. Something I briefly looked at was the [Oneclick Newzbin script](http://www.ninan.org/modules/mediawiki/index.php/Ninanoneclick.user.js), it makes use of the [Greasemonkey](http://greasemonkey.mozdev.org/) extension which I've seen mentioned a lot but I was glad to have the job at hand finished and got back to enjoying my weekend.

As it stands this setup suits my needs perfectly as for some time now I've been a complete usenet junkie, avoiding peer-to-peer networks as much as possible and despite being perpetually low on funds I've found the subscription fees for [newshosting.com](http://newshosting.com/) and [newzbin.com](http://www.newzbin.com/) to be worth every penny. A future extension will be to include a BitTorrent client on this machine and I've found a likely candidate in the form of [TorrentVolve](http://sourceforge.net/projects/torrentvolve) which provides a web-based front end to an [Azureus](http://azureus.sourceforge.net/) based back end. Happy downloading!
