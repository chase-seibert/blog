---
name: publish-draft
description: Publish a Jekyll blog draft from `_drafts/` by moving it to a dated `_posts/` file, updating any draft tracking annotation that points to it, and committing only the publishing changes. Use when Codex needs to turn a generated or hand-written draft into a published blog post in this repository.
---

# Publish Draft

Use this workflow to publish a draft in this Jekyll blog. Publishing means moving one selected Markdown file from `_drafts/` to `_posts/` and committing the exact publishing changes.

## Inputs

- Require a draft file path. If the user does not provide one, ask for it.
- Require the file to be a Markdown file under `_drafts/` unless the user explicitly asks to publish a file from another location.
- Prefix the post filename with today's local date in `YYYY-MM-DD` format unless the user specifies another publication date.

## Workflow

### 1. Inspect The Draft And Worktree

- Read the draft and confirm it is the file the user intends to publish.
- Check `git status --short` before making changes.
- Treat unrelated modified or untracked files as user work. Do not stage, commit, move, or revert unrelated files.

### 2. Choose The Post Target

- Derive the slug from the draft filename by removing any leading date and `.md` extension.
- Determine the publication date before moving the file: use the user-specified date when provided, otherwise use today's local date.
- Publish to `_posts/YYYY-MM-DD-slug.md`, always prefixing the slug with the publication date.
- If the user gives a specific date, use that date in `YYYY-MM-DD` format.
- If the target file already exists, ask before overwriting or replacing it.
- Preserve the draft's YAML front matter. Do not invent a new title if one already exists.
- If the draft has no front matter, add minimal Jekyll front matter with `title`, `tags`, `toc`, `header`, and `excerpt` using the same conventions as `draft-to-post`.

### 3. Move The Draft

- Move the selected draft into `_posts/` using `git mv` if the draft is tracked.
- If the draft is untracked, use a normal move and then stage the deleted/created paths explicitly.
- Keep the user's original notes draft in `_drafts/` if it is a separate file. Do not move source notes that merely reference the generated draft.
- Search `_drafts/` for tracking annotations that reference the moved draft:

```markdown
<!-- draft-to-post: _drafts/title-slug.md -->
```

- Update matching annotations to the published `_posts/YYYY-MM-DD-slug.md` path so the original notes keep a useful reference to the generated file after publication.

### 4. Validate And Commit

- Run a lightweight validation command before committing, preferably `bundle exec jekyll build` when dependencies are available.
- Stage only the moved post file and any source-draft annotation updates.
- Commit with a concise message such as `Publish <Post Title>` or `Publish <slug>`.
- Do not push git. Leave pushing to the user unless they explicitly request it separately.
- If validation or commit fails because credentials, network, or local dependencies are unavailable, report the blocker and leave the worktree in a clear state.

## Final Response

When finished, report the published `_posts` path and the commit hash if one was created. Mention that git was not pushed, along with any skipped validation or assumptions such as publication date, branch, or generated title.
