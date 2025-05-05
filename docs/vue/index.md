---
layout: home
title: Vue.js
hero:
  name: Vue.js
  # text: Learn about various subjects
  tagline: Working with Vue framework
  image:
    src: /logo/vuejs.svg
    alt: React logo
#   actions:
#     - theme: brand # alt,  plain
#       text: Java Core
#       link: /java/java_intro
#     - theme: brand
#       text: Java Advance
#       link: /java/java_next
#     - theme: brand
#       text: Spring Framework
#       link: /java/java_next    
# features:    
#  - title: Java Basics
#    details: Start learning Java from scratch.

#  - title: Advanced Topics
#    details: Dive deeper into Java’s powerful features.

---

<script setup>
import CollapsibleList from '@theme/components/CollapsibleList.vue'
import ResourceCard from '@theme/components/ResourceCard.vue'
import BookCard from '@theme/components/BookCard.vue'

import { 
  booksUsed, 
  booksPending,
  resourcesUsed,
  resourcesPending } from '@theme/data/resources/vueResources.ts'

// import { vueSection } from '@theme/data/fileStructures/vueSections.ts'

</script>

## Still under edit
 
<!-- <CollapsibleList :sections="vueSection" /> -->
Check out the books on react which were really helpful
___
 
<h3>Books Used to Learn Vue.js</h3>


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
