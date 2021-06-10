---
title: "Simple example of accessing the Twitter REST API with Ruby"
date: "2008-12-29"
categories: 
  - "code"
  - "ruby"
---

To date, a lot of [interesting applications](http://twitter.pbwiki.com/Apps) have been built on top of the [Twitter](http://twitter.com) service with new apps being released almost daily, each one more ingenious than the last.

In my spare time I've been tinkering with [Ruby](http://www.ruby-lang.org/), my motivation being to learn something new and to see if Ruby lives up the hype that has been surrounding it in recent years. In conjunction with this I've also been experimenting with obtaining content from existing web sites and services, content being king after all.

On my list of software development goals I've wanted to do something with Twitter but have been lacking the all important idea of which problem to solve. Considering my learning objectives I decided to just get stuck in and see what basic task I could accomplish that involved:

1. authenticating to the service
2. making a request
3. processing the response

After looking at the [API](http://apiwiki.twitter.com/) retrieving the list of followers for a given account seemed doable.

If I were to undertake a non-trivial Twitter application I'd consider using [Twitter4R](http://twitter4r.rubyforge.org/) rather than writing all the REST interaction from the ground up. Another possibility would be to request [JSON](http://json.rubyforge.org/) rather than parsing XML with [Hpricot](http://code.whytheluckystiff.net/hpricot/). The luxury of decisions.

The result of my tinkering is `followers.rb` which lists the followers of the account accessed with `USERNAME`:`PASSWORD` credentials:

#!/usr/bin/env ruby

# followers.rb
# retrieve list of followers from Twitter
# SJW

require 'net/http'
require 'base64'
require 'rubygems'
require 'hpricot'

user	= 'USERNAME'
pass	= 'PASSWORD'
host    = 'twitter.com';
path    = '/statuses/followers.xml'

auth = 'Basic ' + Base64.encode64("#{user}:#{pass}").delete("\\n")

# authenicate and retrieve XML, feeding it into Hpricot
doc = ''
Net::HTTP.start(host) do |http|
	res = http.get(path, 'Authorization' => auth)
	unless res.code == '200'
		puts "An error occured"
		exit
	end
	doc = Hpricot(res.body)
end

# each follower is within a users = doc/:user

# count the number of followers
count = "#{users.length} followers:"
puts count
count.length.times {print '-'}
puts "\\n\\n"

# output each name and corresponding twitter account name
users.each do |u|
	name = (u/:name).text
	screen\_name = (u/:screen\_name).text
	puts "#{name} | @#{screen\_name}"
end
