---
title: "Minder - a simple web-app monitoring tool written in Ruby"
date: "2010-12-13"
categories: 
  - "code"
  - "linux"
  - "ruby"
  - "web"
---

## Background

A few months ago I was tasked with migrating and maintaining a bunch of legacy Rails apps and a couple of them were misbehaving. Requests were hanging which was tying-up the front-end Apache child processes and resulting in all the web-apps on the server becoming unresponsive

At the time I didn't know what was causing the hanging requests, it wasn't happening in a predictable manner and on the surface I had all the apps dependencies in place.

Seeing as this was a job I was doing on the side I had very limited time to investigate the underlying issue and decided I would have to make do with just knowing when the apps went down so I could ssh in and manually kill off the offending processes.

My initial thought was to use Nagios for monitoring but it seemed excessively heavy-weight for the task at hand so I seized the opportunity to quickly develop a tool perfectly tailored to my needs.

The resulting script, minder, checks a list of domains and if the root of each can't be read within 10 seconds a notication is sent via XMPP. Nothing more, nothing less. Simple.

Minder proved effective and I was bombarded with instant messages whenever any of the apps went under. Thankfully I found to bit more time to investigate more thoroughly and tracked the issue down to a missing TrueType font used by ImageMagick.

The first iteration of minder was very simple but I thought I'd put a bit of extra effort in to make it easier to customise and share it with the internet-at-large, hopefully someone will get some use out of it.

## Prerequisties

- Two XMPP accounts:
    
    - one to send notifications from, and
    - a second to receive notificationsGoogle Talk or any regular Jabber/XMPP accounts will suffice
- [Blaine](http://twitter.com/Blaine)'s [xmpp4r-simple](http://github.com/blaine/xmpp4r-simple) gem must be installed:
    
    sudo gem install xmpp4r-simple
    

## Usage

- copy minder.yaml.sample to minder.yaml
- edit minder.yaml to specify the username and password of the sending XMPP account
- specify your own personal XMPP account (xmpp\_to)
- modify the list of domains to monitor
- run the script
    
    $ ./minder.rb
    
- Optionally run the script from a Cron job, the following will run every hour:
    
    0 \* \* \* \* /path/to/minder.rb > /dev/null 2>&1
    

## Get the code

Clone the repo from [GitHub](https://github.com/stevenwilkin/minder). Fire any queries to [@stevebiscuit](http://twitter.com/stevebiscuit).
