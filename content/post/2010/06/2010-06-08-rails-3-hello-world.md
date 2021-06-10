---
title: "Rails 3 Hello World"
date: "2010-06-08"
category:
  - "code"
  - "rails"
  - "ruby"
---

The past while I've been busy providing technical consultancy to [BT](http://bt.com) and haven't had much drive to work on anything on my own time. The itch has returned the past couple of weeks though so I thought I'd see what I've been missing in the Rails world and in what better way than getting a basic Rails 3 app up and running.

My environment was already setup for Rails 2.3.\* and [Yehuda Katz' post](http://yehudakatz.com/2009/12/31/spinning-up-a-new-rails-app/) served as a guide to get me up to speed with the beta loveliness.

### RubyGems 1.3.7 along with Thor and Bundler gems required

My installed version of RubyGems was a couple of point releases behind, so I updated that and installed the necessary gems

sudo gem update --system
sudo gem install thor bundler

### Clone Edge Rails from GitHub

mkdir -p ~/code/rails/rails
git clone http://github.com/rails/rails.git ~/code/rails/rails

### Generate a fresh app and install dependencies with Bundler

mkdir ~/code/rails/rails-3-demo
cd !$
ruby ~/code/rails/rails/bin/rails new . --dev
bundle install

### Launch the web server

./script/rails server

Browse to [http://0.0.0.0:3000](http://0.0.0.0:3000) and you're done!
