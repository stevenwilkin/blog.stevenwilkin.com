# blog.stevenwilkin.com

My personal blog

## Prerequisites

* [Hugo](https://gohugo.io/)

## Publishing content

Build static pages:


```sh
$ hugo
```

Sync to web server:

```sh
$ rsync -av public/ blog.stevenwilkin.com:/var/www/blog.stevenwilkin.com/
```
