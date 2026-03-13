---
title: "Can Engineering Management Scale to 50 Direct Reports?"
tags: manager ai
toc: true
header:
  overlay_image: /images/header-50-direct-reports.jpg
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "A thought exercise on ultra-flat engineering organizations, AI leverage, and what breaks when one manager is expected to support 50 direct reports."
---

# Potential future

Is this where the industry is headed?

Imagine a future where you manage **50 people** working on 50 different projects. Your day starts with reviewing an AI summary of important updates on some subset of those 50 projects from the last 24 hours. You have unread Slack messages in 75 different channels, and your AI bot triages and responds to most of them automatically.

You have three one on ones on your calendar from direct reports who have signed up for on-demand 1:1s. There are 8 project-related meetings today, you dispatch AI agents to attend 5 of them, and plan to attend the other two in person. You also have a sync with a low performer and HR today on the progress against a Performance Improvement Plan, you cannot automate these, yet.

You have a block of time this afternoon to review an AI summary of summaries from various product, engineering, and engineering productivity dashboards. In a few spare moments at the end of the day, you use an AI coding agent to make some progress on a small feature you are working on. 

You are really dreading next week, when a peer manager is going on PTO, and you are going to be doing all of this for 100 people instead.

# Facebook is trying it

Does this sound far fetched?

