---
title: "Doks Theme 2"
description: ""
summary: ""
date: 2024-10-23T15:32:29+05:30
lastmod: 2024-10-23T15:32:29+05:30
draft: true
weight: 50
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


Usual code block with usual triple block quote language can also be indicated.

## Codeblocks to Write code
### Frames and titles

Code block in a window-like frame looking like a terminal with a tag of file name
using `toml {title=".."}`
```js {title="count.js"}
js {title="count.js"}
// then code follows below
```

For bash using the `{title=""}` makes a label full length, it can be removed by adding `{frame="none"}`
```bash {frame="none"}
after triple quote
bash {frame="none"}
```


### Line numbers

```js { lineNos=true  lineNoStart=32 }
js { lineNos=true  lineNoStart=32 }

and some more
```

### Line Highlight

`js { hl_lines=2 }`   highlights the second line, doesn't have to be numbered.

For multiple lines in different places.
```js { linenos=true, hl_lines=[2, "4-5"], linenostart=199 }
js { linenos=true, hl_lines=[2, "4-5"], linenostart=199 }
#
#
#
#
#
#

```
there is small and capital letters??


_____________

## Custom fonts

Default is `jost` font created by `indestructible type` for all text.

Custom font can be set up in CSS file

## System fonts
Easier and loads faster by using system fonts,  can be added to  <br />

```scss  {title="assets/scss/common/_variables-custom.scss"}
// $font-family-sans-serif:

$font-family-sans-serif:
	system-ui,
	-apple-system,
	"Segoe UI",
	Roboto .......etc
```


________________

## Shortcodes

Supports hugo type shortcodes also

### Callout

Are useful for displaying secondary information alongside a page's main content.  <br />
They can be of type `note,  tip,  caution, danger`.

Wrap content,  similar to html tags, the two `{{}}` are extra.


```md
< callout >  < /callout >

< callout note > This is a note callout. < /callout >
```
{{< callout note >}}
 This is a note callout.
These call outs get called out even within a code block so ive removed all {{}} from all callouts below.
Also the images get called so there also removed

 {{< /callout >}}

### Note callout
```md
< callout context='note' title="Note" icon="outline/info-circle" >
This is a note callout. blue

can put a code block here also, makes a block note.

< /callout >
```
{{< callout tip >}}
This is a note callout. its white if i add context = note.

< callout tip > < /callout>
but just this gets tip callout but i cant put title like shown in above code.
```js
can put a code block here also, makes a block note
```

{{< /callout >}}


### Cutsom callout titles
```
< callout context='tip' title="Did you know?" icon="outline/rocket" >
This is a note callout but like a question. and purple

adding link and stuff, any markdown format

< /callout >
```
{{< callout title="Did you know?" icon="outline/rocket" >}}
This is a note callout but like a question. and purple (i removed the context = tip so its blue)
adding context= is makig every type white

adding link and stuff, any markdown format

{{< /callout >}}

```
< callout context='tip' title="Did you know?" icon="outline/rocket" >
This is a note callout but like a question. and purple
adding link and stuff, any markdown format
< /callout >
```
There are `caution` in kind of orange, `danger` type in reddish


____________________

## Details / kind of dropdown

details is a html element??

```md
< details "SomethingTitleHere" >
Something to show
< /details >
```
{{< details "SomethingTitleHere" >}}
Something to show
{{< /details >}}


<br /> <br />
Starting in an open state
```md
< details "SomethingTitleHere" open >
Something to show,  the open is boolian that shows the content
< /details >
```
{{< details "SomethingTitleHere" open >}}
Something to show,  the open is boolian that shows the content
{{< /details >}}

____________________

## Tabs and tab

Tabbed interface, one tab with options to choose like the `yaml | toml | json` <br />
to display respective code block or other thing using tabs for overall box and <br />
and tab for each individual section within it.  <br />
tabs must have a unique identifier `like an id`  <br />
each tab should have a label to display to the user `yaml toml`

```md
< tabs "create-new-site" >

< tab "yaml" >
a code block for this
< /tab >

< tab "toml" >
a code block for toml
< /tab >

< /tabs >
```
{{< tabs "create-new-site" >}}

{{< tab "yaml" >}}
a code block for this
{{< /tab >}}

{{< tab "toml" >}}
a code block for toml
{{< /tab >}}

{{< /tabs >}}
When a tab is selected, it is remembered across the page


____________
## Link cards / wide card link

To prominently link to different pages. with a box and arrow, with a title and short discription. Takes up whole horizontal space.
`href` has the link `target` sets where to open...   similar to anchor tag.
```md
< link-card
	title= "Next page/ show case / whatever the name"
	description= " something below it"
	href= "/refLink/"
	target="_blank"
>
```
{{< link-card
	title= "Next page/ show case / whatever the name"
	description= " something below it"
	href= "/refLink/"
	target="_blank"
>}}


```md
< link-card	title= "show case"   href= "/refLink/"  >
```
{{< link-card	title= "show case"   href= "/refLink/"  >}}

## Card grid / putting two link box in a row

`card-grid` becomes the wrapper where many `link-card` can be placed.
```md
# all {{}} are removed around <>
< card-grid >
< link-card	title= "show case"   href= "/refLink/"  >
< link-card	title= "show case"   href= "/refLink/"  >
< /card-grid >
```
{{< card-grid >}}
{{< link-card	title= "show case"   href= "/refLink/"  >}}
{{< link-card	title= "show case"   href= "/refLink/"  >}}
{{< /card-grid >}}

__________________

## Images shortcodes

```md
< `img` >,   < `picture` >,  < `figure` >
```

`picture` is used to display page resource image
```md
< `picture`  src="vincent.jpg"  alt="bird image flying" >
```

`figure` is used to display image from asset directory.
```md
< `figure`  src="images/vincent.jpg"  alt="bird image flying"  caption="under text" >
```


## Video
`{{` `< video >` `}}` shortcode

```md
< video src="robin(540p)"  autoplay="true"  muted="true">
```


______________


## from Page resource
Adding a monochrome monogram  / logo which changes with light and dark modes.
SVG using `{{` `< inline-svg >` `}}` which gets embedded into the html

```md
< inline-svg   src="logo-netlify-lightmode.svg"  width="64px"  height="57px"  class="svg-inline- svg-monochrome">
```

## from assets directory
```md
< inline-svg   src="svgs/logos/logo-netlify-lightmode.svg"  width="64px"  height="57px"  class="svg-inline-cutsom svg-lightmode">
```

### Tabler icons

[Tabler Icons site](tabler.io/icons), this icons provided by copying its name from this site
```md
< inline-svg "outline/coffee" >

< inline-svg  src="outline/hand-love-you"  sroke-width='1' stroke="#ee52b7" height="3rem"  width="3rem"  class="svg-inline-custom" >
```
