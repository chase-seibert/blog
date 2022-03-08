---
title: "Headcount Tracking for a Medium Sized Org using a Spreadsheet"
tags: managers process
toc: true
header:
  overlay_image: /images/header-crowd.png
  overlay_color: "#000"
  overlay_filter: "0.01"
excerpt: "Don't do what I did, and spend 10 years headcount tracking in text documents"
---

While the simple question of "how many people work here?" should be easy to answer, even slightly more nuanced questions like "who is on which team?", or "how many people have we hired that have not started yet on these three teams?" can quickly turn into one-off manual fact finding and counting exercises. But, if you build a practice of documenting employees, new hires and open headcount in a spreadsheet, you can quickly answer such questions with accuracy.

This is probably most useful for organizations between 20 and 100 people. For smaller organizations, you can keep track of this all in your head and not miss anything. For larger organizations, you may run into problems keeping the data updated across many different teams and managers.

# Why use a spreadsheet?

Like any form of accounting, you need to start with raw row level data. In dual-entry accounting for finances, you track individual transactions, tally those into account balances, and double-check the balances against reality. If you **just** maintain a dollar balance figure, and you add/subtract from that directly, you will very quickly get to a spot where your balance is incorrect, but you are not sure why. For headcount tracking, this means tracking individual people. If you add up all the people rows, you can double-check the total count against another source of truth like Workday.

Once you have an spreadsheet of current employees (aka "butts-in-seats" or BiS), it's natural to layer in future employees you know about ("accepted-not-started", or ANS) and also open headcount ("Open HC"). That way, you can get a wholistic view of total staffing. A spreadsheet will also give you collaborative editing/sharing with other managers, arbitrary pivot tables to visualize things like headcount per team/sub-team/manager/role, and you can even fork off new copies of the spreadsheet for use cases like reorg planning or layoffs.

You can start to see why it's useful to maintain a separate, custom source of truth. For some of the use cases above, you're not just looking at reporting structure information, i.e. who reports to who. For example, you may want to slice by team, and teams can have individuals on them reporting into different managers. This is one of many use cases where popular tools like Workday do not give you a complete picture, of even the full set of individuals. Instead, I recommend compiling this spreadsheet once, and then regularly updating it with managers in you organization.

# Creating the Spreadsheet

Hopefully, you have some source-of-truth system that you feel confident will give you an export with the full, correct set of individuals. Maybe you need to export several data sets and merge them. Either way, this is worth doing if you're talking about an organization with more than a few teams worth of people. It's better to start with a complete dataset and massage it, than to start with an incomplete dataset and be missing people. Eventually, you will also want to add ANS and Open HC rows, which will often come from other systems, or be manually entered.

You will likely be able to copy & paste rows of email and name. Much of the rest will need to be hand-entered. The "fill" feature of your spreadsheet can be useful here, for repetitive data entry. This is another reason why this system probably will not work with 500+ employee organizations; you likely do not even know the team/role of each person! Granted, you could crowd source that, once. Either way, future incremental updates will be much more lightweight.

## Example Template

Here is an example template in Google Sheets: 
[Headcount Tracking for a Medium Sized Org](https://docs.google.com/spreadsheets/d/1vpIOK44wH6oJxlnl6Owqvu1brzztuH8G2syyLdGRGYk/edit?usp=sharing). You can fork a copy with File -> Make a copy. *Note: these names are from a [random data generator](http://www.randat.com/)*.

![Screenshot individuals sheet](/blog/images/headcount-spreadsheet-individuals.png)

![Screenshot pivot sheet](/blog/images/headcount-spreadsheet-pivot.png)

## Columns

You can add any columns you want of course, as long as you're willing to do the data entry. These are some fields which I have found useful.

- Email address gives you a unique identifier, and allows for copying/pasting the entire column for use cases like sending an email, creating a Google Group, or creating a Slack channel
- Full name for the sake of humans reading the spreadsheet
- The name or email of the person's manager, for filtering, especially when you ask individual managers to make sure their rows are complete and up to date
- Team, which may not be a 1:1 mapping by manager, and is the grouping you will most often want to visualize by
- Team+1, Team+2, etc, can be added to support arbitrary levels of groups in your org structure. Team+1 is the parent organization that a Team is in, if you have such named structures.
- Role is useful for making sure that you're not missing a cross-functional team member like a product manager or a designer, and also for the case when headcount is allocated separately by role
- Optional: Start and end dates for tracking ANS and attrition
- Optional: Req ID/Link for linking open headcount to external applicant tracking systems