Does this sound far-fetched? Apparently, [Meta is experimenting with exactly this](https://www.wsj.com/tech/ai/meta-to-create-new-applied-ai-engineering-organization-in-reality-labs-division-d41c4a69). Some other companies will likely follow suit, citing Facebook as precedent.

The key points from the initiative:

- **Ultra-flat structure** of up to 50 employees per manager
- Projects that used to require big teams can now be accomplished by a **single, very talented person**
- This aligns with Zuckerberg's ongoing "Year of Efficiency" philosophy, which emphasizes removing management layers to increase speed

The stated goal is to increase speed.

# Traditional expectation

Let’s think about some generic but common activities for engineering ICs and managers today. I am assuming at least senior level, going to staff and principal. This is where the most bang for the buck exists today, leveraging current AI coding tools.

## Senior Eng IC activities

For senior engineers, the core responsibilities are still pretty recognizable. Estimate work, implement, test, QA, deploy, and measure. None of that disappears just because coding gets faster.

There are also some activities we can maybe reduce with AI. Code review is an obvious one. So are mitigating production issues, fixing bugs, and even parts of interviewing candidates, especially screening and structured evaluation support.

At the same time, some responsibilities probably expand. Engineers will need to identify the right problems to work on, gather requirements, and explore solutions much more directly than many do today. If fewer people are involved in each project, more of the thinking work shifts onto the people actually shipping.

The tradeoff is that something has to give. One thing that probably gives is mentoring other engineers. In a world where everyone is expected to move faster and own more surface area, mentorship gets squeezed unless a company explicitly protects time for it.

## Manager expectations

For managers, the core responsibilities remain hiring, performance management, and team health. Those are the durable parts of the role. You can compress some workflows, but you cannot wish them away.

There are definitely management activities that AI can reduce. Execution management, one on ones, project unblocking, and written communication all look more compressible than they did even a couple years ago. A lot of status gathering, follow-ups, summarization, and coordination work is ripe for automation.

But if you stretch a manager too far, the work that probably disappears is some of the most important work. Setting strategy is the obvious casualty. There is only so much time in a week, and if a manager is trying to keep 50 people moving, the job quickly becomes reactive.

### What will your direct reports say if asked?

Consider what your direct reports would say if asked whether their manager:

- Has meaningful discussions with them about career development
- Keeps the team focused on clear priorities
- Provides feedback to help them do their job better
- Unblocks them so they can achieve important goals quickly
- Fosters a culture of inclusion
- Is someone they would recommend to others
- Creates an environment where they feel comfortable being candid
- Helps them understand how their work connects to company strategy

That's a hard list to satisfy with 50 direct reports and a calendar full of AI proxies. 

# Three scenarios

Even if we take as a given that projects that used to require big teams can now be accomplished by a single, very talented person, there are still multiple ways this could play out across the industry.

1. **50 direct reports, each doing 1x the work**
2. **50 direct reports, each doing 10x the work**
3. **10 direct reports, each doing 10x the work**

The first version is not really what is being proposed, because it fails to meet the goal of increasing speed. The last version will still happen no matter what at small companies that do not have 50+ engineers, especially early stage start-ups. I would personally be excited to lead engineering for a company where the express goal was to never have more than 10 engineers.

But that is a much easier problem.

For the purposes of this thought exercise, the scenario worth solving for is #2. That is the interesting one, 50 direct reports, each doing dramatically more work.

# Hypothetical tools for a 50-direct-report manager

What would you actually need in your toolkit to pull this off?

- **AI one-on-one bot** for pulse check-ins
- **Meeting summary AI** to attend meetings on your behalf and distill decisions
- **Real-time performance dashboard** with metrics and feedback
- **Context concierge** to summarize individual and project history
- **Bi-directional visibility on status** so stakeholders can correct AI context when it's wrong
- **Priority triage AI** to rank incoming requests

You might also need indirect access to the AI chat logs of all your direct reports. Who is going to have time to write a status report for you to read? 

You would also need implicit support from the company and IT department to allow AI automation to access all of these systems without requiring human intervention at every step.

# Objections and FAQs

There are some obvious objections.

## How can a manager meaningfully support 50 people?

I do not think you can, at least not in the way we usually mean support. It is more likely that you focus on the 5 to 10 highest performers and mostly support the rest through self-serve automation. 

## What happens to mentorship and career growth?

A lot of it gets delegated to ICs, and a lot of it gets concentrated on top performers. Training junior and entry level engineers remains an unsolved problem in an AI-coding world. People will need to own much more of their own performance evaluation narrative, and it will become harder to create real growth opportunities for new manager. 

## How do you detect struggling engineers early?

This likely becomes heavily driven by productivity metrics and automation, at least for initial detection. The system would need to identify cases that need attention before a human manager has enough direct contact to notice. That is efficient on paper, but it also has some obvious risks and blind spots.

## How do performance reviews work at this scale?

Evaluation gets harder because you have less context on each engineer and each project. Decision making, oddly enough, gets easier because one person can just decide promotions and ratings for all 50 people without much calibration with other humans. That may sound efficient, but it is also a pretty radical concentration of judgment.

## How do you build trust without regular one on ones?

I do not believe this works without significant face time, and face time is exactly what you cannot afford in this model. I would expect the company-employee relationship to become more transactional. Maybe that is acceptable to some companies, but it is still a real cost.

## Would managers burn out with this many reports?

Maybe not. The workload is potentially solvable with enough automation. But burnout also comes from being misaligned with your day to day work, and a day or week spent with relatively little time interacting with people will burn out many managers.

## Can product managers produce shovel-ready work this fast?

I do not think so. In fact, I suspect product managers will spend a lot more of their time implementing features too. My bet is that defining strategy and requirements falls more on engineers in this scenario, similar to the way engineering has already picked up more QA, DevOps, and adjacent responsibilities over time.

# Cross-functional layers

The traditional 1:1 mapping of one product manager and one designer to a team, or to 50 people, almost certainly does not hold. I do not see how one product manager or one designer could define work for 50 different projects. Each project requires too much thinking time, and if projects are also shipping faster, the demand for strategy and requirements goes up rather than down.

I think in this world product managers and designers start landing code themselves. 

The real kicker is strategy alignment. How are we going to align on strategy in a world where 50 times as many things are moving at once? Maybe we do not actually need as much alignment for prioritization purposes, but it is going to be chaos if 50 projects are landing all the time and experiments are stomping all over each other.

Maybe even more AI tooling helps with that.

## Organizational design

My bet is that engineering, product, and design spans of control all scale to the same level, 50 direct reports. There is relatively little distinction between these roles in this world. They all become people manager roles with some specialization around discipline.

For a company of 150 EPD employees, you could theoretically have 3 managers and a CEO. Today, with a span of control of roughly 10, you'd need at least 15 managers plus a layer of 2-3 VPs. That's north of an **80% reduction in management roles**. 

Of course, if this works, many of those managers could theoretically be repurposed as individual contributors shipping code as well. For companies with 3k, 10k, or 50k engineers, the reduction in management roles scales linearly.

| Total Employees | Managers (Span = 50) | Managers (Span = 10) | Managers Removed | Reduction     |
|-----------------|----------------------|----------------------|------------------|---------------|
| 150             | 4                    | 18                   | 14               | 4.5x fewer    |
| 3,000           | 63                   | 334                  | 271              | 5.3x fewer    |
| 10,000          | 205                  | 1,111                | 906              | 5.4x fewer    |
| 50,000          | 1,021                | 5,556                | 4,535            | 5.4x fewer    |

It is still TBD whether a traditional VP Eng, Director, or line manager would be the dominant surviving manager role in engineering. With the right automation, it could be any of them. That said, some management scenarios favor the manager always being more senior than their direct reports, which points more toward the VP Eng model.

If that turns out to be true, the most likely remaining roles for more junior managers may be at companies with more junior engineers. Historically, that probably means start-ups.

# Migration and transition strategy

If you actually wanted to move a company into this state, how would you do it?

Start with humans performing the support roles in a VP Eng org: Directors, line managers, and TPMs. Set an explicit goal for those roles to automate themselves out of existence. These employees write the tools that the VP Eng needs day to day. Don't forget to train the VP Eng to maintain those tools themselves. Those management roles may disappear, but the transition trains the people to switch into IC roles using AI coding.

# Conclusion

This is an interesting thought exercise, but not something I personally want to ever do.

My preferred future is still the small-but-mighty team of 10 engineers scenario. Yes, each engineer is augmented by AI and doing dramatically more work. Yes, each of them might ship projects that would have taken a team of 10 people circa 2025. But managers still get to invest time in building real relationships and trust. 

AI can compress workflows, summarize context, and help people ship faster. It still cannot replace coffee chats, dinners, conversations, and human connection. 