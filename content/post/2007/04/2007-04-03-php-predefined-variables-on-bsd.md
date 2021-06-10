---
title: "PHP predefined variables on BSD"
date: "2007-04-03"
category:
  - "bsd"
  - "code"
  - "linux"
  - "mac"
---

I've been getting ready for the deployment of [wow4kids.com](http://wow4kids.com/) and one of the final features to be into place was restricting access to the administrative back-end.

I enabled [admin routing](http://blog.evansagge.com/2006/11/06/configure-cake_admin-routes-in-cakephp/) in [CakePHP](http://cakephp.org/) and put all the back-end code into `admin_*` functions in my controller which are accessible via /admin/_controller_/_action_. I wanted to enable some form of access control but without utilising a full user management system which would have been overkill.

The `/admin/` directory only exists through some [mod\_rewrite](http://httpd.apache.org/docs/1.3/mod/mod_rewrite.html) magic so I couldn't just use a simple `.htaccess` file. After much head-scratching and reading of documentation I arrived at a simple solution:

1. I created a `.htaccess` protected directory, `/adminauth/`
2. in this directory I created an `index.php` file which redirected to a URL passed to it via HTTP GET
3. in `/app/app_controller.php` I defined a `beforeFilter()` function which uses a regular expression to determine if the called action contained "admin\_" in its name
4. if so, check if the `$_SERVER['AUTH_TYPE']` variable is set
5. redirect to `/adminauth/`, passing the current URL, if it isn't set
6. let [mod\_auth](http://httpd.apache.org/docs/1.3/mod/mod_auth.html) take care of the rest

This worked a charm on my home Linux box, but when it came to testing the code on the iMac the site is being developed on, the script couldn't detect the [server variable](http://php.net/manual/en/reserved.variables.php) and was thrown into an infinite loop of redirects, doh!

The same result was had when I uploaded the code to the [FreeBSD web-host](http://pair.com/) the site will be deployed to, so I had no choice but to rethink my solution.

It was either going to be sessions or cookies and in the moment cookies seemed appealing. I changed the controller to check `$_COOKIE[]` instead of `$_SERVER[]` and `/adminauth/index.php` to call `setcookie()` . It seems to be working so far, fingers crossed it'll be suitable for production purposes!
