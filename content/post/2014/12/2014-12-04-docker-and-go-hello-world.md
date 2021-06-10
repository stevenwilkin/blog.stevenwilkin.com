---
title: "Docker and Go Hello World"
date: "2014-12-04"
category:
  - "go"
  - "linux"
---

One of the most bandied about buzzwords at the moment has got to be [Docker](https://www.docker.com/). So many people I've spoken to claim to be moving their application environments to it and some even have it running in production with varying degrees of success.

## Fine in theory

The theory of isolating groups of related processes into containers which then themselves can be further orchestrated to build out an environment is very appealing. From my understanding you can package up everything an application needs, including it's code and related software, into an image and then run any number of containers based on that image without necessarily having to consider where or how that happens. Very powerful and broadly in line with [how everything is run inside Google](http://www.theregister.co.uk/2014/05/23/google_containerization_two_billion/) now.

## In practice

Until recently all I'd done apart from reading documentation and attending meetups was spin up and poke around with a few basic containers, I didn't yet appreciate the practicalities of containerisation.

One thing I'd noticed though was with some open-source Go projects I'd contributed some minor changes to. They had a `Dockerfile` at the top-level of the repository, like [this one](https://github.com/golang/gddo). My flatmate here in London had also managed to deploy some applications for his client using Docker so I was determined to get something of my own running I could refer back to later.

## The Dockerfile

The basis of Docker is the `Dockerfile` which defines how to build an image and gives you [a small number of commands](https://docs.docker.com/reference/builder/) which you can use to copy files onto said image, install packages, run applications, expose network ports and the like. Whatever is written to the filesystem as a consequence of these commands being run becomes part of your image.

## Building an image

Once you've written your `Dockerfile` you can build an image from using it by running this from the directory it's contained in:

docker build -t hello-world .

This will create an image which you can then refer to by "hello-world" and which you should be able to see listed with this:

$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
hello-world         latest              55f36149c050        2 hours ago         453.9 MB

## Running a container

Now we have an image we can start a container based on it with the following:

docker run -p 8080:8080 --rm hello-world

This will spin up a container, run the command specified with `CMD` in the `Dockerfile` and expose port 8080 from the container to the machine running Docker which in my case is a VM managed by [boot2docker](http://boot2docker.io/). You can see the running application within the container like this:

$ docker ps
CONTAINER ID        IMAGE                COMMAND             CREATED             STATUS              PORTS                    NAMES
c37584b7a2cc        hello-world:latest   "./app"             13 seconds ago      Up 11 seconds       0.0.0.0:8080->8080/tcp   jolly\_hopper    

Boom! Containerised!

## The end result

I've put together a `Dockerfile` which compiles and runs a simple web app written in Go which can be found [on GitHub](https://github.com/stevenwilkin/docker-go-hello-world). When run, the application can be interacted with as follows:

$ curl $(boot2docker ip 2>/dev/null):8080
Hello Go!

Simple but I think it illustrates the principles well.
