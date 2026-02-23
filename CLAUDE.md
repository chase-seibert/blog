# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with Jekyll 4.2.2, using the Minimal Mistakes remote theme with the "dark" skin. The blog is deployed to GitHub Pages via GitHub Actions.

## Setup

Install Ruby and dependencies:
```bash
brew install chruby ruby-install
ruby-install ruby
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.bash_profile
# restart terminal
chruby
# copy actual version number below
echo "chruby ruby-3.1.2" >> ~/.bash_profile
ruby-install ruby
# restart terminal
ruby -v
gem install jekyll
bundle install
```

## Common Commands

### Development server
```bash
bundle exec jekyll serve --incremental --watch --drafts
```

This runs the local development server with:
- `--incremental`: Only regenerates changed files
- `--watch`: Auto-rebuilds on file changes
- `--drafts`: Includes posts from `_drafts/` directory

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
- Images should reference `/blog/images/` path (includes baseurl)
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

Do not manually deploy - just push to master.

## Post Template

Use `post_template.md` as starting point for new posts. It includes:
- Standard front matter structure
- Reminder to write in story format first
- Markdown cheat sheet reference: https://itopaloglu83.github.io/Jekyll-Markdown-Cheat-Sheet/
