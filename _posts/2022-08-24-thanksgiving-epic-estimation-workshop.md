---
title: "Thanksgiving Epic Estimation Workshop"
tags: process scrum workshop
toc: true
header:
  overlay_image: /images/header-thanksgiving.jpeg
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "Epic estimation is as much about best-effort definition of scope and milestones as a cross-functional team, as it is about putting estimate values on roadmap items"
---

I've given this Agile planning workshop a few times. It's Thanksgiving themed, because that is the time of year when we are making plans for the next year. It can help decide what some reasonable commitments are for large, multiple quarter efforts. 

Send out these pre-reads ahead of time:

- [Getting Started Estimating with Story Points](https://chase-seibert.github.io/blog/2019/01/30/getting-started-with-story-points.html)
- [Estimating Epic Stories in Three Steps](https://chase-seibert.github.io/blog/2017/08/28/epic-story-estimation.html).

----------

# What is this workshop for? 
(1 minute) 

In this workshop, we are going to learn how to estimate Epic level roadmap items. For example, these could be the primary projects for a team of engineers for an entire year. 

## When Estimating Epics

- We acknowledge that the estimates are likely to be wrong by up to 50%
- We don't know the exact scope of the Epics, i.e. we probably do not yet have product specs, or mocks 
- We want to limit the time we spend on this estimation

*Note: This is designed to teach the fundamentals of Epic estimation in a hands-on way, using analogies to real-world events that everyone is likely to be familiar with. We're not going to actually estimate any actual software engineering Epics.*


# Review Story Points Fundamentals 
(5 minutes)

We're going to practice basic blind-voting using story points in a few minutes. First, let's quickly recap [Getting Started Estimating with Story Points](https://chase-seibert.github.io/blog/2019/01/30/getting-started-with-story-points.html). 

Story points allow for quickly crowdsourcing low-granularity estimates, by leveraging: 

- Wisdom of Crowds — estimation is a team sport
- Relative Estimates — estimate relative to recently completed stories
- Risk Assessment — identify unknowns and use them to increase the estimate 

## Why not time-based estimates?

- Time-based estimates are less psychologically safe; “2 to 4 weeks” feels higher stakes than “3 to 5 story points”. There is less ego involved in story points *because* they are abstract 
- Time-based estimates tend to increase incrementally (2 weeks vs 2.5 weeks), story point estimates tend to make big jumps (5 points vs 8 points). This more accurately models the actual risk of the unknown. 
- Individuals feel like they failed if a 1-week task takes 2 weeks, but not if a 5 point story ends up taking the equivalent amount of additional time — assuming we still finish it in the sprint

*Note: plan to table any extended discussion of the merits of story points; that's not the point of this training* 


# Epic Estimation 
(15 minutes)

Let's recap [Estimating Epic Stories in Three Steps](https://chase-seibert.github.io/blog/2017/08/28/epic-story-estimation.html)

1. Start with historical list of **actual** user story points spent on previous Epics
2. Discuss what's in/out of scope — simple bulleted lists
3. Blind voting until we are within 1-hop Fibonacci numbers, then DRI decides 


*Note: If you've been estimating User Stories with points, there is a JIRA report for the actual historical story point values of your past completed Epics. This isn't the same as the initial estimate of those Epics; it's the sum of the story points for all the completed User Stories, once you were actually “Done” with the Epic.*

*Note: the "DRI" (Directly Responsible Individual) should be a specific engineer who will lead the work, and who is primarily responsible for the commitment.*

## Sample Previous Epics

Let's say we have the following actual Story Point counts for completed Epics. These are not strictly Fibonacci numbers because it's a sum of the **actual story points delivered**, not the original estimates. 

| **Previous Party**     | **Description**                                                                                                                                                   | **Actual Story Points** |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Casual Halloween Party | - 3 friends <br>- kids dressed up<br>- wine<br>- handing out candy<br>- walking around neighborhood                                                               | 8 points                |
| Easter Sunday          | - 6 friends<br>- Ham and Scalloped Potatoes<br>- ice bucket drinks                                                                                                | 23 points               |
| Christmas Day          | - research, bought and wrapped all the gifts<br>- holiday cards for 200 people, addressed them manually<br>- dinner Roast Beef and popovers with a chocolate tart | 85 points               |

## New Epic: Thanksgiving Dinner

Let's estimate a new Epic for a Thanksgiving Dinner. First, we need to make sure we're all on the same page about the scope. We need a product owner to answer questions. To facilitate doing this quickly, you can use post-it notes (either physical or virtual).


![](/blog/images/thanksgiving-epics.png)


### User Story Refinement

1. Brainstorm user stories that go into this Thanksgiving Dinner Epic 
    - Examples: specific dishes, groceries, cooking, what else? 
2. Write down any **acceptance criteria** folks can think of, and group them into User Stories 
    - Document acceptance criteria that's in scope (product owner makes the call) 
    - Document acceptance criteria that you have decided is **out** of scope
    - Once you're happy with the user stories and acceptance criteria, it's time to estimate the whole Epic
3. Rounds of blind voting ♻️
    - Decide which user stories are in scope for the Epic; a great way to increase confidence in the estimates is to de-scope anything the team + product owner can agree on 
    - Ask: “How **hard** is this, **relative** to the other Epics?” 
    - Count to three, and have everyone hold up a number of fingers that corresponds to a number of Epic story points
        - 1 finger == 13 points, 2 fingers == 21 points, 3 fingers == 34 points, 4 fingers == 55 points, 5 fingers == 89 points
        - These should be **relative** to the previous Epics!
4. If estimates are off by MORE than one finger's worth:
    - People who gave the highest and lowest estimates discuss the **risks**, and how **hard** this Epic is 
    - Update acceptance criteria 
    - Kick off another round of blind voting (back to #3)
5. If estimates are WITHIN one finger's worth:
    - Engineering DRI makes the call, estimation ends 

## Facilitator Prompts

If the conversation is not surfacing some key criteria, the facilitator can ask questions like:

- How many guests will there be? Did we remember to invite people? 
- Are we making elaborate place settings? 
- How do we order the stuff going in to the oven, are there dependencies? 
- What if we get a different number of guests than we planned? High risk events should be accounted for in the estimates.
- What if any given dish is missing/ruined? Medium risk events should have backup plans/mitigation. 
- What if the host/cook gets the Flu the night before? Low risk events can be ignored. 

# Create Epic Milestones 
(15 minutes)

Now, we are going to break the overall Epic into Epic Milestones. In real planning, these Epic Milestones would be your actual quarter-level roadmap items (assuming the overall Epic is too large for one quarter). 

![](/blog/images/thanksgiving-milestones.png)


1. Start arbitrarily with three milestones, M1, M2, and M3
2. For each User Story
    - What is the priority of this item? 
    - If we can't get to every criterion (post it) in a User Story, can we move some of them to future milestones?
3. Rounds of blind voting per user story *for the first milestone only* ♻️
    - Ask: “How **hard** is this, **relative** to the other User Stories?” 
    - What can we remove from the scope to reduce the estimate of this user story? 
    - Update the acceptance criteria, split apart user stories, etc. 
    - If a story is over an arbitrary size (i.e. 5 pts), break it up. Can we move some of the pieces to a future milestone?
    - If there is substantial **risk**, how can we mitigate, or is there a scope change that would reduce it? 

## Facilitator Prompts

- What if we ordered out for some of the food, or asked a guest to bring it?
- Can we make some of the food ahead of time? 
- Is there a smaller but sufficient version of a user story that we could do in M1, and do the full thing in a later milestone? 


# Q&A 
(5 minutes)

- What do folks feel like they learned today? 
- How can we apply this to our real Epic estimation? 
- Quick [plus/minus/delta exercise](https://www.scatterspoke.com/retrospective-library/plus-minus-delta-retrospective#:~:text=What%20is%20a%20Plus%2DMinus,something%20positive%20or%20something%20negative.) for this workshop 

