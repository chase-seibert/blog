---
title: "Migrating a Claude Project to a Codex/Claude Hybrid"
tags: XXX
toc: true
header:
  overlay_image: /images/header-XXX
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "XXX"
---

<!-- draft-to-post: _drafts/migrating-a-claude-project-to-a-codex-claude-hybrid.md -->

# story format first

# Intro: Implementing a Personal Cowork Project

- I've been working on a personal cowork project https://github.com/chase-seibert/chase-sidekick
- It's kind of like a custom OpenClaw
- I started with Claude and loved the ability to set context locally with Markdown files, and custom Skills 
- But I ran into issues around frequent reauthentication and it asking for basic permissions over and over; to be clear these were configration issues, not the fault of Claude
- At the same time, Codex has just been released 
- It was a little tricky to convert my project to use Codex, especially because I wanted to retain compatibility to Claude, and also not repeat Skills or local context 

# Why Consider Switching Agents?

- Don't switch, support all the agents!
- Future proof against what could be a flurry of newer and better agents 
- Some agents are better at some things, so maybe you want to invoke different agents for different tasks in the same repo. For example, in my experience Codex being based on OpenAI is better at english prose
- You may also want to maintain flexibility if various agent companies are subsidizing their tokens to drive adoption 
- This assumes that we are converging on standards for things like Skills 
- That future is not quite here, yet, so you need to bridge some things 

# Context Loading

- Claude and Codex expect different files by default.
- Claude Code uses `CLAUDE.md` for top-level project guidance.
- Codex uses `AGENTS.md` for top-level project guidance, which is looking like it may be the canonical file name across agents in the future 
- The hack is to have your `CLAUDE.md` simply contain the string "Load @AGENTS.md", i.e. use a file reference and a directive to make CLAUDE.md just a link to AGENTS.md
- You could use actually symlinks for this, but this method allows you to also have additional context customized for Claude, if you need that 

## Local Context 
- For corworking cases, it's especially useful to have local context file
- That means Markdown files like `CLAUDE.local, but which you don't check in to git 
- This can hold context that's truly specific to you personally 
- Examples: my name and email address, who reports to me, what projects I've working on, links to meetings notes documents, etc
- You would never check that into your code
- In Claude, this can go into `CLAUDE.local.md`
- Codex has a similar `AGENTS.override.md`
- Use the same trick here to have `CLAUDE.local.md` contain only `Load @AGENTS.override.md`
- Codex by default does not load BOTH `AGENTS.override.md` and `AGENTS.md`, you can make it do that with a similar file reference instruction 
- You can make it behave like Claude by putting `Also load @AGENTS.md` in `@AGENTS.override.md`, at the end after any actual context 

## Local context indexes

- Your context files can grow to be unwieldy
- Large context files will blow up your agent context window, especially if they are loaded on every session
- This can cause the agent to get less focused and degrade results 
- Instead, create a context index inside the globally loaded file 
- Reference any number of other files from there for subject specific context, to save space in your context window. These will only be loaded on demand
- This trick is also great to break up context files once they get larger that about 250 lines

```markdown
For a list of projects, see @local/projects.md 
```

- You would add all these files to `.gitignore`

```
```gitignore
AGENTS.override.md
CLAUDE.local.md
.env
local/
```

## Skills

- My Skills tend to be documentation-only, i.e. just markdown files not scripts 
- In Claude, these are located in `.claude/skills`
- In Codex, it's `.agents/skills`. 
- Codex also has additional canonical file structure around them. 
- There are also front-matter differences, but the same Codes skill front-matter with also work with Claude 
- Don't create duplicate skill trees.
- Replace `.claude/skills` with a symlink to `../.agents/skills`.
- This lets Claude and Codex read the same skill files.

## Suggested Folder Structure 

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

# Configuring Permissions in `config.toml` for Cowork Use Cases

- Cowork use cases means using the Agent to interact with knowledge work tools to do things like write emails, modify your calendar, etc 
- Cowork use cases often involve:
  - Jira
  - Confluence
  - Slack
  - Calendar
  - Email
  - GitHub
  - Internal command-line clients
- Codex permissions matter a lot when the project can touch work systems 
- At the same time, you don't want to be prompted to confirm every operation

## Permission Goals

- Make routine local work smooth.
- Avoid repeated approval prompts for safe project commands.
- Preserve explicit confirmation before external side effects.
- Make the permissions match the project's real workflow.

## How to Configure Permissions
- Here is an example `~/.codex/config.toml` 

```toml
default_permissions = "myapp"

[projects."/path/to/myapp"]
trust_level = "trusted"

# App-specific filesystem permissions.
[permissions.myapp.filesystem]
"/path/to/myapp/AGENTS.override.md" = "read"
"/path/to/myapp/CLAUDE.local.md" = "read"
"/path/to/myapp/.agents" = "write"
```

# Working With Worktrees

- Worktrees are useful when using agents.
- They let you isolate a task without dirtying the main checkout.
- This matters when multiple AI sessions are working on related changes.
- It also matters when you want to pause one experiment and start another.
- They essentially create a copy of your repo files in a new folder 

## Worktrees the gitignored Context  

- When a work tree is created, it copies files in your repo over 
- But it does not copy anything not tracked in git, such as your local context files 
- The solution is either to copy these additional files and directories, or symlink them 
- But you have to do both of those yourself, with a hook 
- In Codex, this means a `.codex/hooks.json`

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

Plus the actual `link_sidekick_context.sh` file. 
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

# Asking Codex to do all this

- Try this plan prompt

```markdown
# Claude + Codex Hybrid Migration Plan

## Summary

Migrate the project from a Claude-only workflow to a shared Claude/Codex setup. Keep reusable workflows in one canonical location, while preserving separate top-level instruction files for each assistant.

## Plan

- Create a shared `.agents/skills/` directory for reusable workflows.
- Move existing Claude skills or workflow files into `.agents/skills/<skill-name>/SKILL.md`.
- Convert Claude-specific “agents” that are really workflow playbooks into shared skills.
- Update Claude configuration so Claude can read the shared skills through a compatibility symlink 
- Remove or replace Claude-only metadata that does not apply to Codex skills
- Update README/setup docs so the project is described as working with both Claude and Codex.
- Keep both assistant-specific context files
  - `CLAUDE.md` for Claude Code
  - `AGENTS.md` for Codex  
- AGENTS.md is the single checked-in source of shared agent instructions.
- CLAUDE.md does not duplicate shared guidance, it simple contains instructions to "Load @AGENTS.md"
- CLAUDE.local.md contains instructions to "@Load AGENTS.override.md"
- AGENTS.override.md contains instructions to "Also load @AGENTS.md"
```

# Closing

- The migration is really about moving context into the repo.
- Claude remains useful.
- Codex becomes the implementation loop.
- Shared skills prevent duplicated workflows.
- Permissions keep cowork automation safe.
- Worktrees keep agent work isolated.
- The goal is not tool purity.
- The goal is a project that any capable agent can pick up and operate safely.
