---
name: draft-to-post
description: Turn a blog draft or notes file into a fleshed-out Jekyll `_posts` Markdown post while preserving the author's wording and style. Use when Codex needs to convert a draft into a publishable blog post, annotate the draft with the `_posts` path being worked on, then create or update the `_posts` version with Markdown prose. 
---

# Draft To Post

Use this documentation-only workflow to turn a draft notes file into a publishable blog post in this repository.

## Model

When model choice is available, use the latest/highest-capability thinking or reasoning model for the drafting pass.

## Inputs

- Require a draft file path. If the user does not provide one, ask for it.
- Preserve the original draft content. Only modify the draft to add or update the tracking annotation.

## Workflow

### 1. Find The Post Target

First, determine whether a `_posts` version already exists.

- Look in the draft for a tracking annotation:

```markdown
<!-- draft-to-post: _posts/YYYY-MM-DD-title-slug.md -->
```

- If the annotation exists and the referenced `_posts` file exists, use that file as the target. 
- If the annotation exists but the referenced `_posts` file does not exist, treat this as a first creation path. Use the annotation as context, but still require a title before creating the post.
- If no annotation exists, search `_posts/` for an obvious corresponding post by draft slug, draft title, or distinctive title-like phrase.
- If exactly one corresponding `_posts` file already exists, add the annotation to the draft and use that file as the target. Do not suggest titles.
- If multiple plausible `_posts` files exist, ask the user which one to use.
- If no corresponding `_posts` file exists, continue to first creation

### 2. Create Or Update The Post File

If creating a new post:

- Create a Jekyll post file in `_posts/`.
- Use today's date for the filename unless the user specifies another date.
- Slugify the chosen title for the filename: `_posts/YYYY-MM-DD-title-slug.md`.
- If a file already exists at the target path, ask before overwriting it.
- Add or update the tracking annotation in the draft so it points to the created `_posts` file.

If updating an existing post:

- Use the `_posts` file identified in step 1.
- Preserve the existing front matter title unless the user explicitly asks to change it.
- Do not suggest alternate titles.
- Add or update the tracking annotation in the draft if needed.

Place the tracking annotation after the draft's YAML front matter if it has front matter. Otherwise, place it as the first line of the draft.

Add front matter like this:

```yaml
---
title: "Chosen Title"
tags: tag1 tag2
toc: true
header:
  overlay_image: /images/header-title-slug.png
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "One or two sentence excerpt."
---
```

Prefer existing tag names when the repository makes them obvious. Use a concise excerpt that reflects the post's actual thesis.

### 3. Flesh Out The Draft

Write the post using the selected title for a new post, or the existing post title for an update.

- Do not change the original words or formatting too much.
- Preserve the user's ideas, sequence, examples, and phrasing wherever possible.
- Flesh out fragments into readable prose without adding new topics.
- If adding phrases or transitions, keep them plain and serious. Do not make them glib, cute, or joke-like.
- Combine related bullets or fragments into paragraphs where it makes sense.
- Most paragraphs should be 3-5 sentences.
- The occasional one-sentence paragraph is fine for emphasis, but use no more than one one-sentence paragraph per section.
- Group the post into sections with Markdown headers. Use the user's headers when provided.
- Add a conclusion section that follows naturally from the draft.

### 4. Clean Up Markdown

Use Markdown for sections, bold, italics, links, images, quotes, and code.

- Convert all-caps emphasis words to bold regular-case text. For example, change `IMPORTANT` to `**Important**`. Preserve true acronyms such as `API`, `URL`, `LLM`, `CPU`, and `HTML`.
- Format quotes as Markdown blockquotes.
- Format bare image paths as Markdown images using the blog base URL: `![img](/blog/images/$path.ext)`.
- Format bare links as Markdown links. Derive the link text from the URL's page title or most readable URL segment when a page title is not readily available.
- Keep existing Markdown structure when it is already good.

## Final Response

When finished, report the created `_posts` path and summarize only the most important changes. Mention if any assumptions were made, such as the publication date, tags, or header image path.
