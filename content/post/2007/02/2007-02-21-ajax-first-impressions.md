---
title: "Ajax: first impressions"
date: "2007-02-21"
categories: 
  - "code"
---

I've been working on a form in my app and was faced with a decision regarding one of the fields: I need the user to select an object from a (possibly large) number of existing objects. I reckoned I had 3 options: a simple drop-down list, which could prove to be impractical; a pop-up window; or, behind door number 3, I could investigate the use of Ajax, which would have the added effect of adding some web 2.0 style eye-candy to the project. Can you guess which option I went with?

Google, as always, provided an abundance of information, so I started reading [this tutorial](http://grahambird.co.uk/cake/tutorials/ajax.php).

I downloaded the [script.aculo.us](http://script.aculo.us/) library (which includes the [Prototype](http://www.prototypejs.org/) framework) onto my development machine and extracted all the necessary .js files into `/app/webroot/js/`, excluding the unit test stuff. I included the scripts by adding the following to my document header in `/app/views/layouts/default.thtml`:

link('prototype.js');
echo $javascript->link('scriptaculous.js?load=effects');
?>

I then made the application aware of this new functionality by added this line to the `AppController` definition in `/app/app_controller`:

var $helpers = array('Html', 'Ajax', 'Javascript');

No errors so far! In the view I was working on I created a `div`, put some content into it and through CSS set `display: none`, learning the hard way to use an inline style to do this instead of using the external style sheet...

On the form I created a link similar to this:

[show me the magic](#)

And by Jove it worked! Clicking on the link made the formally hidden `div` fade into existence before my very eyes.

This is why I love what I do :)
