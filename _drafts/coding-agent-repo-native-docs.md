---
title: "Steering Coding Agents with Repo-Native Docs: A Playbook for Teams"
tags: ai
toc: true
header:
  overlay_image: /images/header-ai-docs.png
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "Treat documentation like a context cache, keep the always loaded bits tiny, put the rest next to the code, and make agents faster and less wrong."
---

Code documentation exists to help the next person. It explains *why*, not just *what*, and it makes onboarding faster. It reduces execution risk by making assumptions and constraints explicit. It also clarifies interfaces, so people can safely change or reuse things without guessing.

We are entering an era where “next person” is comprised of the human *and their coding agent*. The job is to explain the why to both of them, onboard both of them, etc. For any job to be done, the engineer will break the problem down into many subproblems. The agent will use the docs to answer questions about many of those subproblems on the way to building a working solution. 

Even if the human never has the agent actually write code, being able to ask the agent these kinds of questions is supremely useful. For example, the human might ask:

- How do I run the service for logging?
- How do I run the test for creating a new user?
- How do I create a new feature flag and branch in the code based on that?
- Who owns the authentication service?

These questions cannot be efficiently answered just by looking at the code itself. We need to make documentation more discoverable, legible and concise for effective agent consumption. 

# Two challenges of agent-facing documentation

The main challenge for AI agent documentation is limited context windows. Long documents mean too much additional context. That’s when the agent’s attention can wander, or it can lock onto irrelevant details. If it can’t quickly find the information it needs, it will be more likely to invent something. The job of AI documentation is to point the agent in the right direction, load just the context needed for the task, and no more.

The secondary challenge is retrieval speed. The agent has to be able to find what it needs and retrieve the content of the documentation *quickly*. That means putting the key documentation into the codebase, where the agent is already operating, instead of forcing it to bounce across tools and tabs.


# Caching as the mental model for documentation 

A useful mental model here is to treat your documentation as a **context cache**. There is context that is hot-loaded (always in context), warm-loaded by proximity to where the agent is working in the repo, and cold-loaded context that has to be manually referenced (or fetched). 


## AGENTS.md as the “hot cache” at the repo root

All major AI coding agents can work with a common structure based on AGENTS.md files at multiple folders in your repos. The root AGENTS.md should contain only context you want loaded into literally every prompt. This is your hot-loaded cache, and it must be *super small*.

Good examples of root AGENTS.md content:

- One-line description of what this repo (or top-level folder/module) is
- Commands to build, run tests, and lint
- A high-level map of the repository, where to find what

That’s it. Anything else should be a reference to other code-based documentation such as a full repo index, architecture docs, how to write tests, and how to write or update documentation (yep, documentation about documentation). The root file should act like a router, not a wiki.

When you reference another doc file, do it in plain English with an explicit pointer, for example: “Writing tests: @docs/writing-tests.md”. A practical tip is to ask the agent if it can find and read the docs you’re referencing. If it can’t, it will guess, and you will not enjoy the results.

You will see varying guidance on the maximum advisable length of AGENTS.md files, anywhere from 50 to 100 lines, up to 32kb (roughly 350 lines). If you care about staying within a limit, you can enforce it with CI rules. In general, agents don’t need verbose documentation, so keep the style to short bullets and direct pointers.

You should also consider having standard section headers (and baking that into your “how to write documentation” docs). Consistency helps humans, and it also helps agents reliably locate the same kinds of information across modules.


## Local AGENTS.md as the “warm cache”

You should have many AGENTS.md files at various subfolders in your hierarchy. The principles are the same: don’t repeat context from a higher-level AGENTS.md, but add a local-specific description, any local commands, a mini map of this module, and any external references specific to this code.

These are your warm-loaded documents. Most major coding agents will load both the root AGENTS.md and the ones closest to the code it’s working in. A practical pro tip is to start your coding sessions inside the appropriate module if you know it. If you don’t, switch to that module once you discover it, for example by explicitly referencing the local AGENTS.md file.

