---
title: "Backing up Delicious bookmarks to CouchDB"
date: "2011-01-11"
categories: 
  - "code"
  - "couchdb"
  - "database"
  - "ruby"
---

Last year I started researching how [CouchDB](http://couchdb.apache.org/) could be used for the [BodyGuard](http://bodyguardapp.com/) web-app QA platform. Unfortunately I had to put my tinkerings to one side when some extra freelance work came in; contracting during the day and freelancing in the evenings quickly put an end to any spare time and my fitness efforts took a hit but I was only self-employed for a short while and it seemed the thing to do.

Since the urgency of the freelance work died down I've been looking for a small project to help me get back up to speed with Couch again and when the rumours of [Delicious](http://delicious.com/stevebiscuit) being shutdown surfaced I saw the opportunity.

The code is quite simple but it served to refresh my memory and has an actual practical aspect which is a bonus :) It's available on [GitHub](https://github.com/stevenwilkin/delicious-couch) as usual and the instructions below should get you up and running.

## Prerequisites

- a pre-Yahoo Delicious account (they use HTTP Basic Auth for authentication)
- CouchDB running on port 5984 on your local machine, I recommend the binary distributions from [CouchOne](http://www.couchone.com/get)
- nokogiri and couchrest gems must be installed:
    
    sudo gem install nokogiri couchrest
    

## Clone the code from GitHub

git clone https://github.com/stevenwilkin/delicious-couch
cd delicious-couch

## Run the import script to fetch your saved bookmarks

USER=username PASS=password ./import.rb

Substitute your Delicious username and password on the command line

## Create the design document

./views.rb

## Querying the data

Now that the database had been populated and the views created, the contents can be queried

### View all urls

./list\_urls.rb

### View all tags along with their count

./count\_tags.rb

### View all urls with a specific tag

./urls\_by\_tag.rb git

Views all bookmarks tagged with "git"

This set of scripts is only scraping the surface of what is possible with CouchDB but it demonstrates the immense power of MapReduce along with the basics of interacting with CouchDB using Ruby. Clone [the code](https://github.com/stevenwilkin/delicious-couch) and enjoy!
