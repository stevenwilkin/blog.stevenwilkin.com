---
title: "Using Vagrant and Chef to setup a Ruby 1.9 development environment including RVM and Bundler"
date: "2012-06-11"
category:
  - "linux"
  - "mac"
  - "ruby"
  - "sinatra"
---

It has become common practice these days to use tools like RVM and Bundler to manage a project's dependencies. When these pacakages are in place, getting up to speed with another project is a breeze.

## The Pain

But how about installing _these_ tools themselves? How about other dependant pieces of software such as databases and the like? What if they have to be compiled from source? What if they have to be installed with a package manager? Which package manager do you then use: Fink, MacPorts, Homebrew?

Not always so easy!

## It's a UNIX system! I know this!

I love UNIX. I've worked in the investment banks, telecoms companies and startups of the world building and supporting software on FreeBSD, Solaris, RHEL, Debian and more. For just over a half decade now [I've been using a Mac](/2007/03/23/new-workspace/) to do this. I was reluctant to begin with and I could care less for the fanbois but I now strongly believe that a Mac running OS X is the best UNIX workstation I can get my hands on.

Despite all I like about it, OS X can be pretty hostile towards developers, just ask anyone who has setup a Ruby dev environment on a fresh install of Lion recently or [who uses Xcode regularly](http://www.textfromxcode.com/).

## Enter Vagrant and Chef

[Vagrant](http://vagrantup.com) can be used to provide an isolated environment running inside a virtual machine. When combined with a provisioning tool like [Chef](http://www.opscode.com/chef/) it's possible to concisely specify the necessary environment for an application and then have it available in a dependable manner on a on-demand basis.

This combination is to systems what RVM and Bundler are to Ruby interpreters and libraries.

I'd been hearing good things about Vagrant and Chef for some time but what prompted me to delve deeper was the upcoming addition of a junior dev and an intern at [Converser](http://converser.io). Having _all_ dependencies scripted, including operating systems, programming languages, document and key/value datastores seemed like a good way to get the new starts up and running with the minimum of time and headaches.

## An Example

I have an example of what I've learned [on GitHub](https://github.com/stevenwilkin/vagrant-chef-rvm-bundler). It's a simple Sinatra app but demonstrates all the moving parts.

Standalone installers for Vagrant, Chef and Git are to be found [here](https://www.virtualbox.org/wiki/Downloads), [here](http://downloads.vagrantup.com/tags/v1.0.3) and [here](https://central.github.com/mac/latest) which removes the need for any form of package manager on the host OS X system.

Once everything's installed and the repo cloned, the following commands will start up the example app within a fresh virtual machine:

vagrant up
vagrant ssh
cd /vagrant
bundle exec rackup

Browse to [http://0.0.0.0:8080](http://0.0.0.0:8080) to view the output.

For the curious, the versions or Ruby and Bundler can be checked thus:

$ vagrant up
$ vagrant ssh
$ cd /vagrant
$ ruby -v
ruby 1.9.2p320 (2012-04-20 revision 35421) \[x86\_64-linux\]
$ bundle -v
Bundler version 1.1.4

The virtual machine can be powered down and disposed of with this:

vagrant destroy

## Should Things Be This Convoluted?

Perhaps the world would be a better place if all this was simpler. Perhaps returning to a Linux workstation would remove some of these headaches. Maybe I've just grown accustomed to the pain.

For the time being OS X appears to have the correct balance of desktop software and UNIX-y stuff for my needs. Until something appears that surpasses the form-factor, power and utility of my current setup I'll continue to pay the Apple-tax.
