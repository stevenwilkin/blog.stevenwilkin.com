---
title: "Installing RMagick on Debian Lenny"
date: "2010-12-25"
category:
  - "linux"
  - "ruby"
  - "tech"
---

Just a quick reminder to myself on how I installed RMagick on a Debian 5.0.4 "lenny" VPS. All commands to be run as root.

## Build ImageMagick from source

curl -O ftp://ftp.imagemagick.org/pub/ImageMagick/ImageMagick.tar.gz
tar xvzf ImageMagick.tar.gz -C /usr/src/
cd /usr/src/ImageMagick-6.6.6-6/
./configure
make
make install

## Install the RMagick Gem

gem install rmagick

Bingo!

As an interesting aside, ImageMagick handles a lot of image formats via delegate libraries. I previously installed RMagick on a CentOS box and had to separately install TrueType fonts which were necessary for the project in question. These had to be installed **before** ImageMagick and were accessible through _yum_ and the _xorg-x11-fonts-truetype_ package.
