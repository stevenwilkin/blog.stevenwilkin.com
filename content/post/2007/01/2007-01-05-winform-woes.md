---
title: "WinForm Woes"
date: "2007-01-05"
category:
  - "clerical"
  - "code"
  - "screenshot"
  - "m"
---

I've been finishing off the next release of vdaExtensions seemingly forever and have had all the functionality sorted out for ages and without much in the way of trouble but I've been struggling with the user interface. The only contents of my main form are a MenuStrip and the meat of the app, a DataGridView.

Throughout the use of the program the DataGridView can change dimensions: information can be added/changed/removed and I've also added the ability to show/hide the various columns of the control, with the constraint that at least one column must be visible at all times. The difficulty I'm experiencing lies in having the WinForm fit the DataGridView snuggly, displaying all the cell contents and preventing any empty space around the control:

![WinForm Woes - DataGridView I Curse Thee](/wp-content/uploads/2007/01/winform_woes.jpg)

The control is docked to the form and I've taken care of any empty horizontal space by setting the _AutoSizeMode_ of the right-most visible column to _Fill_, however I'm still left with some vertical empty space as you can see in the screenshot. All the rows are displayed perfectly when the form is resized vertically to it's maximum, but whenever all the rows cannot be displayed and the vertical scrollbar is visible the control can display some of it's background along the bottom. This is the last thing on my TODO list for this version and it has been bugging me for at least a month now.

I've tried setting the background colour of the control but the empty space was still noticeable, only it was the same colour as the cell backgrounds. I can't find any row properties that will cause the last row to fill up the available vertical space, like with columns and all screenshots I've found online have included a bit of the control's background.

I might have to accept that what I want to achieve is just not possible using this control but I'm itching to move onto something else so come Monday I'll probably publish the solution and commit the code to SVN. Perfectionism hurts!
