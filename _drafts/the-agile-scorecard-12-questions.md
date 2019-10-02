---
title: 💯 The Agile Scorecard -- 12 Questions
tags: agile scrum process
toc: true
header:
  overlay_image: /images/header-sprinter.jpg
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "Lot’s of people claim to do Agile. Most believe it. Many are not doing the basics right."
---

I want to put a stake in the ground for an opinionated, simple, reductionist rubric that covers the basics of what it means to be an Agile team.


In 2000, [Joel Spolsky](https://en.wikipedia.org/wiki/Joel_Spolsky) wrote [The Joel Test: 12 Steps to Better Code](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/). It’s an opinionated, simple, reductionist rubric for how good a software team is. Like Joel, I want this rubric to be a set number of yes/no questions:


> The neat thing about The Joel Test is that it’s easy to get a quick yes or no to each question. You don’t have to figure out lines-of-code-per-day or average-bugs-per-inflection-point. Give your team 1 point for each “yes” answer.

# The Questions
1. Do you use story points?
2. Do engineers estimate their work as a group?
3. Do you have retrospectives, with completed actions items?
4. Do you have frequent stand-ups?
5. Do you have short iterations?
6. Do you have a definition of done, and are stories usually completed?
7. Do you have a stable velocity?  
8. Do you ship to production every iteration?
9. Do you have a single product owner?
10. Do you have one strictly ordered backlog?
11. Do you have user stories with acceptance criteria?
12. Do you do regular demos?

These are in no particular order. They are also somewhat overlapping — not completing stories reliably can result in unstable velocity, etc.

# 1. Do you use story points?

Estimates are a core building block for a well-functioning team to be able to have a conversation about trade-offs between time, scope and quality. Relative estimation is one of the key innovations in Agile, and story points are the unit of relative “hardness” estimation versus previously completed user stories.

It’s common for teams to resits adopting story points, and continue giving estimates as delivery dates, or in time units. My opinion is that if you’re still doing time based estimates, you have not really understood a key concept of Agile.

# 2. Do engineers estimate their work as a group?

Estimates are a whole lot more accurate when they leverage the wisdom of crowds, utilize blind voting, and are refined through group discussion. Individuals feel much more committed to a story estimate that they had a hand in generating.

Teams that have not understood this may have individual tech leads, engineering managers or even stakeholders estimate for them. God help you if your product owner is estimating their own backlog items.

# 3. Do you have retrospectives, with completed actions items?

Continuous improvement and empowering the team to make changes to their own process are proof points of “**individuals** and interactions over **processes** and tools”. Teams will sometimes choose to stop having retrospectives, which can be a sign that they do not find them valuable. In my experience, this is usually because they do not feel empowered to make real change — and their action items commonly go un-completed.

# 4. Do you have frequent stand-ups?

Stand-ups are short, informal meetings to sync on progress and identify blockers. Ideally these are daily. On most teams, stand-ups are in-person. In practice, there is a lot of flexibility in stand-up particulars. I’ve seen well-functioning teams hold these over video conference, or decide to do only three stand-ups a week, or do them entirely in Slack.

Other common anti-patterns are making them longer than 15 minutes, inviting too many off-team stakeholders, and holding them sitting down in a meeting room. To me, having stand-ups at least three times a week in any form is acceptable. Even if you’re not standing 😉

# 5. Do you have short iterations?

Sprints are a time-boxed, regular cadence where the team is delivering user value. They are a forcing function for accurate estimates, clear acceptance criteria, continuous delivery, and quick process iteration. Sprints should be short — between one and three weeks. That’s because if you want to get better at something (like team execution), you need to do it more often.

This item is a two-parter; you need to both have sprints, and also they need to be short. If your team does not have a fixed cadence, or if the cadence is measured in months instead of weeks, you’re not pressure testing your estimates and you’re not getting better as quickly as you could be.

# 6. Do you have a definition of done, and are stories usually completed?

My main execution metric for an Agile team is what percentage of stories are being completed for any given sprint. I would expect this to be 95%, if things are working smoothly. How do you know whether a story is done? The criteria should be written down. Typically this includes things like meets all acceptance criteria, signed off on my the product owner, code reviewed, deployed to production, etc.

Not having a solid definition is a recipe for miscommunication about whether something is finished, what your velocity for last sprint was, and whether you’re on track for larger milestones.

# 7. Do you have a stable velocity?  

If you are doing group based estimation, estimating accurately, and reliably completing stories, then your team velocity should be stable. It should be well known — something that the team looks at during every planning session. The team probably knows what their velocity is, off the top of their heads.

Velocity typically stabilizes to +/- 10% pretty quickly, subject to expected fluctuations for vacations, holidays, changes in personnel, etc. Absent those factors, if velocity is not stable, it’s very likely that you are not completing stories reliably.

# 8. Do you ship to production every iteration?

It’s hard to get customer feedback regularly if you can’t show them working software. Shipping to production is the ultimate proof point that you are delivering working software. In order to do it, you have to open a pull request, get it code reviewed, tested, merged and deployed. There is no “done” if it’s just working on your local development machine.

Actually shipping a change is up to the product owner. Often they will want to bundle many sprints worth of work into one release. But, this should not prevent you from shipping to production continuously, to a small number of users, behind some kind of feature gating.

# 9. Do you have a single product owner?

Teams can have many stakeholders. But having a single product owner is critical. This typically looks like one person who takes all stakeholder feedback, and produces a single prioritized backlog of work. This is the product manager role in many companies.

If you have multiple product managers all creating a backlog for a team, prioritization becomes very unclear. In practice, you will still prioritize them somehow — potentially by having one of the engineer leads do it. In those cases, you’ve just made the engineer lead the product manager. They will not be very good at balancing stakeholder requests, and prioritizing the right things, as compared to a real product manager. Not have a single product manager is a trap — one that I’ve seen organizations fall into fairly often.

# 10. Do you have one strictly ordered backlog?

Every team ends up executing tasks and projects in a specific order, at least if you’re looking at what got done after the fact. Defining the order of work such that you know before a sprint starts what you’re committing to is a fundamental part of Agile. Beyond a single sprint, you should have the next 3-5 major things at the top of the backlog in some order. It’s fine if the order changes as new information comes in — that’s the product owner’s job.

Without an ordered backlog, the team does not know what’s coming up next. What does it mean for the backlog to be **strictly** ordered? It means that items are in an ordered list where there is a specific item at slot #1, slot #2, etc. This is as apposed to having a bucket of “P0” items. Again, in reality, the team will need to make a decision eventually about which one to do first. A strictly ordered backlog is the product owner’s primary responsibility to the team.

# 11. Do you have user stories with acceptance criteria?

User stories are written in the form “As a $user, I want to $goal, so that $reason”. They also have documented acceptance criteria. This is important so that everyone on the team knows what user value they are trying to deliver. Miscommunication about the goal of a story can contribute to missing commitments at the last minute, as the product owner and engineers realized they have not been on the same page all along. The acceptance criteria are a specific set of item that are in scope to be delivered — which is just another opportunity to reduce miscommunication.

The more subtle value of well-written user stories it that they allow engineers to propose alternatives. Often the same (or similar) user value can be delivered many wants. Giving the engineers more granularity on the user values being delivered makes it more likely for them to come up with a cheaper alternative. Often this can be product behavior that does not match the product owner or designer’s initial vision — but which is totally acceptable.

Not every item in a backlog needs to be a user story. Many items are better represented as tasks, with language that’s primarily for the engineers.

# 12. Do you do regular demos?

A demo is part of the regular cadence of sprint ceremonies. This is where the engineers demo the user value they have delivered, the product owner accepts the story as “done”, and stakeholders get to give feedback. In my experience, this is often neglected. Many teams mark stories as done as they go, with either no review or implicit review by the product owner, and no formal demo. Formal stakeholder demos are rare.

Still, on the teams I’ve been on that have done this, it’s been enormously valuable both for the actual feedback and also for team engagement.

# Scoring
> A score of 12 is perfect, 11 is tolerable, but 10 or lower and you’ve got serious problems. The truth is that most software organizations are running with a score of 2 or 3, and they need serious help, because companies like Microsoft run at 12 full-time. — [Joel Spolsky](https://en.wikipedia.org/wiki/Joel_Spolsky) in [The Joel Test: 12 Steps to Better Code](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/)

Of the last dozen teams I’ve been on, all have been somewhere between 10 and 12 “yeses” on this scorecard. It’s eminently achievable. If you’re not doing something on this list — why not? Did you try it, and the team decided to move away from it, maybe during a retrospective? Or have you not actually given it a chance?

It’s common to malign Agile these days. A refrain I hear all the time is “Agile doesn’t work here”. But many of those teams have not actually tried doing Agile correctly.
