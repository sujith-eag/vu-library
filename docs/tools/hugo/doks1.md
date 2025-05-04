---
title: "Doks Theme 1"
description: ""
summary: ""
date: 2024-10-23T15:31:58+05:30
lastmod: 2024-10-23T15:31:58+05:30
draft: true
weight: 40
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Creating new project directory.         <br />
Get all dependencies which were a lot.    <br />
Run the local development server.
```bash { frame="none"}
npm create thulite@latest -- --template doks

npm install

npm run dev
```

Updating the dependencies.
```bash {frame="none"}
npm install @thulite/docs-core@latest
npm install @thulite/docs-core@latest @thulite/images@latest @thulite/seo@latest
```

_______________

## Project structuring

`content/docs/`   New files go in docs. <br />

Multiple sub-folders can be created inside docs.
```bash {frame="none"}
npm run create docs/guides/faq.md
```

`content/` content files.      <br />
`assets/` scripts, images styles etc.  <br />
`static/` static assets, fonts favicon, PDF.  <br />

## Configuration files

`config/_default/hugo.toml`  Hugo/ site config.  <br />
`config/_default/module.toml` Hugo mounts config.   <br />
`config/_default/params.toml`  The Doks + thulite integration.


___________


## Sidebar

By default Doks will generate a sidebar based on the file system structure of documentation, using each file's `title` property as the sidebar entry.

Instead of using default navigation, use             <br />
`sidebar_<section>`  entries in `config/_default/menues/menues.<language>.toml`
language is en if english.             <br />
Make sure to use `pageRef` in stead of `url` and  omit the trailing slash.
```toml {title="menues.toml"}
[[sidebar_docs]]
	name= "Guides"
	pageRef="/docs/guides"
	weight = 10

[[sidebar_docs]]
	name= "Reference"
	pageRef="/docs/reference"
	weight = 20

[[sidebar_docs]]
	name= "Resources"
	pageRef="/docs/resources"
	weight = 30
```
Other child references below it will be generated automatically.


### Side bar collapse

Sections can be collapsed by default by setting `collapsed` to true in front matter of a section's `_index.md`
```toml {title="_index.md"}
---
sidebar:
	collapsed: true
---
```

Sidebar navigation is also available for other `docs` based sections created.
by running command

```bash
npm run create -- --kind docs tutorials
```

and add new `tutorials` section to `config/_default/params.toml`
```toml {title="params.toml"}
[doks]
	sectionNav = ["docs", "tutorials"]
```


## *on this page* side bar on the right

This table of content section is automatically generated from <br />  `./config/_default/markup.toml`
```toml {title="markup.toml"}
[tableOfContents]
	endLevel = 3
	ordered = false
	startLevel = 2
```


## main heading elements

The left site top navigation can be defined in <br />
`config/_default/menus/menus.<language>.toml`
```toml {title="menus.toml"}
[[main]]
	name = "Docs"
	url = "/docs/guides/example-guide/"
	weight = 10

[[main]]
	name = "Blog"
	url = "/blog/"
	weight = 30
```


## main header social entries

`config/_default/menus/menus.<language>.toml`
```toml {title="menus.toml"}
[[social]]
	name = "Github"
	pre = ____ it was too long for icon
	url = "https://github..."
	weight = 30
```
Icon can be gotten from tabler site


## Footer

Footer entries in `config/_default/menus/menus.<language>.toml`
```toml {title="menus.toml"}
[[footer]]
	name = "Privacy Policy"
	url = "/privacy/"
	weight = 10
```

