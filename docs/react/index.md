---
layout: home
title: React.js
hero:
  name: React.js
  # text: Learn about various subjects
  tagline: Working with React framework and it's libraries
  image:
    src: /logo/react.svg
    alt: React logo

---

<script setup>
import CollapsibleList from '@theme/components/CollapsibleList.vue'
import ResourceCard from '@theme/components/ResourceCard.vue'
import BookCard from '@theme/components/BookCard.vue'

import { 
  booksUsed, 
  booksPending,
  resourcesUsed,
  resourcesPending } from '@theme/data/resources/reactResources.ts'

// import { reactSection } from '@theme/data/fileStructures/reactSections.ts'

</script>

## React Concepts Still Under Edit
 
<!-- <CollapsibleList :sections="reactSection" /> -->

___
 
<h3>Books Used to Learn React</h3>


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
