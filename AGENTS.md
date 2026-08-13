# AGENTS.md

This file provides shared guidance to Codex and other coding agents when working with code in this repository.

Also load the user-level instructions at `/Users/cseibert/.codex/AGENTS.md` and any matching domain files that it references.

If `AGENTS.override.md` exists, load it after this file. It is for private, machine-local context and should not be committed.

Read [`FRUSTRATIONS.md`](FRUSTRATIONS.md) before setup, build, or deployment work. Add a concise entry when a meaningful failure reveals a reusable workaround.

## Project Overview

This is a personal blog built with Jekyll 4.2.2, using the Minimal Mistakes remote theme with the "dark" skin. The blog is deployed to GitHub Pages via GitHub Actions.

## Setup

Install Ruby and dependencies:
```bash
brew install chruby ruby-install
ruby-install ruby 3.1.2
source "$(brew --prefix chruby)/share/chruby/chruby.sh"
chruby ruby-3.1.2
ruby -v
make setup
```

The repository requires Ruby 3.1.2. Do not use the macOS system Ruby 2.6. The Makefile selects the installed chruby runtime for its Jekyll commands, even when the calling shell has not initialized chruby.

## Common Commands

Prefer the Makefile targets below over spelling out their underlying commands.

### Build and check

```bash
make check
```

This performs the production Jekyll build and verifies that the generated home page exists with the expected title.

### Development server

```bash
make server
```

This runs the local development server with:

- `--incremental`: Only regenerates changed files
- `--watch`: Auto-rebuilds on file changes
- `--drafts`: Includes posts from `_drafts/` directory

Verify the running site at `http://127.0.0.1:4000/blog/`. A warning that `.claude/skills` is already watched through `.agents/skills` is currently harmless; the server still runs.

### Create a new draft

```bash
make draft
# This prompts for a slug and copies post_template.md to _drafts/
```

## Architecture

### Directory Structure

- `_posts/`: Published blog posts (filename format: YYYY-MM-DD-slug.md)
- `_drafts/`: Draft posts (not published, shown with `--drafts` flag)
- `_includes/`: Custom partial templates (minimal - mostly uses remote theme)
- `_data/`: Jekyll data files (navigation.yml)
- `_site/`: Generated static site (git-ignored)
- `images/`: Blog post images
- `files/`: Downloadable files (PDFs, etc.)

### Post Structure

Blog posts use Jekyll front matter with the following typical structure:

```yaml
---
title: "Post Title"
tags: tag1 tag2
toc: true
header:
  overlay_image: /images/header-something.png
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "Short description"
---
```

- Posts support table of contents via `toc: true`
- Images should reference `/blog/images/` path (includes baseurl), ex: `# ![](/blog/images/escalations2.png)`
- The theme is Minimal Mistakes with dark skin

### Configuration

Key settings in `_config.yml`:
- Base URL: `/blog`
- Remote theme: `mmistakes/minimal-mistakes`
- Pagination: 10 posts per page
- Plugins: jekyll-feed, jekyll-paginate, jekyll-redirect-from, jekyll-sitemap, jekyll-include-cache

**Important**: Changes to `_config.yml` require server restart (not auto-reloaded).

## Deployment

Deployment is automated via GitHub Actions (`.github/workflows/jekyll-4-gh-pages.yml`):

1. Triggered on push to `master` branch
2. Builds Jekyll site with caching
3. Pushes output to `gh-pages` branch
4. GitHub Pages serves from `gh-pages` branch

Do not manually deploy generated files. The supported deployment flow is:

```bash
gh auth status
git status --short --branch
make check
git push origin master
make deploy-status
make verify-deploy
```

Before pushing, confirm the active GitHub account is `chase-seibert`, the branch is `master`, and only intended commits and files are included. `make verify-deploy` requires the latest workflow run to match `origin/master`, requires that run to succeed, checks that GitHub Pages reports `built`, and smoke-tests `https://chase-seibert.github.io/blog/`.

If the workflow is still queued or running, wait for it to finish and rerun `make verify-deploy`. Do not treat a successful Git push alone as a successful deployment.

## Post Template

Use `post_template.md` as starting point for new posts. It includes:
- Standard front matter structure
- Reminder to write in story format first
- Markdown cheat sheet reference: https://itopaloglu83.github.io/Jekyll-Markdown-Cheat-Sheet/
