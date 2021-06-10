---
title: "node-shoutbox - a simple node.js demo"
date: "2010-03-19"
categories: 
  - "code"
  - "javascript"
  - "web"
---

Last month, at the inaugural [Super Happy Dev Castle](http://www.superhappydevcastle.org/), my buddy [Dave Rice](http://twitter.com/davidjrice) told me about a project he was working on involving [node.js](http://github.com/ry/node), an event-based I/O system for Javascript.

### Javascript outside of the browser?

This concept seemed almost ridiculous to me at that time but I thought it was worth a look and cobbled together a quick "Hello World." I was greatly amused by creating a command-line app with Javascript but did nothing more about it until last week. I'm currently starting out as an independant contractor & have a bit of spare bandwidth so I thought I'd put together something a bit meatier in order to learn more about this system & to also sharpen up my Javascript skills.

Dave had shown me [node-comment](http://github.com/felixge/node-comment) and I also studied [node\_chat](http://github.com/ry/node_chat). From there I had just enough reference material to understand the mechanics of [long-polling](http://en.wikipedia.org/wiki/Push_technology#Long_polling) and to start piecing together a simple real-time commenting system.

### What is node?

In and of itself, node is not a web development stack. It provides an I/O platform of which HTTP handling is a part. People are building blogging and wiki engines, FTP servers and command-line tools with this thing, anything I/O based is possible and thankfully micro-frameworks like [(fab)](http://github.com/jed/fab/) can ease the pain of creating web apps.

Node is still very young software, which I have felt the pain of. To serve up static content I wanted to use [paperboy](http://github.com/felixge/node-paperboy) as it can be used as middleware within (fab), however mere days after the last update to the project the API it was relying upon in node changed fundamentally. Despite being new to node development I was able to [patch paperboy to work with node v0.1.31](http://github.com/stevenwilkin/node-paperboy) and get on with my actual project. Another sticking point was the inability of (fab) to handle POSTed form variables, this functionality is planned for it's next release though.

### Fun

Ultimately, my app is of little practical use: it doesn't make use of persistance or moderation and node's suitability for the production environment may itself be questionable at this time, but it was quite a fun experience. From something I more-or-less despised a decade ago I've come to develop a real affection for coding Javascript over the past few years.

When I had the basics of the app laid-down I eagerly awaiting the moment when I could have it open in two browser windows and enter a comment into one and see it appear in the second. That moment came and it brought a smile to my face. I suggest you give it a go :)

### Get the code

As a wise man once said, code speaks louder than words, so please be my guest and [clone my demo on GitHub](http://github.com/stevenwilkin/node-shoutbox).
