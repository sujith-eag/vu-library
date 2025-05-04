---
title: "HTML - 05 - Button"
description: ""
summary: ""
date: 2024-11-04T19:53:44+05:30
lastmod: 2024-11-04T19:53:44+05:30
draft: false
weight: 705
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

### `<button></button>`

The `<button>` element represents a clickable button that can be used to submit forms or trigger actions on the webpage. It can contain text, images, or other HTML elements.

```html
<button type="submit">Submit</button>
<button type="button" onclick="alert('Hello!')">Click Me!</button>
```

### Drop Down Selector: `<select> <option> </option> </select>`

The `<select>` element creates a drop-down list that allows users to choose one or more options. Each option within the list is defined using the `<option>` element.

```html
<label for="weather">Select the weather type today:</label>
<select id="weather">
    <option value="">--Make a Choice--</option>
    <option value="sunny">Sunny</option>
    <option value="rainy">Rainy</option>
    <option value="snowing">Snowing</option>
    <option value="overcast">Overcast</option>
</select>
```

- The first `<option>` with `value=""` is a placeholder that prompts users to make a selection.
- The `for` attribute in the `<label>` element links it to the `<select>` element, enhancing accessibility.
