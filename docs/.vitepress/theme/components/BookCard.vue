<template>
  <div class="card book-card">
    <img class="book-image" :src="img" :alt="title" />
    <div>
      <h3>{{ title }}</h3>
      <p><strong>Author:</strong> {{ author }}</p>
      <p><strong>Year:</strong> {{ year }}</p>
      <!-- <p>{{ summary }}</p> -->
    </div>
  </div>
</template>

<script setup>  
  defineProps({
    img: String,
    title: String,
    author: String,
    year: String,
//  summary: String
  })
</script>
