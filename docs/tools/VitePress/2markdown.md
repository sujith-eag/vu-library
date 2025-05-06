
## Usage

VitePress supports YAML frontmatter in all Markdown files, parsing them with [gray-matter](https://github.com/jonschlinkert/gray-matter). The frontmatter must be at the top of the Markdown file (before any elements including `<script>` tags), and must take the form of valid YAML set between triple-dashed lines. Example:

```
---
title: Docs with VitePress
editLink: true
---
```

Many site or default theme config options have corresponding options in frontmatter. 

You can use frontmatter to override specific behavior for the current page only. For details, see [Frontmatter Config Reference](https://vitepress.dev/reference/frontmatter-config).

You can also define custom frontmatter data of your own, to be used in dynamic Vue expressions on the page.

## Accessing Frontmatter Data

Frontmatter data can be accessed via the special `$frontmatter` global variable:

Here's an example of how you could use it in your Markdown file:

```
---
title: Docs with VitePress
editLink: true
---

# {{ $frontmatter.title }}

Guide content
```

You can also access current page's frontmatter data in `<script setup>` with the [`useData()`](https://vitepress.dev/reference/runtime-api#usedata) helper.


___

Internal Links

External Links, Outbound links automatically get `target="_blank" rel="noreferrer"`:


#### Frontmatter

[YAML frontmatter](https://jekyllrb.com/docs/front-matter/) is supported out of the box:

```
---
title: Blogging Like a Hacker
lang: en-US
---
```

This data will be available to the rest of the page, along with all custom and theming components.

For more details, see [Frontmatter](https://vitepress.dev/reference/frontmatter-config).


## GitHub-Style Tables


```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

___

A [list of all emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs) is available.


___

#### Table of Contents

```
[[toc]]
```

**Output** will be all the content headings in a page.

Rendering of the TOC can be configured using the `markdown.toc` option.

### Custom containers

```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

Each are highlight blocks but the details acts as a dropdown.

### Custom Title

You may set custom title by appending the text right after the "type" of the container.

**Input**

````
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to toggle the code
```js
console.log('Hello, VitePress!')
```
:::
````

### Additional Attributes

You can add additional attributes to the custom containers. We use [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs) for this feature, and it is supported on almost all markdown elements. For example, you can set the `open` attribute to make the details block open by default:

**Input**

````
::: details Click me to toggle the code {open}
```js
console.log('Hello, VitePress!')
```
:::
````


## GitHub-flavored Alerts

VitePress also supports [GitHub-flavored alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) to render as callouts. They will be rendered the same as the [custom containers](https://vitepress.dev/guide/markdown#custom-containers).

> [!NOTE]
> This is similar to Obsedian note highlight
> 

```
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```


___


## Syntax Highlighting in Code Blocks

VitePress uses [Shiki](https://github.com/shikijs/shiki) to highlight language syntax in Markdown code blocks, using coloured text. Shiki supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:

A [list of valid languages](https://shiki.style/languages) is available on Shiki's repository.

You may also customize syntax highlight theme in app config. Please see [`markdown` options](https://vitepress.dev/reference/site-config#markdown) for more details.


## Line Highlighting in Code Blocks

`js[4]`

`js{5-8}`  for 5 to 8

`js{4,7-13,40}`

Alternatively, it's possible to highlight directly in the line by using the `// [!code highlight]` comment.

## Focus in Code Blocks

Adding the `// [!code focus]` comment on a line will focus it and blur the other parts of the code.

## Colored Diffs in Code Blocks

Adding the `// [!code --]` or `// [!code ++]` comments on a line will create a diff of that line, while keeping the colors of the codeblock.


## Code Groups

You can group multiple code blocks like this:

**Input**

````
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
````


## Markdown File Inclusion

You can include a markdown file in another markdown file, even nested.

For example, you can include a relative markdown file using this:

**Input**

```
# Docs

## Basics

<!--@include: ./parts/basics.md-->
```


```
# Docs

## Basics

<!--@include: ./parts/basics.md#basic-usage{,2}-->
<!--@include: ./parts/basics.md#basic-usage{5,}-->
```

The format of the selected line range can be: `{3,}`, `{,10}`, `{1,10}`


> [!WARNING]
Note that this does not throw errors if your file is not present. Hence, when using this feature make sure that the contents are being rendered as expected.


## Math Equations

This is currently opt-in. To enable it, you need to install `markdown-it-mathjax3` and set `markdown.math` to `true` in your config file:

```
npm add -D markdown-it-mathjax3
```

```
export default {
  markdown: {
    math: true
  }
}
```


___

## Image Lazy Loading

You can enable lazy loading for each image added via markdown by setting `lazyLoading` to `true` in your config file:

```
export default {
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  }
}
```


___



## Referencing Static Assets

All Markdown files are compiled into Vue components and processed by [Vite](https://vitejs.dev/guide/assets.html). You can, **and should**, reference any assets using relative URLs:

```
![An image](./image.png)
```

Linked files are not treated as assets

PDFs or other documents referenced by links within markdown files are not automatically treated as assets. To make linked files accessible, you must manually place them within the [`public`](https://vitepress.dev/guide/asset-handling#the-public-directory) directory of your project.

All referenced assets, including those using absolute paths, will be copied to the output directory with a hashed file name in the production build. Never-referenced assets will not be copied. Image assets smaller than 4kb will be base64 inlined - this can be configured via the [`vite`](https://vitepress.dev/reference/site-config#vite) config option.

All **static** path references, including absolute paths, should be based on your working directory structure.


___

You can place these files in the `public` directory under the [source directory](https://vitepress.dev/guide/routing#source-directory). For example, if your project root is `./docs` and using default source directory location, then your public directory will be `./docs/public`.

Assets placed in `public` will be copied to the root of the output directory as-is.

Note that you should reference files placed in `public` using root absolute path - for example, `public/icon.png` should always be referenced in source code as `/icon.png`.

> [!note]
This kind of didn't work in GitHub


___

