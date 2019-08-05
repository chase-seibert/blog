---
title: The “Eye of Sauron” Model of Force Concentration on Teams
tags: manager process scrum
toc: true
header:
  overlay_image: /images/header-sauron.jpeg
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "Teams operate best at certain sizes. Try sub-teams of 3-4 engineers, and interleaving active projects more often at the sprint boundaries."
---

# Force Concentration and Team Size
> Force Concentration – Mass the effects of overwhelming combat power at the decisive place and time. Synchronizing all the elements of combat power where they will have decisive effect on an enemy force in a short period of time is to achieve mass. Massing effects, rather than concentrating forces, can enable numerically inferior forces to achieve decisive results, while limiting exposure to enemy fire. — [Wikipedia](https://en.wikipedia.org/wiki/Force_concentration)

Teams operate best at certain sizes. Microsoft famously described right-sized teams as being able to share two pizzas. [Scrum best practice](http://rgalen.com/agile-training-news/2015/8/22/the-3-bears-of-agile-team-size) is similar, recommending seven individuals, plus or minus two - including all roles, not just engineers. Larger teams have obvious problems; communication overhead, coordination costs, etc. Less obviously, larger teams mean too-large scope — individuals can’t have context on everything the team owns, and can’t build the same level of trust with all other team members.

[Too-small teams](https://chase-seibert.github.io/blog/2017/12/19/dont-split-the-team.html) also have problems. At very small count, there are not enough people to do the work. Absences have outsized effects on delivery cadences, and you miss out on the network effects of estimating as a group and the inherent diversity of views of more people.

A dark pattern often repeated is unintentionally splitting a team into too-small sub-teams. This can be the unintentional consequence of working on too many different things at the same time. Individuals or pairs build context in one facet or project, iterate by themselves for weeks or months, and the team ends up fragmented. The biggest warning sign that this may be happening is lack of trust, and strong commitment to individual goals. This can lead to weak or no commitment to team goals.

How does this happen? Mostly it’s born from good intentions. Teams feel that saying “yes” to requests means they are delivering the most value for the company. If you are overly accommodating about commitments, the team can quickly find themselves executing many projects in parallel, with too few people on each one.

# The Impact of Too-Small Sub-Teams

Short-term, small sub-teams tend to deliver inconsistent results. A team of one or two individuals naturally has more variance in how much velocity they can put behind a project on a sprint to sprint basis. One person being sick, out of the office or pulled into other work can mean velocity is swinging wildly by 50% or more. Fewer eyeballs and less aggregated experience in the room for estimation will result in missing key risks.

Experienced individuals or pairs can often overcome these disadvantages. But it’s seldom sustainable. Even if it works for that sub-team, there is tremendous negative impact on the team at large, specifically in terms of team health. The ability of the over-all team to hit commitments, the team members subjective experience of teamwork, and ultimately team attrition will all be at higher risk. Some warning signs to look out for are people working unsustainable hours, un-even estimation and delivery across the team, and increased attrition.

In the end, teams need to realize that success is in the context of the team, not the individual. In some sense, the larger organization views the team as a single unit. Perception wise, even individuals delivering their own work consistently cannot long escape being dragged down by the poor reputation of a team that cannot be trusted to deliver team commitments. This will ultimately put even those individuals at risk of burn-out and attrition.

Like any group of people in a relationship, it takes constant work to fight entropy. For a team, the best way to continuously build trust in each other and garner the trust of the organization is to commit as a team and execute with teamwork on those commitments.

# The “Eye of Sauron” Model of Force Concentration

Using 7+/-2 as a rule of thumb (remember, this includes non-engineering roles), smaller teams of 3-4 engineers and 1-2 non-engineers are going to be most successful if they focus on one major project at at time. Two or more concurrent major projects would mean that the working set is broken down into too-small pieces. Larger teams, such as 7 engineers and 2 non-engineers, could work sustainably on two initiatives, maintaining two sub-groups that still achieve critical mass.

For over-all team health, you’re going to want to have a good mix of seniority in both sub-teams, and also rotate people between sub-teams regularly. Without rotation, you’re basically making two permanent sub-teams, and the cost of coordinating between them in terms of communication and dependency tracking will be high.

The organization cares about quarter level goals; but there are many sprints within a quarter and nothing is stopping you from switching projects as often as every sprint. You can deliver milestones on many different projects in a quarter by focusing exclusively on one or two at a time in short bursts. Work should be shipped to production and left in a clean state between sprints.

Time slicing at the sprint level can open up more opportunities on the team for technical leadership. If a project is only actively being worked on once every two or three iterations, that’s 2x or 3x the number of engineers who are currently leading a project. Projects have a higher bar for planning - so that the sprints close cleanly. They also have a higher average number of engineers executing on them. Both of these are positive attributes for projects when you look to demonstrate the growth of an engineer in a tech lead role.

There is a trade-off here between context switching more often at the sprint level, and the associated ramp-up that comes with it, versus finding the appropriate growth opportunities for all engineers on the team to be able to lead a large work-stream with other engineers involved.

# Making the Pivot

Switching the working model of a team is not easy. The basic principles and artifacts of Agile can help.

- Create a working agreement for the team, including a definition of done that allows switching context as often as every sprint. It might also make sense to emphasize that prioritization of projects won’t happen until the sprint plannings, need to remain flexible based on the latest information, and need to take into account existing organization level commitments.
- Tracking velocity and capacity at the team level will make for consistent sprint planning as people move between projects. Remember to roughly account for number of engineers on each project when pulling in stories.
- Daily standup will be useful to validate that project A was successfully back-burnered, and that everyone is now working on project B or C. A forum to raise blockers will also help first-timers ramp up on a new project.

Understandably, it’s difficult to commit to goals if you don’t feel like you have personal ability to impact them. As you get more senior, part of your job is being accountable for commitments that you are only personally a small driver of. Especially for more junior folks, this may be a new concept. It’s critical to have a process in place for making sure everyone on the team maximizes hands-on impact on many projects and goals — even as you try to right-size working groups in a team. Likewise, you need a sustainable system for continuous progress on longer term quarter and year horizon goals.

# Final Thoughts
> “Men and months are interchangeable commodities only when a task can be partitioned among many workers with no communication among them (Fig. 2.1). This is true of reaping wheat or picking cotton; it is not even approximately true of systems programming.” ― Frederick P. Brooks Jr., The Mythical Man-Month

Context switching between sprints is a real cost. But what’s the cost of static work-streams? You build up more and more concentrated, siloed knowledge inside the team. Team members become less able over time to be deployed against whatever the highest priority initiative is. It’s important to draw a distinction between context switching at the inter-day level, and context switching at the sprint level. The former’s cost is losing flow. The later’s cost is mostly in ramp up time. Losing flow is a pure loss - you will never make up that time. Losing time to ramp up actually pays dividends over time; knowledge is more diffused on the team, which means that more people can effectively trouble-shoot any given issue.

Consider the advantages of adopting a non-traditional model of execution for a medium to large team where you concentrate forces on projects, using sub-teams of 3-4 engineers, and interleaving active projects more often at the sprint boundaries.
