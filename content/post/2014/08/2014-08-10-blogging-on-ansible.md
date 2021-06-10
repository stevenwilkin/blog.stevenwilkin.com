---
title: "Blogging on Ansible"
date: "2014-08-10"
categories: 
  - "linux"
  - "tech"
  - "web"
---

A good friend of mine recently voiced the opinion that the day will soon be upon us when the traditional [SysAdmin](http://en.wikipedia.org/wiki/System_administrator) will no longer be relevant and all operations activities will be some variety of [DevOps](http://en.wikipedia.org/wiki/DevOps).

Now, I've been [managing my own infrastructure for some years](/2006/06/21/postfixed/) but every package has been manually installed with every configuration file modified by hand, resulting in [snowflake servers](http://martinfowler.com/bliki/SnowflakeServer.html) which are nigh-on impossible to recreate exactly and have occasionally caused me a lack of sleep. I've known for a long time that I could be doing better.

## Configuration Mismanagement

In recent years all the clients I've contracted with have used either [Chef](http://www.getchef.com/) or [Puppet](http://puppetlabs.com/) to automate the management of their infrastructure.

The funny thing has been that the last couple have both used Puppet in conjunction with some bespoke, cobbled together system to upload the modules, manifests etc to the target machines and run `puppet` from there, bypassing the usual master/agent setup. Seeing this once was unusual but seeing it twice in a row struck me as very odd indeed and made me think that there was perhaps something overcomplicated with the "usual" approach.

## Ansible Simplicity

With [Ansible](http://docs.ansible.com) there is no client/server model: all you need is a repository of playbooks, SSH access to an inventory of machines and the rest is as simple as running `ansible-playbook`. Very straightforward.

Something I'd wanted to do for some time is migrate my own modest infrastructure away from a single overloaded, handcrafted VPS and to get everything under configuration management in the process.

I'd seen a few examples of Ansible and it was one of the buzzwords being bandied about at the time so it seemed like good opportunity to get my hands dirty and approach my own environment as I would a client's albeit with [cheap OpenVZ containers](http://lowendbox.com) instead of EC2 instances.

## Migrate All The Things

One of the things to be migrated was this blog. It had been running on a woefully out-of-date version of WordPress and using the [same theme for the past half decade or more](/2008/02/28/new-site-theme-at-last/) so getting both of those updated along with the infrastructure aspect was good.

Whilst I was shaking things up I've also taken the opportunity to move the blog from it's own domain, _sickbiscuit.com_, to a subdomain of [my personal site](http://stevenwilkin.com), _blog.stevenwilkin.com_, in an effort to simplify my web presence.

In terms of servers this is now running on one I'm now using to host PHP apps, there's another that handles redirects from the old domain along with other static sites and there's a third that stores the [nightly backups](/2010/01/04/mysql-database-backup-with-remote-storage/) produced. All three have been provisioned with Ansible.

I found using YAML for the playbooks to be a bit unusual to begin with but on the whole Ansible has been easy to get up and running with and so far seems simpler than the alternatives.

## Next Steps

Before I can decommission the old VPS completely I still have to migrate my mail server along with a few other apps which will require a bit of effort. When that's out of the way I may for the sake of completeness setup monitoring with [Nagios](http://www.nagios.org/) and I've a strange hankering to start running my own DNS servers. I know.

Time will tell what exactly I'll do but with Ansible provisioning new machines will be a breeze.
