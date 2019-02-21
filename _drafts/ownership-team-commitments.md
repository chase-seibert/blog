@: Ownership of team commitments - collaborative commitment

# Background

> Mass – Mass the effects of overwhelming combat power at the decisive place and time. Synchronizing all the elements of combat power where they will have decisive effect on an enemy force in a short period of time is to achieve mass. Massing effects, rather than concentrating forces, can enable numerically inferior forces to achieve decisive results, while limiting exposure to enemy fire. - [Wikipedia]

Teams operate best at certain sizes. Microsoft famously described right sized teams as being able to share two pizzas. [Scrum best practice] is similar, recommending seven individuals, plus or minus two - including all roles, not just engineers. Larger teams have obvious problems; communication overhead, coordination costs, etc. Less obviously, larger teams usually mean too-large scope - individuals can’t have context on everything the team owns, and can’t build the same level of trust with all other team members.

[Too-small teams] also have problems, but they are less obvious. At very small count, there are not enough people to do the work. Absences have outsized effects on delivery cadences, and you miss out on the network effects of estimating as a group and the inherit diversity of views of more people.

A dark pattern I’ve seen is that a healthy sized team gets effectively split into too-small sub teams. This could be explicit, but more often it’s the unintentional consequence of working on too many different things at the same time. Individuals or pairs build context in one facet or project, iterate by themselves for weeks or months, and the team ends up fragmented. The biggest warning sign? Lack of trust in each other, and strong commitment to the individual’s goals paired with weak or no commitment to team goals.

How does this happen? Most it’s born from good intentions. Teams feel that saying “yes” to requests means they are delivering the most value for the company. Being overly accommodating about what the team should own, and external deadlines, you can quickly find yourselves doing more than one team can do at once.

# The Impact

Short-term, micro teams tend to deliver inconsistent results. A team of one or two individuals naturally has more variance in how much velocity they can put behind a project on a sprint to sprint basis. One person being sick, out of the office or pulled onto other work can mean velocity is swinging wildly by 50% or more. Their estimation process, involving fewer eyeballs and less aggregated experience, will be more likely to miss key risks and context.

Still, experienced individuals or pairs can often overcome these disadvantages. But it’s seldom sustainable. Even if it does work for that sub-team, there is tremendous negative impact on the team at large, specifically team health. The ability of the over-all team to hit commitments, the team members subjective experience of teamwork and ultimately team attrition will all be at higher risk. Some warning signs to look out for are people working unsustainable hours, un-even estimation and delivery across the team at large, and increased attrition.

In the end, teams need to realize that success is in the context of the team, not the individual. In some sense, the larger organization views the team as a single unit. Perception wise, even individuals delivering their own work consistently cannot long escape being dragged down by the poor reputation of a team that cannot  be trusted to deliver team commitments. This will ultimately put even those individuals at risk burn-out and attrition.

Like any group of people in a relationship, it takes constant work to fight entropy. For a team, the best way to continuously build trust in each other and garner the trust of the organization is to commit as a team and execute with teamwork on those commitments.

# Ownership in a Team Context

Commitment can be personal, project, team or company based. Ideally, incentives are aligned so that individuals can commit to all four at once. These commitments often have various scopes in time, as well. Personal commitments  are usually achievable in shorter timescales, like days or weeks. Projects can take months. Team and company success are measures in quarters, and years.

Understandably, it’s difficult to commit to goals if you don’t feel like you have personal ability to impact them. As you get more senior, part of your job turns out to be being accountable for commitments that you are only personally a small driver of. Try being a manager some time! Especially for more junior folks for whom this may be a new concept, it’s critical to have a process in place for making sure everyone on the team maximizes hands-on impact on many projects and goals - even as we try to right-size working groups in a team. Likewise, we need a sustainable system for continuous progress on longer term quarter and year horizon goals.

# A Different Model

Using 7+/-2 as a rule of thumb (remember, this includes non-engineering roles), smaller teams of 3-4 engineers and 1-2 non-engineers are going to be most successful if they focus on one major project at at time. Two or more concurrent major projects would mean that the working set is broken down into too-small pieces. Larger teams, such as 7 engineers and 2 non-engineers, could work sustainably on two initiatives, maintaining two sub-groups that still achieve critical mass.

For over-all team health, you’re going to want to both have a good mix of seniority in both sub-teams, and also rotate people between them regularly. Without rotation, you’re basically making two permanent sub-teams, and the cost of coordinating between them in terms of communication and dependency tracking will be high.

Either way, if you can only work on one or two things at a time, what happens if you need to make progress on more initiatives in parallel? Change your definition of parallel! The organization cares about quarter level goals; but there are many sprints within a quarter and nothing is stopping you from switching projects as often as every sprint. Even though you would likely not switch that often in practice, is could actually be advantageous as a forcing function to validate that you’re hitting your definition of done. Work really should be shipped to production and left in a clean state between sprints, if you’re truly shipping incremental value.

As a side bonus, time slicing at the sprint level can open up more opportunities on the team for technical leadership. If a project is only actively being worked on once every two or three iterations, that’s 2x or 3x the number of engineers who are currently leading a project. Projects have a higher bar for planning - so that the sprints close cleanly. They also have a higher average number of engineers executing on them. Both of these are positive attributes for projects when you look to demonstrate the growth of an engineer in a tech lead role.

I call this the “Eye of Sauron” model.

# How to make the pivot

Switching the working model if a team is not easy. But the basic principles and artifacts of Scrum can help.

- Create a working agreement for the team, including a definition of done that allows switching context as often as every sprint. It might also make sense to emphasize that prioritization of projects won’t happen until the sprint plannings, need to remain flexible based on the latest information, and need to take into account existing organization level commitments.
- Tracking velocity and capacity at the team level will make for consistent sprint planning as people move between projects. Remember to roughly account for number of engineers on each project when pulling in stories.
- Daily standup will be useful to validate that project A was successfully back-burnered, and that everyone is now working on project B or C. A forum to raise blockers will also help first-timers ramp up on a new project.

# The Mythical Man Month Conundrum

TODO

“Adding manpower to a late software project, makes it later.”
― Frederick P. Brooks Jr., The Mythical Man-Month: Essays on Software Engineering

“Men and months are interchangeable commodities only when a task can be partitioned among many workers with no communication among them (Fig. 2.1). This is true of reaping wheat or picking cotton; it is not even approximately true of systems programming.”
― Frederick P. Brooks Jr., The Mythical Man-Month: Essays on Software Engineering

Context switching cost
Most typically about daily interruptions, not switch every 2 weeks
Precisely about not context switching, by not running so many projects at once

Applies to context building
Need that context - that is what a team is
Constant investment, trading short-term gains for long-term efficiency

