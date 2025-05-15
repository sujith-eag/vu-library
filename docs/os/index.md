---
layout: home
title: Operating System
hero:
  name: Operating System
  # text: Learn about various subjects
  tagline: Low level management using OS
  image:
    src: /logo/os_s.svg
    alt: os logo
---

<script setup>
import CollapsibleList from '@theme/components/CollapsibleList.vue'
import ResourceCard from '@theme/components/ResourceCard.vue'
import BookCard from '@theme/components/BookCard.vue'

import { 
  booksUsed, 
  booksPending,
  resourcesUsed,
  resourcesPending } from '@theme/data/resources/osResources.ts'

import { osSection } from '@theme/data/fileStructures/osSections.ts'

</script>

## Operating System
 
<CollapsibleList :sections="osSection" />


<h3>Books Used to Learn OS & Linux</h3>

<div class="book-container">

  <template v-for="(book, index) in booksUsed" :key="index">
    <BookCard v-bind="book" />
  </template>

</div>

<h3>Yet to be Completed</h3>

<div class="book-container">

  <template v-for="(book, index) in booksPending" :key="index">
    <BookCard v-bind="book" />
  </template>

</div>

__

 
 