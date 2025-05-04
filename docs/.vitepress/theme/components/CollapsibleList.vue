<template>
  <div class="collapsible-list-grid">
    <template v-for="(section, index) in sections" :key="index">
      <CollapsibleSection
        v-if="section.title && section.items"
        :title="section.title"
        :is-open="activeIndex === index"
        @toggle="() => toggle(index)"
      >
        <RecursiveList :items="section.items" />
      </CollapsibleSection>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CollapsibleSection from './CollapsibleSection.vue'
import RecursiveList from './RecursiveList.vue'

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
