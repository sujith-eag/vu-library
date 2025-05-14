<template>
  <div class="collapsible-list-grid">
    <template v-for="(item, index) in sections" :key="index">
      <!-- Simple Link item -->
      <template v-if="item.label && item.link">
        <a class="collapsible-item-link" :href="item.link">{{ item.label }}</a>
      </template>

      <!-- Collapsible section with nested items -->
      <CollapsibleSection
        v-else-if="item.title && item.items"
        :title="item.title"
        :is-open="activeIndex === index"
        @toggle="() => toggle(index)"
      >
        <!-- Recursive rendering of children -->
        <CollapsibleList :sections="item.items" />
      </CollapsibleSection>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CollapsibleSection from './CollapsibleSection.vue'

defineOptions({ name: 'CollapsibleList' })

defineProps({
  sections: {
    type: Array,
    required: true
  }
})

// Single open index
const activeIndex = ref(null)

function toggle(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.collapsible-list-grid {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 600px) {
  .collapsible-list-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    align-items: start;
  }
}

.collapsible-item-link {
  display: block;
  padding: 0.6rem 1rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-brand-1);
  transition: background-color 0.3s, color 0.3s;
}

.collapsible-item-link:hover {
  color: var(--vp-c-brand-3);
  background: var(--vp-c-bg-hover);
}
</style>

