---
title: "Refactoring Jekyll with Claude: Tackling Technical Debt I'd Been Avoiding"
tags: claude ai productivity jekyll
toc: true
header:
  overlay_image: /images/header-ai-docs.png
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "How Claude helped me fix a nagging Jekyll problem I'd been avoiding for months - and what that says about AI coding assistants."
---

I've been running this Jekyll blog for years. There was this nagging problem: every time I started the local dev server, it would download the remote theme from GitHub. On a plane with spotty wifi? No blog development for you.

I kept putting off fixing it.

## The Activation Energy Problem

Why didn't I just fix it? I'm not a Ruby expert. The thought of diving into bundler configs, gem versions, and GitHub Actions workflows felt like too much cognitive overhead. The activation energy was too high for a "nice to have" fix.

This is the kind of technical debt that piles up in side projects. Not critical enough to prioritize, but annoying enough that it chips away at your motivation. The cognitive load of "I should really fix this but it'll take hours to figure out" creates friction.

## What Claude Figured Out

I had a Claude session where I said "debug why make server is downloading the remote theme every time." Claude did the research and implemented a solution.

Here's what Claude figured out:

1. The `jekyll-remote-theme` plugin downloads from GitHub on every start - that's just how it works
2. There's a gem version of the theme (`minimal-mistakes-jekyll`) I could install locally
3. I could use Jekyll's config override feature to disable `remote_theme` for local dev while keeping it for GitHub Pages
4. My GitHub Actions was using Ruby 2.7, but newer gem dependencies required Ruby 3.0+
5. My bundler version was ancient (1.16.2) and incompatible with Ruby 3.1

## The Solution

Claude created a `_config_dev.yml` file that overrides the plugins list. It updated my Makefile to have two modes: fast local dev and GitHub Pages testing. It bumped Ruby to 3.1 in GitHub Actions and updated the bundler version.

The result: `make server` now starts instantly without any network requests. Works perfectly offline on planes.

## The Real Value: Navigating Unfamiliar Territory

What strikes me about this isn't just that Claude fixed the problem. Claude did all the research and decision-making I was dreading.

I didn't need to:
- Read Jekyll docs about config overrides
- Figure out which bundler version works with which Ruby version
- Debug GitHub Actions Ruby compatibility issues
- Understand the relationship between remote_theme and the gem version

Claude navigated all of that complexity autonomously. It read my config files, understood the architecture, made informed decisions about the approach, and implemented a clean solution.

## Activation Energy Drops to Near Zero

With Claude, the activation energy drops to near zero. I described the problem. Claude did the deep work. I reviewed the changes. The whole session took maybe 30 minutes of my actual attention.

This is where AI coding assistants really shine: not writing new features from scratch, but navigating unfamiliar technical territory and reducing the friction of maintenance work. Claude gave me the confidence to tackle a refactor I'd been avoiding for months.

## The Payoff

The blog server starts fast now. More importantly, I'm not dreading the next time I need to dive into Ruby tooling.

---

**Original Notes:**

Refactoring Jekyll with Claude: Tackling Technical Debt I'd Been Avoiding

I've been running this Jekyll blog for years, and there was this nagging problem: every time I started the local dev server, it would download the remote theme from GitHub. On a plane with spotty wifi? No blog development for you. But I kept putting off fixing it.

Why? I'm not a Ruby expert. The thought of diving into bundler configs, gem versions, and GitHub Actions workflows felt like too much cognitive overhead. The activation energy was just too high for a "nice to have" fix.

Then I had a Claude session where I said "debug why make server is downloading the remote theme every time." And Claude just... did it.

Here's what Claude figured out:

1. The jekyll-remote-theme plugin downloads from GitHub on every start - that's just how it works
2. There's a gem version of the theme (minimal-mistakes-jekyll) I could install locally
3. I could use Jekyll's config override feature to disable remote_theme for local dev while keeping it for GitHub Pages
4. My GitHub Actions was using Ruby 2.7, but newer gem dependencies required Ruby 3.0+
5. My bundler version was ancient (1.16.2) and incompatible with Ruby 3.1

Claude created a _config_dev.yml file that overrides the plugins list, updated my Makefile to have two modes (fast local dev and GitHub Pages testing), bumped Ruby to 3.1 in GitHub Actions, and updated the bundler version.

The result: `make server` now starts instantly without any network requests. Works perfectly offline on planes.

What strikes me about this isn't just that Claude fixed the problem - it's that Claude did all the research and decision-making I was dreading. I didn't need to:
- Read Jekyll docs about config overrides
- Figure out which bundler version works with which Ruby version
- Debug GitHub Actions Ruby compatibility issues
- Understand the relationship between remote_theme and the gem version

Claude just navigated all of that complexity autonomously. It read my config files, understood the architecture, made informed decisions about the approach, and implemented a clean solution.

This is the kind of technical debt that piles up in side projects. Not critical enough to prioritize, but annoying enough that it chips away at your motivation to work on the project. The cognitive load of "I should really fix this but it'll take hours to figure out" creates friction.

With Claude, the activation energy drops to near zero. I described the problem, Claude did the deep work, and I reviewed the changes. The whole session took maybe 30 minutes of my actual attention.

This is where AI coding assistants really shine: not writing new features from scratch, but navigating unfamiliar technical territory and reducing the friction of maintenance work. Claude gave me the confidence to tackle a refactor I'd been avoiding for months.

The blog server starts fast now. And more importantly, I'm not dreading the next time I need to dive into Ruby tooling.
