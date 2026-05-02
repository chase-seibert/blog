---
name: blog-hero-image
description: Suggest or generate hero-image concepts for a blog post. Use when Codex needs to create, generate, or propose header/hero image prompts for a blog post draft, published post, or post idea, especially for this Jekyll blog's Minimal Mistakes header image workflow.
---

# Blog Hero Image

Use this workflow to suggest or generate hero-image directions for a blog post.

## Inputs

- Use the post draft, published post, title, excerpt, or notes the user provides.
- If the user provides a file path, read the file before suggesting prompts.
- If the post has front matter, use the title, excerpt, tags, and existing `header.overlay_image` as context.
- Read `STYLE.md` if available and keep the image concepts aligned with the author's direct, practical tone.

## Modes

### Prompt-Only Mode

Use this mode when the user asks for ideas, concepts, options, or prompts.

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

### Generate Mode

Use this mode when the user asks to generate, create, make, or produce the hero image, or when they choose one of the suggested prompts.

- Use the `imagegen` skill and the built-in image generation tool by default.
- If the user selects a prompt, generate from that prompt. If the user asks to generate without choosing, pick the strongest prompt for the post's thesis and proceed.
- Generate a wide blog header image suitable for Minimal Mistakes hero cropping.
- Save the final selected bitmap under `images/` using the repository style `header-title-slug.png`.
- Do not overwrite an existing image unless the user explicitly asks for replacement. If the target exists, create a versioned sibling such as `header-title-slug-v2.png`.
- If the user provided a draft or post file path, update its front matter to reference the generated image:

```yaml
header:
  overlay_image: /images/header-title-slug.png
```

- Preserve existing `header.overlay_color` and `header.overlay_filter` values.
- Validate that the generated file exists in `images/` and is a plausible wide bitmap before finishing.

## Final Response

In prompt-only mode, return the 5 prompts and the suggested `header.overlay_image` path. Keep the response concise.

In generate mode, return the saved image path, the updated `header.overlay_image` path, the draft or post file updated if any, and the final generation prompt used.
