---
name: draft-to-post
description: Turn a blog draft or notes file into a second, prose-filled Jekyll draft in `_drafts/` while preserving the author's original bullet draft. Use when Codex needs to convert raw notes into a publishable draft, annotate the source draft with the generated `_drafts` path, then create or update that generated draft with Markdown prose. 
---

# Draft To Post

Use this documentation-only workflow to turn a notes-style draft into a publishable prose draft in this repository.

## Model

When model choice is available, use the latest/highest-capability thinking or reasoning model for the drafting pass.

## Inputs

- Require a draft file path. If the user does not provide one, ask for it.
- Preserve the original draft content. Only modify the source draft to add or update the tracking annotation.
- Keep both drafts in `_drafts/`: the user's original source draft and the Codex-generated prose draft.

## Workflow

### 1. Find The Generated Draft Target

First, determine whether a generated `_drafts` version already exists.

- Look in the draft for a tracking annotation:

```markdown
<!-- draft-to-post: _drafts/title-slug.md -->
```

- If the annotation exists and the referenced `_drafts` file exists, use that file as the generated draft target.
- If the annotation exists but the referenced `_drafts` file does not exist, treat this as a first creation path. Use the annotation as context, but still require a title before creating the generated draft.
- If the annotation points to `_posts/`, treat it as legacy tracking from the old workflow. If the referenced `_posts` file exists, ask the user whether to update that published post or create a new generated draft in `_drafts/`.
- If no annotation exists, search `_drafts/` for an obvious corresponding generated draft by source slug, draft title, or distinctive title-like phrase. Exclude the source draft itself.
- If exactly one corresponding generated draft already exists, add the annotation to the source draft and use that file as the target. Do not suggest titles.
- If multiple plausible generated drafts exist, ask the user which one to use.
- If no corresponding generated draft exists, continue to first creation.

### 2. Create Or Update The Generated Draft File

If creating a new generated draft:

- Create a Jekyll draft file in `_drafts/`.
- Slugify the chosen title for the filename: `_drafts/title-slug.md`.
- If the source draft already uses the chosen filename, add a `-generated` suffix or another short differentiator so the original draft remains untouched.
- If a file already exists at the target path, ask before overwriting it.
- Add or update the tracking annotation in the source draft so it points to the generated `_drafts` file.

If updating an existing generated draft:

- Use the generated `_drafts` file identified in step 1.
- Preserve the existing front matter title unless the user explicitly asks to change it.
- Do not suggest alternate titles.
- Add or update the tracking annotation in the source draft if needed.

Place the tracking annotation after the source draft's YAML front matter if it has front matter. Otherwise, place it as the first line of the source draft.

Optionally add a source-reference annotation near the top of the generated draft:

```markdown
<!-- draft-source: _drafts/original-source-draft.md -->
```

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

Write the generated draft using the selected title for a new draft, or the existing generated draft title for an update.

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

When finished, report the generated `_drafts` path and summarize only the most important changes. Mention if any assumptions were made, such as tags, title, or header image path. Do not describe the generated draft as published; publishing is handled by the `publish-draft` skill.
