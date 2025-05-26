---
layout: home
title: C Programming
hero:
  name: C Programming
  # text: Learn about various subjects
  tagline: Data Structures using C Language
  image:
    src: /logo/c_logo.svg
    alt: C Programming

---

<script setup>
import CollapsibleList from '@theme/components/CollapsibleList.vue'
import ResourceCard from '@theme/components/ResourceCard.vue'
import BookCard from '@theme/components/BookCard.vue'

import { 
  booksUsed, 
  booksPending,
  resourcesUsed,
  resourcesPending } from '@theme/data/resources/cResources.ts'

import { cSection } from '@theme/data/fileStructures/cSections.ts'

</script>

## C & Data Structure Index
 
<CollapsibleList :sections="cSection" />

___
 
<h3>Books & Resources Used to Learn C</h3>


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

