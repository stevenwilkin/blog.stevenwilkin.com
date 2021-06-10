---
title: "UML For A Laugh"
date: "2007-01-09"
categories: 
  - "clerical"
  - "code"
---

I'm just getting started in the development of my next application: a management system for the Agency's various resources. The intention of this program is to allow members of staff to book laptops, projectors and so on and to see at a glance what is already booked, when for and by whom.

Not since my days of [210CSC218](http://www.qub.ac.uk/schools/eeecs/Education/Undergraduates/ModuleSummaries/ModuleInformation/index.html?CrsCode=210CSC218) and the calamity that was my undergraduate dissertation have I done any serious planning or documentation for anything I've implemented to date, but for some reason the mood took me this morning and I found myself brushing up on [UML](http://en.wikipedia.org/wiki/Unified_Modeling_Language) and printing off a [reference](http://www.holub.com/goodies/uml/index.html) to remind me of the different symbols involved. I remember back in the day finding some of the concepts a bit tricky but ultimately scoring well in that modules assignments and exam, so I wonder what my old lecturer would think of this effort:

![vdaBookings - Use Case Diagram](/wp-content/uploads/2007/01/use_case_diagram.jpg)

I haven't a clue if I've got all the details right but what I'm saying with this Use Case is that a user may book a number of resources and unbook one which they have previously booked and for a resource to be bookable it must first be added into the system by a user in the admin role, who can then remove it aswell as perform the normal user activities.

Nothing complicated then. The only possible difficulty I can see is in interacting with Active Directory / Windows Logon but I've seen this done in an app my co-worker Kev has written so I know I'll get it licked, I just don't know how much effort it's going to take. Another interesting challenge is going to be making use of some kind of [Object-Relational mapping](http://en.wikipedia.org/wiki/Object-relational_mapping) system: in my last venture into .NET there wasn't much separation between the objects the program was manipulating and the structures used to interact with SQL Server, ie, any change in an object member resulted in an immediate change in the row of the table it was representing. This approach left me victim to all sorts of minor details concerning DataRows, DataTables and the like, so this time 'round I'll be taking a higher-level view of things and should have as a result an ORM system which I should be able to reuse in the future.

I just know I'm going to be seeing code in my sleep. Goodnight!
