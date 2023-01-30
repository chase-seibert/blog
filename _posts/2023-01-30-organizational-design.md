---
title: "Organizational Design"
tags: manager director
toc: true
header:
  overlay_image: /images/header-org-design.webp
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "You don’t have to choose just one organizational strategy for your entire company. A mature product org may be organized by goal, while a new product org has no structure, and a shared platform organization is structured by technology."
---

Organizational Design is how you group teams together in order to optimize for various constraints. There is no perfect organization design, only a series of trade-offs. Unless you’re a small company, how you group teams together will optimize for some dimensions and constraints over others. No organization design you choose will remain stable any longer than a few years. But you can mix and match different design strategies for different parts of the organization. 

# What is an Organization?

An organization is a set of teams with one name. Your company is one organization. A large company includes many nested sets of organizations. How you group sets of teams together, and what type of shared mission you give them, is the result of trade-offs you make between competing factors like coordination and dependencies. 

# What is Organizational Design? 

Organization design is how you choose to group the teams together, and what name you give them. Mission scope, coordination cost, and dependency management are the primary factors in any organization design. 

Mission scope simple means the job of the team. What is their primary goal, and what problem are they trying to solve? The mission should be compelling, distinct from the missions of other organizations, and meaty enough to have impact commensurate with the expectations of the larger company.

Coordination cost is incurred in the form of communication overhead for any two teams that have a dependency between them. If possible, you want to remove the dependency altogether. If you cannot remove it, you want two teams involved in the same work to share the shallowest common “branches”. As the distance increases, so does the risk of misalignment and prioritization conflict, which can lead to the dependency blocking the project. 

The reporting structure of the organization, literally who reports to whom, determines the distance and number of people in the decision-making loop. In terms of risk, there is a natural incentive to make sets of teams in an organization as small as possible. But there is a competing factor called the “span of control”—giving teams a sufficient number of people to realize impact—that incentivizes larger sets of teams. For any given manager, most companies ideally want somewhere between five and eight direct reports, for cost efficiency and to give each direct report the right amount of attention and support for their personal development. 

Making trade-offs between these factors are the primary driving force informing organization structure. 

# Small Organizations Don’t Need Structure

My first job was in a start-up with one and a half other software engineers, and no product managers or designers. There were no teams, or rather we were one big team of 12 including sales, finance, and customer support. There was a reporting structure, where sales people reported to the head of sales, etc. But there wasn’t an organization structure. We didn’t need one.

In a small company, communication and coordination overhead is negligible. When you’re coding a feature, there are probably no dependencies. If there are, you can literally turn to the person next to you to resolve it with a quick conversation. Engineers are able to deliver almost all their work by themselves. 

# Medium-Sized Organizations

As a company gets larger, there will be many teams. You’re all working on one product, but no matter how you organize, you will start to see more and more dependencies. 

Teams can be grouped by technology, feature, business goal, or customer. We are going to ignore grouping by customer, because it tends not to scale past a few types of customer. 

## Grouping Teams by Technology 

Codebases are broken up into repositories, services, modules, and files. They are naturally categorized by theme, i.e. what can I include in this set that’s cohesive as a unit, and has minimal dependencies on other things? 

Engineers have a tendency to first think of organizational structures that match these themes. This makes sense! You know this will minimize dependencies, and you know that assigning code ownership will be straightforward. Using an organization structure like this for a set of teams will tend to incentivize quality, which is also a classic engineering value. 

Organizations structured this way will excel at keeping things running, and running well. They will maximize uptime, performance, and correctness. They will tend to be more stable over time, as the basic thematic groupings of code do not change often. They are great for knowledge sharing across engineering teams. This structure is often used in Platform organizations.

On the other hand, these organizations will bias towards investment in existing use cases vs new use cases. Innovation will often look like rewriting an existing component. Engineers may gravitate towards this work, even when the business thinks it’s low value. It may be difficult to get engineers to work on higher impact stuff. Work on new initiatives may be diffused across more teams, increasing overhead and risk, and reducing accountability. 

## Group Teams by Feature

If you need to make significant progress on a relatively well-known new or existing feature, consider grouping all the teams who need to deliver work for that feature together. This may make sense, especially for a handful of top priority initiatives. By having every skillset the teams need to deliver their roadmap, you are minimizing coordination cost and dependency risk. 

This could look like front-end, back-end, mobile, database, and devops engineers all working directly together on cross-functional teams, separate from other engineers of the same horizontal discipline. One manager may have direct reports from each discipline, and together with their peer managers report to one organization manager, who can easily resolve prioritization issues. 

This organization structure maximizes execution, assuming that the solution is relatively well known. It may be ideal for large cannot-fail mega-projects. Of course, projects can always fail, but this structure greatly decreases execution risk. 

