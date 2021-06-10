---
title: "RPC between Go and Ruby using Protocol Buffers"
date: "2016-08-29"
category:
  - "code"
  - "go"
  - "ruby"
---

I've previously written some thoughts on [service oriented architectures](/2013/12/29/a-simple-service-oriented-architecture-using-ruby-and-go/) and since then I've wanted to explore beyond the currently accepted standard of sending and receiving JSON data over web APIs.

## Protocol Buffers

With JSON there's an overhead of transmitting plain-text over the wire coupled with parsing that text in your application once received. For many cases this is probably acceptable but for a large-scale distributed system this can represent a not insignificant cost in terms of bandwidth and computing resources.

In response to this situation Google came up with [Protocol Buffers](https://en.wikipedia.org/wiki/Protocol_Buffers) which basically give you a mechanism to define ahead of time the data structures your services will be exchanging and to convert these structures into a more efficiently transmitted and deserialised binary format.

The supplied compiler generates the code to handle this for you and supports the majority of popular languages which is essential for an ecosystem comprised of heterogeneous technologies.

## gRPC

The concept of being able to invoke a piece of code on another machine is far from a new one. Many languages provide a way of doing so yet the fashion in the web world seems to be to create REST-like services on top of HTTP, even if the end result could almost be described as a JSON [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call) service.

With [gRPC](http://www.grpc.io/) you can describe your services as you can the data they interchange and the generated code handles all the interaction for you, allowing you to concentrate on the actual function of the service and not the logistics of how it is delivered.

As an added bonus it uses [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) under the hood so you automatically get the benefit of things like header compression and request multiplexing.

## Same but different

To demonstrate gRPC in action I've simply forked and updated the code from the previous post. There's still a simple Go service being accessed by a Ruby client though now my application code doesn't have to be concerned about HTTP and JSON. Accepting the format of the generated code seems to be the price to pay for this but I think it's been a worthwhile exercise.

Check it out [on Github](https://github.com/stevenwilkin/rpc-ruby-go-protobuf).
