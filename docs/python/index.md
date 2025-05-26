---
layout: home
title: Python
hero:
  name: Python
  # text: Learn about various subjects
  tagline: Detailed exploration of python concepts
  image:
    src: /logo/python.svg
    alt: Python logo

---

<script setup>
import CollapsibleList from '@theme/components/CollapsibleList.vue'
import ResourceCard from '@theme/components/ResourceCard.vue'
import BookCard from '@theme/components/BookCard.vue'

import { 
  booksUsed, 
  booksPending,
  resourcesUsed,
  resourcesPending } from '@theme/data/resources/pythonResources.ts'

import { pythonSection } from '@theme/data/fileStructures/pythonSections.ts'

</script>

## Python Topics Index
 
<CollapsibleList :sections="pythonSection" />

___
 
<h3>Books & Resources Used to Learn Python</h3>


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

