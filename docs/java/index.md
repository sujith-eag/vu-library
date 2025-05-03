---
layout: home
title: Topics
hero:
  name: Explore Java Topics
  # text: Learn about various subjects
  tagline: Curated content for you
  image:
    src: /logo/java.svg
    alt: Java
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

const sections = [
  {
    title: 'Java Basics',
    items: [
      { label: 'Primitive Data Types', link: '/java/java_intro' },
      { label: 'Lists', link: '/java/java_core/java_format' },
      { label: 'Dictionaries', link: '/python/1data-types/complex-types/7dictionary/' },
      { label: 'Tuple & Set', link: '/python/1data-types/complex-types/5tuple_set/' },
      { label: 'Control Flow', link: '/python/4control_statements/' },
      { label: 'Functions', link: '/python/5functions/' },
    ]
  },
  {
    title: 'JavaScript DOM',
    items: [
      { label: 'DOM Basics', link: '/JavaScript-DOM/01-DOM-Basics/' },
      { label: 'DOM Modification', link: '/JavaScript-DOM/02-DOM-modification/' },
      { label: 'DOM Events', link: '/JavaScript-DOM/03-DOM-events/' },
    ]
  }
]

const resources = [
  {
    title: 'Java Documentation',
    description: 'Official Java documentation provided by Oracle, covering all versions of the Java platform.',
    link: 'https://docs.oracle.com/en/java/'
  },
  {
    title: 'Baeldung Java Guides',
    description: 'Comprehensive collection of Java tutorials and guides.',
    link: 'https://www.baeldung.com/'
  },
  {
    title: 'GeeksforGeeks Java',
    description: 'Java tutorials and articles on a wide range of topics.',
    link: 'https://www.geeksforgeeks.org/java/'
  }
]

const resources_pending = [
  {
    title: 'Java Documentation',
    description: 'Official Java documentation provided by Oracle, covering all versions of the Java platform.',
    link: 'https://docs.oracle.com/en/java/'
  },
  {
    title: 'Baeldung Java Guides',
    description: 'Comprehensive collection of Java tutorials and guides.',
    link: 'https://www.baeldung.com/'
  },
  {
    title: 'GeeksforGeeks Java',
    description: 'Java tutorials and articles on a wide range of topics.',
    link: 'https://www.geeksforgeeks.org/java/'
  }
]
</script>

<br><br>

## Java Topic Index
 
<CollapsibleList :sections="sections" />

___
 
<h3>Books & Resources Used to Learn Java</h3>


<div class="book-container">

  <BookCard
    img="/books/java_complete_ref_13.jpg"
    title="Java: The Complete Reference"
    author="Herbert Schildt"
    year="2021"
    summary="Comprehensive guide for learning Java, covering the core language, APIs, and real-world programming examples."
    />

  <BookCard
    img="/books/java_complete_ref_13.jpg"
    title="Effective Java"
    author="Joshua Bloch"
    year="2018"
    summary="Best practices and design patterns every Java developer should know, explained with real-world scenarios."
    />

  <BookCard
    img="/books/java_complete_ref_13.jpg"
    title="Effective Java"
    author="Joshua Bloch"
    year="2018"
    summary="Best practices and design patterns every Java developer should know, explained with real-world scenarios."
    />

</div>

<div class="book-container">
  <ResourceCard
    v-for="(resource, index) in resources"
    :key="index"
    :title="resource.title"
    :description="resource.description"
    :link="resource.link"
  />
</div>

___

<h3>Pending List</h3>


<div class="book-container">

  <BookCard
    img="/books/java_complete_ref_13.jpg"
    title="Java: The Complete Reference"
    author="Herbert Schildt"
    year="2021"
    summary="Comprehensive guide for learning Java, covering the core language, APIs, and real-world programming examples."
    />

  <BookCard
    img="/books/java_complete_ref_13.jpg"
    title="Effective Java"
    author="Joshua Bloch"
    year="2018"
    summary="Best practices and design patterns every Java developer should know, explained with real-world scenarios."
    />

</div>

<div class="book-container">
  <ResourceCard
    v-for="(resource, index) in resources_pending"
    :key="index"
    :title="resource.title"
    :description="resource.description"
    :link="resource.link"
  />
</div>