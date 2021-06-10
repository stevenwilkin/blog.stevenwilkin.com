---
title: "command line history - me too"
date: "2008-04-16"
category:
  - "distractions"
  - "geek"
  - "linux"
---

I've seen this on [a couple](http://fredemmott.co.uk/blog_148) [of blogs](http://diveintomark.org/archives/2008/04/15/history-meme) recently so I thought I'd give it a go on the VPS this site is hosted on:

steve@decaf:~$ history | awk '{a\[$2\]++} END {for(i in a)print a\[i\] " " i}' | sort -rn | head -10                                                                
190 ls                                                                          
80 cd                                                                           
24 cp                                                                           
22 sudo                                                                         
19 rm                                                                           
14 svn                                                                          
12 history                                                                      
11 tar                                                                          
10 wget                                                                         
10 vi  

And as root:

                                                        
172 ls                                                                          
59 vi                                                                           
56 cd                                                                           
22 apt-get                                                                      
20 less                                                                         
20 apache2ctl                                                                   
17 apt-cache                                                                    
15 cp                                                                           
10 pwd                                                                          
10 ps 

I'm kinda suprised that `ls` comes out on top each time ;)

I wonder which commands [Matt](http://cimota.com/blog/), [Aidan](http://godswearhats.com/) and [Philip](http://www.homeofserendipity.com/) have been using most?
