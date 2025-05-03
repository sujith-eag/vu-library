<template>
    <div class="resource-card" @click="openLink">
      <div class="content">
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
    
  .resource-card {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    max-width: 400px;
    margin-bottom: 10px;
    border-radius: 8px;
    padding: 16px;
    border: 1px solid var(--vp-c-border);
    
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
    transition: transform 0.2s ease, box-shadow 0.3s ease, background-color 0.3s;
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
    max-width: 100%;
    font-size: 14px;
    margin: 4px 0;
    color: var(--vp-c-text-2); 
  }
  
  .resource-link {
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
  }
  
  @media (max-width: 450px) {
    .resource-card {
        width: 100%;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 15px;
    }
}
  </style>
      

