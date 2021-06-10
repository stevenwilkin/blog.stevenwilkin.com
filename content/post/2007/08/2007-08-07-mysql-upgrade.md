---
title: "MySQL upgrade"
date: "2007-08-07"
category:
  - "code"
  - "linux"
  - "meta"
  - "tech"
---

I finally got sick of not being able to use SQL subqueries and decided to upgrade my MySQL installation from 4.0.x to 5.0.x.

I had wanted to do this previously but was afraid I'd end up breaking something and be left without a working development environment or a website either, for that matter, so I resorted to complicating my custom queries in CakePHP with JOIN statements :(

I couldn't find a 5.0.x package for Slackware 10.0 in the [package browser](http://packages.slackware.it/), so I bit the bullet and downloaded the source archive...

I extracted the files, issued the immortal `./configure && make` commands, left things for a while and was pleasantly surprised when the compilation succeeded. `removepkg` got rid of the old package, a new one was easily produced using [checkinstall](http://asic-linux.com.mx/~izto/checkinstall/) and `installpkg` installed it for me.

The only problem I had was when I went to fire up the daemon and nothing happened. It turned out that the startup script was expecting `mysqld_safe` to be found in `/usr/bin` instead of `/usr/local/bin` where it had been installed to: that was quickly remedied with the creation of a symbolic link. From there it was plain sailing, all my databases were functional.

But enough techno-gibberish. The point of the matter is that I managed to build a package from source, get it up and running and the system as a whole still worked! Linux administration definitely appears to coming more natural to me. Bob be praised :)
