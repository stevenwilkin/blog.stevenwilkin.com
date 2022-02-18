---
title: "ClickOnce, yeah right"
date: "2007-01-08"
category:
  - "clerical"
  - "code"
  - windows
---

I've just committed vdaExtensions 1.1 to SVN: I had had enough of stressing out about minor aspects of the user interface and just went for it and published the application. Only to discover that [ClickOnce](http://en.wikipedia.org/wiki/ClickOnce) wasn't working on the target desktops, doh!

The problem was with the assemblies for the [ReportViewer](http://msdn2.microsoft.com/en-us/library/microsoft.reporting.winforms.reportviewer(VS.80).aspx) class. I have SQL Server 2005 Express installed on my machine and so had no problems with the app getting access to the appropriate libraries at runtime, but it didn't look like the .dlls in question were being included in the published solution even when the assemblies were being included via _Project Properties > Publish > Application Files_ and _Copy Local_ was enabled in the _References_ section.

Thankfully Google came to my rescue yet again and I found some info on [interfering with the Report Viewer redistributable](http://drowningintechnicaldebt.com/blogs/dennisbottjer/archive/2006/10/16/Hacking-Report-Viewer-Redistributable.aspx) and I was able to get my hands on the .dll files which I then referenced in the project and bingo! the ClickOnce installer wasn't complaining about ReportViewer any more, it was now giving me bother concerning ADODB...

A bit more googling provided me with an [msi for the Office 2003 assemblies](http://support.microsoft.com/?scid=kb;en-us;897646&spid=2514&sid=global) and a program to [extract the .dll goodness](http://blogs.pingpoet.com/overflow/archive/2005/06/02/2449.aspx) from it. I referenced the resulting **adodb.dll** and specified for it to be copied into the build directory and that was thankfully the end of that mini-drama.

I wasn't too keen on the idea of ClickOnce when I first started with [.NET](http://en.wikipedia.org/wiki/Microsoft_.NET) but I must admit that I've warmed to it within the context of a Windows domain and with users who don't have full administrative privileges on their workstations. Or it just might be that I'm less of a Microsoft bashing, Linux [fanboi](http://www.urbandictionary.com/define.php?term=fanboi) these days! Right tool for the job at hand and all that.

It's now onto pastures new: I've created a new solution in Visual Studio and set it up with a Subversion repository, my only hope being that somebody in the office will actually use this software I'm creating!
