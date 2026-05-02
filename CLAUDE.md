# CLAUDE.md

Claude Code should load shared project guidance from `AGENTS.md` first.

If `AGENTS.override.md` exists, load it after `AGENTS.md`. That file is private, machine-local context and should not be committed.

Project skills are available through `.claude/skills`, which is kept as a compatibility symlink to `.agents/skills`.
