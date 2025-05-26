---
layout: home
title: DataBase Management
hero:
  name: DataBase Management
  # text: Learn about various subjects
  tagline: DataBase Concepts to Handle Data
  image:
    src: /logo/server_c.svg
    alt: Server logo

---

<script setup>
import CollapsibleList from '@theme/components/CollapsibleList.vue'
import ResourceCard from '@theme/components/ResourceCard.vue'
import BookCard from '@theme/components/BookCard.vue'

import { 
  booksUsed, 
  booksPending,
  resourcesUsed,
  resourcesPending } from '@theme/data/resources/dbmsResources.ts'

import { dbmsSection } from '@theme/data/fileStructures/dbmsSections.ts'

</script>

## DataBase Topic Index
 
<CollapsibleList :sections="dbmsSection" />

___
 
<h3>Books & Resources Used to Learn DataBase</h3>


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
