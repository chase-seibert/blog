---
title: "Migrating a Claude Project to a Codex/Claude Hybrid"
tags: ai productivity automation
toc: true
header:
  overlay_image: /images/header-migrating-claude-project-to-codex-claude-hybrid.png
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "How to migrate a Claude Code project into a shared Claude and Codex setup without duplicating context files, skills, permissions, or local workflow documentation."
---

# Implementing a Personal Cowork Project

I've been working on a personal cowork project called [chase-sidekick](https://github.com/chase-seibert/chase-sidekick). It is kind of like a custom OpenClaw: a repo full of scripts, clients, context, and reusable instructions that let an agent help me with knowledge work. The goal is not just to write code faster. The goal is to have an assistant that can operate safely inside the same messy workflow I already use: calendars, email, Slack, docs, project systems, and all the local context that makes those things meaningful.

I started with Claude and loved the ability to set context locally with Markdown files and custom skills. That model felt immediately useful. I could build up project-specific knowledge, keep it next to the code, and teach the assistant how I wanted it to behave without rebuilding the whole context every session.

But I also ran into issues around frequent reauthentication and being asked for basic permissions over and over. To be clear, those were configuration issues, not the fault of Claude. At the same time, Codex had just been released, and I wanted to try moving the implementation loop there.

It was a little tricky to convert the project to use Codex because I did not want to make it a Codex-only project. I wanted to retain compatibility with Claude. I also did not want to repeat skills, local context, or documentation in two different places that would immediately drift apart.

# Why Support Multiple Agents?

My short answer is: don't switch agents, support all the agents.

We are likely heading into a period with a lot of newer and better agents. Some agents will be better at some things than others. You may want to invoke different agents for different tasks in the same repo. For example, in my experience, Codex is especially good at English prose and implementation follow-through. There is no reason to force a personal automation project into tool purity if the project can instead become agent-compatible.

There may also be practical cost reasons to stay flexible. Different companies may subsidize tokens to drive adoption. Pricing, limits, and access models will keep changing. A repo that can be used by multiple agents gives you room to move.

This assumes we are converging on standards for things like skills, agent instructions, and repo-native context files. That future is not quite here yet. For now, you still need to bridge a few things.

# Context Loading

Claude and Codex expect different files by default. Claude Code uses `CLAUDE.md` for top-level project guidance. Codex uses `AGENTS.md`, which looks like it may become the more general convention across agents in the future.

The simple hack is to make `AGENTS.md` the canonical checked-in file, and have `CLAUDE.md` point to it:

```markdown
Load @AGENTS.md
```

You could use actual symlinks for this, but I prefer the file-reference approach. It lets `CLAUDE.md` stay Claude-specific if I ever need that, i.e. by putting other content after the file reference. This makes `AGENTS.md` is the source of truth, and `CLAUDE.md` is a compatibility shim.

This also makes the repo easier for other agents to pick up. If a new agent supports `AGENTS.md`, it can start from the shared instructions. If it expects its own file name, you can add another tiny compatibility file without duplicating the whole context.

# Local Context

For cowork-style use cases, local context is especially useful. By local context, I mean Markdown files that are specific to me personally and should not be checked into git. Examples include my name and email address, who reports to me, what projects I am working on, links to meeting notes documents, personal preferences, and other operational details.

You would never check that into your code. It may contain private information, internal links, or details that only make sense on your machine.

I add these local files and directories to `.gitignore`:

```gitignore
AGENTS.override.md
CLAUDE.local.md
.env
local/
```

In Claude, the canonical location for this is `CLAUDE.local.md`. Codex has a similar pattern with `AGENTS.override.md`. You can use the same trick here and make `CLAUDE.local.md` contain only:

```markdown
Load @AGENTS.override.md
```

One difference is worth calling out. Codex does not necessarily load both `AGENTS.override.md` and `AGENTS.md` by default in the same way Claude may layer files. You can make the behavior explicit by adding this at the end of `AGENTS.override.md`, after the actual local context:

