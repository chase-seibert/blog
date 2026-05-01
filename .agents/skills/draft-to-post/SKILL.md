---
name: draft-to-post
description: Write up my notes as a blog post. Don't change the words or formatting too much, just flesh out the prose. Follow my style.
args:
  - name: file_path
    description: Path to the draft file to transform
    required: false
---

# draft-to-post

## Description
Write up my notes as a blog post. Don't change the words or formatting too much, just flesh out the prose. Follow STYLE.md.

## Usage
```
/draft-to-post [file_path]
```

If no file path is provided, prompt the user to specify which draft file to process.

## Instructions

### Step 1: Get the file path
- If the user provided a file path as an argument, use it
- If not, ask the user which draft file they want to process
- Validate that the file exists

### Step 2: Backup original notes
- Read the original draft notes file content
- Preserve the original draft notes at the bottom of the written blog post, underneath a horizontal break 

### Step 3: Read the style guide
- Read the STYLE.md file to understand the writing voice and patterns
- Keep the style guidelines in mind for the transformation

### Step 4: Transform the draft
- Read the draft notes file carefully
- Transform the notes into fleshed out prose following STYLE.md guidelines
- Key principles:
  - Don't change the core words or ideas too much
  - Flesh out the prose to be more complete, readable, and to flow nicely
  - Use direct, prescriptive language
  - Use short declarative sentences for emphasis
  - Add structure with headers (H1, H2, H3)
  - Use lists, bullet points, and code blocks where appropriate
  - Be specific and actionable
  - Avoid hedging, passive voice, and excessive praise
  - Keep paragraphs to 2-4 sentences
  - Use bold for key terms, italics for notes

### Step 5: Add front matter
Create appropriate Jekyll front matter at the top of the file:
```yaml
---
title: "[Suggested Title]"
tags: tag1 tag2 tag3
toc: true
header:
  overlay_image: /images/header-something.png
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "[Brief 1-2 sentence excerpt]"
---
```

Suggest appropriate:
- Title (direct, clear, reflects content)
- Tags (relevant topics covered, primarily use existing tags)
- Excerpt (compelling 1-2 sentence summary)

### Step 6: Write the transformed content
- Use the Write tool to replace the draft file with the polished version
- Include the front matter at the top
- Keep the same file path

### Step 7: Suggest alternative titles
After writing the post, present 5 alternative title options to the user:
1. [Title option 1]
2. [Title option 2]
3. [Title option 3]
4. [Title option 4]
5. [Title option 5]

Ask the user if they want to use one of these titles instead. If yes, update the front matter with their choice.

### Step 8: Create LinkedIn post
Write a short LinkedIn post (3-5 sentences) that:
- Hooks the reader with a key insight or question
- Summarizes the main value of the blog post
- Includes a call-to-action to read the full post
- Uses a professional but engaging tone
- Ends with a link placeholder: [Link to blog post]

Present this to the user for them to copy.

## Notes
- The transformation should enhance readability while preserving the author's voice and key points
- Don't add new topics that were not in the original notes
- Focus on structure, clarity, and flow
- Follow STYLE.md for voice and formatting