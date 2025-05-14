<template>
    <div class="card resource-card" @click="openLink">
      <div>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <a :href="link" target="_blank" rel="noopener" class="resource-link">{{ link }}</a>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    description: String,
    link: String
  })
  
  function openLink() {
    window.open(link, '_blank')
  }
  </script>  
  
  
<style scoped>
  .resource-link {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: var(--vp-c-brand-1);
    text-decoration: none;
    word-break: break-all;
    transition: color 0.2s ease;
    cursor: pointer;
  }

  .resource-link:hover {
    color: var(--vp-c-brand-3);
  }
</style>
