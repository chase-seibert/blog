---
name: blog-title-suggestions
description: Suggest title options for a blog post draft, published post, post idea, or notes. Use when Codex needs to propose titles for a blog post, especially before creating a new Jekyll `_posts` version from a draft.
---

# Blog Title Suggestions

Use this documentation-only workflow to suggest titles for a blog post.

## Model

When model choice is available, use the latest/highest-capability thinking or reasoning model for title generation.

## Inputs

- Use the post draft, published post, title, excerpt, or notes the user provides.
- If the user provides a file path, read the file before suggesting titles.
- If the post has front matter, use the existing title, excerpt, and tags as context.
- Read `STYLE.md` if available and preserve the author's direct, practical tone.

## Output

Suggest exactly 10 title options.

For each title:

- Keep it direct, specific, and in the author's voice.
- Reflect the post's actual thesis, not only a broad topic area.
- Prefer clear nouns and verbs over cleverness.
- Avoid glib, joke-like, cute, clickbait, or overly polished marketing phrasing.
- Avoid colons unless the title genuinely needs one.
- Keep the title usable as Jekyll front matter with minimal editing.

After listing the 10 options, ask the user to pick one title or provide an edited title.

## Final Response

Return only the 10 title options and the prompt asking the user to choose or edit one, unless the user asks for explanation.
