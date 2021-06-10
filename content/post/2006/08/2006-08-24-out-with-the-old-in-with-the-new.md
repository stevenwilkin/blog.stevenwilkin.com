---
title: "Out With The Old, In With The New"
date: "2006-08-24"
categories: 
  - "linux"
  - "meta"
  - "tech"
---

I thought I'd keep myself current and so I've just [upgraded](http://codex.wordpress.org/Upgrading_WordPress) my installation of WordPress from 2.0.2 to 2.0.4.

I was a bit reluctant to do so as I was happy with [what the software was doing](http://www.ronseal.com/), but I remember reading some mention of security updates, so I went for the plunge. The log files on this box are filled with failed login attempts so I know for certain that people are trying to [find a way in](http://www.hackthissite.org/) and if doing something as simple (!) as updating a set of php scripts helps prevent my machine from being compromised, I'm all for it.

I [downloaded the latest version of WordPress](http://wordpress.org/download/), backed up the database via [phpMyAdmin](http://phpmyadmin.net/) and made a copy of the working blog directory. I deactivated my plugins but then ran into a bit of bother when it came to updating the scripts from the archive (my shell skills are still quite basic) so I just removed the working directory and started anew, copying over the settings file (wp-config.php) and the wp-content directory.

I was prompted to run the upgrade script when I browsed to the site and from there it was plain sailing, re-activating the plugins and theme. All-in-all quite painless, and I even got a chance to use [Screen](http://www.kuro5hin.org/story/2004/3/9/16838/14935) a bit, job's a gud'un!
