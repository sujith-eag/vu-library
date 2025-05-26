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
 
 