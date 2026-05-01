---
name: blog-hero-image
description: Suggest hero-image concepts and generation prompts for a blog post. Use when Codex needs to create or propose header/hero image prompts for a blog post draft, published post, or post idea, especially for this Jekyll blog's Minimal Mistakes header image workflow.
---

# Blog Hero Image

Use this documentation-only workflow to suggest hero-image directions for a blog post.

## Inputs

- Use the post draft, published post, title, excerpt, or notes the user provides.
- If the user provides a file path, read the file before suggesting prompts.
- If the post has front matter, use the title, excerpt, tags, and existing `header.overlay_image` as context.
- Read `STYLE.md` if available and keep the image concepts aligned with the author's direct, practical tone.

## Output

Suggest exactly 5 hero-image generation prompts.

For each prompt:

- Make it specific to the post's thesis, not a generic abstract technology image.
- Prefer concrete editorial metaphors, real-world scenes, diagrams, workspaces, systems, or visual contrasts.
- Avoid glib, joke-like, cute, or meme-style concepts.
- Avoid text-heavy images unless the user explicitly asks for typography.
- Avoid dark, blurred, generic stock-photo aesthetics.
- Include enough visual detail for a high-quality generated bitmap image.
- Make the prompt suitable for a wide blog header crop.

Also suggest a header filename in this repository's style:

```yaml
header:
  overlay_image: /images/header-title-slug.png
```

Use `/images/...` for Jekyll front matter and `/blog/images/...` only when writing Markdown image references inside post content.

## Final Response

Return the 5 prompts and the suggested `header.overlay_image` path. Keep the response concise.
