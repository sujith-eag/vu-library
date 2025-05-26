---
layout: home
title: JavaScript
hero:
  name: JavaScript
  # text: Learn about various subjects
  tagline: Conepts of JavaScript for Web Development
  image:
    src: /logo/javascript.svg
    alt: JS logo

---

<script setup>
import CollapsibleList from '@theme/components/CollapsibleList.vue'
import ResourceCard from '@theme/components/ResourceCard.vue'
import BookCard from '@theme/components/BookCard.vue'

import { 
  booksUsed, 
  booksPending,
  resourcesUsed,
  resourcesPending } from '@theme/data/resources/jsResources.ts'

import { jsSection } from '@theme/data/fileStructures/jsSections.ts'
import { jsdomSection } from '@theme/data/fileStructures/jsdomSections.ts'

</script>

## JavaScript Topics Index
 
<CollapsibleList :sections="jsSection" />

## JavaScript DOM Manipulation Index

<CollapsibleList :sections="jsdomSection" />

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

