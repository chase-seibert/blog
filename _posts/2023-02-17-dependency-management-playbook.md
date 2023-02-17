---
title: "Dependency Management Playbook"
tags: manager 
toc: true
header:
  overlay_image: /images/header-dependency-management.webp
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "Not only can dependencies make you feel helpless, they can seduce you into ignoring them"
---

For engineering managers, delivering projects reliably and on time is a critical part of the job. Even if everything is estimated and executed well on your team, dependencies can derail you. If you poll a group of managers on their top risks — and I have — they will come back with a list that’s 80% dependencies on other teams. But many will feel helpless to resolve those dependencies. If your project requires another team to prioritize your dependency, what can you actually do to mitigate that risk?

Not needing dependencies is a luxury afforded to teams in small companies, or those running very high priority projects. I once ran a tiger team that was both. We moved experts from across the company onto the team so that we could own every piece of the execution. In large companies where a single product spans many teams, most projects will require one or more dependencies. You need to have a playbook for managing dependency risk. 

# List the Dependencies 

First, you need to know what the dependencies are. One of your core competencies as an engineering manager is “asking the right questions”. Hold a brainstorm and help the team see dependencies that they might not know exist. Cross-functional dependencies like security, legal and compliance can be particular blind spots for engineers. For actual software engineering, the team can almost certainly identify the big dependencies off the top of their heads. Doing a pre-mortem exercise can be one way to enumerate them and quantify the risk for each. You want to do this early in the project, as part of project estimation. 

Create a list of all the dependencies for the team, for the year. Each one should have a project name, a short description of the dependency, the risk or priority of the dependency, the name of the remote team that you are dependent on, and a specific team member who owns it. Try stack ranking them, with the highest risk/impact dependencies first. Share this list with your manager. 

Having a prioritized list of dependencies is useful for more than just your team. Suggest that your manager ask all their teams for this, and that they create a combined list. How they prioritize the list across teams will tell you a lot about how well aligned you are, how they are going to present these priorities to their own peers and stakeholders, and may also give you early signals on when a dependency is a non-starter. 

Show your list to the engineering managers you are asking for dependencies from. Ask them to share their full roadmap, and share yours. Include not just the engineering managers, but tech leads and product managers on both sides, as well. Make sure you have a solid business case for your project. These stakeholders, artifacts, and visibility are how dependency problems are turned into creative solutions.

For any given dependency, you should first try to remove it, and then you should secondarily try to push it back. Removing a dependency typically looks like changing scope, so that the dependency is not required. Pushing it back looks like structuring milestones -- provided that early milestones deliver user value -- so that it is not required until later. This is basic execution management that should happen for all your projects, and should be old hat for yourself, your tech lead, and your product manager. 

# Get Engineers Engaged 

If the dependency cannot be resolved with a creative solution, the next step is to get the right people to bring the right expertise to bear on the problem, and to get work started right away. A dependency that is not being actively worked on by engineers is an at-risk dependency. As an engineering manager, allocating these resources appropriately for the business is another core competency. That’s not to say that it will be easy! Managers sometimes confuse accountability for allocating resources with having authority to dictate those decisions. Given that we know that we will mostly not be unilaterally allocating people across disparate teams, what staffing levers do we have at our disposal? 

Use your knowledge about the organization and other teams to identify the correct team for the dependency, and also the most likely points of contact on that team — the experts — who can help the most. Start by asking for a consultation with that expert. This could start as one-time, and then you can collectively evaluate if consultation alone can satisfy the dependency. Identify your own experts, and get them involved. If you respect the remote team’s time, create a pre-read, and get aligned ahead of time with their manager, this should be a slam dunk. Even if the work turns out to be too large for a consult, you will have cemented a clear point of contact on the remote team.

Next, create a dialog with the right points of contact on both sides. This could be a simple Slack channel dedicated to the consultation. Eventually, this may be the rally point for a full on roadmap dependency. Your goal is to create and nurture a relationship between the teams, to facilitate a conversation. If you make it transactional, that is how it will feel to the other team. Try to set ground rule expectations. Can the other team agree to provide support for things like technical spec reviews, and code reviews? 

Another staffing mechanism available to all managers is embedding, also known as tours of duty. This means offering to loan one of your engineers to another team for a specific period of time. Alternatively, they could loan you an engineer. It’s easier than a roadmap commitment, because it’s timeboxed. The receiving team agrees to return the engineer on a specific date, based on the initiating team’s estimates of the work. The engineer(s) exclusively work on the dependency. If it’s not resolved in time, that is the responsibility of the initiating team. The embedding should end on time regardless. Managers should write down expectations for things like how specs and code get reviewed, what needs to happen to merge a code change, and whether the person is expected to improve the state of the surrounding code. If folks are willing to cross-train, this can work even if there is a skills or domain knowledge gap in the person being embedded. 

Other staffing solutions may or may not be available to you. Most dependencies that get to this stage require domain knowledge. If the dependency is primarily about raw staffing, you can of course hire. Even if this is not the case, if you are in charge of a headcount budget, reserving some budget for dependencies like this can be effective, to facilitate potential internal transfers, both to be able to receive an internal transfer, or to offer as compensation to another team for a transfer. 

Depending on your scope, other options like moving people between teams, or moving entire teams, may be available. During a regular reorganization of teams, you should be actively managing your dependency risk. 

# Mitigate Risk with Milestones

Once you know what your dependencies are, and the right people are working on them, the next step is to structure the work. How you structure the work greatly affects how much risk you are taking on. Your goals are to shorten the window before work begins, bring forward the first increment that delivers user value, and shorten the cycle time between further iterations. 