```markdown
Also load @AGENTS.md
```

That gives you one local private context file that can be shared across both tools, while still letting each tool enter through the file name it expects.

# Local Context Indexes

Your context files can grow to be unwieldy. Large context files will blow up your agent context window, especially if they are loaded on every session. This can cause the agent to get less focused and degrade results.

Instead, create a context index inside the globally loaded file. Reference other files from there for subject-specific context, and let those files be loaded on demand. This saves space in the context window and keeps the always-loaded instructions much smaller.

For example:

```markdown
For a list of projects, see @local/projects.md.
```

This trick is also useful once context files get larger than about 250 lines. At that point, the file probably wants to become a router rather than a complete knowledge base.

# Skills

My skills tend to be documentation-only. They are usually Markdown files that describe a reusable workflow, not scripts. In Claude, these live under `.claude/skills`. In Codex, they live under `.agents/skills`, with a more canonical file structure around them.

There are some front matter differences, but the same Codex-style skill front matter also works with Claude in practice. That means you do not need duplicate skill trees.

I make `.agents/skills` the canonical location:

```text
.agents/
  skills/
    skill-name/
      SKILL.md
      README.md
      scripts/
      references/
      assets/
```

Then I replace `.claude/skills` with a symlink to `../.agents/skills`. That lets Claude and Codex read the same skill files.

The important thing is that reusable workflows should exist once. If the same skill is copied into two agent-specific folders, those copies will drift. The whole point of the migration is to make the repo more maintainable, not to create another synchronization problem.

# Suggested Folder Structure

Here is the rough shape I ended up with:

```text
repo/
  AGENTS.md
  CLAUDE.md
  CLAUDE.local.md
  .agents/
    skills/
      skill-name/
        SKILL.md
        README.md
        scripts/
        references/
        assets/
  .claude/
    settings.json
    skills -> ../.agents/skills
```

In short:
- The checked-in shared guidance lives in `AGENTS.md`.
- Claude gets a tiny `CLAUDE.md` file that tells it to load `AGENTS.md`.
- Personal local context lives in `AGENTS.override.md`. 
- Shared skills live once, under `.agents/skills`, with Claude pointed at them through a symlink.

# Working With Worktrees

Worktrees are useful when using agents. They let you run multiple agents at once, each operating on a copy of the repo. If one or more agents wants to modify the project code, the other agents are not effected. For example, you can kick off a long running report and create a new Skill at the same time. 

When you create a worktree in git, it copies all your repo files to a new folder under the hood. That is great for tracked files, but it creates a problem for local context files, which are necessarily not tracked. These files are not copied automatically.

The solution is to copy or symlink those additional files and directories yourself. In Codex, I do this with a `.codex/hooks.json` file:

```json
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "startup|resume",
        "hooks": [
          {
            "type": "command",
            "command": ".codex/hooks/link_sidekick_context.sh"
          }
        ]
      }
    ]
  }
}
```

Then the hook script links the shared local context into the current worktree:

```bash
#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOCAL_ROOT="${MYAPP_LOCAL_ROOT:-$HOME/.config/myapp}"

mkdir -p "$LOCAL_ROOT"
mkdir -p "$LOCAL_ROOT/local"
mkdir -p "$LOCAL_ROOT/memory"

touch "$LOCAL_ROOT/AGENTS.override.md"
touch "$LOCAL_ROOT/CLAUDE.local.md"

link_path() {
  local source="$1"
  local target="$2"

  if [ -e "$target" ] && [ ! -L "$target" ]; then
    echo "Skipping $target: exists and is not a symlink"
    return 0
  fi

  if [ ! -e "$source" ]; then
    echo "Skipping $target: source does not exist: $source"
    return 0
  fi

  rm -f "$target"
  ln -s "$source" "$target"
  echo "Linked $target -> $source"
}

link_path "$LOCAL_ROOT/AGENTS.override.md" "$REPO_ROOT/AGENTS.override.md"
link_path "$LOCAL_ROOT/CLAUDE.local.md" "$REPO_ROOT/CLAUDE.local.md"
link_path "$LOCAL_ROOT/local" "$REPO_ROOT/local"
```

