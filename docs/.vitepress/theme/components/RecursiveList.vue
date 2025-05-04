<template>
    <ul>
      <li v-for="(item, idx) in items" :key="idx">
        <template v-if="item.label && item.link">
          <a class="collapsible-item-link" :href="item.link">{{ item.label }}</a>
        </template>
        <template v-else-if="item.title && item.items">
          <CollapsibleSection
            :title="item.title"
            :is-open="openSections[idx]"
            @toggle="() => toggle(idx)"
          >
            <RecursiveList :items="item.items" />
          </CollapsibleSection>
        </template>
      </li>
    </ul>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import CollapsibleSection from './CollapsibleSection.vue'
  
  defineProps({
    items: Array
  })
  
  const openSections = ref({})
  
  function toggle(idx) {
    openSections.value[idx] = !openSections.value[idx]
  }
  </script>
  