With this organization design, you are incurring maximum churn on team missions and superstructure, as missions revolving around features will naturally change more often as the features ship. When that churn happens, more people will change managers, and it will take time to reestablish processes on affected teams. Plus, there is a high likelihood that this churn will be incurred again, as the project is completed and teams align to the next feature. 

In the initial move to feature organization, there may be resistance to decoupling teams from their previous groupings, especially if they have formed a sense of identity around being a “platform”, or “mobile” organization. 

These organizations are sometimes over-staffed. It’s a fine balance on the continuum between creating an organization for a solution that’s fairly well known, versus creating the organization in order to define the solution. Too much of the latter, and you run the risk of having people and teams roped in without a lot of actual work to do. Worst case scenario, this can lead to scope creep and unneeded complexity as teams “invent” work to do. 

# Large Organizations 

As the company gets even larger, you are likely to be working on many more totally different things, even multiple different products. The number of dependencies grows exponentially. You cannot truly minimize dependencies, instead you need to pick which ones to derisk. 

Large companies contain many organizations. Each organization may be responsible for one product, or one sub-goal. Inside each organization, you can mix and match grouping sets of teams by technology, features, or customer. 

## Grouping Teams by Business Goals 

Like the feature grouping, grouping by business goal puts a sufficient number of people under one overall accountable person to achieve the goal self-sufficiently. Unlike feature grouping, the solution is often undefined. Instead of being about estimates to build a specific feature, the number of people allocated to this type of organization is based on how much of a "bet" the company is willing to make on this goal. Sub organizations can be created for sub goals, which should have their own single accountable person. 

This type of structure prioritizes innovation. Doing this well requires clear goals and metrics. The strategic vision must be compelling. With unknown solutions, there is a tendency to give each product leader similar resources. This option is often used for product-led organizations, i.e. organizations where everyone ultimate reports to a head of product. 

Teams and individuals in this model may need to exercise more of their cross-functional skills, versus organizing by technology or feature. You may need to repurpose an engineer for something that does not 100% match their skillset, or you may discover that you need a new skillset as you uncover solutions in the space. You may also need to unblock dependencies by changing the working agreement so that teams inside your organization can do work in codebases that other teams own. These both have real costs. Swim lanes inside the organization may be unclear, especially as you uncover new solutions that don’t match the initial structure. 

## Hybrid Grouping

You don’t have to choose just one organizational strategy for your entire company. A mature product may be organized by goal, while a new product has no organization, and a shared platform organization is structured by technology. Structures will also change over time, as the situation changes. Knowing when to use which structure is important, even if there is no “right” answer. 

A common tool when mixing structures is the “matrixed organization”. This means that the reporting structure does not match the sets of teams structure. For example, an engineering manager may have direct reports in various squads, working on different things, and working with different product managers. This increases coordination cost. It also reduces the context between a manager and their direct reports, which can make performance evaluation more difficult. Watch out for negative impact on cross-functional alignment. 

## Other Factors to Consider  

Inertia is a force that is actively fighting your organizational design. All else being equal, change is hard, and people will be naturally resistant to it. Assuming you overcome that, enacting change is a lot of work. You need to communicate the changes, move people around, and change the names of teams in hundreds of places. Teams with personnel or mission changes will be starting further back on the forming/norming/storming curve. 

Changes in code ownership have their own cost. There should be a very good reason for moving ownership between teams. “Keep the Lights On” (KTLO) type work should be as uniform as possible across teams, which may involve additional ownership changes.

Teams and organization names are a powerful tool for autonomy, i.e. "You’re the Activation team, you’re empowered to own anything that involves user activation across the entire company". But names can also be burdens, as in “every team with something they can squint at and call activation work is going to try to get you to own that”. 

You should also consider whether to group specialized skill sets together (i.e. Mobile, Devops, etc). You may also want to think about giving teams the largest possible “swim lane” to an organization, where they can have autonomy, cohesion, and separation of concerns from others. 

There is no perfect solution that will solve all factors. The best you can do is pick a set of dimensions to optimize for, and be aware of the trade-offs you’re making.

# Conclusion 

As an organizational design changes over time, you will make different trade-offs. This is fine, because there is no perfect organization structure. If you stay at a company long enough, you may see a particular pendulum swing back and forth more than once. Each time is a response to a current problem. 

Organizational design is not something you can solve permanently. It will need to be solved again as strategies change, and projects come and go. You can only design an organization for about 12 months, the typical macrocycle where both company and team roadmaps are most stable. 

Remember to not create dependencies if you don’t have to. Definitely don’t architect in more dependencies than absolutely necessary. Make the best trade-offs you can, for today. You can always make different trade-offs in the next reorg! 