This keeps the private context out of git, but makes it available inside every worktree where the agent starts. It also avoids a subtle failure mode where the agent appears to be working normally, but is missing the local context that makes the cowork project useful.

# Permissions for Cowork Use Cases

Cowork use cases mean using the agent to interact with knowledge work tools. That might include Jira, Confluence, Slack, Calendar, Email, GitHub, internal command-line clients, or anything else you use to do real work. Often you are chaining many of these together in a single prompt. 

Having to approve each individual tool every time can turn a task from async back into sync. Many of the tool calls are also read only, especially the custom scripts in the project itself. BUt the agent may not know that for sure. 

For cowork, my permission goals are:

- Don't interrupt up the async / parallel job flow 
- Avoid repeated approval prompts across sessions for safe tool calls
- It's OK for the agent to update it's own Skills 
- Make sure work trees can read the untracked files in the parent repo

Here is a simplified example of a `~/.codex/config.toml` setup:

```toml
approval_policy = "never"
default_permissions = "myapp"

# Allow Loading Local Project Config
[projects."/path/to/myapp"]
trust_level = "trusted"

# Allow Writes to the Repo
writable_roots = [
  "/path/to/myapp",
  "~/.codex/worktrees",
]

# Make Sure Work Trees Can Always Read These
[permissions.myapp.filesystem]
"~/.codex/worktrees" = "write" 
"/path/to/myapp" = "write"
"/path/to/myapp/AGENTS.override.md" = "read"
"/path/to/myapp/CLAUDE.local.md" = "read"
"/path/to/myapp/.agents" = "write"
```

This is where a cowork project differs from a normal coding project. A coding project mostly needs filesystem and test-runner permissions. A cowork project may eventually talk to systems that can send messages, move meetings, update tickets, or change documents. The permission model should reflect that difference.

# Asking Codex to Do the Migration

If you want Codex to do this kind of migration, give it an explicit plan. The plan should say what is canonical, what is compatibility, and what should not be duplicated.

Here is the prompt shape I would use:

```markdown
# Claude + Codex Hybrid Migration Plan

## Summary

Migrate the project from a Claude-only workflow to a shared Claude/Codex setup. Keep reusable workflows in one canonical location, while preserving separate top-level instruction files for each assistant.

## Plan

- Create a shared `.agents/skills/` directory for reusable workflows.
- Move existing Claude skills or workflow files into `.agents/skills/<skill-name>/SKILL.md`.
- Convert Claude-specific "agents" that are really workflow playbooks into shared skills.
- Update Claude configuration so Claude can read the shared skills through a compatibility symlink.
- Remove or replace Claude-only metadata that does not apply to Codex skills.
- Update README/setup docs so the project is described as working with both Claude and Codex.
- Keep both assistant-specific context files:
  - `CLAUDE.md` for Claude Code
  - `AGENTS.md` for Codex
- Make `AGENTS.md` the single checked-in source of shared agent instructions.
- Make `CLAUDE.md` a small file that says `Load @AGENTS.md`.
- Make `CLAUDE.local.md` contain `Load @AGENTS.override.md`.
- Make `AGENTS.override.md` contain `Also load @AGENTS.md`.
```

The key is to make the invariants clear. Shared instructions live once. Local context stays private. Compatibility files are allowed, but they should point to the canonical files instead of repeating them.

# Closing

The migration is really about setting your repo up for success in a cowork project. Thoughtful layout preserves compatibility with multiple agents. Shared skills prevent duplicated workflows. Permissions keep cowork automation async. Worktrees keep agent work isolated.

The goal is to keep you in the cowork invention loop as agents evolve.
