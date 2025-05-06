---
layout: home
title: Developer Tools
hero:
  name: Developer Tools
  # text: Learn about various subjects
  tagline: Knowing about the various developer tools
  image:
    src: /logo/git.svg
    alt: git logo
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

// import { 
//   booksUsed, 
//   booksPending,
//   resourcesUsed,
//   resourcesPending } from '@theme/data/resources/reactResources.ts'

import { toolsSection } from '@theme/data/fileStructures/toolsSections.ts'

</script>

## Developer Tools
 
<CollapsibleList :sections="toolsSection" />

___
 
 