---
layout: home
title: JavaScript DOM
hero:
  name: JavaScript DOM
  # text: Learn about various subjects
  tagline: Conepts of JavaScript for Web Development
  image:
    src: /logo/javascript.svg
    alt: JS logo
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
  resourcesPending } from '@theme/data/resources/jsdomResources.ts'

import { jsdomSection } from '@theme/data/fileStructures/jsdomSections.ts'

</script>

## JavaScript Topics Index
 
<CollapsibleList :sections="jsdomSection" />

___
 
<h3>Books & Resources Used to Learn Web Progamming</h3>


<div class="book-container">

  <template v-for="(book, index) in booksUsed" :key="index">
    <BookCard v-bind="book" />
  </template>

</div>

<div class="book-container">
  <ResourceCard
    v-for="(resource, index) in resourcesUsed"
    :key="index"
    v-bind="resource"
  />
</div>

___

<h3>Yet to be Completed</h3>

<div class="book-container">

  <template v-for="(book, index) in booksPending" :key="index">
    <BookCard v-bind="book" />
  </template>

</div>

<div class="book-container">
  <ResourceCard
    v-for="(resource, index) in resourcesPending"
    :key="index"
    v-bind="resource"
  />
</div>
