var store = [{
        "title": "ibook2 + Linux",
        "excerpt":"I just got my ibook2 up and running on OSX again after a brief run with ppc linux. Vim looks like it will never run in gui mode, so I’m stuck in 16 color cterm hell. The airport card is beautiful though, no problems and almost no configuration needed with...","categories": [],
        "tags": [],
        "url": "/blog/2001/11/10/ibook2.html",
        "teaser": null
      },{
        "title": "Fink",
        "excerpt":"Fink is absolutely solid, it’s the only way to go for osx X11 ports.I have managed to get vim up, in full gui mode with an aqua wrapper. Ditto with xmms. First, upgrade to 10.1. Then download the osx developer tools for 10.1. Get XDarwin. Finally, get Fink 0.3.0.  ","categories": [],
        "tags": [],
        "url": "/blog/2001/11/16/fink.html",
        "teaser": null
      },{
        "title": "Google Groups / My Usenet Posts",
        "excerpt":"Check out google’s newsgroup feature if you haven’t already. Turns out my first post was in 1997…   View all my usenet posts  ","categories": [],
        "tags": [],
        "url": "/blog/2002/01/06/usenet.html",
        "teaser": null
      },{
        "title": "Going Postal",
        "excerpt":"From the Dean at Boston University: My secretary forward to me your message. Frankly, I am surprised by your response that you never check your mail…. if you continue your practice of not checking your mail, you may one day be surprised to learn that your credit is ruined (because...","categories": [],
        "tags": [],
        "url": "/blog/2002/02/26/going-postal.html",
        "teaser": null
      },{
        "title": "My Reaction to 911",
        "excerpt":"The United States is over-reacting to terror. I remember being openly ridiculed right after 911 when I said that as a country we should do nothing in retaliation. How many times do you let a bully hit you in the face before you retaliate? Good point, but the answer should...","categories": [],
        "tags": [],
        "url": "/blog/2002/07/30/reaction-to-911.html",
        "teaser": null
      },{
        "title": "Procmail",
        "excerpt":"I am now 100% spam free, thanks to procmail. For one reason or another, I finally started getting spam in my BU inbox. It took 3 full years, but those relentless bastards found me. Thanks go out to those motherfuckers at EveSecretGarden.com, which was the straw that broke the camel’s...","categories": [],
        "tags": [],
        "url": "/blog/2002/08/07/procmail.html",
        "teaser": null
      },{
        "title": "VMWare",
        "excerpt":"VMware kicks ass. In a nutshell, it lets you emulate one or many simultaneous “virtual machines”, allowing you to host literally any OS on a windows or linux box. For me, it was a question of Linux on Windows, or Windows on Linux. I already run WinXP, so using that...","categories": [],
        "tags": [],
        "url": "/blog/2002/09/07/vmware.html",
        "teaser": null
      },{
        "title": "SSH",
        "excerpt":"My Windows box is hosed again. Nothing serious, it just needs to run chkdsk off the Windows XP cd. Unfortunately, I seemed to have misplaced my 100% legitimate copy somewhere… Damn those piracy gremlins. In the meantime, my laptop gets some much need attention. Running PPC Linux, I noticed that...","categories": [],
        "tags": [],
        "url": "/blog/2002/09/09/ssh.html",
        "teaser": null
      },{
        "title": "killn alias",
        "excerpt":"I just took 20 minutes to scratch a 3 year old itch. Ever since I started programming in unix, I have wanted a kill command that can kill by process name, instead of just pid. Behold, the one-liner: kill -9 `ps|grep $1|awk '{print $1}'` I tossed this into a fill...","categories": [],
        "tags": [],
        "url": "/blog/2002/10/16/killn.html",
        "teaser": null
      },{
        "title": "Bayesian Spam Filtering",
        "excerpt":"I officially declared phase one of my personal war on spam five months ago, when I started using procmail to do some server side email parsing. My original method was just a rip-off of a script I found online. The basic algorithm was as follows: If you’re whitelisted, let the...","categories": [],
        "tags": [],
        "url": "/blog/2003/01/19/bayesian-spam.html",
        "teaser": null
      },{
        "title": "Bayesian Spam Filtering 2",
        "excerpt":"The spam battle rages on… I have a beta version of my new bayesian spam filter as outlined in Paul Graham’s Plan for Spam, called SpamNet. It’s basically a statistical token-based text analysis web service. You can play with the development version here. I am currently working on a nice...","categories": [],
        "tags": [],
        "url": "/blog/2003/03/31/bayesian-spam2.html",
        "teaser": null
      },{
        "title": "Bullhorn",
        "excerpt":"First off, I have a new job! It’s a small ASP based software company in Boston called Bullhorn. For the past couple of weeks, I’ve been learning their systems, gearing up for my role as Network and Systems Engineer. This will basically entail a lot of hardware upgrades/maintenance and programming....","categories": [],
        "tags": [],
        "url": "/blog/2003/07/12/bullhorn.html",
        "teaser": null
      },{
        "title": "Xbox Moding",
        "excerpt":"The xbox modding project is over and done, for now. A successful mod started with a few bumps and scratches, and was riddled with various unexpected stops and starts. What follows is my experience performing this mod, incomplete and circumstantial though it is. First off, I would suggest that non-soldering...","categories": [],
        "tags": [],
        "url": "/blog/2003/12/26/xbox-mod.html",
        "teaser": null
      },{
        "title": "Postifx Header Based Routing",
        "excerpt":"I run a custom web-based email site. Some users requested the ability to smarthost any outbound mail from their accounts through an arbitrary server. In the past, we had accomplished this by running a separate virtual SMTP server for them, having the virtual server smarthost everything to that address, and...","categories": [],
        "tags": ["smtp","postfix"],
        "url": "/blog/2005/10/19/postifx-header-based-routing.html",
        "teaser": null
      },{
        "title": "EasyMock java.lang.NoSuchMethodError&#58; org.easymock.internal.RecordState.(Lorg/easymock/internal/IMocksBehavior;)",
        "excerpt":" Mysterious Error #5578:     java.lang.NoSuchMethodError: org.easymock.internal.RecordState.(Lorg/easymock/internal/IMocksBehavior;)V at org.easymock.internal.MocksControl.reset(MocksControl.java:51) at org.easymock.internal.MocksControl.(MocksControl.java:26) at org.easymock.EasyMock.createControl(EasyMock.java:77) at org.easymock.EasyMock.createMock(EasyMock.java:43)    Solution? Change the import order easymock.jar and easymockclassextension.jar.   ","categories": [],
        "tags": ["java","easymock"],
        "url": "/blog/2007/01/05/easymock-javalangnosuchmethoderror-orgeasymockinternalrecordstatelorgeasymockinternalimocksbehavior.html",
        "teaser": null
      },{
        "title": "Copying a link to the clipboard in IE/Javascript",
        "excerpt":"Problem: You want to copy a link into the clipboard from a web-app such that when you paste, you get the link URL AND the link text. For example, I was developing a web-based IM client. I wanted users to be able to copy a link from another part of...","categories": [],
        "tags": ["javascript"],
        "url": "/blog/2007/11/17/copying-a-link-to-the-clipboard-in-iejavascript.html",
        "teaser": null
      },{
        "title": "Ajax grid performance in IE",
        "excerpt":"Generating a grid (table) view from the results of an Ajax call is a common Web 2.0 use case. But performance can be an issue, especially on IE7. Let's look at an example without the actual Ajax part; just generating a table and inserting it into the DOM. Here is...","categories": [],
        "tags": ["performance","javascript"],
        "url": "/blog/2008/12/05/ajax-grid-performance-in-ie.html",
        "teaser": null
      },{
        "title": "RPC/Encoded web services on Java 1.6",
        "excerpt":"Usually, when I want to call a remote web-service in Java, I would generate stub proxy classes at the command line with: wsimport http://someurl?WSDL On a recent project, this command resulted in the error message: parsing WSDL... [ERROR] rpc/encoded wsdls are not supported in JAXWS 2.0. line 56 of http://someurl?WSDL...","categories": [],
        "tags": ["java"],
        "url": "/blog/2008/12/09/rpcencoded-web-services-on-java-16.html",
        "teaser": null
      },{
        "title": "Using a local copy of a WSDL with JAX-WS",
        "excerpt":"By default when JAX-WS auto-generates a proxy stub via wsimport, it will reference the live web version of the WSDL in the stub definition. This means that when the stub object is instantiated, JAX-WS will go over the wire to get a copy of the WSDL. Recently, we had a...","categories": [],
        "tags": ["jax-ws"],
        "url": "/blog/2008/12/15/using-a-local-copy-of-a-wsdl-with-jax-ws.html",
        "teaser": null
      },{
        "title": "ColdFusion JSON Exception Handling",
        "excerpt":"When calling a ColdFusion end-point from an Ajax call, the caller is expecting a certain format. In my projects, that's usually JSON. Regardless, it would be nice if the caller could assume a constant format, even for exceptions. Typically, when an exception is generated in ColdFusion, the server auto-generates an...","categories": [],
        "tags": ["javascript","coldfusion"],
        "url": "/blog/2008/12/24/coldfusion-json-exception-handling.html",
        "teaser": null
      },{
        "title": "Using JAXB without a schema",
        "excerpt":"A Yahoo HotJobs API project has been my first exposure to REST APIs. Usually, I'm working with SOAP web-services. Bullhorn is actually thinking about trying to support REST with its own APIs, so this was a good opportunity to learn about the strengths and weaknesses of REST. With a typical...","categories": [],
        "tags": ["xmlspy","xml","jaxb"],
        "url": "/blog/2008/12/29/using-jaxb-without-a-schema.html",
        "teaser": null
      },{
        "title": "First AWK script",
        "excerpt":"I have been aware of AWK as a \"general purpose programming language that is designed for processing text-based data\" since college. But until today I never sat down to learn how to use it. I had a log file that I needed to glean some information from, and turn into...","categories": [],
        "tags": ["awk"],
        "url": "/blog/2009/01/08/first-awk-script.html",
        "teaser": null
      },{
        "title": "getResource() resource patterns",
        "excerpt":"The Java class loader contains a convenience method getResource(), which is great for externalizing some static content from your code. In the past, I've used it almost exclusively with .properties files. Could there be a more ideal candidate for data that should be outside the code? Recently, I wanted to...","categories": [],
        "tags": [],
        "url": "/blog/2009/01/13/getresource-resource-patterns.html",
        "teaser": null
      },{
        "title": "SOAP vs. REST from a consumer's perspective",
        "excerpt":"When implementing web-services, the two most popular paradigms are SOAP and REST. Prior to REST becoming a formal standard (though it's still very loose), many so-called web-services were implemented as XML/CSV/JSON/something over HTTP. Those could be fairly categorized as REST-like, also. Popularity Though SOAP was formalized far in advance of...","categories": [],
        "tags": [],
        "url": "/blog/2009/01/20/soap-vs-rest-from-a-consumers-perspective.html",
        "teaser": null
      },{
        "title": "Democratic Product Management",
        "excerpt":"In 2007, Dell launched their IdeaStorm site. It was the first example I had seen of a website where users can go to vote on features. From their FAQ: The name is a take-off on the word \"brainstorm\" and it is our way of building an online community that brings...","categories": [],
        "tags": ["process","opensource"],
        "url": "/blog/2009/01/28/democratic-product-management.html",
        "teaser": null
      },{
        "title": "Regular Expression&#58; Negative Lookahead",
        "excerpt":"People understand instinctively that the best way for computer programs to communicate with each other is for each of the them to be strict in what they emit, and liberal in what they accept. The odd thing is that people themselves are not willing to be strict in how they...","categories": [],
        "tags": ["regex"],
        "url": "/blog/2009/01/30/regular-expression-negative-lookahead.html",
        "teaser": null
      },{
        "title": "Regular Expression&#58; Negative Lookahead Part II",
        "excerpt":"When we left off, I had set out to replace any ampersand outside a CDATA segment with the XML encoded version. Instead of ditching the regex approach and using a lenient DOM parser, I chose to escalate the ugly hack even further! The helpful folks over at stack overflow had...","categories": [],
        "tags": ["regex"],
        "url": "/blog/2009/01/31/regular-expression-negative-lookahead-part-ii.html",
        "teaser": null
      },{
        "title": "Keep those passwords safe",
        "excerpt":"The easiest way to guess a password isn't to guess it at all, but to exploit the inherent insecurity in the underlying operating system. Bruce Schneier Six months ago, a gaming web-site I have a login to was hacked. There was no real data of any value on the site,...","categories": [],
        "tags": ["security"],
        "url": "/blog/2009/02/02/keep-those-passwords-safe.html",
        "teaser": null
      },{
        "title": "Java phone number format API",
        "excerpt":"So, you have a database with millions of phone numbers with free-for-all formatting. Ie, the UI does not enforce any constraints and the users are typing in whatever they want. There must be a Java API to format these, right? Yeah, not so much. For example, a phone number in...","categories": [],
        "tags": ["java"],
        "url": "/blog/2009/02/09/java-phone-number-format-api.html",
        "teaser": null
      },{
        "title": "blogger backup",
        "excerpt":"Want to backup your Blogger posts? Here is a quick Python script that does just that. It will create an HTML file for each post, with the subject of the post as the file name and the post date as the file timestamp. import os import urllib import re from...","categories": [],
        "tags": ["python"],
        "url": "/blog/2009/02/12/blogger-backup.html",
        "teaser": null
      },{
        "title": "Mint.com backup",
        "excerpt":"Mint.com is a great personal finance tool. I started using it once I made the switch to Linux at home. I used to use Quicken, but I really didn't want to configure WINE for that one application. Besides, Quicken is getting really crusty; it looks like it's still the same...","categories": [],
        "tags": ["python"],
        "url": "/blog/2009/02/16/mintcom-backup.html",
        "teaser": null
      },{
        "title": "Deploying Jersey to JBOSS",
        "excerpt":"I spent the afternoon playing around with Jersey in JBOSS. Jersey is a Java API for publishing REST web-services, and JBOSS is the application server we use at work. Not finding any particularly helpful tutorials, I muddled my way through. Lucky for you, I have distilled the required steps here....","categories": [],
        "tags": ["java"],
        "url": "/blog/2009/02/19/deploying-jersey-to-jboss.html",
        "teaser": null
      },{
        "title": "Regular Expressions Suck at Preventing XSS",
        "excerpt":"Depending on who you listen to, XSS is now the top computer security vulnerability, having passed the venerable SQL injection in 2007. If you're a developer, especially a web developer, and you DON'T know what XSS is, stop reading right now and start Googling. Cross-site scripting (XSS) is a type...","categories": [],
        "tags": ["xss","security"],
        "url": "/blog/2009/02/27/regular-expressions-suck-at-preventing-xss.html",
        "teaser": null
      },{
        "title": "UK county codes",
        "excerpt":"If you have ever developed an application where users can enter US addresses, then you have probably implemented a state control. Maybe it was just a text field, or maybe it was a drop down list with 50 options. If you're a really smart cookie, it could have 57 to...","categories": [],
        "tags": [],
        "url": "/blog/2009/03/03/uk-county-codes.html",
        "teaser": null
      },{
        "title": "MS SMTP Pickup Doesn't Strip BCC",
        "excerpt":"...when a message containing a \"Bcc:\" field is prepared to be sent, the \"Bcc:\" line is removed even though all of the recipients (including those specified in the \"Bcc:\" field) are sent a copy of the message. [RFC2822] When I first started at my current job in 2003, the email...","categories": [],
        "tags": [],
        "url": "/blog/2009/03/13/ms-smtp-pickup-doesnt-strip-bcc.html",
        "teaser": null
      },{
        "title": "My two weeks in QA",
        "excerpt":"We all tend to tie our self-esteem strongly to the quality of the product we produce - not the quantity of the product, but the quality. [Lister, DeMarco: \"Peopleware\"] For the last two weeks (equal to one sprint), I have been working in a QA role. Ever since laying off...","categories": [],
        "tags": ["qa"],
        "url": "/blog/2009/03/20/my-two-weeks-in-qa.html",
        "teaser": null
      },{
        "title": "OpenOffice Draw vs Visio",
        "excerpt":"In an effort to get off of Microsoft Office, I have been trying to use alternatives instead. OpenOffice Writer and Calc have been very competent substitutes for Word and Excel. But, every once in a while, I need to make some diagrams for a feature spec. Would OpenOffice Draw work...","categories": [],
        "tags": [],
        "url": "/blog/2009/03/26/openoffice-draw-vs-visio.html",
        "teaser": null
      },{
        "title": "Ant java.library.path",
        "excerpt":"Maybe this will save someone an hour... to set java.library.path from inside an ANT Java task, you need to set the parameter fork=\"true\". &lt;target name=\"run\" depends=\"deploy\"&gt; &lt;java dir=\"${jlan}\" classname=\"org.alfresco.jlan.app.JLANServer\" fork=\"true\"&gt; &lt;arg value=\"${jlan}/jlanConfig.xml\"/&gt; &lt;sysproperty key=\"java.library.path\" path=\"${jlan}/jni\"/&gt; &lt;classpath&gt; &lt;filelist dir=\"${jlan}\"&gt; &lt;file name=\"jars/alfresco-jlan.jar\" /&gt; &lt;file name=\"libs/cryptix-jce-provider.jar\" /&gt; &lt;file name=\"service/wrapper.jar\" /&gt; &lt;file name=\"libs/bullhorn-virtualfs-0.1.jar\" /&gt;...","categories": [],
        "tags": ["java","ant"],
        "url": "/blog/2009/04/01/ant-javalibrarypath.html",
        "teaser": null
      },{
        "title": "Java replaceAll() File.separator",
        "excerpt":"When dealing with file paths, it's not uncommon to construct a path where the file separators are missing or duplicated. Ie, instead of c:\\temp\\test.txt, you end up with c:\\temp\\\\test.txt, etc. The real solution I suppose is to be meticulous about constructing the path, but in this case I found myself...","categories": [],
        "tags": ["java","regex"],
        "url": "/blog/2009/04/10/java-replaceall-fileseparator.html",
        "teaser": null
      },{
        "title": "Mixing and matching implicit and explicit JOINs",
        "excerpt":"Back in the caveman days, there was only one way to JOIN tables in a SQL query. Now, we refer to this as \"table list\", \"theta\" or simply \"implicit\" JOIN syntax: SELECT e1.name, e2.name, e1Manager.name FROM Employee e1, Employee e2, Employee e1Manager WHERE e1.managerEmployeeID = e1Manager.employeeID There are a few...","categories": [],
        "tags": ["sql"],
        "url": "/blog/2009/04/17/mixing-and-matching-implicit-and-explicit-joins.html",
        "teaser": null
      },{
        "title": "The case of the OOM Killer",
        "excerpt":"An aircraft company discovered that it was cheaper to fly its planes with less fuel on board. The planes would be lighter and use less fuel and money was saved. On rare occasions however the amount of fuel was insufficient, and the plane would crash. This problem was solved by...","categories": [],
        "tags": ["java"],
        "url": "/blog/2009/04/23/the-case-of-the-oom-killer.html",
        "teaser": null
      },{
        "title": "Greasemonkey + Blogger HTML encode selection",
        "excerpt":"Quick hit this week. Here is a Greasemonkey script I've been using for a few months. It adds a new button to your Blogger post editor which allows you to HTML encoded any selected text. This is useful if you include a lot of code examples in your blog. Download....","categories": [],
        "tags": [],
        "url": "/blog/2009/05/01/greasemonkey-blogger-html-encode-selection.html",
        "teaser": null
      },{
        "title": "Ruby on Rails - First Impressions",
        "excerpt":"I've started playing around with Ruby on Rails. Maybe it was my recent experience with Python, which has a similar syntax to Ruby. Perhaps it's because I keep hearing how you can get a fully working site up in just minutes. Maybe I'm just bored. Going into it, I had...","categories": [],
        "tags": [],
        "url": "/blog/2009/05/08/ruby-on-rails-first-impressions.html",
        "teaser": null
      },{
        "title": "NetBIOS Naming Service + lmhosts",
        "excerpt":"Recently, I have been working on a project using Alfresco JLAN to simulate a Windows CIFS (aka Samba) share in Java. Not being able to (easily) replace the entire Windows file sharing stack, it instead advertises its virtual host name via a Win32 API call to the NetBIOS Naming Service....","categories": [],
        "tags": [],
        "url": "/blog/2009/05/13/netbios-naming-service-lmhosts.html",
        "teaser": null
      },{
        "title": "ColdFusion whitespace",
        "excerpt":"Quick hit today. Somehow I went six years working with ColdFusion without knowing that functions implicitly output anything inside them, including whitespace! For example, say you have the following function in english.cfc: &lt;CFFUNCTION name=\"getHint\"&gt; &lt;CFRETURN \"Available only in Professional Edition.\"&gt; &lt;/CFFUNCTION&gt; And you call it from a template like so:...","categories": [],
        "tags": [],
        "url": "/blog/2009/05/26/coldfusion-whitespace.html",
        "teaser": null
      },{
        "title": "Hibernate Search - Query API helper",
        "excerpt":"If you are programmatically generating a query string and then parsing it with the query parser then you should seriously consider building your queries directly with the query API. In other words, the query parser is designed for human-entered text, not for program-generated text. - Lucene Documentation In Hibernate Search,...","categories": [],
        "tags": ["hibernate","lucene","hibernate-search"],
        "url": "/blog/2009/06/05/hibernate-search-query-api-helper.html",
        "teaser": null
      },{
        "title": "Hibernate Search - Shard Query Optimization",
        "excerpt":"Hibernate Search shards allow you to break down your index data into separate Lucene directories. Typically, indexes would be broken down either into N equals chunks (using a hashing algorithm), or by some logical criteria (customer, location, etc). The former was done for performance; smaller indexes mean faster indexing. The...","categories": [],
        "tags": ["hibernate","lucene","hibernate-search"],
        "url": "/blog/2009/06/12/hibernate-search-shard-query-optimization.html",
        "teaser": null
      },{
        "title": "Easier Development with Unobtrusive JavaScript, Part II",
        "excerpt":"Last time, I wrote about why you might want to make your Ajax heavy pages functional with javascript disabled. However, I dodged the issue of how to do that without writing two versions of your app. Personally, my aversion to repeating myself would likely overcome my desire provide an HTML...","categories": [],
        "tags": [],
        "url": "/blog/2009/06/19/easier-development-with-unobtrusive-javascript-part-ii.html",
        "teaser": null
      },{
        "title": "Easier Development with Unobtrusive JavaScript",
        "excerpt":"Unobtrusive JavaScript is a poorly defined umbrella term. It's generally agreed to encompass: Separating behavior from content, much like separating style from content. Avoiding browser specific javascript bugs. Supporting browsers without javascript. My definition is a little more simple. Make your pages functional in plain HTML. Now, there is a...","categories": [],
        "tags": [],
        "url": "/blog/2009/06/19/easier-development-with-unobtrusive-javascript.html",
        "teaser": null
      },{
        "title": "Stupid vim tricks",
        "excerpt":"Quick hit today. Ever open a file in vim, only to realize that you need sudo to write to it? Usually, you have to exit out of vim, open vi as sudo, and make your changes again. No more! :w !sudo tee % This command is writing the file (:w)...","categories": [],
        "tags": ["vim"],
        "url": "/blog/2009/07/02/stupid-vim-tricks.html",
        "teaser": null
      },{
        "title": "Converting a legacy ColdFusion app from Windows to Linux&#58; Part I",
        "excerpt":"Having moved to a Linux desktop at work, I'm in the process of migrating my development environment to the extent possible. Eclipse + JBOSS were a slam dunk. SQL Server is a definite no-go. I'm having good luck using VirtualBox for that. ColdFusion seems promising, but will entail some work....","categories": [],
        "tags": [],
        "url": "/blog/2009/07/10/converting-a-legacy-coldfusion-app-from-windows-to-linux-part-i.html",
        "teaser": null
      },{
        "title": "Converting a legacy ColdFusion app from Windows to Linux&#58; Part II",
        "excerpt":"For now, I've just decided to run ColdFusion under WINE. While I want to run it natively eventually, I don't want to undertake updating the code to use the correct case-sensitive file names. I'm sure my QA manager doesn't want me to undertake it just now, either. Actually running it...","categories": [],
        "tags": [],
        "url": "/blog/2009/07/17/converting-a-legacy-coldfusion-app-from-windows-to-linux-part-ii.html",
        "teaser": null
      },{
        "title": "Backing Up VirtualBox",
        "excerpt":"I've been playing with VirtualBox, a great open-source virtual machine. Mostly I've been deploying Windows guests on a Linux host. Right now I have two VMs; one for IE8 testing, and one to run MS SQL Server. I have noticed that VirtualBox can corrupt a VM image if it gets...","categories": [],
        "tags": [],
        "url": "/blog/2009/07/24/backing-up-virtualbox.html",
        "teaser": null
      },{
        "title": "CFHTMLHEAD and CFCONTENT reset",
        "excerpt":"I ran into some trouble this week attaching my JSON Exception Handling to a new ColdFusion feature. Specifically, there was content from that page that survived the CFCONTENT reset tag. Instead of valid JSON, my page was outputting the following: &lt;title&gt;Notes&lt;/title&gt; { \"error\": \"blah\", ... } I tracked down the...","categories": [],
        "tags": ["coldfusion"],
        "url": "/blog/2009/07/31/cfhtmlhead-and-cfcontent-reset.html",
        "teaser": null
      },{
        "title": "CFEclipse StackOverflowError (Editor could not be initialized)",
        "excerpt":"Even since I moved from Windows to Linux, I have been experiencing an exception trying to edit certain CFMs in CFEclipse. eclipse.buildId=I20090611-1540 java.version=1.6.0_14 java.vendor=Sun Microsystems Inc. BootLoader constants: OS=linux, ARCH=x86, WS=gtk, NL=en_US Framework arguments: -product org.eclipse.epp.package.java.product Command-line arguments: -os linux -ws gtk -arch x86 -product org.eclipse.epp.package.java.product !ENTRY org.eclipse.ui 4 0...","categories": [],
        "tags": [],
        "url": "/blog/2009/08/03/cfeclipse-stackoverflowerror-editor-could-not-be-initialized.html",
        "teaser": null
      },{
        "title": "Rotate just one monitor with Ubuntu/Nvidia",
        "excerpt":"I took some time this week to figure out how to rotate just my Dell 2005FPW in an Ubuntu dual-monitor setup. The graphics card is an Nvidia GeForce 6200 LE, and I'm v180.44 of the proprietary binary drivers. This gives you an idea of the setup I was going for,...","categories": [],
        "tags": ["xorg","ubuntu"],
        "url": "/blog/2009/08/07/rotate-just-one-monitor-with-ubuntunvidia.html",
        "teaser": null
      },{
        "title": "Subversion mergeinfo",
        "excerpt":"Subversion 1.5 added a feature called mergeinfo, which is just a property that can be set on any resource that tracks merges made to the resource. When you merge and then commit, you upload not only code changes, but meta-data attached to any number of other files that you did...","categories": [],
        "tags": [],
        "url": "/blog/2009/08/10/subversion-mergeinfo.html",
        "teaser": null
      },{
        "title": "Setting the title on a Gnome terminal",
        "excerpt":" I usually have several terminals open running various daemon processes in tabs. To make the tabs more identifiable, you can set the tab title from your BASH script as follows:     #!/bin/bash printf '\\033]2;%s\\007' \"You Title Goes Here\" #your daemon command goes here    ","categories": [],
        "tags": [],
        "url": "/blog/2009/08/21/setting-the-title-on-a-gnome-terminal.html",
        "teaser": null
      },{
        "title": "Mount a Windows file share in Linux",
        "excerpt":"Here are the basic steps to mount a Windows share under Linux: Create a file somewhere, perhaps in your home directory, to store the credentials. I called mine .smbcredentials Edit the new file and insert the following two lines: username=MyUsername@MyDomain password=MyPassword Make root the file owner sudo chown root .smbcredentials...","categories": [],
        "tags": ["ubuntu","smb"],
        "url": "/blog/2009/08/28/mount-a-windows-file-share-in-linux.html",
        "teaser": null
      },{
        "title": "Ubuntu Firefox/Chrome handle svn protocol",
        "excerpt":"If you're using using a web-based bug tracking system (in my case, JIRA), or getting Subversion check-in emails in a web-based client, you may have seen URIs like this: svn://sourcecontrol:3690/MAINLINE/release_1.3/java/com/bitkickers/somefile.java#26981 This is basically a link to your Subversion server, a particular file and a particular revision (26981). Wouldn't it be...","categories": [],
        "tags": ["firefox","ubuntu","svn"],
        "url": "/blog/2009/09/02/ubuntu-firefoxchrome-handle-svn-protocol.html",
        "teaser": null
      },{
        "title": "Numeric Range Searches in Lucene",
        "excerpt":"One of the reasons Lucene is awesomely fast is that it treats all data as strings. This is a perfect optimisation for most searching tasks. However, it does mean that other data types need to be converted to strings before they are indexed or searched for. When dealing with range...","categories": [],
        "tags": ["lucene"],
        "url": "/blog/2009/09/11/numeric-range-searches-in-lucene.html",
        "teaser": null
      },{
        "title": "Name resolution failure caching in SMB",
        "excerpt":"If you have a production file server failing, you have serious problems. Client requests are failing. But they may not be failing quickly. If your product is a website, and the web-servers make a lot of file requests, one of the fallouts is that requests will start to pile up....","categories": [],
        "tags": ["netbios"],
        "url": "/blog/2009/09/18/name-resolution-failure-caching-in-smb.html",
        "teaser": null
      },{
        "title": "Ruby on Rails&#58; anyType, soap4r and handsoap to the rescue",
        "excerpt":"Perl makes the easy things easy and the hard things possible. - Larry Wall This sentiment has been applied to many different languages, frameworks and systems. It not surprising; it's the underlying goal of most software. Ruby on Rails is a little different. It makes the easy things extremely easy....","categories": [],
        "tags": ["rails","soap"],
        "url": "/blog/2009/09/25/ruby-on-rails-anytype-soap4r-and-handsoap-to-the-rescue.html",
        "teaser": null
      },{
        "title": "Python/Django&#58; First Impressions",
        "excerpt":"I've started a brand-new codebase at work. With new code comes the possibility of a new language/platorm. What we really needed was speed; we don't know exactly what we want to build; we are going to have to iterate over many ideas quickly. We had a long list of requirements....","categories": [],
        "tags": ["django","python"],
        "url": "/blog/2009/10/02/pythondjango-first-impressions.html",
        "teaser": null
      },{
        "title": "Django - Externalize settings.py",
        "excerpt":"In Django, settings.py is where you store configuration such as database connection strings, directory paths for static and media resources, as well as caching settings. Obviously, these settings will be different between various developers, not to mention qa and production environments. A typical solution is to branch settings.py, and then...","categories": [],
        "tags": ["django","python"],
        "url": "/blog/2009/10/09/django-externalize-settingspy.html",
        "teaser": null
      },{
        "title": "Unit testing Django with doctest",
        "excerpt":"There are two main ways to write tests in Django; doctests and unit tests. Units tests will be familiar to you if you're coming from Java. You basically write new Python code to setup and execute your tests. Doctests are a combination of documentation and unit testing. You actually write...","categories": [],
        "tags": ["django","python"],
        "url": "/blog/2009/10/14/unit-testing-django-with-doctest.html",
        "teaser": null
      },{
        "title": "Quick and dirty Ajax on any FORM",
        "excerpt":"I have been trying to write as much unobtrusive javascript as possibly lately. Mainly this means getting everything working without any javascript in the picture to start, and then layering in dynamic elements without breaking anything for javascript-disabled users. This week, I had a pretty simply page with a single...","categories": [],
        "tags": ["javascript","jquery","ajax"],
        "url": "/blog/2009/10/23/quick-and-dirty-ajax-on-any-form.html",
        "teaser": null
      },{
        "title": "Easier Development with Unobtrusive JavaScript, Part III",
        "excerpt":"Part I defined what I mean by Unobtrusive JavaScript. Part II showed some specific examples. Now I want to talk a little more about why you might want to do all this. We have already discussed how a small subset of users don't have JavaScript, or don't have it enabled....","categories": [],
        "tags": ["javascript"],
        "url": "/blog/2009/10/29/easier-development-with-unobtrusive-javascript-part-iii.html",
        "teaser": null
      },{
        "title": "YSlow 80/20",
        "excerpt":"I spent some time this week optimising a new site, specifically looking at some of the YSlow recommendations. For a smaller, low traffic site, some of the recommendations are over-kill. I'm not paying for a CDN. But I did find some of the tidbits valuable, specifically around what Apache does...","categories": [],
        "tags": [],
        "url": "/blog/2009/11/06/yslow-8020.html",
        "teaser": null
      },{
        "title": "Changing image links in CSS to use a static domain with Django compress",
        "excerpt":"Django compress is a great little utility for hitting some of the YSlow website performance high notes. It can combine and minify css/js files on the fly, when settings.DEBUG is set to False. This allows you to keep the files separate in development for debugging. I also wanted to use...","categories": [],
        "tags": [],
        "url": "/blog/2009/11/20/changing-image-links-in-css-to-use-a-static-domain-with-django-compress.html",
        "teaser": null
      },{
        "title": "Letting ssh remember your passwords",
        "excerpt":"If you're like me, you ssh into the same small set of machines over and over. Maybe sometimes you run commands that sit on top of ssh, like scp for file copies. Wouldn't it be nice if you could have ssh remember your passwords? This is especially useful for automation....","categories": [],
        "tags": ["ubuntu"],
        "url": "/blog/2009/11/25/letting-ssh-remember-your-passwords.html",
        "teaser": null
      },{
        "title": "Allowing periods (and other characters) in Django's user model",
        "excerpt":"By default, Django's authentication middleware only allows user names with 30 characters or fewer, containing only letters, digits and underscores. What if you want to allow other user names? It's actually a very small change to admin.py: username_regex_field = forms.RegexField ( label = \"Username\", max_length = 30, regex = r\"^[\\w'\\.\\-@]+$\",...","categories": [],
        "tags": ["django"],
        "url": "/blog/2009/12/04/allowing-periods-and-other-characters-in-djangos-user-model.html",
        "teaser": null
      },{
        "title": "Protocol Relative URLs",
        "excerpt":"If you follow YSlow rules, then you are likely separating HTTP requests for static resources (images, CSS, javascript) onto a second domain. Maybe you even have a nice script to translate your includes when you deploy to production. Then one day, you enable your site for SSL. Most likely, your...","categories": [],
        "tags": [],
        "url": "/blog/2009/12/08/protocol-relative-urls.html",
        "teaser": null
      },{
        "title": "Python smtplib long header folding using tabs instead of spaces",
        "excerpt":"Unless you have done a lot of work with generating and parsing emails, you are probably not intimately familiar with the details of the MIME format. Here is an example of a MIME encoded email: From: user1@example.com To: user2@example.com Subject: Christmas party! Mime-Version: 1.0 Content-Type: multipart/mixed; boundary=\"----=_Part_20502_1870283373.1261059406023\" Date: 17 Dec...","categories": [],
        "tags": ["email","python"],
        "url": "/blog/2009/12/15/python-smtplib-long-header-folding-using-tabs-instead-of-spaces.html",
        "teaser": null
      },{
        "title": "Finding open VNC hosts with nmap",
        "excerpt":"Say you have a machine using DHCP that you only boot up once in a while. It's headless, so you need to remote into it. How can you find out what IP it has? Here is quick command to scan for open VNC ports on the 172.27.1.* sub-net. nmap -p...","categories": [],
        "tags": [],
        "url": "/blog/2009/12/29/finding-open-vnc-hosts-with-nmap.html",
        "teaser": null
      },{
        "title": "Django forms date field format",
        "excerpt":" Django defaults dates in forms to the format \"2010-01-15\". But changing the default format is fairly straight-forward, though there appears to be some confusion about how.     class MyForm(Form):          # the default format is %Y-%m-%d     date_available = forms.DateField(         widget=forms.widgets.DateInput(format=\"%m/%d/%Y\"))  ","categories": [],
        "tags": ["django"],
        "url": "/blog/2010/01/12/django-forms-date-field-format.html",
        "teaser": null
      },{
        "title": "MySQL drop column if exists",
        "excerpt":"Idempotence describes the property of operations in mathematics and computer science that means that multiple applications of the operation do not change the result. - Wikipedia When updating a database schema, it's very useful to make your SQL scripts idempotent. I.e. you should be able to run the script more...","categories": [],
        "tags": ["MySQL"],
        "url": "/blog/2010/01/15/mysql-drop-column-if-exists.html",
        "teaser": null
      },{
        "title": "scripting multiple gnome terminal tabs",
        "excerpt":"Sometimes it feels like I'm looking at logs all day. Certainly there are times when this is more true than others. If you find yourself in one of those times, you might benefit from being able to call all your typical log files up at once. On my system, I...","categories": [],
        "tags": [],
        "url": "/blog/2010/01/26/scripting-multiple-gnome-terminal-tabs.html",
        "teaser": null
      },{
        "title": "Too cute&#58; Django schema migration tools",
        "excerpt":"Like Ruby on Rails, Django uses a model API to abstract the database layer. A command-line script creates schema for new object definitions. Unlike Ruby on Rails, Django did not ship with a way to modify existing schema as your models change. Many projects have sprung up trying to fill...","categories": [],
        "tags": [],
        "url": "/blog/2010/02/05/too-cute-django-schema-migration-tools.html",
        "teaser": null
      },{
        "title": "duplicate values with jQuery.cookies (set the path!)",
        "excerpt":"A program should follow the \"Law of Least Astonishment\". What is this law? It is simply that the program should always respond to the user in the way that astonishes him least. - Geoffrey James, The Tao of Programming I recently ran into an astonishing behaviour in an API I...","categories": [],
        "tags": [],
        "url": "/blog/2010/02/10/duplicate-values-with-jquerycookies-set-the-path.html",
        "teaser": null
      },{
        "title": "useful decorators for Django views",
        "excerpt":"Python implements a light version of aspect oriented programming via decorators. I find myself using them often, specifically for Django views. Here are a few of my favourites. This first one enforces that requests coming into the view are coming from localhost. This can be useful if you are creating...","categories": [],
        "tags": [],
        "url": "/blog/2010/02/26/useful-decorators-for-django-views.html",
        "teaser": null
      },{
        "title": "Apache fix for IE \"webpage has expired\" on back button",
        "excerpt":"When you refresh a webpage that was the result of a HTTP POST, your browser asks you if you want to reload. The reason for this dialog is to stop the user from inadvertently submitting the same blog post/email message/payment details multiple times. That behaviour is standardised across all browsers....","categories": [],
        "tags": [],
        "url": "/blog/2010/03/04/apache-fix-for-ie-webpage-has-expired-on-back-button.html",
        "teaser": null
      },{
        "title": "How to not get caught in spam filters",
        "excerpt":"Reliably sending email without getting caught in spam filters is a full-time job, for someone. Surely not for an end-user, but for every end-user email, there is an administrator somewhere who has to deal with daily occurrences of some user message not getting through because it got stuck in a...","categories": [],
        "tags": ["email","spam","postfix"],
        "url": "/blog/2010/03/19/how-to-not-get-caught-in-spam-filters.html",
        "teaser": null
      },{
        "title": "Java hack to deal with Windows file paths in Linux",
        "excerpt":"Say you have a large legacy ColdFusion app on top of Java that runs on Windows. File access is done both via java.io.File and by CFFILE (which in turn also uses java.io.File), but not centralised in any way into a single file access library. Further, say you have file paths...","categories": [],
        "tags": ["java"],
        "url": "/blog/2010/03/24/java-hack-to-deal-with-windows-file-paths-in-linux.html",
        "teaser": null
      },{
        "title": "Ubuntu keyboard shortcut cheatsheet",
        "excerpt":"Everyone assumes that using keyboard shortcuts is more efficient than using the mouse. But by how much? One 2005 study found that keyboard shortcuts are approximately twice as fast. So why don't more people use them? It's apparently not an experience issue. A separate study found that keyboard shortcut usage...","categories": [],
        "tags": ["ubuntu"],
        "url": "/blog/2010/04/02/ubuntu-keyboard-shortcut-cheatsheet.html",
        "teaser": null
      },{
        "title": "click on a link (follow) via jQuery/JavaScript",
        "excerpt":"You might reasonably assume that it would be possible to fire a click event on an \"A\" element (link) via JavaScript, at which point the browser would fire any click event handlers currently attached, or otherwise just follow the link. But you would be wrong, at least in the case...","categories": [],
        "tags": ["javascript","jquery"],
        "url": "/blog/2010/04/09/click-on-a-link-follow-via-jqueryjavascript.html",
        "teaser": null
      },{
        "title": "Slicehost&#58; Six month review",
        "excerpt":"Six months ago, I opened an account with Slicehost for a work project. They provide a VPS service, which is essentially just a virtual machine in the cloud. In our case, we are hosting a website with a traditional LAMP stack (but where the P is Python). We decided on...","categories": [],
        "tags": [],
        "url": "/blog/2010/04/23/slicehost-six-month-review.html",
        "teaser": null
      },{
        "title": "Django ManyToMany error&#58; \"Cannot resolve keyword XXX into a field\"",
        "excerpt":"This week I was doing some refactoring, and started getting the following exception in Django's admin site. This was under Django 1.1.1, and Python 2.6.4. Traceback: File \"/usr/lib/pymodules/python2.6/django/core/handlers/base.py\" in get_response 92. response = callback(request, *callback_args, **callback_kwargs) File \"/usr/lib/pymodules/python2.6/django/contrib/admin/sites.py\" in root 490. return self.model_page(request, *url.split('/', 2)) File \"/usr/lib/pymodules/python2.6/django/views/decorators/cache.py\" in _wrapped_view_func 44....","categories": [],
        "tags": ["django","python"],
        "url": "/blog/2010/04/30/django-manytomany-error-cannot-resolve-keyword-xxx-into-a-field.html",
        "teaser": null
      },{
        "title": "automatic image resize in Django for thumbnails",
        "excerpt":"Want to resize images uploaded to Django on the fly? It's actually very simple. This solution requires the Python Imaging Library (PIL). import Image class Company(models.Model): logo = models.ImageField(upload_to=\"static/images/logos\") def save(self, force_insert=False, force_update=False): super(Company, self).save(force_insert, force_update) if self.id is not None: previous = Company.objects.get(id=self.id) if self.logo and self.logo != previous.logo:...","categories": [],
        "tags": [],
        "url": "/blog/2010/05/07/automatic-image-resize-in-django-for-thumbnails.html",
        "teaser": null
      },{
        "title": "Reuse Django's filter_horizontal admin widget",
        "excerpt":"The HTML select multiple control sucks mightily. Though it's a standard form widget, regular users seem to have usability problems with it. Specifically, it's easy to forget to control-click to add a new item, and you end up removing anything previously added. Also, it's hard to find options in large...","categories": [],
        "tags": [],
        "url": "/blog/2010/05/14/reuse-djangos-filter_horizontal-admin-widget.html",
        "teaser": null
      },{
        "title": "Django&#58; ManyToManyField on ModelForm as checkbox widget",
        "excerpt":"By default, Django will use a mutli-select widget for rendering a ManyToManyField on a ModelForm. Switching it out for checkboxes is simple. from django.db import models from django.forms.models import ModelForm from django.forms.widgets import CheckboxSelectMultiple class Company(models.Model): industries = models.ManyToManyField(Industry, blank=True, null=True) class CompanyForm(ModelForm): class Meta: model = Company fields =...","categories": [],
        "tags": ["django"],
        "url": "/blog/2010/05/20/django-manytomanyfield-on-modelform-as-checkbox-widget.html",
        "teaser": null
      },{
        "title": "Parsing invalid xml with Beautiful Soup",
        "excerpt":"Sometimes, bad xml happens to good people. In my case, I was getting a text stream back from a web-service call that proported to be xml, but was actually not well-formed. It had ampersands inside a tag. &lt;?xml version=\"1.0\" encoding='UTF-8'?&gt; &lt;resume&gt; &lt;title&gt;Developer &amp; Manager&lt;/title&gt; ... &lt;/resume&gt; This lead to the...","categories": [],
        "tags": ["xml","python","beautifulsoup"],
        "url": "/blog/2010/06/04/parsing-invalid-xml-with-beautiful-soup.html",
        "teaser": null
      },{
        "title": "Add a button to Django admin to login as a user (without the password)",
        "excerpt":"Django correctly stores user passwords as md5 hashes by default. This is great for security; there is zero chance that a password could be exposed via flaw in the site, attack, disgruntled employee, whatever. But what if you had a use case where you wanted to login as user without...","categories": [],
        "tags": [],
        "url": "/blog/2010/06/09/add-a-button-to-django-admin-to-login-as-a-user-without-the-password.html",
        "teaser": null
      },{
        "title": "better unobstrusive javascript element hiding",
        "excerpt":"Many web pages have elements that are only displayed at the users request. Common examples are Facebook's chat tab, Gmail's \"more\" folders link and Yahoo's dashboard toggles. Typically, these elements are already loaded onto the page, and simply hidden by style sheets. Then when you click on a certain control,...","categories": [],
        "tags": [],
        "url": "/blog/2010/06/22/better-unobstrusive-javascript-element-hiding.html",
        "teaser": null
      },{
        "title": "Django/Celery Quickstart (or, how I learned to stop using cron and love celery)",
        "excerpt":"Websites often need tasks that run periodically, behind the scenes. Examples include sending email reminders, aggregating denormalized data and permanently deleting archived records. Very often the simplest solution is to setup a cron job to hit a URL on the site that performs the task. Cron has the advantage of...","categories": [],
        "tags": ["django","celery"],
        "url": "/blog/2010/07/09/djangocelery-quickstart-or-how-i-learned-to-stop-using-cron-and-love-celery.html",
        "teaser": null
      },{
        "title": "Free search string tokenization in Python",
        "excerpt":"Want to do some simple lex parsing in Python? Using shlex, you may be able to get something that meets your requirements almost for free. Here is an example I used recently to parse a search string. The requirements were that tokens could be separated by spaces or commas, and...","categories": [],
        "tags": ["python"],
        "url": "/blog/2010/07/16/free-search-string-tokenization-in-python.html",
        "teaser": null
      },{
        "title": "Django zip files (create dynamic in-memory archives with Python's zipfile)",
        "excerpt":"Usually, Django should not be used to serve static files. The reasoning here is that standard Web servers, such as Apache, lighttpd and Cherokee, are much more fine-tuned at serving static files than a Web application framework. - Django documentation However, dynamic files are a different story. Say you want...","categories": [],
        "tags": [],
        "url": "/blog/2010/07/23/django-zip-files-create-dynamic-in-memory-archives-with-pythons-zipfile.html",
        "teaser": null
      },{
        "title": "Blank Canvas brings @require support to Chrome",
        "excerpt":" Quick shout-out to the Blank Canvas Script Handler, a relatively unknown Google Chrome extension that brings @require support to userscripts in Chrome.     That just leaves NoScript, and I might actually switch to Chrome full-time.   ","categories": [],
        "tags": ["greasemonkey","userscripts","chrome"],
        "url": "/blog/2010/07/30/blank-canvas-brings-require-support-to-chrome.html",
        "teaser": null
      },{
        "title": "Redirect console output to a Django HttpResponse",
        "excerpt":"Say you have some Python code that prints to the console, and you want to re-use that code in a Django view, but output the print statements as HTML in the HttpResponse. Perhaps, like me, you have a batch job that you're calling from ./manage.py script that you would also...","categories": [],
        "tags": ["django","python"],
        "url": "/blog/2010/08/06/redirect-console-output-to-a-django-httpresponse.html",
        "teaser": null
      },{
        "title": "Chained Select Progressive Enhancement",
        "excerpt":"Perhaps you have encountered a chained select control in your travels. The canonical example would be on Monster or CareerBuilder, picking your area of expertise. Maybe you first select \"Technology\", then the second menu contains only technology skills, and you select \"Web Developer\", etc. It most useful when there are...","categories": [],
        "tags": ["javascript","unobtrusive"],
        "url": "/blog/2010/08/18/chained-select-progressive-enhancement.html",
        "teaser": null
      },{
        "title": "Django HTML5 input placeholders",
        "excerpt":"HTML5 has a bunch of nifty progressive enhancements to forms, one of which is placeholder text. Here is an example, along with the required code. &lt;form style=\"float: right; margin: 1.75em;\"&gt; &lt;input size=\"38\" placeholder=\"Your browser supports placeholder text\"&gt; &lt;/form&gt; Placeholder text is displayed inside the input field as long as the...","categories": [],
        "tags": ["forms","django","html5"],
        "url": "/blog/2010/09/03/django-html5-input-placeholders.html",
        "teaser": null
      },{
        "title": "Django log form ValidationErrors",
        "excerpt":"Forms are the primary way your users communicate with your website. Hopefully, the users are always entering data in the correct format, and the form always accepts their submissions. In the real world, users often encounter form validation errors. In some ways, this is a good thing. At least you're...","categories": [],
        "tags": ["forms","django"],
        "url": "/blog/2010/09/10/django-log-form-validationerrors.html",
        "teaser": null
      },{
        "title": "Show username in Django 500 error emails",
        "excerpt":"By default, Django will send an email to the site admins when a 500 error occurs. These emails contain all kinds of great information such as stacktrace, HTTP headers and cookie data. Unfortunately, it does not show which user the error occurred for. This can make errors harder than necessary...","categories": [],
        "tags": ["django"],
        "url": "/blog/2010/09/17/show-username-in-django-500-error-emails.html",
        "teaser": null
      },{
        "title": "In-context FORM help using jQuery",
        "excerpt":"The Apple store checkout form redesign introduced me to the concept of in-context error messages. Basically, the new context bubble element is being used to tell the user more about this field, and potentially answer questions the user may have about how to fill out the field correctly. I wanted...","categories": [],
        "tags": ["forms","jquery","ui"],
        "url": "/blog/2010/09/24/in-context-form-help-using-jquery.html",
        "teaser": null
      },{
        "title": "Check if a block is defined in Django",
        "excerpt":"Very often when styling a webpage, you want to put content in a box. For example, say you have a standard box for contextual help content. &lt;div class=\"help\"&gt; &lt;!--- actual html contents here ---&gt; &lt;/div&gt; &lt;style&gt; .help { padding: 1em; border: 1px dashed black; } &lt;/style&gt; A sensible way to...","categories": [],
        "tags": ["django"],
        "url": "/blog/2010/10/01/check-if-a-block-is-defined-in-django.html",
        "teaser": null
      },{
        "title": "Pulling Google Analytics data into Django",
        "excerpt":"Website analytics tools are expected to do a lot. They need to allow you generate reports on metrics like sessions, pages/time per session, bounce rates, referrals... etc. Not only that, but they need to be able to segment those reports by logged in versus anonymous users, china versus the US,...","categories": [],
        "tags": ["javascript","django","gdata","analytics"],
        "url": "/blog/2010/10/08/pulling-google-analytics-data-into-django.html",
        "teaser": null
      },{
        "title": "per subdomain robots.txt in Apache",
        "excerpt":"When I develop a website, I tend to go subdomain crazy. If the site is crazy.net, I probably configure www.crazy.net, admin.crazy.net, static.crazy.net, youare.crazy.net, etc. Some allow concurrent logins as different users such as yourself, an admin account and maybe as a particular live user. Others are to keep your static/media...","categories": [],
        "tags": ["apache"],
        "url": "/blog/2010/10/15/per-subdomain-robotstxt-in-apache.html",
        "teaser": null
      },{
        "title": "Django&#58; uniform image resizing",
        "excerpt":"Sometimes, you want all the thumbnails you're creating to be the same dimensions. For example, your layout may require a certain width so that all the items line up in a grid. In my case, I wanted them to be exactly 96x96 pixels. The tool of choice in Django is...","categories": [],
        "tags": ["django"],
        "url": "/blog/2010/10/29/django-uniform-image-resizing.html",
        "teaser": null
      },{
        "title": "Preventing duplicate form submissions with jQuery",
        "excerpt":"A common problem for a new site to have is for their users to occasionally submit the same form two or more times. For example, maybe they were adding a new record, and were not sure if the application registered their submit button click, so they try again. This problem...","categories": [],
        "tags": ["jquery"],
        "url": "/blog/2010/11/05/preventing-duplicate-form-submissions-with-jquery.html",
        "teaser": null
      },{
        "title": "Django {% url %} tag; it can do both absolute/relative urls!",
        "excerpt":"Most often, when you're using Django's url tag, you want relative links, not absolute links. Examples of relative links: /user/103 /user/103/edit Examples of absolute links: http://example.com/user/103 https://example.com/user/103/edit With relative links, you preserve the domain same and protocol (HTTP or HTTPS) of the current user session, with zero work on your...","categories": [],
        "tags": [],
        "url": "/blog/2010/11/19/django-url-tag-it-can-do-both-absoluterelative-urls.html",
        "teaser": null
      },{
        "title": "Render styled HTML emails consistently with Litmus",
        "excerpt":"Getting your HTML email to look the same on all mail clients is hard. Most clients only support a small subset of HTML. Outlook 2010 actually uses Word to display HTML, and we know how much that sucks. But it's more endemic than that; there are simply no standards to...","categories": [],
        "tags": ["email","litmus"],
        "url": "/blog/2010/12/03/render-styled-html-emails-consistently-with-litmus.html",
        "teaser": null
      },{
        "title": "Per user timezones in Django",
        "excerpt":"A common requirement for sites that deal with dates (most of them), is to display date and time values in the individual user's timezones. Luckily, there are a few good ready-made solutions for Python/Django. They don't solve the problem completely seamlessly. You will still need to decide when to invoke...","categories": [],
        "tags": ["timezone","django"],
        "url": "/blog/2010/12/10/per-user-timezones-in-django.html",
        "teaser": null
      },{
        "title": "Python&#58; Convert a Word/PDF document to html",
        "excerpt":"My current Django project deals with resume files in Word/PDF format. In order to show a web preview of the file, it's necessary to translate these files to plain HTML. While this was sometimes a pain in the past, I've recently found that it's relatively easy with standard Linux tools....","categories": [],
        "tags": ["django","linux","python"],
        "url": "/blog/2010/12/17/python-convert-a-wordpdf-document-to-html.html",
        "teaser": null
      },{
        "title": "Splunk/Rsyslog/Apache/Ubuntu Quickstart",
        "excerpt":"I've been using Splunk for several years. It's a great tool for log file visualization and analytics. One thing I use it for is to generate a graph of average milliseconds per request on an apache instance. Up until recently, I was running this directly on the production web server....","categories": [],
        "tags": ["splunk","syslog","rsyslog","apache"],
        "url": "/blog/2010/12/31/splunkrsyslogapacheubuntu-quickstart.html",
        "teaser": null
      },{
        "title": "Getting arbitrary log files into Rsyslog",
        "excerpt":"Ideally, the applications that you're working with already supports the syslog standard. Failing that, it's often necessary to suck a regular text log file into rsyslog. Doing so is fairly easy, but I had a harder time than I suspected finding the documentation. The key is the optional rsyslog module...","categories": [],
        "tags": ["syslog","rsyslog"],
        "url": "/blog/2011/01/07/getting-arbitrary-log-files-into-rsyslog.html",
        "teaser": null
      },{
        "title": "Backup your Amazon order history with Python",
        "excerpt":"Ever wanted to download your Amazon order history? Maybe you want to get it into a spreadsheet, or just keep it around in case Amazon decides to delete this information. Here is some Python code to screen scrape your account pages. import sys from optparse import OptionParser import datetime import...","categories": [],
        "tags": ["python","mechanize","beautifulsoup"],
        "url": "/blog/2011/01/15/backup-your-amazon-order-history-with-python.html",
        "teaser": null
      },{
        "title": "Youtube&#58; Detecting X-Frame-Options/framebreaking in Python",
        "excerpt":"My current project involves URL shortening. Like many URL shorteners, we wanted to get into frame bars. These are alternately called banners, share bars and \"eyebrows\". It's basically just putting some small content on the top of the screen, and then wrapping the \"real\" content in an IFRAME that takes...","categories": [],
        "tags": ["python","iframe","framebreaking","youtube"],
        "url": "/blog/2011/01/21/youtube-detecting-x-frame-optionsframebreaking-in-python.html",
        "teaser": null
      },{
        "title": "Sanitize HTML with Beautiful Soup",
        "excerpt":"If you have a website that displays user-generated HTML (emails, rich text entry, etc), you likely want to scrub that HTML before you display it. At the very least, you want to provide a reasonable protection against XSS. But maybe you also want to prevent the HTML from breaking your...","categories": [],
        "tags": ["xss","plaintext","beautifulsoup"],
        "url": "/blog/2011/01/28/sanitize-html-with-beautiful-soup.html",
        "teaser": null
      },{
        "title": "Quickstart&#58; Log shipping with Postgres 8.4",
        "excerpt":"The official Postgres documentation covers log shipping (aka WAL Archiving, aka warm standby) in some depth. But it's still quite a lot to absorb. The basic idea is to give you a hot spare to fail over to if your main database server crashes. Here is a step by step...","categories": [],
        "tags": ["postgres"],
        "url": "/blog/2011/02/03/quickstart-log-shipping-with-postgres-84.html",
        "teaser": null
      },{
        "title": "cat to syslog",
        "excerpt":" Ever wanted to submit the results of regular command-line tools to syslog? Logger lets you do that. Here is an example of logging CPU load and vmstat into to a centralized syslog server.     cat /proc/loadavg |logger -p local7.info -t \"load-cpu\" vmstat |tail -n +3 |logger -p local7.info -t \"load-vmstat\"  ","categories": [],
        "tags": [],
        "url": "/blog/2011/02/11/cat-to-syslog.html",
        "teaser": null
      },{
        "title": "Django fix_IE_for_vary \"bug\"",
        "excerpt":"I was briefly perplexed by an IE only bug this week. An Ajax call was throwing the following 500 exception, but only in IE. Traceback (most recent call last): File \"/home/chase/bullhorn/branches/talladega/virtualenv/lib/python2.6/site-packages/django/core/servers/basehttp.py\", line 280, in run self.result = application(self.environ, self.start_response) File \"/home/chase/bullhorn/branches/talladega/virtualenv/lib/python2.6/site-packages/django/core/servers/basehttp.py\", line 674, in _call_ return self.application(environ, start_response) File \"/home/chase/bullhorn/branches/talladega/virtualenv/lib/python2.6/site-packages/django/core/handlers/wsgi.py\",...","categories": [],
        "tags": [],
        "url": "/blog/2011/02/18/django-fix_ie_for_vary-bug.html",
        "teaser": null
      },{
        "title": "HAProxy Quickstart w/ full example config file",
        "excerpt":"I recently installed HAProxy as a web server load balancer. While their documentation is great, I found it lacking a complete example of a working configuration file. For reference, here is the config file I ended up with along with comments. # /etc/haproxy/haproxy.cfg, version 1.4 global maxconn 4096 user haproxy...","categories": [],
        "tags": [],
        "url": "/blog/2011/02/26/haproxy-quickstart-w-full-example-config-file.html",
        "teaser": null
      },{
        "title": "Facebook&#58; Authenticate w/o the JavaScript SDK (Python)",
        "excerpt":"If you're using the Facebook JavaScript SDK to implement Facebook connect, your site may be more fragile than you think. Last weekend, I ran into an issue where an unrelated JavaScript error (the dreaded comma of death) caused IE7 users to fail trying to connect to Facebook. To make the...","categories": [],
        "tags": ["javascript","facebook","python","unobtrusive"],
        "url": "/blog/2011/03/04/facebook-authenticate-wo-the-javascript-sdk-python.html",
        "teaser": null
      },{
        "title": "Ubuntu + Cisco VPN from the command-line",
        "excerpt":"While the vpn client feature in the Ubuntu UI is very good, sometimes you need to VPN purely from the command-line. For example, if you need to VPN from a headless server into the network. Say your config in Ubuntu looks like as follows. Setting up the vpnc command line...","categories": [],
        "tags": ["vpn","ubuntu"],
        "url": "/blog/2011/03/18/ubuntu-cisco-vpn-from-the-command-line.html",
        "teaser": null
      },{
        "title": "Django&#58; send emails for doctest failures",
        "excerpt":"If you're using Django's unit/doc testing functionality, you would typically be running those tests manually on your local machine. This week, I decided that I wanted to run these nightly from our integration server, and send failures to the dev team. The easiest way I could think of to do...","categories": [],
        "tags": [],
        "url": "/blog/2011/03/25/django-send-emails-for-doctest-failures.html",
        "teaser": null
      },{
        "title": "Python&#58; Convert your FBML Facebook app to IFRAME",
        "excerpt":"Recently, users started reporting that our Facebook app was returning a blank screen. Tracking it down, it turned out that it was specifically when the user was in the new \"Use Facebook as a Page\" mode. Some other developers have reported a similar issue. Given that FBML apps were recently...","categories": [],
        "tags": ["facebook","python"],
        "url": "/blog/2011/04/01/python-convert-your-fbml-facebook-app-to-iframe.html",
        "teaser": null
      },{
        "title": "Django&#58; show me the sql!",
        "excerpt":"This week, I noticed that there was a select query in our production system without a where clause, and it was running a lot. Tracking it down, I found the piece of code that was running the query, but I couldn't be sure that my fix was actually changing the...","categories": [],
        "tags": ["sql","django"],
        "url": "/blog/2011/04/07/django-show-me-the-sql.html",
        "teaser": null
      },{
        "title": "Measure navigation timing with javascript",
        "excerpt":"Historically, site administrators would measure their site performance by timing individual page renders. If your site is serving pages in less than 500ms, it must be pretty fast, right? The full picture is significantly more complicated. With the advent of decent browser-based timing information, developers and admins realized just how...","categories": [],
        "tags": ["performance","javascript"],
        "url": "/blog/2011/04/22/measure-navigation-timing-with-javascript.html",
        "teaser": null
      },{
        "title": "cron job to mail Splunk license violation alerts",
        "excerpt":"Have a problem staying under the Splunk free edition cap of 500MB/day? Splunk is no help. It silently logs violations, only taking action finally by shutting down your searches all together. Here is a quick cron job to email you license alerts as they happen. touch ~/splunk-license-alert chmod +x ~/splunk-license-alert...","categories": [],
        "tags": ["splunk"],
        "url": "/blog/2011/04/26/cron-job-to-mail-splunk-license-violation-alerts.html",
        "teaser": null
      },{
        "title": "Selenium&#58; Execute arbitrary javascript (even jQuery)",
        "excerpt":"We're very happy with our new-ish Selenium + Saucelabs setup for web site automation testing. But as easy as Selenium makes it to compose tests, you will inevitably be frustrated trying to do some of the more complicated test scenarios. For example, the Selenium IDE has not been sufficient for...","categories": [],
        "tags": ["jquery","selenium"],
        "url": "/blog/2011/05/06/selenium-execute-arbitrary-javascript-even-jquery.html",
        "teaser": null
      },{
        "title": "Ubuntu Unity&#58; I want my KeePassX panel back!",
        "excerpt":"Big props to Ubuntu for taking a risk and trying to innovate in the desktop experience arena. Unity is pretty cool, but pretty raw, too. For example, some apps don't yet support the new panel. Even worse, some apps can get stuck in a \"headless\" mode where you can't access...","categories": [],
        "tags": ["unity","keepassx","ubuntu"],
        "url": "/blog/2011/05/13/ubuntu-unity-i-want-my-keepassx-panel-back.html",
        "teaser": null
      },{
        "title": "Stripping control characters in Python",
        "excerpt":"Want to remove ASCII control characters from a string? Have Unicode control characters that can't be encoded into XML? Here is how to strip them with regex in Python. def strip_control_characters(input): if input: import re # unicode invalid characters RE_XML_ILLEGAL = u'([\\u0000-\\u0008\\u000b-\\u000c\\u000e-\\u001f\\ufffe-\\uffff])' + \\ u'|' + \\ u'([%s-%s][^%s-%s])|([^%s-%s][%s-%s])|([%s-%s]$)|(^[%s-%s])' % \\...","categories": [],
        "tags": ["regex","python"],
        "url": "/blog/2011/05/20/stripping-control-characters-in-python.html",
        "teaser": null
      },{
        "title": "django-celery with postgres&#58; \"connection already closed\" errors",
        "excerpt":"I ran into a mysterious, transient exception this week using django-celery. DatabaseError: server closed the connection unexpectedly This probably means the server terminated abnormally before or while processing the request. At other times, I was seeing a slightly different error message. InterfaceError: connection already closed After some searching, I found...","categories": [],
        "tags": ["django","celery"],
        "url": "/blog/2011/06/03/django-celery-with-postgres-connection-already-closed-errors.html",
        "teaser": null
      },{
        "title": "Django CSRF verification failed in IE IFRAME",
        "excerpt":"I ran into an interesting issue with the Django's CSRF (cross site request forgery) protection this week. Some users were reporting seeing the dreaded \"CSRF verification failed. Request aborted.\" error trying to submit a particular form. Unable to reproduce the issue myself, we finally learned that this was happening when...","categories": [],
        "tags": ["p3p","csrf","django"],
        "url": "/blog/2011/06/17/django-csrf-verification-failed-in-ie-iframe.html",
        "teaser": null
      },{
        "title": "Creating large XML files in Python with saxutils",
        "excerpt":"In the past, when I needed to produce an XML file problematically, I typically turned to templating engines. Something like the following example in Django templates: &lt;?xml version=\"1.0\" encoding=\"utf-8\"?&gt; &lt;jobs&gt; &#123;% for job in jobs %&#125; &#123;% with job.user|get_profile as profile %&#125; &lt;job&gt; &lt;title&gt;&#123;&#123; job.title|xml_escape &#125;&#125;&lt;/title&gt; &lt;job-board-name&gt;&#123;&#123; 'JOB_FEED_SITE_NAME'|setting &#125;&#125;&lt;/job-board-name&gt; &lt;job-board-url&gt;&#123;&#123;...","categories": [],
        "tags": ["sax","xml","python"],
        "url": "/blog/2011/06/24/creating-large-xml-files-in-python-with-saxutils.html",
        "teaser": null
      },{
        "title": "Checking RabbitMQ queue size/age with Nagios",
        "excerpt":"For months we were using RabbitMQ (with celery) with no real insight into what was going on inside the queue. Recently, we deployed the mangement plug-in, which has a nifty web UI: From there, is seemed like a logical thing to add a Nagios check for. Here is some Python...","categories": [],
        "tags": ["rabbitmq","nagios"],
        "url": "/blog/2011/07/01/checking-rabbitmq-queue-sizeage-with-nagios.html",
        "teaser": null
      },{
        "title": "Python&#58; calculate lighter/darker RGB colors",
        "excerpt":"Many times color palettes have lighter and darker variations of the same color. This may be used to convey relative importance, or for something as simple as a gradient. Usually the designer will specify both colors. However, if you have a site that needs to allow user configurable styling, you...","categories": [],
        "tags": ["django","python"],
        "url": "/blog/2011/07/29/python-calculate-lighterdarker-rgb-colors.html",
        "teaser": null
      },{
        "title": "Django&#58; white-label styling with URL prefixes",
        "excerpt":"Many websites have branding or \"white label\" functionality where the site can have custom styles per customer. A common use case with commercial products is to allow the customer to use their own logo and colors in place of the defaults, usually for an extra fee. In web apps, customers...","categories": [],
        "tags": ["django"],
        "url": "/blog/2011/08/05/django-white-label-styling-with-url-prefixes.html",
        "teaser": null
      },{
        "title": "django-celery&#58; blacklist errors by class",
        "excerpt":"Celery has a built-in mechanism for sending untrapped errors to admins via email. This is great for trouble-shooting. Sending the emails directly to developers is also a good way to make sure they actually get fixed. I know 1,000 emails in my inbox motivates me! However, you may not want...","categories": [],
        "tags": ["django","celery"],
        "url": "/blog/2011/08/12/django-celery-blacklist-errors-by-class.html",
        "teaser": null
      },{
        "title": "Easier source control merges by trimming trailing whitespace",
        "excerpt":"If you do frequent branch merges in any source control system, you have likely encountered merge conflicts. When two branches have legitimate differences, most often you have to resolve those differences by hand. But all too often, when resolving diffs, you end up looking at a lot of \"phantom diffs\",...","categories": [],
        "tags": ["git","source-control"],
        "url": "/blog/2011/08/19/easier-source-control-merges-by-trimming-trailing-whitespace.html",
        "teaser": null
      },{
        "title": "Django&#58; exclude some views from middleware",
        "excerpt":"In my Django applications, I tend to use custom middleware extensively for common tasks. I have middleware that logs page runtime, middleware that sets context that most views will end up needing anyway, and middleware that copies the HTTP_REFERRER header from an entry page into the session scope for use...","categories": [],
        "tags": ["django"],
        "url": "/blog/2011/08/31/django-exclude-some-views-from-middleware.html",
        "teaser": null
      },{
        "title": "Django&#58; sticky URL query parameters per view",
        "excerpt":"On pages that contain filter controls, such as search results pages, it's common for the filter selections to be put into the URL using query parameters. This makes the search results bookmark-able. A common requirement on such pages is to have the application remember the particular filter parameters the user...","categories": [],
        "tags": ["django"],
        "url": "/blog/2011/09/02/django-sticky-url-query-parameters-per-view.html",
        "teaser": null
      },{
        "title": "Celery&#58; blacklists and custom formatting for exception emails",
        "excerpt":"Celery 2.3 has a few high level knobs to turn with regards to exception emails. You can whitelist exceptions by type. You can change the recipients, email servers to use, etc. But there are many powerful things that you couldn't do, until now. Starting with the next release, you will...","categories": [],
        "tags": ["django","celery"],
        "url": "/blog/2011/09/09/celery-blacklists-and-custom-formatting-for-exception-emails.html",
        "teaser": null
      },{
        "title": "Django/Haystack&#58; latitude/longitude radius search w/ SOLR",
        "excerpt":"Haystack is a great indexed search framework for Django. Getting started is easy, and it includes many data types and facets out of the box. However, one data type it does not do natively is location based search. Specifically, I wanted to do radius searching based on latitude and longitude....","categories": [],
        "tags": ["solr","lucene","django","haystack"],
        "url": "/blog/2011/09/16/djangohaystack-latitudelongitude-radius-search-w-solr.html",
        "teaser": null
      },{
        "title": "Varnish caching for unauthenticated Django views",
        "excerpt":"Varnish is an HTTP accelerator designed for content-heavy dynamic web sites. In contrast to other HTTP accelerators, such as Squid, which began life as a client-side cache, or Apache, which is primarily an origin server, Varnish was designed from the ground up as an HTTP accelerator. -- Wikipedia Varnish is...","categories": [],
        "tags": ["csrf","django","varnish"],
        "url": "/blog/2011/09/23/varnish-caching-for-unauthenticated-django-views.html",
        "teaser": null
      },{
        "title": "Using pgpool2 to timeout idle Postgres connections from Django",
        "excerpt":"Django has a well known issue with \"&lt;IDLE&gt; in transaction\" queries piling up. I have found that simply \"&lt;IDLE&gt;\" queries also have a tendency to hang out. This can cause problems for a high traffic site, as you can run out of open connections slots on the database side. To...","categories": [],
        "tags": [],
        "url": "/blog/2011/09/30/using-pgpool2-to-timeout-idle-postgres-connections-from-django.html",
        "teaser": null
      },{
        "title": "Django Performance&#58; Latency Kills",
        "excerpt":"Do you know how many database queries your Django pages are making? If you're like me, you probably don't know exactly. That's the beauty of the ORM; it abstracts database access to such a level that you rarely have to think about it. But do yourself a favor, and invest...","categories": [],
        "tags": ["performance","django","latency"],
        "url": "/blog/2011/10/07/django-performance-latency-kills.html",
        "teaser": null
      },{
        "title": "Profile and reduce memory use in Django with .iterator()",
        "excerpt":"For the most part, objects allocated by Django are short-lived, and are eligible for garbage collection when the request ends. In our case, we also have some long running jobs using celery. One in particular, a job to create a several hundred megabyte XML file, was consistently using all the...","categories": [],
        "tags": ["profile","django"],
        "url": "/blog/2011/10/12/profile-and-reduce-memory-use-in-django-with-iterator.html",
        "teaser": null
      },{
        "title": "Reduce javascript UI code with Django forms",
        "excerpt":"Typically, I try to implement a dynamic UI feature without javascript on the first pass. Then, I layer in a little javascript goodness to make it more responsive. Whenever I stray from this practice, I inevitably end up re-discovering why I started doing this in the first place. At some...","categories": [],
        "tags": ["javascript","django","unobtrusive"],
        "url": "/blog/2011/10/21/reduce-javascript-ui-code-with-django-forms.html",
        "teaser": null
      },{
        "title": "Nagios check for Varnish Backends",
        "excerpt":"We recently starting using Varnish to cache un-authenticated requests to our web farm. It even has this great feature called grace mode, where it will keep serving a cached version of a page if the back-end server goes down. But we still want to be alerted that the back-end is...","categories": [],
        "tags": ["python","nagios","varnish"],
        "url": "/blog/2011/10/28/nagios-check-for-varnish-backends.html",
        "teaser": null
      },{
        "title": "Backing up gmail to Dropbox using getmail on Linux",
        "excerpt":"What if gmail went away tomorrow, or at least deleted all your mail? It may not be as far fetched as you think. It's always prudent to have a backup. On Linux, you can use the excellent getmail program to backup any POP3 or IMAP account. For gmail in particular,...","categories": [],
        "tags": ["backup","gmail","dropbox"],
        "url": "/blog/2011/11/10/backing-up-gmail-to-dropbox-using-getmail-on-linux.html",
        "teaser": null
      },{
        "title": "Running a JAR as a service (Linux/upstart)",
        "excerpt":"Running a java JAR as a daemon in Linux is fairly easy, but it took me some digging to figure out how. This is using the new upstart init script functionality, which is included in recent distributions of Ubuntu. Instead of creating a script in /etc/init.d, as with System-V init,...","categories": [],
        "tags": ["java","upstart","ubuntu"],
        "url": "/blog/2011/11/18/running-a-jar-as-a-service-linuxupstart.html",
        "teaser": null
      },{
        "title": "Python/Django&#58; disk based caching decorator",
        "excerpt":"One of the great things about Django's caching framework is that you can cache complex objects. Say you have a list of dictionaries representing favorite movies from Netflix. You can jam that sucker right into the cache as is. No need to normalize it into a relational database schema, unless...","categories": [],
        "tags": ["django","python"],
        "url": "/blog/2011/11/23/pythondjango-disk-based-caching-decorator.html",
        "teaser": null
      },{
        "title": "Ubuntu 11.10 Lock Screen - Suspend Monitors",
        "excerpt":"Whenever I get up from my desk, I reflexively lock my workstation. Ever since upgrading to Ubuntu 11.10, this has failed to put my monitors into suspend mode. In addition, it also continues to display some parts of the Unity interface, most critically the title of the currently active window....","categories": [],
        "tags": ["unity","ubuntu"],
        "url": "/blog/2011/12/02/ubuntu-1110-lock-screen-suspend-monitors.html",
        "teaser": null
      },{
        "title": "jQuery hashtag input control",
        "excerpt":"This jQuery snippet will turn an INPUT element into a hashtag input control. For example, if the user type \"jobs business networking\", it will translate it into \"#jobs #business #networking\" as they are typing it. It will also string commas and whitespace. $(document).ready(function() { $(&quot;input.hastags&quot;).bind(&quot;keyup&quot;, function () { /* replaces...","categories": [],
        "tags": ["jquery","twitter"],
        "url": "/blog/2011/12/09/jquery-hashtag-input-control.html",
        "teaser": null
      },{
        "title": "Migrate your Python app to Facebook OAuth 2.0",
        "excerpt":"Facebook recently started enforcing OAuth 2.0 on app developers. Supposedly this was slated for Oct 1, 2011, but in practice it seems to have not started until Dec 15. If, like me, you didn't realize the change was coming until it was already broken, then you might be scrambling for...","categories": [],
        "tags": ["facebook","python","oauth"],
        "url": "/blog/2011/12/16/migrate-your-python-app-to-facebook-oauth-20.html",
        "teaser": null
      },{
        "title": "nginx + SSL reverse proxy tutorial",
        "excerpt":"If you have an existing HTTP application that you want to enable SSL for, nginx provides a convenient reverse proxy mode. In this mode, nginx is just responsible for providing SSL encryption; the actual HTTP content is still being served from your existing web server or load balancer. First, you...","categories": [],
        "tags": ["nginx","ssl"],
        "url": "/blog/2011/12/21/nginx-ssl-reverse-proxy-tutorial.html",
        "teaser": null
      },{
        "title": "Django reset database connection",
        "excerpt":"Django handles database connections transparently in almost all cases. It will start a new connection when your request starts up, and commit it at the end of the request lifetime. Other times you need to dive in further and do your own granular transaction management. But for the most part,...","categories": [],
        "tags": ["django","postgres"],
        "url": "/blog/2012/01/06/django-reset-database-connection.html",
        "teaser": null
      },{
        "title": "Python class attributes are evaluated on declaration",
        "excerpt":"In Python, class attributes are evaluated and put into memory when the class is defined (or imported). For example, if you run the following code in an interactive interpreter, it will print out \"Something __init__() called\": class Something: def __init__(self): print &quot;Something __init__() called&quot; class UsesSomething: field = Something() This...","categories": [],
        "tags": ["django","python"],
        "url": "/blog/2012/01/20/python-class-attributes-are-evaluated-on-declaration.html",
        "teaser": null
      },{
        "title": "Using Access-Control-Allow-Origin to make cross domain POST requests from javsacript",
        "excerpt":"Making ajax calls from javascript, even without a framework like jQuery, is pretty trivial. However, once you try to make the same request cross-domain, it gets hard fast. This is due to the security model all modern browsers use, known as the same origin policy. This policy makes sense in...","categories": [],
        "tags": ["javascript","django","security"],
        "url": "/blog/2012/01/27/using-access-control-allow-origin-to-make-cross-domain-post-requests-from-javsacript.html",
        "teaser": null
      },{
        "title": "jQuery&#58; remove (script) tags from a string of html",
        "excerpt":"I'm in the middle of writing a bookmarklet to screen scrape web pages. My back-end piece is having trouble parsing pages with lots of script tags. Since I don't actually need the script tags, I thought I would remove them before it even gets to the back-end. Here is how...","categories": [],
        "tags": ["screenscraping","javascript","jquery"],
        "url": "/blog/2012/02/03/jquery-remove-script-tags-from-a-string-of-html.html",
        "teaser": null
      },{
        "title": "How to use a cron job to open a web page in a browser",
        "excerpt":"At work, I have a set of long-term goals I'm supposed to be making progress on over the year. As a way to remind myself about them, I have a cron job setup to open the URL with the goals on them every morning. First, you need to create a...","categories": [],
        "tags": ["cron"],
        "url": "/blog/2012/02/10/how-to-use-a-cron-job-to-open-a-web-page-in-a-browser.html",
        "teaser": null
      },{
        "title": "Save a screenshot to Dropbox with a keyboard shortcut",
        "excerpt":"It's not uncommon for me to call my product manager over to my desk half a dozen times on a given day to look at what I'm working on. To speed things up, I decided to start IMing him screen shots instead. Here is a BASH script that builds on...","categories": [],
        "tags": ["bash"],
        "url": "/blog/2012/02/17/save-a-screenshot-to-dropbox-with-a-keyboard-shortcut.html",
        "teaser": null
      },{
        "title": "Django aggregation, group by day",
        "excerpt":"This week we had a hackathon to develop a better internal dashboard page that shows things like records added to the system over time. Not having generated many reports in Django, we had to learn how to get the Django ORM to group records by day. It's a little bit...","categories": [],
        "tags": ["django","postgres"],
        "url": "/blog/2012/02/24/django-aggregation-group-by-day.html",
        "teaser": null
      },{
        "title": "Adding a .first() method to Django's QuerySet",
        "excerpt":"In my last Django project, we had a set of helper functions that we used a lot. The most used was helpers.first, which takes a query set and returns the first element, or None if the query set was empty. Instead of writing this: try: object = MyModel.objects.get(key=value) except model.DoesNotExist:...","categories": [],
        "tags": ["django"],
        "url": "/blog/2012/03/16/adding-a-first-method-to-djangos-queryset.html",
        "teaser": null
      },{
        "title": "waiting while a jQuery UI animation is running",
        "excerpt":"A common pattern for less than instantaneous ajax calls is to show the user a \"loading\" animation while the ajax response is pending. If your animation is a loading spinner graphic, then it makes sense to stop that animation immediately when the response is ready. But what if you're using...","categories": [],
        "tags": ["javascript","jquery"],
        "url": "/blog/2012/03/23/waiting-while-a-jquery-ui-animation-is-running.html",
        "teaser": null
      },{
        "title": "testing facebook apps with ssh reverse tunnels",
        "excerpt":"If you're writing a Facebook app, you may have to jump through hoops to test it out against your local development machine. Facebook requires that you configure a static host name where all your login requests will originate. For logins, it will let you specify a localhost address. But other...","categories": [],
        "tags": ["ssh"],
        "url": "/blog/2012/03/28/testing-facebook-apps-with-ssh-reverse-tunnels.html",
        "teaser": null
      },{
        "title": "varnishlog top pages by IP address",
        "excerpt":"Here are some quick recipes for getting information from varnish about top offending IP addresses, which pages those IP addresses are accessing, and which IPs are hitting particular pages. # top IP addresses varnishtop -i TxHeader -I '^X-Forwarded-For:' # which pages the IP address 66.249.68.228 is hitting varnishncsa |grep 66.249.68.228...","categories": [],
        "tags": ["varnish"],
        "url": "/blog/2012/04/06/varnishlog-top-pages-by-ip-address.html",
        "teaser": null
      },{
        "title": "Django/Heroku quickstart for existing applications",
        "excerpt":"Getting a brand new Django application running on Heroku is fairly simple. There is a great tutorial for it on devcenter.heroku.com. I would recommend going through that, and getting it working. Here is my short version of their getting started notes, without the virtualenv and Django command stuff you probably...","categories": [],
        "tags": ["django","heroku"],
        "url": "/blog/2012/04/13/djangoheroku-quickstart-for-existing-applications.html",
        "teaser": null
      },{
        "title": "Django management command to list, filter and exclude models from a fixture",
        "excerpt":"Dumping Django data to a fixture and loading it back up again are accomplished with the built-in management commands dumpdata and loaddata. However, loading a fixture into an existing database is a little trickier than loading it into an empty database. Because the fixture json contains the original primary keys...","categories": [],
        "tags": ["django"],
        "url": "/blog/2012/04/20/django-management-command-to-list-filter-and-exclude-models-from-a-fixture.html",
        "teaser": null
      },{
        "title": "Deploying Django staticfiles to Heroku via Hudson/Jenkins",
        "excerpt":"Starting in Django 1.3, you can use the built-in staticfiles feature to bundle up css, javascript, images and other static resources for deployment to a CDN. There are two popular Django apps, django-compressor and django-pipeline that layer in additional functionality such as minification and seemless support for popular hosts like...","categories": [],
        "tags": ["django","heroku","hudson"],
        "url": "/blog/2012/04/27/deploying-django-staticfiles-to-heroku-via-hudsonjenkins.html",
        "teaser": null
      },{
        "title": "Django/NewRelic Quickstart (gunicorn.d + Django 1.3 hack)",
        "excerpt":"New Relic is an excellent web application performance reporting tool. After a great experience using it on Heroku, I went to enable it for an existing self-hosted application. While Django 1.4 has an excellent WSGI configuration build-in, Django 1.3 makes it a little trickier. To complicate matters even more, I...","categories": [],
        "tags": ["django","gunicorn","newrelic"],
        "url": "/blog/2012/05/24/djangonewrelic-quickstart-gunicornd-django-13-hack.html",
        "teaser": null
      },{
        "title": "Django/Postgres&#58; Optimize COUNT(*) by replacing with an estimate",
        "excerpt":"Every week I take a look at a report generated by the excellent pgFouine tool for our production Postgres database. This week, there was a surprising query on the top of the slow runners list: SELECT COUNT(*) FROM website_job; This query was taking an average of 3 seconds! Granted, this...","categories": [],
        "tags": ["django","postgres"],
        "url": "/blog/2012/06/01/djangopostgres-optimize-count-by-replacing-with-an-estimate.html",
        "teaser": null
      },{
        "title": "Django Nose/sqlite3 \"too many SQL variables\" error",
        "excerpt":"Trying to get started with Django nose today on an existing project, I kept getting the following error trying to run my empty test suite: >./manage.py test --stop Creating test database for alias 'default'... ... django.db.utils.DatabaseError: too many SQL variables I noticed right away that this was only happening with...","categories": [],
        "tags": ["django","sqlite","nose"],
        "url": "/blog/2012/06/05/django-nosesqlite3-too-many-sql-variables-error.html",
        "teaser": null
      },{
        "title": "Django&#58; ditch objects.using() in favor of a per-view decorator to switch databases",
        "excerpt":"Django has a \"multiple databases\" feature that lets you read/write data from more than just the default database. I'm going to show you how to switch databases on a per-view level, rather than per-query with objects.using(), or per-server by changing DATABASE_ROUTERS. First, some background. Let's look at how regular database...","categories": [],
        "tags": ["django"],
        "url": "/blog/2012/06/15/django-ditch-objectsusing-in-favor-of-a-per-view-decorator-to-switch-databases.html",
        "teaser": null
      },{
        "title": "Django&#58; persist some session state across login/logout boundaries",
        "excerpt":"By definition session state is tied to the session. When you log out, you obviously don't want the server remembering who you are. Likewise, session state is typically lost when an formerly anonymous user logs in. But very occasionally, there might be some pieces of information you're storing against the...","categories": [],
        "tags": ["django"],
        "url": "/blog/2012/06/29/django-persist-some-session-state-across-loginlogout-boundaries.html",
        "teaser": null
      },{
        "title": "pydev colorscheme for gvim",
        "excerpt":"I'm trying to make the switch from Eclipse to vim. I've started compiling a vimrc github project. So far, the only customization I had to implement myself was making the color scheme look like PyDev. Just stick pydev.vim in your colors directory. set background=light highlight clear if exists(\"syntax_on\") syntax reset...","categories": [],
        "tags": ["vim"],
        "url": "/blog/2012/07/13/pydev-colorscheme-for-gvim.html",
        "teaser": null
      },{
        "title": "postfix&#58; only enable sasl for some relays",
        "excerpt":"Some mail hosts, like SendGrid, require you to use SASL authentication to relay mail through their systems. Many of those same hosts only want you to send mail for verified, double-opt-in squeaky clean recipients. But what if you have a subset of recipients that are not verified, and you want...","categories": [],
        "tags": ["python","postfix"],
        "url": "/blog/2012/07/19/postfix-only-enable-sasl-for-some-relays.html",
        "teaser": null
      },{
        "title": "Faster Django view unit tests with mocks",
        "excerpt":"Unit tests need to be fast. Really fast. Some have suggested that speed is the defining characteristic of a unit test. But writing fast unit tests for Django views is hard. The key to fast unit tests is isolation. You don't want to be hitting the database, making requests over...","categories": [],
        "tags": ["unit-tests","mock","django"],
        "url": "/blog/2012/07/27/faster-django-view-unit-tests-with-mocks.html",
        "teaser": null
      },{
        "title": "How to prepare for a software engineer interview",
        "excerpt":"Interviews for software engineering positions are equal measures normal job interview and extemporaneous logic bomb de-arming with an audience. Most developers know the drill; you stand up in front of one of more senior developers and have to write code on a whiteboard to solve what’s normally a fairly academic...","categories": [],
        "tags": ["interview","workplace","career"],
        "url": "/blog/2012/08/31/how-to-prepare-for-a-software-engineer-interview.html",
        "teaser": null
      },{
        "title": "What to spend your last two weeks at a job doing",
        "excerpt":"So, you’ve given your notice at your job. Now what? First off, stop coding. That’s right. Finish whatever small task you’re currently working on, but for the love of god, stop writing more bugs. Of course, you want to get your manager’s sign-off on this, but in my experience managers...","categories": [],
        "tags": ["career"],
        "url": "/blog/2012/09/07/what-to-spend-your-last-two-weeks-at-a-job-doing.html",
        "teaser": null
      },{
        "title": "The Post/Redirect/Get (PRG) Pattern",
        "excerpt":"Anyone who has used a web browser has probably encountered the dreaded “form resubmission” dialog. This happens when the user tries to refresh or use the back button to navigate back to a HTTP POST. A typical case where you might see this is when checking out from a web...","categories": [],
        "tags": ["django","view","prg"],
        "url": "/blog/2012/10/19/post-redirect-get-prg-pattern.html",
        "teaser": null
      },{
        "title": "Django Log Shell And Dbshell",
        "excerpt":"title: Logging Django shell and dbshell sessions tags: django logging — The Django shell management command is a supremely useful tool for developers to explore and potentially modify data in their applications, both during development and in production. For jobs where that does not perform well enough, or you need...","categories": [],
        "tags": [],
        "url": "/blog/2012/10/26/django-log-shell-and-dbshell.html",
        "teaser": null
      },{
        "title": "Using $EDITOR and a less paging from Python command line apps",
        "excerpt":"Python’s built-in raw_input() function is a quick and dirty way to get text input from the user in your Python command line application. But it’s really only optimal for a very small input string. Also, it can’t provide a default value that the user can then edit. For more substantial...","categories": [],
        "tags": ["python","git"],
        "url": "/blog/2012/10/31/python-fork-exec-vim-raw-input.html",
        "teaser": null
      },{
        "title": "Keep Track of Vim Tabs Per Git Branch",
        "excerpt":"Mylyn is a “task lifecycle management framework” plugin for Eclipse. I’m not 100% sure what that means, but I know I really liked one particular feature. On teams where everything you worked on was a JIRA ticket, Mylyn let you associate source code files with a particular JIRA ticket. You...","categories": [],
        "tags": ["django","view","prg"],
        "url": "/blog/2012/11/09/vim-git-mksession-per-branch.html",
        "teaser": null
      },{
        "title": "Python Subprocess Asynchronous Read Stdout",
        "excerpt":"Python has a great standard library when it comes to invoking external processes. But one weakness it does have is that it’s not easy to communicate with a subprocess while it’s running, i.e. streaming its stdout. If you look at the documentation for popen, you will repeatedly see caveats like...","categories": [],
        "tags": ["python","subprocess","threads"],
        "url": "/blog/2012/11/16/python-subprocess-asynchronous-read-stdout.html",
        "teaser": null
      },{
        "title": "Introducing Django Pyfixtures",
        "excerpt":"Django fixtures were initially touted as a great way to pre-populate your database, mainly for testing. Over time, various community leaders have suggested that fixtures are slow, brittle, should be bundled instead of loaded from scratch for every unit test and should probably be replaced with class factories. If you’re...","categories": [],
        "tags": ["django","fixtures"],
        "url": "/blog/2012/11/21/introducing-django-pyfixtures.html",
        "teaser": null
      },{
        "title": "Django Nose Lint Quickstart - Enforce fast unit tests",
        "excerpt":"In the battle for blazing fast unit tests, you need all the tools you can get at your disposal. Enter django-nose-lint, a new Nose plugin that lets you enforce certain runtime constraints on your test suite. You can just flat out fail tests that take over a configurable amount of...","categories": [],
        "tags": ["django","testing"],
        "url": "/blog/2012/12/07/django-nose-lint.html",
        "teaser": null
      },{
        "title": "Read only Django shell",
        "excerpt":"Say you have a bunch of developers that occasionally need Django shell access to production, but you want this to be an exceptional event. Here is a drop-in replacement for ./manage.py shell that defaults to read-only mode, but lets the developer switch to writable mode on the fly, while notifying...","categories": [],
        "tags": ["django","shell"],
        "url": "/blog/2012/12/21/read-only-django-shell.html",
        "teaser": null
      },{
        "title": "New Year Python Meme 2012",
        "excerpt":"View all #2012pythonmeme posts by the community. 1. What’s the coolest Python application, framework, or library you have discovered in 2012? Definitely celery. It challenges you to compose your solutions into ever smaller tasks. It’s sometimes frustrating as hell to debug (mostly because it’s naturally UI-less). But it has been...","categories": [],
        "tags": ["python","pythonmeme"],
        "url": "/blog/2013/01/04/python-meme.html",
        "teaser": null
      },{
        "title": "Ignore pyflakes warnings with bypass_pyflakes",
        "excerpt":"Pyflakes is a popular linter for python, even if it isn’t being maintained anymore. One long standing request is to allow ignoring of specific warnings with comments, like many other linters allow. For example, it’s common in python config files to use import *. But you definitely don’t want to...","categories": [],
        "tags": ["python","pyflakes"],
        "url": "/blog/2013/01/11/bypass_pyflakes.html",
        "teaser": null
      },{
        "title": "Per-request Query Caching in Django",
        "excerpt":"The Django ORM is a wonderful thing. It makes it so easy to access the database, that sometimes you forget that it’s even happening. That is, until you open django-debug-toolbar and see that you’re suddenly running hundreds of queries! Not only that, but looking at the actual queries, many of...","categories": [],
        "tags": ["python","cache"],
        "url": "/blog/2013/01/17/caching-selects-per-request-django.html",
        "teaser": null
      },{
        "title": "Mocking HTTP calls in Python tests",
        "excerpt":"There are at least a few decent libraries out there for mocking out HTTP calls in Python unit tests. The best solution looks like HTTPretty. One feature that it does not have, however, is the ability to specify url parameters. For many applications, such as testing OAuth flows, a lot...","categories": [],
        "tags": ["python"],
        "url": "/blog/2013/01/26/mock-http-calls-python.html",
        "teaser": null
      },{
        "title": "HBase/Pig/Python Quickstart on OSX",
        "excerpt":"Having spent a good chunk of the last two weeks getting a prototype analytics system running, I thought I would write up my findings. I was pleased to find that installing all the pieces was smooth via Homebrew, but getting them all to play together was less smooth. The Playing...","categories": [],
        "tags": ["hbase","pig","hadoop","python"],
        "url": "/blog/2013/02/01/getting-starting-with-hbase-and-pig.html",
        "teaser": null
      },{
        "title": "Flatten entire HBase column families with Pig and Python UDFs",
        "excerpt":"Most Pig tutorials you will find assume that you are working with data where you know all the column names ahead of time, and that the column names themselves are just labels, versus being composites of labels and data. For example, when working with HBase, it’s actually not uncommon for...","categories": [],
        "tags": ["hbase","pig"],
        "url": "/blog/2013/02/10/pig-hbase-flatten-column-family.html",
        "teaser": null
      },{
        "title": "Why Database Integrity Matters",
        "excerpt":"Given the rise in popularity of NoSQL solutions, typically set apart by their explicit forfeiture of traditional RDBMS features, you might think that age old concepts like ACID transactions and foreign key constraints are simply antiquated. In the face of the new shiny hotness, why did we ever value data...","categories": [],
        "tags": ["database"],
        "url": "/blog/2013/02/16/why-database-acid-matters.html",
        "teaser": null
      },{
        "title": "Facebook Page Post Insights Empty Results",
        "excerpt":"Spent a couple of hours tearing my hair out over the Facebook insights API this week. Say you have a Facebook page with an ID of 173304932707127, and a post on that page with ID 497058920331725. The Facebook Insights API docs would lead you to believe that you can query...","categories": [],
        "tags": ["facebook"],
        "url": "/blog/2013/02/25/facebook-insights-api-post-level-returns-empty.html",
        "teaser": null
      },{
        "title": "Introducing Django Migratron",
        "excerpt":"Django Migratron is a schema migration tool for Django. Why write another schema migration tool? Here is how we stack up against other tools. Similarities Migrations are defined as scripts in a configurable directory There are commands to list, run and fake one or more migrations Migrations side effects can...","categories": [],
        "tags": ["python","django"],
        "url": "/blog/2013/03/01/introducing-django-migratron.html",
        "teaser": null
      },{
        "title": "Mocking HappyBase for unit testing HBase code",
        "excerpt":"HappyBase is a friendly interface to interact with HBase from Python. It lets you perform basic HBase operations like get, put and scan. But say you have a bunch of puts littered around your code. How do you unit test that? One method would be to mock out the happy...","categories": [],
        "tags": ["python","hbase"],
        "url": "/blog/2013/03/08/mocking-happybase-hbase.html",
        "teaser": null
      },{
        "title": "Using HBase/Thrift through the Rackspace Load Balancer",
        "excerpt":"Using the binary Thrift protocol through a load balancer can be a little tricky. While it works out of the box in HAProxy, you may run into some slight trouble running it through other load balancers. By default, when trying to access Thrift through the Rackspace Cloud Load Balancers, you...","categories": [],
        "tags": ["hbase"],
        "url": "/blog/2013/03/22/happybase-thrif-rackspace-load-balancer.html",
        "teaser": null
      },{
        "title": "Introducing Advocoders",
        "excerpt":"Update: this app was decommissioned in 2022 Hiring engineers is tough, especially right now with a general shortage of qualified candidates and record demand. Good companies realize they need involve their engineering team to help recruit. That could mean hosting drink ups, sending the team to conferences and old fashioned...","categories": [],
        "tags": ["opensource","blog"],
        "url": "/blog/2013/04/05/introducing-advocoders.html",
        "teaser": null
      },{
        "title": "Dynamic Attributes in Python",
        "excerpt":"One of the strengths of a dynamic language is that it allows you to more easily work introspection and light weight meta-programming into your every day code. In Python, one of the primary ways of taking advantage of the dynamic nature of the language is through attribute access. Note: this...","categories": [],
        "tags": ["python","tutorial"],
        "url": "/blog/2013/04/12/getattr-setattr.html",
        "teaser": null
      },{
        "title": "Python pickle AttributeError 'module' object has no attribute 'foobar'",
        "excerpt":"Ran into an interesting edge case with pickle this week. I had a producer task that was querying objects from a database, and pickling them plus a reference to a callback function to pass to worker tasks. Everything was working fine, but I was getting sick of logging into a...","categories": [],
        "tags": ["python","pickle"],
        "url": "/blog/2013/04/19/python-pickle-attributeerror-module-has-no-attribute.html",
        "teaser": null
      },{
        "title": "HBase Schema Introduction for Programmers",
        "excerpt":"Schema design in NoSQL is very different from schema design in a RDBMS. Once you get something like HBase up and running, you may find yourself staring blankly at a shell, lost in the possibilities of creating your first table. You’re probably used to thinking of tables like this: rowkey...","categories": [],
        "tags": ["hbase"],
        "url": "/blog/2013/04/26/hbase-schema-design.html",
        "teaser": null
      },{
        "title": "Happybase Connection Pooling",
        "excerpt":"Wrote a simple connection pool for Happybase using socketpool. import time import random import contextlib import happybase from socketpool import ConnectionPool from socketpool.conn import TcpConnector class HappybaseConnectionPool(object): ''' singleton to share a connection pool per process ''' _instance = None def __new__(cls, *args, **kwargs): if not cls._instance: cls._instance = super(HappybaseConnectionPool,...","categories": [],
        "tags": ["python","hbase"],
        "url": "/blog/2013/05/03/happybase-connection-pooling.html",
        "teaser": null
      },{
        "title": "Hive with HBase Quickstart",
        "excerpt":"Though there is some decent documentation, I found that setting up Hive with a HBase back-end to be somewhat fiddly. Hopefully this guide will help you get started quicker. This article presumes that you already have HBase set up. If not, see my HBase quickstart. Note: these directions are for...","categories": [],
        "tags": ["hbase","hive"],
        "url": "/blog/2013/05/10/hive-hbase-quickstart.html",
        "teaser": null
      },{
        "title": "Write CSV data into Hive and Python",
        "excerpt":"Apache Hive is a high level SQL-like interface to Hadoop. It lets you execute mostly unadulterated SQL, like this: CREATE TABLE test_table(key string, stats map&lt;string, int&gt;); The map column type is the only thing that doesn’t look like vanilla SQL here. Hive can actually use different backends for a given...","categories": [],
        "tags": ["python","hive"],
        "url": "/blog/2013/05/17/hive-insert-and-dump-csv-with-map-datatype.html",
        "teaser": null
      },{
        "title": "High availability via client libraries versus dedicated services",
        "excerpt":"Some newer storage technologies allow you to connect to one of a set of servers right from their client library. For example, MongoDB lets you specify one host in a replica set. If that replica becomes unavailable, the client will try to connect to another replica in the same set...","categories": [],
        "tags": [],
        "url": "/blog/2013/05/24/why-you-should-not-write-your-own-load-balancer.html",
        "teaser": null
      },{
        "title": "Sqoop/HBase Quickstart on Linux",
        "excerpt":"Sqoop is a tool for bulk copying data between a relational database like MySQL and HDFS or another Hadoop based data store like Hive or HBase. It can either export a table or set of tables, or you can specify a custom SQL query to pull the data out. It’s...","categories": [],
        "tags": ["sqoop","hadoop","hbase"],
        "url": "/blog/2013/06/07/sqoop-quickstart.html",
        "teaser": null
      },{
        "title": "Hadoop from a Python Perspective",
        "excerpt":"I’m just coming off a project where we decided to use Hadoop for the first time. We’re a Python shop developing an analytics feature. We have about 150m records we need to analyze daily, or approx 20GB of data. Even in our initial discussions, we knew that we could do...","categories": [],
        "tags": ["python","hbase","hadoop"],
        "url": "/blog/2013/06/21/hadoop-from-a-python-perspective.html",
        "teaser": null
      },{
        "title": "Fixing styling incompatibility with Google Charts and Twitter Bootstrap",
        "excerpt":"Ran into a vexing issue this week when we upgraded to using Twitter Bootstrap. Some of our analytics graphs using Google Charts were suddenly broken in IE 7/8/9. Instead of the expected 100px wide bar graphs, they were just a few pixels wide. Normally Google Charts produces the following DOM...","categories": [],
        "tags": ["bootstrap","gcharts"],
        "url": "/blog/2013/06/28/Google-charts-bars-with-bootstrap.html",
        "teaser": null
      },{
        "title": "Agile Motivations and Objections",
        "excerpt":"Often when I first start talking to someone new about Agile and/or Scrum, they have questions and occasionally objections. More often they just don’t understand the motivation for trying a new development process. It’s rare that these biases against Scrum persist, which is probably a testament to how common-sense it...","categories": [],
        "tags": ["agile","scrum"],
        "url": "/blog/2013/07/19/agile-motivations-and-objections.html",
        "teaser": null
      },{
        "title": "Scrum in a Nutshell",
        "excerpt":"Scrum is a fundamentally adaptable process. One of the core pieces is the retrospective, where the team can collaboratively change the process itself. Team members learn from their mistakes and from each other about how to get better at delivering software. But before the iterative improvement can begin, there is...","categories": [],
        "tags": ["agile","scrum","reading-list"],
        "url": "/blog/2013/07/28/scrum-basics.html",
        "teaser": null
      },{
        "title": "Diagnosing Memory \"Leaks\" in Python",
        "excerpt":"The Problem We wrote some new code in the form of celery tasks that we expected to run for up to five minutes, and use a few hundred megabytes of memory. Rinse and repeat for a thousand different data sets. We ran through a few data sets successfully, but once...","categories": [],
        "tags": ["python"],
        "url": "/blog/2013/08/03/diagnosing-memory-leaks-python.html",
        "teaser": null
      },{
        "title": "Switching from Ubuntu Unity to LXDE",
        "excerpt":"Canonical was founded with the goal of bringing polish, consistency and usability to the Linux desktop. Derided unfairly by some as not contributing much technically to the open source ecosystem, Ubuntu has been undeniably popular, becoming for the last five years the closest thing we have to a de facto...","categories": [],
        "tags": ["linux","ubuntu","lxde"],
        "url": "/blog/2013/08/20/unity-vs-lxde.html",
        "teaser": null
      },{
        "title": "Writing a cURL to Python Install Script for a Django development environment",
        "excerpt":"Paste and Pray It’s pretty common to Google a technical issue, and come up with a blog or a Stackoverflow article that promises to fix the issue by copying and pasting a simple one-liner into a terminal. At first it’s just a quick chmod, or a simple apt-get. It’s completely...","categories": [],
        "tags": ["python"],
        "url": "/blog/2013/09/03/curl-installer-python.html",
        "teaser": null
      },{
        "title": "Getting started with Splunk as an Engineer",
        "excerpt":"What is Splunk, and how can you make the best use of it as an engineer? Splunk is first and foremost a hosted web-based tool for your log files. It gives you the following: Aggregates all your logs in one place Search Extract meaning Group, join, pivot and format results...","categories": [],
        "tags": ["splunk"],
        "url": "/blog/2013/09/13/splunk-getting-started.html",
        "teaser": null
      },{
        "title": "Using grep from inside vim",
        "excerpt":"This is my rifle. There are many like it, but this one is mine. - Rifleman’s Creed There are a thousand ways to grep over files. Most developers I have observed keep a separate command line open just for searching. A few use an IDE that has file search built-in....","categories": [],
        "tags": ["vim"],
        "url": "/blog/2013/09/21/vim-grep-under-cursor.html",
        "teaser": null
      },{
        "title": "Joining a software startup right out of school",
        "excerpt":"About me I joined a tech startup (Bullhorn, Inc) in Boston right after graduating college in 2003. After nearly 10 years, they were acquired (w00t) and everyone got their stock options cashed out. Since then, I’ve started at another startup (Hearsay Social), this time in San Francisco. When I started...","categories": [],
        "tags": ["startups","reading-list"],
        "url": "/blog/2013/10/04/what-to-know-before-starting-at-a-startup.html",
        "teaser": null
      },{
        "title": "Subclassing Django's runserver causes command to be run twice",
        "excerpt":"This week I was creating my own version of the Django management command runserver. Like the built-in, I wanted to run a lightweight development only web server for my Django app. In addition, I was looking to run a syncdb, load some initial data and start up the server with...","categories": [],
        "tags": ["django"],
        "url": "/blog/2013/10/24/django-subclass-runserver.html",
        "teaser": null
      },{
        "title": "Hacking Django runserver to run multiple Django instances",
        "excerpt":"Recently at work we’ve been on a “servicifying” kick, meaning we’re slowly converting our monolithic Django app into separate services. To start, this just means breaking up the existing runtime into pieces. Instead of one logical web process, we now have different ones for the web app, admin, login, apis,...","categories": [],
        "tags": ["django"],
        "url": "/blog/2013/11/03/django-runserver-launch-multiple-screen.html",
        "teaser": null
      },{
        "title": "Faster Django/sqlite runserver with /dev/shm",
        "excerpt":"When you’re writing software, the feedback loop is king. Whether you’re implementing new functionality, changing server configuration or writing unit tests, the speed of your feedback cycle is critical. The ideal scenario is that you make a change, and you can immediately see and effect. For web apps, this means...","categories": [],
        "tags": ["django","linux"],
        "url": "/blog/2013/11/15/linux-shm-faster-sqlite.html",
        "teaser": null
      },{
        "title": "Writing a Python decorator that can be called as a function or a callable",
        "excerpt":"A Python decorator wraps a function with another function. Classing examples are a @cache decorator or a @log decorator, which call the wrapped function and either cache its results or log the fact that it was called, respectively. Decorators can be implemented as functions or as classes; they just need...","categories": [],
        "tags": ["python"],
        "url": "/blog/2013/12/17/python-decorator-optional-parameter.html",
        "teaser": null
      },{
        "title": "Development on a Mac versus Linux",
        "excerpt":"I love the Mac computing experience. Their laptop hardware, like their phones, feel solid and elegant. OSX usability is excellent, though it is myopically geared towards the lowest common denominator of user. For most tasks, I appreciate that trade-off of affordability versus advanced power features. But not when I’m doing...","categories": [],
        "tags": ["osx","linux"],
        "url": "/blog/2013/12/27/dev-osx-vs-linux.html",
        "teaser": null
      },{
        "title": "Saving for Retirement as a Software Engineer",
        "excerpt":"Take 100 young Americans starting out at age 25. By age 65, one will be rich and four will be financially independent. The remaining 95 will reach the traditional retirement age unable to self-sustain the lifestyle to which they have become accustomed. - The Bogleheads’ Guide to Investing This is...","categories": [],
        "tags": ["401k","reading-list"],
        "url": "/blog/2014/01/01/saving-for-retirement-as-a-software-engineer.html",
        "teaser": null
      },{
        "title": "Print to the console in Python without UnicodeEncodeErrors",
        "excerpt":"I can’t believe I just found out about this! If you use Python with unicode data, such as Django database records, you may have seen cases where you print a value to the console, and if you hit a record with an extended (non-ascii) character, your program crashes with the...","categories": [],
        "tags": ["python"],
        "url": "/blog/2014/01/12/python-unicode-console-output.html",
        "teaser": null
      },{
        "title": "Python script to delete merged git branches",
        "excerpt":"One of the great things about git is how fast it is. You can create a new branch, or switch to another branch, almost as fast as you can type the command. This tends to lower the impedance of branching. As a result, many individuals and teams will naturally converge...","categories": [],
        "tags": ["git","python"],
        "url": "/blog/2014/01/20/git-delete-merged-branches.html",
        "teaser": null
      },{
        "title": "Limiting Project Scope and Optimizing for Shipability",
        "excerpt":"Observe that for the programmer, as for the chef, the urgency of the patron may govern the scheduled completion of the task, but it cannot govern the actual completion. An omelette, promised in two minutes, may appear to be progressing nicely. But when it has not set in two minutes,...","categories": [],
        "tags": ["process","reading-list"],
        "url": "/blog/2014/02/09/limiting-scope-and-optimizing-for-shipability.html",
        "teaser": null
      },{
        "title": "Celery fail silently context manager",
        "excerpt":"Celery ships with an configuration option called CELERY_ALWAYS_EAGER which causes all tasks to be executed immediately instead of being asynchronously executed on workers. This can be very useful for unit tests. Instead of running a real message queue and separate worker processes, your unit tests can execute all in one...","categories": [],
        "tags": ["python","celery"],
        "url": "/blog/2014/02/25/celery-fail-silently-context-manager.html",
        "teaser": null
      },{
        "title": "Speed up your Vagrant NFS shares with cachefilesd",
        "excerpt":"Most web based tech startups are deploying to cloud hosted Linux machines. At the same time, only a small percentage of engineers actually run Linux on their development desktops. Enter Vagrant, an easy way to provision local Linux development environments in a virtual machine. At my current startup, we’re using...","categories": [],
        "tags": ["vagrant"],
        "url": "/blog/2014/03/09/vagrant-cachefilesd.html",
        "teaser": null
      },{
        "title": "Multi-level argparse in Python (parsing commands like git)",
        "excerpt":"It’s a common pattern for command line tools to have multiple subcommands that run off of a single executable. For example, git fetch origin and git commit --amend both use the same executable /usr/bin/git to run. Each subcommand has its own set of required and optional parameters. This pattern is...","categories": [],
        "tags": ["python"],
        "url": "/blog/2014/03/21/python-multilevel-argparse.html",
        "teaser": null
      },{
        "title": "Reload Python inside uWSGI as fast as humanely possible",
        "excerpt":"The Django development web server you get when you execute ./manage.py runserver optimizes for one thing; fast hot reloading when you change your Python code. It does almost nothing else well, by design. DO NOT USE THIS SERVER IN A PRODUCTION SETTING. It has not gone through security audits or...","categories": [],
        "tags": ["python","uwsgi"],
        "url": "/blog/2014/03/30/uwsgi-python-reload.html",
        "teaser": null
      },{
        "title": "Loading classes from modules with reflection in Python (imp module)",
        "excerpt":"For a dynamic language, it’s more difficult than it needs to be to import a module dynamically in Python. It’s very easy to just from foo import bar, but what if you want to load a list of things and all you have is a string representation of each one,...","categories": [],
        "tags": ["python"],
        "url": "/blog/2014/04/23/python-imp-examples.html",
        "teaser": null
      },{
        "title": "Better debugging through healthy living",
        "excerpt":"Debugging code is more of an art than a science. It’s an art form that you will have plenty of time to practice as a software engineer. Reworking defects in requirements, design, and code consumes 40-50% of the total cost of software development. - Improving Software Productivity Fallacies about bugs...","categories": [],
        "tags": ["process","debugging","reading-list"],
        "url": "/blog/2014/05/09/better-debugging.html",
        "teaser": null
      },{
        "title": "Distributing Vagrant base boxes securely",
        "excerpt":"Vagrant is typically used to provide local, uniform and repeatable development virtual machines. Repeatable is given little importance in the documentation, but since I’ve been using vagrant, I’ve been surprised at just how often I end up destroying and re-creating my boxes. Why custom base boxes Our typical provisioning takes...","categories": [],
        "tags": ["vagrant"],
        "url": "/blog/2014/05/18/vagrant-authenticated-private-box-urls.html",
        "teaser": null
      },{
        "title": "Rich client side web apps gone too far!",
        "excerpt":"I have seen some Javascript in my time… I’ve been getting paid to write web apps using Javascript for about 12 years. I wrote a single page web based email client in 2003, years before the launch of Gmail. I wrote a javascript instant message client for IE 5.5. I...","categories": [],
        "tags": ["web","reading-list","newboss"],
        "url": "/blog/2014/05/30/rich-client-side-web-apps-gone-too-far.html",
        "teaser": null
      },{
        "title": "Debugging an IE7 browser crash (manual git bisect)",
        "excerpt":"Every once in a while, you have to put in a heroic effort to diagnose a bug. When you finally figure it out, you want to run around the office singing “We are the champions”, even if it turns out to be a trivial issue. Because that doesn’t mean it...","categories": [],
        "tags": ["ie7","javascript","git"],
        "url": "/blog/2014/06/20/debugging-ie7-crashes.html",
        "teaser": null
      },{
        "title": "Enabling SOLR autocommit with a custom Haystack backend",
        "excerpt":"By default Django Haystack makes updates to your Solr index available for searching immediately. It does this in the simplest way possible, it commits every single update individually. That can be quite slow. I have an index with 35 million records, and under heavy write load commits of 1,000 records...","categories": [],
        "tags": ["python","haystack","solr"],
        "url": "/blog/2014/07/02/haystack-solr-autocommit.html",
        "teaser": null
      },{
        "title": "Designing a Dimensional Schema for a hierarchy that can change over time",
        "excerpt":"I’ve recently been reading about dimensional schemas, aka star schemas. The whole idea seems to be to optimize for fast queries that are also simple to write, at the expense of extra storage in the form of denormalization. In contrast to standard third normal form relational database schema, there is...","categories": [],
        "tags": ["datawarehouse"],
        "url": "/blog/2014/07/18/dimensional-schema-hierarchy-bridge-slowly-changing.html",
        "teaser": null
      },{
        "title": "Creating International CSV files with Python",
        "excerpt":"You might assume that reading and writing files using the CSV format, being a simple and human-readable implementation, would be relatively pain free. You would be wrong. It turns out that even though there is a standard, many applications out there do not conform, or require their own additions and...","categories": [],
        "tags": ["csv"],
        "url": "/blog/2014/07/30/international-csv-files-python.html",
        "teaser": null
      },{
        "title": "Why software engineers should maintain a blog",
        "excerpt":"I have a few pieces of standard advice that I give to anyone starting out in software engineering. Join a startup, max out your 401k and start a blog. Why should you start blogging? Personal Branding Early on in your career, your biggest asset is your future earning potential. Aside:...","categories": [],
        "tags": ["reading-list","career"],
        "url": "/blog/2014/08/01/why-blogging.html",
        "teaser": null
      },{
        "title": "Picking a place to live in the East Bay",
        "excerpt":"My wife and I recently bought a house in the San Francisco bay area. Having no family in the area, and no real ties to any neighborhood, it was surprisingly difficult to simply pick a town. Initially we just went to open houses at random, often travelling to three or...","categories": [],
        "tags": ["housing"],
        "url": "/blog/2014/09/06/picking-a-place-to-live-east-bay.html",
        "teaser": null
      },{
        "title": "My favorite coding interview question",
        "excerpt":"Every software engineering interview I have ever participated in has involved a coding exercise. For one position, I would expect three two five separate coding tests. I’ve written previously about why every company asks these questions, and the best way to handle these as a candidate. But what makes a...","categories": [],
        "tags": ["interview"],
        "url": "/blog/2014/10/10/my-favorite-interview-question.html",
        "teaser": null
      },{
        "title": "Sync dotfiles with GitHub",
        "excerpt":"What are dotfiles? The term dotfiles refers to configuration files for various Linux or OSX utilities, primarily command line applications, which reside in your home directory and begin with a period character. Examples are .vimrc for Vim and .bashrc for Bash. Some programs have hundreds of options, granting a multitude...","categories": [],
        "tags": ["tmux","dotfiles","vim"],
        "url": "/blog/2014/11/23/dotfiles.html",
        "teaser": null
      },{
        "title": "Creating a Budget and Sticking to It",
        "excerpt":"The hardest part of doing anything is starting. If you’re someone who has delayed getting serious about retirement savings, or budgeting in general, I would encourage you to simply begin, today. I’ll describe my personal budgeting system, not because I think it’s the best system, but because it’s a place...","categories": [],
        "tags": ["finance","401k"],
        "url": "/blog/2014/11/30/pay-yourself-weekly.html",
        "teaser": null
      },{
        "title": "Thoughts on Object Oriented Class Design",
        "excerpt":"The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong In my experience, class design is an area where software engineers...","categories": [],
        "tags": ["computer-science","object-oriented"],
        "url": "/blog/2014/12/22/class-design.html",
        "teaser": null
      },{
        "title": "Topics for One on Ones",
        "excerpt":"I like to ask other managers what kind of questions they ask during their one on ones. Everyone has their own style, so I often get some interesting responses. Getting good information out of your one on one conversations is something of an art. Given the amount of time over...","categories": [],
        "tags": ["manager","reading-list","newboss"],
        "url": "/blog/2015/02/10/one-on-ones.html",
        "teaser": null
      },{
        "title": "Introducing the Software Engineering Fireside Chat Podcast",
        "excerpt":"I’m pleased to announce the first episodes of the Software Engineering Fireside Chat podcast are available for download. Along with my colleagues Scott Lobdell and Jordan Eldredge, we are going to be talking about the tech startup scene in the Bay Area. Instead of making this a purely technical podcast,...","categories": [],
        "tags": ["podcast"],
        "url": "/blog/2015/03/27/software-engineering-fireside-chat.html",
        "teaser": null
      },{
        "title": "Lessons Learned at My Most Recent Job",
        "excerpt":"Today is my first day of “unemployment” in the last 12 years. I’m switching jobs, soon to start at NerdWallet. This time, I decided to take a couple of weeks off in between to reset and reflect. Here are some thoughts from my last job. Work (only) on projects with...","categories": [],
        "tags": ["newboss"],
        "url": "/blog/2015/04/06/lessons-learned-job.html",
        "teaser": null
      },{
        "title": "Docker/OSX Quickstart (not grokking docker yet? start here)",
        "excerpt":"Docker has only been around since 2013, but it seems like it’s all over my Twitter feed and RSS reader. I’ve gone trough the “Hello world” example in the past, but never felt like I really understood either the value proposition, or exactly how it works. This week, I had...","categories": [],
        "tags": ["docker"],
        "url": "/blog/2015/04/11/docker-osx-quickstart.html",
        "teaser": null
      },{
        "title": "Book Review - Leadership and Self Deception",
        "excerpt":"This is a review of Leadership and Self-Deception: Getting Out of the Box by The Arbinger Institute. Summary You’re “in the box” when you’re viewing others around you as mere objects and not as people. Other people respond primarily to how to see them, not how to act towards them....","categories": [],
        "tags": ["book-review","newboss"],
        "url": "/blog/2015/04/13/leadership-and-self-deception.html",
        "teaser": null
      },{
        "title": "Reading List (my common references)",
        "excerpt":"This post is list of articles, blogs and other resources that I commonly reference. Books Rocket Surgery Made Easy - Usability testing The Bogleheads’ Guide to Investing - Saving for retirement Leadership and Self-Deception - Management Managing Humans - Management Getting Things Done - Organization Code Complete - Coding The...","categories": [],
        "tags": ["reading-list"],
        "url": "/blog/2015/04/13/reading-list.html",
        "teaser": null
      },{
        "title": "REST API Design",
        "excerpt":"REST APIs operate over HTTP, use standard verbs like GET and POST, expose a common-sense URL structure and return resources in a well-defined format, typically JSON. In spite of that simple definition, there is a wide degree of latitude when designing a REST API to fuck it up. Don’t do...","categories": [],
        "tags": ["api"],
        "url": "/blog/2015/04/24/rest-api-design.html",
        "teaser": null
      },{
        "title": "Flask absolute import bug in debug mode",
        "excerpt":"Ran into a vexing issue this week. I was getting errors trying to use absolute imports in a new flask app: Traceback (most recent call last): File \"nw_api/example/run.py\", line 5, in &lt;module&gt; from nw_api.docgen.base import DocumentationGenerator ImportError: No module named nw_api.docgen.base I was able to use relative imports (i.e. from...","categories": [],
        "tags": ["python","flask"],
        "url": "/blog/2015/06/12/flask-werkzeug-reloader-python-dash-m.html",
        "teaser": null
      },{
        "title": "Python Mock Cookbook",
        "excerpt":"The python mock library is one of the awesome things about working in Python. No matter what code you’re unit testing, it’s possible to mock out various pieces with very little test code. That being said, it’s sometimes difficult to figure out the exact syntax for your situation. I attribute...","categories": [],
        "tags": ["python","testing"],
        "url": "/blog/2015/06/25/python-mocking-cookbook.html",
        "teaser": null
      },{
        "title": "How to write effective unit tests",
        "excerpt":"Unit tests differs from integration testing primarily in terms of what you’re testing for. Where as with integration tests, you testing for whether the entire system behaves as expected when put together, with unit tests, your goal is simply to enable refactoring with confidence. Ideally, when you refactor something and...","categories": [],
        "tags": ["testing"],
        "url": "/blog/2015/07/02/what-to-unit-test.html",
        "teaser": null
      },{
        "title": "Customizing Celery with Task Arguments",
        "excerpt":"Celery is an awesome distributed asynchronous task system for Python. It’s great out of the box, but a couple of times I have needed to customize it. Specifically, I want to be able to define behavior based on a new apply_sync arguments. Also, it would be nice to be able...","categories": [],
        "tags": ["celery"],
        "url": "/blog/2015/07/24/custom-celery-arguments.html",
        "teaser": null
      },{
        "title": "Getting Started with Sphinx docs",
        "excerpt":"Everyone knows that you should write documentation for your code. Writing documentation actually is not that hard. Like any type of writing, the hardest part is beginning. So how do you begin writing documentation for your Python projects? Enter Sphinx Sphinx is the de-facto standard in the Python community for...","categories": [],
        "tags": ["python"],
        "url": "/blog/2015/08/14/getting-started-with-sphinx.html",
        "teaser": null
      },{
        "title": "Per-OS virtual environments in Python",
        "excerpt":"A common setup for web development is to have a virtual machine on your Mac running all your code. Typically this involves a shared folder containing the code, so that you can edit the file locally on your Mac, but it’s also available to the guest OS to execute. At...","categories": [],
        "tags": ["python"],
        "url": "/blog/2015/09/11/virtual-env-osx.html",
        "teaser": null
      },{
        "title": "Optimizing Flask client tests",
        "excerpt":"When writing Python integration tests, it’s useful to put slow code such as database access in a setUpClass method, so that they are only executed once for the entire unittest.TestCase. Recently, when writing integration tests for a Flask API, I wanted to make an API call once for the TestCase,...","categories": [],
        "tags": ["python","flask"],
        "url": "/blog/2015/09/18/flask-test-client-setupclass.html",
        "teaser": null
      },{
        "title": "Flask-Admin Edit One To Many Fields from the List View",
        "excerpt":"I got to play with Flask-Admin for the first time this week. Compared with Django admin, it’s very extensible, though the default UI is pretty ugly. In any case, I ran into one particular challenge that took a good deal longer to figure out than it should have. Specifically, making...","categories": [],
        "tags": ["python","flask"],
        "url": "/blog/2015/09/25/flask-admin-list-edit-one-to-many.html",
        "teaser": null
      },{
        "title": "Getting Engineering Involved Early in a Project",
        "excerpt":"Agile requirements are ideally visual and should be barely sufficient, i.e. the absolute minimum required to enable development and testing to proceed with reasonable efficiency. - Agile Principle #4 Some engineering teams don’t want to think about a feature or a product until a specification has been written. Their ideal...","categories": [],
        "tags": ["process","newboss","product-management"],
        "url": "/blog/2015/10/09/getting-eng-involved-early.html",
        "teaser": null
      },{
        "title": "Death to Meetings (and other alternatives)",
        "excerpt":"What percentage of your time at work do spend in meetings? If you’re a middle manager, it’s likely about 35% of your time, and if you’re in upper management, it can be a whopping 50%. What’s worse is how unproductive these meetings usually are. - themuse.com Meetings are a fact...","categories": [],
        "tags": ["process","reading-list","meetings","manager","newboss"],
        "url": "/blog/2015/10/16/death-to-meetings.html",
        "teaser": null
      },{
        "title": "The Role of Specifications in Agile",
        "excerpt":"It’s commonly said that everyone does Agile differently. In my experience, it’s also common to do basically whatever you want and call it Agile. It can be useful to occasionally reset and examine what canonical Agile recommends. For software specifications, it’s pretty simple. Do just enough, no more. Why do...","categories": [],
        "tags": ["process"],
        "url": "/blog/2015/11/09/specifications-in-agile.html",
        "teaser": null
      },{
        "title": "Case Study in Documentation Usability - Django vs. Flask/SQLAlchemy",
        "excerpt":"When I’m evaluating new open source projects, there are a few things I look for. I look for how many stars they have on GitHub. I look at their issues in GitHub. If you are not on GitHub, I’m basically not interested. Finally, I look at their documentation. But how...","categories": [],
        "tags": ["documentation"],
        "url": "/blog/2015/11/13/documentation-usability-case-study.html",
        "teaser": null
      },{
        "title": "Comparison of Chat Message Platforms",
        "excerpt":"If you’re writing a chat app, the first big question to consider is whether you are going to write the actual chat backend. Why would you want to? You would get complete control over the functionality, reliability and interface. Why would you not want to? Well, persistent socket systems that...","categories": [],
        "tags": [],
        "url": "/blog/2015/12/04/chat-message-platforms.html",
        "teaser": null
      },{
        "title": "Interoperable AES256 encryption between CryptoJS, PyCrypto and CryptoSwift",
        "excerpt":"Even though AES256 is a standard, there are enough choices left to implementing libraries to make cross platform encrypting and decrypting tricky. In particular, getting Javascript, Python and Swift code that could all encrypt to the same ciphertext using the same plaintext and keys, and then successfully decrypt back to...","categories": [],
        "tags": [],
        "url": "/blog/2016/01/29/cryptojs-pycrypto-ios-aes256.html",
        "teaser": null
      },{
        "title": "QA 101 - How to Write a Bug Report",
        "excerpt":"The purpose of a bug report is to enable an engineer to fix the bug. In companies with no dedicated testing/QA resources, bug reports get generated by many different people. Product managers may encounter a bug when validating a new release. Customer support may be talking to a user who...","categories": [],
        "tags": ["reading-list","qa","product-management"],
        "url": "/blog/2016/02/26/QA-101-How-to-write-a-bug-report.html",
        "teaser": null
      },{
        "title": "Abstracting away session handling in Flask/SQLAlchemy",
        "excerpt":"Having used the Django ORM for years, I appreciate the power of the SQLAlchemy ORM. Many complicated SQL queries that are not possible to express in a single Django QuerySet are possible in SQLAlchemy. But one thing I do not appreciate is the requirement to explicitly handle sessions all the...","categories": [],
        "tags": [],
        "url": "/blog/2016/03/31/flask-sqlalchemy-sessionless.html",
        "teaser": null
      },{
        "title": "Designing for the Mental Model",
        "excerpt":"Software is typically more complicated under the hood than it looks on the surface. A good product presents a simple and consistent user interface. Ideally, the implementation is also simple and consistent with the story the UI is telling. But that’s often not possible. If the implementation is complex, if...","categories": [],
        "tags": ["product-management"],
        "url": "/blog/2016/04/15/mental-models.html",
        "teaser": null
      },{
        "title": "What makes a compelling product?",
        "excerpt":"Words matter. When we use the term “product”, what do we mean? Are we talking about the same thing? In the context of tech startups, we often mean product with a capital “P” - as in Minimum Viable Product. While there is a lot of discussion about what constitutes the...","categories": [],
        "tags": ["product-management"],
        "url": "/blog/2016/04/21/what-makes-a-product.html",
        "teaser": null
      },{
        "title": "Using Points vs Hours for Estimates",
        "excerpt":"One of the key innovations of Agile is that estimates should NOT be in hours, but in points. But it doesn’t just intuitively make sense. As a result, many teams resist using points. This is one of the reasons why for teams new to Agile, I always recommend that you...","categories": [],
        "tags": ["manager"],
        "url": "/blog/2016/05/13/agile-points-vs-hours.html",
        "teaser": null
      },{
        "title": "SQLAlchemy - Storing Application Version Strings",
        "excerpt":"One example of when you might need to store application version numbers in your database is when you’re tracking which users have which versions of a mobile app installed. In that case, you may want to preserve the ability to easily sort the version numbers, so you can answer questions...","categories": [],
        "tags": [],
        "url": "/blog/2016/05/27/sqlalchemy-version-string-column-type.html",
        "teaser": null
      },{
        "title": "Management 101",
        "excerpt":"Coming off some annual management training, I realize that I need to write some of these learnings down, in order to actually internalize them. This is mostly a reference for me. Getting work done through others Most of time, engineers in particular are easy to delegate to. Often they know...","categories": [],
        "tags": ["manager","newboss"],
        "url": "/blog/2016/06/24/management-101.html",
        "teaser": null
      },{
        "title": "PyGithub Quickstart Examples",
        "excerpt":"PyGithub is the most popular GitHub API SDK for Python. Their documentation is very light on examples. They seem to think this is fine. Prime candidate for the new Stack Overflow Documentation site! In the meantime, I thought I would share my example code. These took me an hour of...","categories": [],
        "tags": [],
        "url": "/blog/2016/07/22/pygithub-examples.html",
        "teaser": null
      },{
        "title": "Cross Functional Scrum Teams",
        "excerpt":"Teams are also cross-functional; Team members must have all of the skills necessary to create an increment of work. - Scrum Guide I’ve been doing scrum for maybe eight years. When that first team enthusiastically adopted sprints, points and grooming, our stack was Java backends and ColdFusion on the front-end,...","categories": [],
        "tags": ["scrum","newboss"],
        "url": "/blog/2016/10/16/cross-functional-scrum-teams.html",
        "teaser": null
      },{
        "title": "Tiger Team Survival Guide",
        "excerpt":"A tiger team is a diversified group of experts brought together for a single project, need, or event. They are usually assigned to investigate, solve, build, or recommend possible solutions to unique situations or problems. They are almost always populated with mature experts who know what’s at stake, what needs...","categories": [],
        "tags": ["manager"],
        "url": "/blog/2016/11/04/tiger-team-survival-part-1.html",
        "teaser": null
      },{
        "title": "Deploying React Native apps with Buddy Build",
        "excerpt":"Buddy Build is a great tool for getting your app out to physical devices, whether that is during development, or in production. Their tool is fairly agnostic to frameworks. For example, their documentation is nearly devoid of mentions of React Native, but it’s actually quite simple to get a React...","categories": [],
        "tags": ["app","react-native"],
        "url": "/blog/2016/11/18/react-native-buddy-build.html",
        "teaser": null
      },{
        "title": "React Native Multiple Release Variants",
        "excerpt":"By default, React Native gives you a debug variant and a release variant. In debug mode, the app connects to a running packager service, and enables various __DEV__ checks that could slow down performance. In release mode, the JavaScript, CSS and JSX are bundled into the app itself, and optimizations...","categories": [],
        "tags": [],
        "url": "/blog/2016/12/09/react-native-android-staging-variant.html",
        "teaser": null
      },{
        "title": "Appium + React Native Quickstart",
        "excerpt":"Appium is a great framework for automated functional testing of mobile apps. But it’s very general purpose, meaning that there is relatively little documentation for specific mobile app architectures. It’s also fairly complicated. Being “Selenium for mobile”, and leveraging a lot of existing Selenium architecture, it requires a lot of...","categories": [],
        "tags": [],
        "url": "/blog/2017/01/06/appium-react-native-quickstart.html",
        "teaser": null
      },{
        "title": "Long Term Software Estimates",
        "excerpt":"False scheduling to match a patron’s desired date is more common in our discipline than elsewhere in engineering because it is VERY DIFFICULT to make a vigorous, plausible, job-risking defense of an estimate that is derived by no quantitative method, supported by little data, and brought about by the hunches...","categories": [],
        "tags": ["manager","newboss"],
        "url": "/blog/2017/02/03/software-long-term-estimates.html",
        "teaser": null
      },{
        "title": "Getting Started with AWS Device Farm and Python Appium",
        "excerpt":"AWS Device Farm is a service for running mobile app integration tests against a suite of physical devices. The Amazon documentation is exhaustive, and they support many different API clients. However, the documentation does not have a quick start example for thing most people are going to want to do...","categories": [],
        "tags": [],
        "url": "/blog/2017/03/14/getting-started-aws-device-farm-appium-python.html",
        "teaser": null
      },{
        "title": "Best Practices for Meetings",
        "excerpt":"Every team meeting needs a primary owner. If you are the owner of the meeting, it’s your responsibility to make sure that this is a great use of team time. This only applies to team meetings with 3+ people, not 1:1s. Before the Meeting Make attendance optional Not everyone needs...","categories": [],
        "tags": ["meetings","manager","newboss"],
        "url": "/blog/2017/03/31/meeting-best-practices.html",
        "teaser": null
      },{
        "title": "Minimizing Impact of Interruptions on Engineers",
        "excerpt":"Any software engineer knows the feeling of being “in the flow”, or “in the zone”. It’s when you get a large block of uninterrupted time to just code. These periods are rare, super productive and morale boosting. Importance of Flow During single-minded work time, people are ideally in a state...","categories": [],
        "tags": ["meetings","manager"],
        "url": "/blog/2017/04/14/engineering-meeting-strategies.html",
        "teaser": null
      },{
        "title": "React Native Six Months In",
        "excerpt":"NerdWallet released our first cross platform mobile app at the start of 2017, about six months ago. We choose to use React Native, and we are still using 99% of the same code base for the iOS and Android apps. What have we learned so far? Initial reasoning We initially...","categories": [],
        "tags": [],
        "url": "/blog/2017/05/26/react-native-six-months-in.html",
        "teaser": null
      },{
        "title": "Trading off Value, Quality and Time",
        "excerpt":"The traditional Iron Triangle tries to explain in graphical form how software projects need to make hard tradeoffs between scope, schedule and resources. This is alternatively referred to as the Time-Cost-Quality Triangle, Triple Constraints, the Triangle of Balance, or the Iron Triangle. Many Triangles There are many variants. A common...","categories": [],
        "tags": ["manager","newboss","product-management"],
        "url": "/blog/2017/07/13/value-quality-time.html",
        "teaser": null
      },{
        "title": "Estimating Epic Stories in Three Steps",
        "excerpt":"In Agile, an Epic story is a potentially large placeholder story in the backlog. Typically they will be broken down into manageable stories during grooming before they are worked on. But if you need to estimate an Epic before breaking it down, how might you do that? Use Story Points...","categories": [],
        "tags": ["manager","product-management"],
        "url": "/blog/2017/08/28/epic-story-estimation.html",
        "teaser": null
      },{
        "title": "Saying the Same Thing Multiple Times",
        "excerpt":"To communicate something to an organization of people, you need to repeat yourself. The more people involved, the more you will need to repeat yourself if you want everyone to really hear it. Why? Not everyone will see the communication. Even if they see it, it may not register with...","categories": [],
        "tags": ["manager","product-management"],
        "url": "/blog/2017/09/11/say-it-multiple-times.html",
        "teaser": null
      },{
        "title": "Two (more) Weeks in QA",
        "excerpt":"Due to our regular QA engineer being out on vacation, I once again has the opportunity to do a tour of duty in QA. This time, for a big mobile release. I previously wrote about a similar experience eight (!) years ago, so I thought I would once again write...","categories": [],
        "tags": ["qa"],
        "url": "/blog/2017/10/06/two-more-weeks-in-qa.html",
        "teaser": null
      },{
        "title": "Tracking Your Time",
        "excerpt":"I’ve been using a time tracking tool pretty consistently for the last year to categorize all of my time spent at work. It started with wondering how much time I was spending in meetings. Eventually I found that it was easier to keep up with than I thought, so I...","categories": [],
        "tags": [],
        "url": "/blog/2017/11/29/tracking-your-time.html",
        "teaser": null
      },{
        "title": "Don't Split the Team Until You Have To",
        "excerpt":"If you have a team that is unable to work effectively, there could be any number of causes. If you’re thinking about splitting the team into two or more teams as a way to solve the problem, my advice is to fix the root cause of the problem instead. Splitting...","categories": [],
        "tags": ["manager"],
        "url": "/blog/2017/12/19/dont-split-the-team.html",
        "teaser": null
      },{
        "title": "Teams Working at a Sustainable Pace",
        "excerpt":"How do you make sure that your team is not signing up for too much? There is no substitute for a well functioning team that has built trust over time. When the product owner and the technical lead have been through war together, they can right size almost any project...","categories": [],
        "tags": ["manager","product-management"],
        "url": "/blog/2018/01/05/sustainable-pace.html",
        "teaser": null
      },{
        "title": "How to Give 360 Peer Feedback",
        "excerpt":"Managers have a lot of practice giving people feedback. Most other engineers are only asked to give formal peer feedback once or twice a year. These are known as 360 reviews. From a management perspective, the free text feedback portion is the most important part. But, often the content in...","categories": [],
        "tags": ["manager","reviews"],
        "url": "/blog/2018/01/25/peer-feedback.html",
        "teaser": null
      },{
        "title": "Product Management 101",
        "excerpt":"This is intended as a guide for new front-line product managers on my team. It could also double as an introduction for people brand new to the discipline. My views are inexorably colored by working as an engineer exclusively on Agile teams at small companies. Basic Hygiene From the perspective...","categories": [],
        "tags": ["product-management"],
        "url": "/blog/2018/02/02/product-management-101.html",
        "teaser": null
      },{
        "title": "How to Handle Layoffs as a Manager",
        "excerpt":"As apposed to firing someone for performance reasons, layoffs are typically for financial reasons. They are part of a natural cycle of growth and restructuring. If you are given the opportunity to have the actual termination conversation with the people on your team, I suggest you take it. It will...","categories": [],
        "tags": ["manager"],
        "url": "/blog/2018/05/08/laying-someone-off.html",
        "teaser": null
      },{
        "title": "Interviewing as a Manager",
        "excerpt":"For a recent round of interviews, I talked to about 50 companies. Of those, 24 moved on to phone screens. Just seven resulted in on-site interviews, and only three of those companies made offers. The whole process took about six weeks. Preparation I started by purchasing the canonical Cracking the...","categories": [],
        "tags": ["manager","interview"],
        "url": "/blog/2018/05/28/interviewing-as-a-manager.html",
        "teaser": null
      },{
        "title": "What I Learned at My Last Job",
        "excerpt":"At my last job, I learned what it really means to be a manager. For the first time, I managed other managers, and I had to build a team by hiring. I’ve added those things to my resume. But I also picked up little points of wisdom along the way....","categories": [],
        "tags": ["career","newboss"],
        "url": "/blog/2018/06/08/what-i-learned-last-job.html",
        "teaser": null
      },{
        "title": "Writing Your Self Review",
        "excerpt":"Many companies ask employees to write both self-reviews and 360 reviews of their coworkers at least once a year. Especially for self-reviews, you should put a lot of time into coming up with specifics. For example, you might discuss how quickly you were able to troubleshoot a production issue. You...","categories": [],
        "tags": ["manager","reading-list","career"],
        "url": "/blog/2018/06/29/writing-your-self-review.html",
        "teaser": null
      },{
        "title": "Getting Started Estimating with Story Points",
        "excerpt":"I’ve previously written about why estimating work in story points versus hours can be useful. Assuming you’re convinced, how do you actually begin? My advice is to first educate the team on the principles involved, and then just dive in with a basic grooming session. Expect growing pains! If you...","categories": [],
        "tags": ["manager","process","scrum","workshop"],
        "url": "/blog/2019/01/30/getting-started-with-story-points.html",
        "teaser": null
      },{
        "title": "The Programmer Mindset - Main Debug Loop",
        "excerpt":"When you’ve been coding for more than twenty years, it can be difficult to recapture beginner’s mind, and explain how to think like a programmer to someone who is new to it. I remember an incident in college, when I had been coding for a comparatively short time, that crystalized...","categories": [],
        "tags": ["reading-list","process","testing"],
        "url": "/blog/2019/06/26/main-debug-loop.html",
        "teaser": null
      },{
        "title": "How to Choose a Team Size",
        "excerpt":"Force Concentration and Team Size Force Concentration – Mass the effects of overwhelming combat power at the decisive place and time. Synchronizing all the elements of combat power where they will have decisive effect on an enemy force in a short period of time is to achieve mass. Massing effects,...","categories": [],
        "tags": ["manager","process","scrum"],
        "url": "/blog/2019/08/05/eye-of-sauron-force-concentration.html",
        "teaser": null
      },{
        "title": "Transitioning Teams as a Manager",
        "excerpt":"The manager should try to minimize that uncertainty for the team. Still, it’s natural for people to evaluate whether they still want to be on the team. Why? Change is Scary Think about times in life when large changes happen. Maybe it’s the death of a family member. Maybe it’s...","categories": [],
        "tags": ["manager","newboss"],
        "url": "/blog/2019/09/03/transistioning-teams-as-a-manager.html",
        "teaser": null
      },{
        "title": "💯 The Agile Scorecard -- 12 Questions",
        "excerpt":"I want to put a stake in the ground for an opinionated, simple, reductionist rubric that covers the basics of what it means to be an Agile team. In 2000, Joel Spolsky wrote The Joel Test: 12 Steps to Better Code. It’s an opinionated, simple, reductionist rubric for how good...","categories": [],
        "tags": ["agile","scrum","process","scorecard"],
        "url": "/blog/2019/10/04/the-agile-scorecard-12-questions.html",
        "teaser": null
      },{
        "title": "Trust Eats Process for Lunch",
        "excerpt":"Agile is a great framework for new teams to bootstrap initial expectations about roles and responsibilities. As the team progresses from forming through storming, norming, and performing, success depends on evolving those baseline expectations into real, earned trust. No process can fix a team where trust does not exist. Once...","categories": [],
        "tags": ["agile","manager","process","reading-list","product-management"],
        "url": "/blog/2020/08/20/trust-eats-process-for-lunch.html",
        "teaser": null
      },{
        "title": "Growing an Engineering Manager",
        "excerpt":"I’m always looking for prospective new engineering managers. As a manager, having bench strength in this area is useful in case there is a sudden vacancy due to promotion, attrition or internal movement. Sometimes, the right backup is an engineer already on the team. The Ideal Candidate When I think...","categories": [],
        "tags": ["manager","playbook"],
        "url": "/blog/2020/10/12/growing-an-engineering-manager.html",
        "teaser": null
      },{
        "title": "Going Fully Remote as an Engineering Manager",
        "excerpt":"Many tech companies have been working remote for most of the year due to COVID, expecting to return to the office sometime in 2021. I have recently learned that my company will not be returning to regular office work. This announcement marked a mind shift for me, where I need...","categories": [],
        "tags": ["remote","manager"],
        "url": "/blog/2020/11/17/engineering-manager-going-fully-remote.html",
        "teaser": null
      },{
        "title": "Killing Features and Complexity to Reduce “KTLO”",
        "excerpt":"In software, there is a term of art for work that’s required to “keep the lights on”, aka “KTLO”. It’s defined as work that’s NOT adding new product value. It includes traditional “on-call” activities, such as responding to pages, and remediating outages. It also includes fixing bugs, and resolving customer...","categories": [],
        "tags": ["ktlo","manager"],
        "url": "/blog/2021/03/15/killing-features-and-complexity-to-reduce-KTLO.html",
        "teaser": null
      },{
        "title": "How to Escalate",
        "excerpt":"In the context of business and organizations, escalations are when more people are brought into a decision to resolve an issue. Note: no fictional characters were harmed in the writing of this blog post. Example Escalations What the organization structure looks like dictates how to properly escalate an issue. Different...","categories": [],
        "tags": ["manager","process","playbook"],
        "url": "/blog/2021/04/05/escalations.html",
        "teaser": null
      },{
        "title": "Google Sheets for Managers",
        "excerpt":"Spreadsheets “for managers” is a tongue-in-cheek way of saying that none of these features are particularly impressive to have mastered. But, they will help you greatly in almost any knowledge worker role. This blog post has a companion Google Sheet playground, with examples. Also, I’m not attempting to be exhaustive...","categories": [],
        "tags": ["manager"],
        "url": "/blog/2021/04/26/google-sheets-for-managers.html",
        "teaser": null
      },{
        "title": "Setting Direction: Define a Vision",
        "excerpt":"For a new team just starting to work together, an existing team starting on a new mission, or a team that is not excited about their work, going through the exercise of creating a formal vision can get them energized and aligned. Even teams that are executing well towards an...","categories": [],
        "tags": ["manager","reading-list","playbook"],
        "url": "/blog/2022/02/14/define-a-vision.html",
        "teaser": null
      },{
        "title": "Headcount Tracking for a Medium Sized Org using a Spreadsheet",
        "excerpt":"While the simple question of “how many people work here?” should be easy to answer, even slightly more nuanced questions like “who is on which team?”, or “how many people have we hired that have not started yet on these three teams?” can quickly turn into one-off manual fact finding...","categories": [],
        "tags": ["managers","process","template"],
        "url": "/blog/2022/03/08/headcount-spreadsheet-individuals.html",
        "teaser": null
      },{
        "title": "The Software Engineer's Easy Mode Guide to US Tax Withholdings",
        "excerpt":"For years I’ve struggled with trying to minimize the difference between taxes withheld and taxes owed. It’s quite complex, with salary, bonus, and RSUs changing every year. That is, until I had a breakthrough. The year after I made quarterly estimated payments for the first time, it finally clicked. Note:...","categories": [],
        "tags": ["personal-finance"],
        "url": "/blog/2022/03/16/easy-mode-guide-to-us-tax-withholdings.html",
        "teaser": null
      },{
        "title": "How to run a Retrospective",
        "excerpt":"A retrospective is a team meeting following a sprint, a quarter, or a specific project. The team talks about what went well, what didn’t go well, and what they could do better. Everyone has a chance to voice their ideas on how to improve the team. Over time, the team...","categories": [],
        "tags": ["process","agile","manager","scorecard"],
        "url": "/blog/2022/04/22/how-to-run-a-retrospective.html",
        "teaser": null
      },{
        "title": "How I use OmniFocus Get Things Done",
        "excerpt":"Updated June, 2022. Getting Things Done is a personal organizational system for keeping track of todo items, or tasks. Being a manager can mean being bombarded by asks, notes, ideas and action items all day. Not to mention emails, Slack messages, and even in-person requests. Sometimes, you have a great...","categories": [],
        "tags": ["reading-list","gtd","manager"],
        "url": "/blog/2022/06/06/how-i-get-things-done-with-omnifocus.html",
        "teaser": null
      },{
        "title": "How to Run a Zoom All Hands",
        "excerpt":"All Hands are a key tool for communicating big points, giving the audience the best chance to hear and internalize those ideas, and creating transparency. The ideal All Hands also generates enthusiasm, though this is easier said than done with Zoom. If you’re a leader of an organization, you should...","categories": [],
        "tags": ["manager","checklist"],
        "url": "/blog/2022/07/22/how-to-run-a-zoom-all-hands.html",
        "teaser": null
      },{
        "title": "Thanksgiving Epic Estimation Workshop",
        "excerpt":"I’ve given this Agile planning workshop a few times. It’s Thanksgiving themed, because that is the time of year when we are making plans for the next year. It can help decide what some reasonable commitments are for large, multiple quarter efforts. Send out these pre-reads ahead of time: Getting...","categories": [],
        "tags": ["process","scrum","workshop"],
        "url": "/blog/2022/08/24/thanksgiving-epic-estimation-workshop.html",
        "teaser": null
      },{
        "title": "Setting Direction: Create a Strategy",
        "excerpt":"What is strategy, versus vision or mission? Is a business goal a strategy? It’s hard to tell whether a strategy will be successful, up front. When you’re creating a strategy, it can seem impossible to achieve. In retrospect, a good strategy seems like it was obvious, even though it was...","categories": [],
        "tags": ["manager","reading-list","template","playbook"],
        "url": "/blog/2022/09/27/create-a-strategy.html",
        "teaser": null
      },{
        "title": "80 Percent is Done",
        "excerpt":"It was a meeting with my design and product partners. Just the day before, we had been brainstorming ideas for the strategy for the coming year. In the 24 hours between, I had written up a draft of a strategy. It was more to gather my thoughts than anything else....","categories": [],
        "tags": ["manager","productivity"],
        "url": "/blog/2022/10/21/80-percent-is-done.html",
        "teaser": null
      },{
        "title": "What are Healthy Relationships?",
        "excerpt":"Five years into my career, I had gone from being one of the few engineers at the company, to being the expert on a medium-sized engineering team. If someone misunderstood how something worked, I could list all the ways there were wrong. If someone had a product idea, I could...","categories": [],
        "tags": ["manager"],
        "url": "/blog/2022/11/18/what-are-healthy-relationships.html",
        "teaser": null
      },{
        "title": "My Expectations for Managers",
        "excerpt":"When working with a new manager that’s reporting to me for the first time, I like to share this document. Hopefully, it helps us get on the same page about our shared expectations for your role. I hold myself to the same bar on all of these – you can...","categories": [],
        "tags": ["manager","newboss"],
        "url": "/blog/2022/12/21/my-expectations-for-managers.html",
        "teaser": null
      },{
        "title": "Organizational Design",
        "excerpt":"Organizational Design is how you group teams together in order to optimize for various constraints. There is no perfect organization design, only a series of trade-offs. Unless you’re a small company, how you group teams together will optimize for some dimensions and constraints over others. No organization design you choose...","categories": [],
        "tags": ["manager","director","playbook"],
        "url": "/blog/2023/01/30/organizational-design.html",
        "teaser": null
      },{
        "title": "Dependency Management Playbook",
        "excerpt":"For engineering managers, delivering projects reliably and on time is a critical part of the job. Even if everything is estimated and executed well on your team, dependencies can derail you. If you poll a group of managers on their top risks — and I have — they will come...","categories": [],
        "tags": ["manager","checklist","scorecard","playbook"],
        "url": "/blog/2023/02/17/dependency-management-playbook.html",
        "teaser": null
      },{
        "title": "How to Run Calibrations",
        "excerpt":"When there are many managers in a large organization, how do you make sure that any performance ratings, promotions, and subsequent compensation changes are fair, relative to each other? A common mechanism is for all the managers to get together, and compare notes — or “calibrate” — on their team’s...","categories": [],
        "tags": ["process","performance"],
        "url": "/blog/2023/03/28/calibrations.html",
        "teaser": null
      },{
        "title": "Burnout Playbook",
        "excerpt":"What is Burnout? Burnout is a state of poor professional mental health, where the feeling of being overwhelmed or a lack of enthusiasm impacts your effectiveness. It can be caused by a mixture of mental or physical exhaustion, lack of belief in the work, and lack of belief in yourself....","categories": [],
        "tags": ["management"],
        "url": "/blog/2023/07/21/burnout-playbook.html",
        "teaser": null
      },{
        "title": "What are the less obvious downsides of a Health Savings Plan?",
        "excerpt":"A Health Savings Accounts (HSA) lets you save money pre-tax to use for medical expenses at any time in the future. You can also invest the money if you plan to use it in the distant future, such as in retirement. It’s one of only a handful of vehicles for...","categories": [],
        "tags": ["personal-finance"],
        "url": "/blog/2023/11/01/hsa-less-obvious-downsides.html",
        "teaser": null
      },{
        "title": "Let's Work Together",
        "excerpt":"My Journey in Tech and Beyond I started coding in middle school, messing around with BASIC and writing simple programs just for fun. But things really clicked for me after Apple World 1996, where I got into web development. Something about the web—its immediacy, its interactivity—pulled me in, and I...","categories": [],
        "tags": ["newboss"],
        "url": "/blog/2025/02/28/lets-work-together.html",
        "teaser": null
      },{
        "title": "Beyond Google Sheets, Practical Airtable Workflows for Managers",
        "excerpt":"This post is a quick start guide for Airtable, focused on use cases of spreadsheets of people. It will cover row level access permissions, Interfaces, scripting, and pivot table dashboards. If you’re coming from Google Sheets, and want to up-level your spreadsheet game for some common manager tasks, this post...","categories": [],
        "tags": ["manager"],
        "url": "/blog/2026/01/07/airtable-for-managers.html",
        "teaser": null
      }]
