<template>
    <div class="resource-card" @click="openLink">
      <div class="content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
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
  .resource-card {
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    border: 1px solid var(--vp-c-border);
    border-radius: 8px;
    padding: 16px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.3s ease, background-color 0.3s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  }
  
  .resource-card:hover {
    background-color: var(--vp-c-bg-hover);
    box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.06);
    transform: scale(1.01);
  }
  
  .resource-card h3 {
    margin: 0 0 8px;
    font-size: 1.1rem;
  }
  
  .resource-card p {
    margin: 0;
    line-height: 1.5;
    font-size: 14px;
    color: var(--vp-c-text-2); 
  }
  </style>
  
