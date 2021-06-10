---
title: "A minimal Rack app to lookup your external IP address"
date: "2011-02-20"
category:
  - "code"
  - "ruby"
  - "web"
---

I think I first heard the term "Rack-app" when I started using [Heroku](http://heroku.com/) to host a couple of projects. I didn't know an awful lot about [Rack](https://github.com/rack/rack) but I did know that it helped a great deal when it came to getting my Rails and Sinatra apps off my workstation and onto the web.

Tonight I thought I'd have another quick look at how it works, what it takes to build a Rack-app and what information about the request is available to the handler.

The result was the following, an object which responds to _call_ and returns a HTTP response code, headers and a body:

ip = lambda do |env| 
  \[200, {"Content-Type" => "text/plain"}, \[env\["REMOTE\_ADDR"\]\]\]
end

run ip

I have this running on [ip.stevenwilkin.com](http://ip.stevenwilkin.com) and it provides the same useful function as [whatismyip.com](http://whatismyip.com) but without the ads :)

The code is available on [GitHub](https://github.com/stevenwilkin/ip.stevenwilkin.com) as always.