Warm cache docs are where you earn your win rate. They are the place to describe “what is special about this module,” “how to run its tests,” and “what not to touch,” without bloating the root context. They also help humans, especially new hires, who are doing the same scavenger hunt as the agent.


## Referencing “cold cache” human-first docs

There is still a plan for handwritten human-first docs. Those should live in a wiki, or something similar, and you can reference the critical ones from your AGENTS.md files. If you want a cleaner separation, add a level of indirection with a REFERENCES.md file that collects and curates links.

If you rely on external docs, you should test that agents can actually load them. Ideally you do this through global agent configuration and MCP, but the baseline requirement is simpler: verify that the agent can open the link and read it without manual heroics.

README.md files are best kept human-first. The main constraint is to try not to repeat yourself, especially in ways that go stale. Treat README.md as the “narrative and onboarding” layer, and treat AGENTS.md as the “steering and execution” layer.


# Making this work in today’s most common agents

The good news is that this approach maps cleanly onto what people are already doing:

- Codex uses this file convention out of the box.
- Cursor also uses this convention.
- Copilot will also read these files.
- Claude can be pointed to AGENTS.md files with stub CLAUDE.md files that say “Load AGENTS.md”.

Even if the exact mechanics differ by tool, the core pattern holds. Put the steering docs in the repo, keep the always-loaded context small, and use proximity to decide what else gets pulled in.


## What about code comments?

Yes, code comments are useful for coding agents. For the AI, the most important comments are what a function does, what the arguments represent, and any required preconditions. Comments that explain *why a weird decision exists* are also high-leverage, because they prevent “helpful” refactors that break an invisible constraint.


# Scoring documentation (so you know it’s working)

You can treat documentation quality as something you can measure. Ask agents to do tasks and measure the success rate, especially if you have a system that provides a UX on top of one-shot AI coding tasks. If the agent can’t complete common tasks reliably, your docs are not yet doing their job.

You can also ask agents questions about the code and see if they get the answers right. A bonus move is to source new questions from your actual engineers, especially new hires. If a new hire asks “how do I run X,” and the agent can’t answer, you just found a missing or mislocated piece of context.

Continuous integration can help keep you honest. Consider adding checks for:

- AGENTS.md files that are too big
- Standard format or sections (if you have them)
- Commands that don’t exist
- References to files that don’t exist


# Rollout strategy

Pick a goal and a metric you can measure today, even if it’s manual. The first pass should be practical and small, because the fastest way to lose momentum is to attempt a grand rewrite of documentation across the entire company.

Start with the root AGENTS.md file, plus the basic cross-agent compatibility layer (for example, the Claude stub layer). Then pick 2 to 3 areas, and create local structure for AGENTS.md, README.md, REFERENCES.md, and any supporting docs. Aim for the modules where onboarding cost, operational risk, or dependency load is highest.

Finally, encode the above in a global reference for how to write AI documentation. That “how to” doc should suggest improvements to the documentation you have already written, and it should be referenced from the global AGENTS.md so it’s discoverable. Put another way, your documentation system should include the instructions to maintain itself.

# Conclusion

If you want agents to be reliable, you have to treat documentation like part of the execution surface area of the codebase. Keep the hot context small, use local AGENTS.md files to supply warm context near the code, and make cold context explicit and fetchable. Then score it, iterate, and enforce the basics with CI so it doesn’t rot.

You do not need to throw away human-first docs to do this. You just need a repo-native steering layer that helps humans and agents collaborate without wandering, guessing, or inventing.

# References
- Mercari: “[Taming agents in the Mercari Web monorepo](https://engineering.mercari.com/en/blog/entry/20251030-taming-agents-in-the-mercari-web-monorepo/?utm_source=chatgpt.com)” (using AGENTS.md to reduce prompt boilerplate and help navigation): 
- Datadog: “[Steering AI agents in monorepos with Agents.md](https://dev.to/datadog-frontend-dev/steering-ai-agents-in-monorepos-with-agentsmd-13g0?utm_source=chatgpt.com)” (framing AGENTS.md as a contract and describing steering docs): 
