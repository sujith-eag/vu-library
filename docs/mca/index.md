---
layout: home
title: MCA Section
hero:
  name: MCA Section
  # text: Learn about various subjects
  tagline: Materials and Practices on MCA Syllabus and Examination
  image:
    src: /logo/terminal.svg
    alt: Code logo
    
---

<script setup>
import CollapsibleList from '@theme/components/CollapsibleList.vue'
import ResourceCard from '@theme/components/ResourceCard.vue'
import BookCard from '@theme/components/BookCard.vue'

import { 
  booksUsed, 
  booksPending,
  resourcesUsed,
  resourcesPending } from '@theme/data/resources/mcaResources.ts'

import { mca1Section, mca2Section } from '@theme/data/fileStructures/mcaSections.ts'

</script>

## MCA Second Semester
 
<CollapsibleList :sections="mca2Section" />

___

<h3>Text Books Recommended</h3>

<!-- <div class="book-container">

  <template v-for="(book, index) in booksUsed" :key="index">
    <BookCard v-bind="book" />
  </template>

</div> -->


## MCA First Semester
 
<CollapsibleList :sections="mca1Section" />

___

<h3>Text Books Recommended</h3>

<!-- <div class="book-container">

  <template v-for="(book, index) in booksPending" :key="index">
    <BookCard v-bind="book" />
  </template>

</div> -->
