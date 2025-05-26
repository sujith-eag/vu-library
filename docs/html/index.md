---
layout: home
title: HTML / CSS
hero:
  name: HTML & CSS
  # text: Learn about various subjects
  tagline: Web Development Basics
  image:
    src: /logo/html.svg
    alt: HTML logo

---

<script setup>
import CollapsibleList from '@theme/components/CollapsibleList.vue'
import ResourceCard from '@theme/components/ResourceCard.vue'
import BookCard from '@theme/components/BookCard.vue'

import { 
  booksUsed, 
  booksPending,
  resourcesUsed,
  resourcesPending } from '@theme/data/resources/htmlcssResources.ts'

import { webSection } from '@theme/data/fileStructures/htmlcssSections.ts'

</script>

## HTML & CSS Index
 
<CollapsibleList :sections="webSection" />

___
 
<h3>Books & Resources Used to Learn Web Progamming</h3>


<div class="book-container">

  <template v-for="(book, index) in booksUsed" :key="index">
    <BookCard v-bind="book" />
  </template>

</div>

<!-- <div class="book-container">
  <ResourceCard
    v-for="(resource, index) in resourcesUsed"
    :key="index"
    v-bind="resource"
  />
</div> -->

___

<h3>Yet to be Completed</h3>

<div class="book-container">

  <template v-for="(book, index) in booksPending" :key="index">
    <BookCard v-bind="book" />
  </template>

</div>

