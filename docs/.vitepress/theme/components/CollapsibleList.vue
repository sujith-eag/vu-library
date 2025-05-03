<template>
    <div class="collapsible-list-grid">
      <CollapsibleSection
        v-for="(section, index) in sections"
        :key="index"
        :title="section.title"
        :is-open="activeIndex === index"
        @toggle="() => toggle(index)"
      >
        <ul>
          <li v-for="(item, idx) in section.items" :key="idx">
            <a 
                class="collapsible-item-link" 
                :href="withBase(item.link)"
            >{{ item.label }}</a>
          </li>
        </ul>
      </CollapsibleSection>
    </div>
  </template>

<script setup>
import { ref } from 'vue'
import { withBase } from 'vitepress'
import CollapsibleSection from './CollapsibleSection.vue'

defineProps({
    sections: Array
})

const activeIndex = ref(null)

function toggle(index) {
    activeIndex.value = activeIndex.value === index ? null : index
}

</script>

<style scoped>
.collapsible-list-grid {
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr; /* default 1 column */

  /* 2 columns on medium and up */
  @media (min-width: 600px) {
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    align-items: start;
  }
}
</style>