Creating a prototype is a critical early milestone. This should be a quick and dirty development environment only implementation of just the very core of the product. This gives you some real code to discuss, some real experience to demo, and will also uncover some of the primary unknowns and decisions that need to be resolved. Concurrently, you can also do “spike” sprints to try to resolve specific unknown and technical risks. 

After that, you want to move to an in-production implementation, behind a feature flag, as soon as possible. This is Milestone 0, a foothold that you can continue to expand, refine, and polish for the rest of the project lifecycle. After that, milestones should be “theoretically shippable”, i.e. a user could get some value out of this, no matter how small. Don’t break things down into milestones like backend, front-end, release testing, etc. Instead, think of thin vertical slices. Each slice should deliver some user value, end to end. The slice itself should accomplish part of the overall job to be done. It should be just polished enough that you could release to wider and wider audiences, such as team-only, internal-only, early access customers, etc. 

When planning the scope of the milestones, think about whether certain dependencies are only required for some of the scope. Pushing that scope back into future milestones will reduce the risk associated with delivering earlier milestones, at the cost of non resolving unknown technical risk inside those dependencies early. If possible, try to de-risk those separately with their own prototypes, potentially on another team’s roadmap. 

For any cross-team dependencies, agree on a code interface for the dependency. This can greatly clarify what each team needs. You may also want to create failing unit tests for those code interfaces. You could go as far as to mock the dependency with basic behavior, which will be useful in your own development and testing. Any performance or scalability requirements can also be part of your interface definition. 

Finally, come up with a Plan B for each dependency. This will not always be possible. Examples include planning to build and ship a heuristic solution to a machine learning model dependency, or hard-coding something that will eventually be configurable. Other examples could be shipping a mock implementation of a back-end system, or further dropping scope so that it’s not necessary. 

# Escalate Unless Development Starts

If dependencies cannot be eliminated or committed to such that they are beginning work soon, you should escalate. This is a last resort, only because you need to attempt other methods first. But don’t let dependency conversations linger too long without making forward progress. If progress has plateaued for two or three weeks, it’s time to start the escalation process. Much of the time, you will not end up having to escalate at all, but that’s part of the magic!

> Often the mere act of sitting down and trying to write up a proposal will lead to Frank and Faythe to come to a compromise. Partially this is because writing down details forces clarity on the situation. It also reveals options that neither party had thought of independently. A big part of last-minute compromises is that everyone is reluctant to involve their manager, asking for a decision. This makes it more likely that each side will accept a compromise that they would not otherwise have accepted, simply to avoid escalating. — [How to Escalate](https://chase-seibert.github.io/blog/2021/04/05/escalations.html#clean-escalations-the-one-pager)

The short version of how to escalate is:
1. Create a doc collaboratively with the other engineering manager, and include cross-functional peers 
2. Pair down to two or three potential outcomes 
3. CC both of your leads at the same time, plus any cross-functional partners, via email 

If the escalation results in a roadmap commitment, you should have a record in the above email. If not, create one. This is critical for clarity and accountability. 

Done correctly, most escalations will be resolved by a compromise before your leads are included. This is what healthy cross-team collaboration looks like; identifying problems and finding solutions. Don’t treat an escalation as a threat, your goal is to share context and exercise empathy, and iterate to a solution that is best for the entire company. The biggest failure mode in escalations is not doing them, or not doing them early enough. 

# Checklists 

## Dependency Risk Level Checklist 

How high risk is your dependency? If you cannot answer “Yes” to three or more of these, your dependency is at high risk.

- [ ] Has work started? 
- [ ] Is work starting in the next quarter?
- [ ] Is there a working prototype of the solution?
- [ ] Is the team confident that they know what the technical solution is, exactly?
- [ ] Do you have an API interface definition agreed on by both teams? 

## Team Lead Dependency Mitigation Checklist 

- [ ] Have you asked critical questions about the product and the technical plan? 
- [ ] Have you identified the right stakeholders? 
- [ ] Have you written and communicated a compelling business case for this work? 
- [ ] Have you brainstormed potential dependencies and risks with the team? 
- [ ] Have you held a pre-mortem about what could go wrong, worst case? 
- [ ] Have you listed all of your dependencies and risks somewhere? 
- [ ] Have you prioritized your dependencies by negative impact? 
- [ ] Have you documented your full team roadmap, and shared it? 
- [ ] Have you defined milestones that are thin vertical slices of potentially shippable product increment? 
- [ ] Have you cut scope from early milestones to de-risk dependencies? 
- [ ] Have you set up an ongoing consultation with your primary dependencies for questions, design review, and code review? 
- [ ] Have you created a safe space where you can engage in dialog with each dependency? 
- [ ] Have you built a working prototype of the solution? 
- [ ] Have you mocked up a code interface for each dependency, with example inputs and output? 
- [ ] Have you documented the dependency and the commitment in an email? 
- [ ] Have you identified specific people as points of contact for the dependency? 
- [ ] Have you put together an escalation doc for this dependency?
- [ ] Have you sent the escalation doc to leads on both sides? 
- [ ] Have you created a Plan B for if this dependency is not satisfied? 
- [ ] Have you determined whether there is a relationship or trust issue between these teams? (manager of managers)
- [ ] Have you brought in the right experts from outside the teams to consult on this dependency? (manager of managers)
- [ ] Have you considered moving people around for this dependency? (manager of managers)
- [ ] Have you considered embedding engineers across teams? (manager of managers)
- [ ] Have you reserved headcount to facilitate this dependency? (director) 
