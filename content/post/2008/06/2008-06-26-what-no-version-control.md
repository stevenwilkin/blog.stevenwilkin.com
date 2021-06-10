---
title: "What, no version control?"
date: "2008-06-26"
category:
  - "code"
  - "m"
---

$WEB\_CORP has taken on the maintenance contract of a particular site and the client has asked for some changes to be made along with fixing up some [SQL injection vulnerabilities](http://en.wikipedia.org/wiki/SQL_injection).

My first step was to **GET** all the site's scripts via FTP so I could create a local DEV instance of it and was surprised to see the following:

$ ls -1 index\*.asp
index-old.asp
index.11May2007.asp
index.11Oct2006.asp
index.13March2006.asp
index.18aug2006.asp
index.20Feb2007.asp
index.20Jan2006.asp
index.21Aug2006.asp
index.24April2007.asp
index.24Feb2006.asp
index.25April07.asp
index.29Nov2006.asp
index.3Feb2006.asp
index.3march2006.asp
index.5July2006.asp
index.5fEB2007.asp
index.6Oct2006.asp
index.7April2006.asp
index.8Feb2007.asp
index.asp
index2.asp
indexBAK.asp
indextemp.asp

Ouch!

I big part of my last gig at $BIG\_CORP was environment management. It was frequently tedious work but it instilled in me the importance of separating the development/integration, testing and production instances of your applications so it saddens me to see the PROD environment of this site in such disarray. The above is possibly a disaster waiting to happen.

Thankfully my own applications reside within a version control system and I don't rely on backing up and tracking old versions of files before a new release.

That's my rant over. I've dumped the database and bunged it's contents into the server running on my VirtualBox VM, now all that's left is getting IIS working...
