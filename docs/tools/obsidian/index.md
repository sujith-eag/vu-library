---
title: "Obsidian"
description: ""
summary: ""
date: 2024-10-22T14:47:43+05:30
lastmod: 2024-10-22T14:47:43+05:30
draft: false
weight: 900
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## Keyboard Shortcuts
- **`Ctrl + P`**: Open Command Palette for search.
- **`Ctrl + Shift + P`**:  to toggle left panel (Custom short key)
- **`Alt`**: Create multiple cursor points by holding down.
- **`Alt + Shift`**: Select multiple sections in different areas.

## Linking and Tagging
- **Tags**: `#Tag`
  
- **Linking Notes**:
  - **Basic Link**: `[[Note Name]]` — Creates a new file if the note doesn’t exist.
  - **Alias Naming**: `[[link | name]]` — Use a pipe `|` to create an alias.
  - **Header Links**: `[[Obsidian#Header 1 | Alias]]` — Link to specific headers in a note.
  - **Tagged Sections**: `[[Obsidian#^352532 | toHideTheNumbers]]` — Using `^` to tag any small section.

## Code and Comments
- **Inline Code**: `code line`
- **Code Block**:
  ```c
  code block with language insertions
  ```

- **Links**:
  - External: `[name](URL)` 
  - Embed Image: `![name](URL)` 
  - Example: `![Google](https://www.google.com)`

- **Hover Text**: `[google](https://www.google.com "To bring up a pop up while hovering")`

- **Information Block**:
  > [!info]  
  > Information Block  
  > Formatting text and links:  
  > [Obsidian Help](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax)

- **Note Block**:  
  > [!note] : Name  
  > Description goes here.

- **Inline Comments**: `%% comments visible only in editing view %%`

## Text Formatting
- **Highlighting**: `==highlighting==`
- **Strikethrough**: `~~Strike through~~`

## Lists and Checklists
- **Unordered Lists**: Start with `+`, `-`, or `*`
- **Ordered Lists**: Start with numbers
  1. One
     1. Nested one
     2. Nested two
  2. Two
  3. Three

- **Checklist**: 
  - `- [ ]` for an empty checkbox  
  - `- [x]` for a checked box  
  - Example:
    - [ ] Task 1
    - [x] Task 2

## Footnotes
- **Creating Footnotes**: 
  - Use `[^1]` to reference a footnote and `[^1]:` for the footnote text.
  - Example: Footnote [^1]

- **Inline Method**: Use `text^[footnote]` for inline footnotes.
  - Example: This is a footnote^[this is the text for the footnote].

Order of numbers can be changed and numbers will change accordingly

Foot note [^1]
Another one [^2]

[^1]: Linked to the footnote
[^2]: another link

## Images
- **Embedding Images**: 
  - `![link text](URL)` 
  - `![link text](URL "Alt text")`

## Tables
- **Creating Tables**: 
  - Use `|` to separate columns, with `---` under headers.
  
  | Name | Column | Header |
  | ---- | ------ | ------ |
  |      |        |        |

## Markdown to HTML Conversion
- Markdown can be converted to HTML for webpages. Check out:
  - [Markdown Guide](https://www.markdownguide.org)
  - **Static Site Generators**:
    - Jekyll: Popular generator for building HTML websites from Markdown.
    - GitHub Pages: Offers free hosting for Jekyll sites.

## Line Breaks
- To create a line break, leave two or more spaces after a paragraph. Or `<br />` can be used.

## Recommended Tools and Plugins
- **Markdown Editors**:
  - Ghostwriter (cross-platform)
  - Markdown Monster (Windows)
  - ReText (Linux)

- **VS Code Plugins**:
  - Markdown Extended
  - Prettier - Code Formatter
  - Markdown Shortcuts
  - Markdown Preview Enhanced

