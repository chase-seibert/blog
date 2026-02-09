---
title: "Why Engineering Managers Should Use Claude Code for Productivity, Not Just Coding"
tags: ai productivity automation
toc: true
header:
  overlay_image: /images/header-claude-productivity.png
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "Engineering managers are uniquely positioned to use Claude Code for more than just coding. By building small libraries that connect to your productivity tools, you can automate knowledge work tasks and live in the AI-enabled future today, without waiting for vendor MCP support."
---

# A moment in time

I've been playing with Claude Code lately, but not for coding in the traditional sense. I've been using it for personal productivity, specifically as a knowledge worker. That experiment turned into a small side project, and you can see the early results here: [chase-sidekick on GitHub](https://github.com/chase-seibert/chase-sidekick).

It feels like we’re at a very specific moment in time with AI tooling. We’re somewhere between “this wasn’t possible before” and “this is completely ubiquitous.” Most of the conversation right now, especially among software engineers, is focused on how to use AI to write code faster. That’s fine, but it misses the bigger shift. The real revolution isn’t just for software engineers. It’s giving *all* knowledge workers superpowers. Think Claude Executive Assistant.

# Why engineering managers are uniquely positioned

Software engineering managers are in a prime position to take advantage of this moment. We know how to break down problems into executable steps, we can help the agents debug code, and we have the same messy knowledge work problems as everyone else. Calendars, docs, task systems, status reporting, exec summaries, etc. Claude Code turns out to be a surprisingly good tool for this. You can use it to write small libraries that connect to your tools, and then ask Claude to actually do real tasks in those tools on your behalf.

Everyone knows the future here is [MCP (Model Context Protocol)](https://modelcontextprotocol.io/). And yes, MCP is coming. At some point your AI assistant will connect to all of your tools directly. But that future isn’t evenly distributed yet. Many vendors are still building their solutions. IT departments are still trying to decide whether they’ll allow it at all. And many MCP servers that exist today are third party, thin wrappers around existing vendor REST APIs.

Even five years from now, there will still be tools that don’t support AI connections natively. OmniFocus is a great example, it still doesn’t even have an API. But Claude can figure out how to automate it with AppleScript. There is an opportunity right now to pair with AI to write your own clients, for just the operations you need, in a way that your AI client can understand. You can move to MCP when it’s available, but you don’t have to wait. You get to live in the future now.

This approach is likely to remain necessary for the foreseeable future. In some cases, it's the only option to bypass IT entirely, which may or may not be an obstacle, depending on where you work.

# User empowerment, vendors, and APIs

This leads to a broader point about user empowerment and vendors. As a user, I should be able to access an API and take actions as myself. I should be able to connect to that API using my own account without any gate keepers in the way. 

Google and Atlassian are good examples of this model. You can create personal API keys right inside the products. Slack and Zoom are, unfortunately, very good examples of the opposite. They require users to create an app in a marketplace, and then ask their IT departments to install it. Just to access data that user can access in the product. 

Sidekick is just a personal project, but I’ve gotten remarkably far with this technique in a very short amount of time. The biggest limitation I’ve hit are the API access issues above. A smaller but still real limitation is APIs that technically exist but don’t quite let you do what you want.

# Claude Code is not a chatbot

Once you get past that, the use cases start to compound quickly. Things like: download all the files linked to my calendar events for this week and generate a bullet summary for executive leadership. Or: for all teams that report to me, look up completed work across JIRA Epics for the past 30 days and generate a team accomplishments report, with kudos to specific engineers. Or: migrate Paper 1:1 docs to Confluence for my direct reports, set restricted access, and update calendar event links automatically.

This has also turned out to be a great way to learn AI-assisted coding while keeping your coding skills sharp. A lot of managers look for side projects where they can still write code and have real impact. This is it.

# Getting started

Installing Claude Code itself is straightforward. You just follow the directions on their website. You have Claude initialize a project, similar to the way git init works. One big misconception is that Claude Code is just a chatbot living inside your editor. In practice, it’s a completely different beast.

If you want to try this, start simple. Create an empty Claude Code project and ask it something like: “Create a set of scripts in language X to do Y in product Z, and then write a skill so that I can ask you to do this easily in the future.” You may be surprised how far you get, and how quickly.

# Changing your mindset

What you’re doing is co-creating reusable prompts and context with the model. Your repo will end up with multiple CLAUDE.md files. The proximity of those files to the code Claude is running strongly influences whether that context gets picked up. You’ll also have README files and docstrings, many of which are created or updated by Claude itself, and all of which become part of its working context.

In fact, coding with Claude often looks like creating those context files, or asking Claude to create them for you. Your prompts are what give Claude the best chance to get something working. Your help as a debugger is often the only path to success. But you’ll also have moments where Claude hits an error and then troubleshoots its own way to a solution without your intervention. The first time that happens is a genuine magic moment.

That’s what makes Claude Code categorically different from “a chat bot in your editor.” It’s the run-debug loop. As a programmer, you still feel firmly involved, for now. I don’t think this loop will exist in Ai productivity tools, long term. A few years from now, this will be a polished product category. You’ll interact with intelligent agents through voice or a UI and never see what’s behind the curtain. The mechanisms underneath may not look like code or APIs at all.

Something will be lost in that transition. Specifically, the chance to surprise your team, and yourself, when you’re experimenting right at the edge of what is possible today.

# Tips and tricks 

A few tips from early experimentation. You want as little code and documentation as possible, but no less than that. Part of the game is managing Claude’s attention. Use directory structure aggressively to embed documentation near the relevant code. Try not to introduce dependencies if you can avoid it. When Claude can see the entire implementation, it reasons better.

The code and documentation Claude understands best is what it wrote itself. You don’t need to write much by hand. Balancing “Claude only sees what’s in git” with “this file full of PII and secrets is absolute prompt context gold” is tricky. But you do want that full context available when you ask Claude to do things. One approach is to create a git-ignored directory where you manually store high-value context files. Also be aware that Claude will happily include that PII and those secrets in documentation it generates unless you explicitly tell it not to.

Finally, try adopting the mindset that the code itself is not the important artifact. The code is almost disposable. The important pieces are the documentation, especially the prompts. That’s where the leverage lives.

PS. The inspiration for all of this came from [a podcast episode with a $4B CPO on using Claude Code for productivity](https://aakashgupta.medium.com/a-4b-cpo-runs-her-entire-day-on-claude-code-and-cursor-heres-exactly-how-c5be2f82ac64). Listen from about 3:30 to 28:00.

<!--
I've been playing with Claude Code not for coding, but for personal productivity as a knowledge worker
See the fruits of my early experiments here: https://github.com/chase-seibert/chase-sidekick

We are at a Moment in time with AI tooling between not being possible and being ubiquitous
software engineers preoccupied with how to use AI for coding
real revolution is giving all knowledge workers super powers
i.e. Claude Cowork, not just Claude Code
Software Engineering managers in a unique position to leverage
ability to code, access to tools, and the same knowledge work problems to solve
Use Claude Code to write small libraries to connect to your tools,
then ask Claude Code to actually do tasks in those tools

MCP is coming. In the future your AI assistant will connect to all your tools
Not here yet, many vendors are still building their solutions
IT departments are still trying to figure out if they are going to allow it
Many MCP servers today are third party, little more than thin layers on top of existing vendor REST APIs
Even 5 years from now, many tools will not support connections from AI natively (ex: OmniFocus still doesn't have a REST API)
Opportunity: pair with AI to write a client for REST APIs that the AI can understand, and move to MCP when it's available
Lets you live in the future, now
Will still be necessary for the foreseeable future for on AI-enabled tools
Also allows you to bypass IT in some cases
A word about user-empowerment and vendors
As a user, I should have access to an API where I can take actions as myself, and I should be able to connect to that API using just my account
I should not have to create an app in your marketplace, or get my IT department to approve or install something to enable my access
Good examples of this: Google, Atlassian
Bad examples of this: Slack, Zoom
Personal project, Sidekick
I've gotten remarkably far in a short amount of time with this technique
The largest limitation is API access, with a smaller limiting factor being APIs that do what you want
Example use cases
"Download all the files linked to my calendar events for this week, and generate a list of bullets as a summary for executive leadership"
"For all teams that report to me, look up completed work across JIRA Epics for the past 30 days and generate a team accomplishments report with kudos to specific engineers"
"Migrate Paper 1:1 docs to Confluence for direct reports with restricted access and update calendar event links."
Great way to learn about AI-assisted coding, and keep your coding skill sharp
Managers often looking for code side projects where they can actually have impact; this is it!
Installing Claude Code is like anything else, follow directions on their website
You have Claude initialize a project similar to the wya git does
Misconception that Claude Code is just a chat bot in your editor, but in practice it's a completely different beast
Together, you create reusable prompts and context
You repo will contain multiple CLAUDE.md files, where the proximity to the module in your code Claude is running informs the likelihood of that context being picked up.
You will also have README files and docstrings, often created or updated by Claude itself, as context
In fact, coding with Claude often looks like creating those context files, or asking Claude to do it!
Your prompts give Claude the best chance to get something working, and your help as a debugger is often the only path to success
But, you will also be surprised when Claude hits an error, and is able to trouble-shoot and come up with the solution on it's own
As a first time user, this is the magic moment
It's what makes Claude Code a categorically different thing than simply a chat bot in your editor
It's the run-debug loop
As a programmer, you still feel firmly in the development loop.
I don't think this loop will be present in the future
A small handful of years from now, this will be a well polished category of products
You will interact with intelligent agents through voice or user interface, but never see what's behind the curtain
The mechanism the products use to accomplish tasks may not look like code or APIs at all
Something will have been lost, namely the chance to surprise your team (and yourself) with what is possible, when you're experimenting at the edge of what IS possible

Try creating an empty Claude Code project, and ask it to "Create a set of scripts in language X to do Y in product Z, and then write a skill so that I can ask you to do this easily in the future". You may be surprised how far you get, and how quickly.

Tips
You want to have as little code or documentation as possible, but no less
Part of the game is managing Claude's attention; use directory structure liberally to embed documentation near relevant code
Try not allowing any dependencies; Claude will see the entire implementation for better reasoning
The code and documentation Claude understands best is what it wrote itself; you don't have to write any my hand
Balancing "Claude only sees what's in git" by default with "this file full of PII and secrets is absolute prompt context gold" is hard; try creating a git-ignored directory where you manually save files
Claude will add PII and secrets to documentation it creates, unless you tell it not to
Try adopting the mindset that the code being written is not the important piece; the code is almost disposable. The important bits are the documentation, especially the prompts.


 PS the inspiration for all of this was this podcast https://aakashgupta.medium.com/a-4b-cpo-runs-her-entire-day-on-claude-code-and-cursor-heres-exactly-how-c5be2f82ac64, start at (from timestamp 3:30 to 28:00)
-->
