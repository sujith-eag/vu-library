<template>
  <div class="collapsible-section">
    <button @click="emit('toggle')" class="collapsible-btn" :aria-expanded="isOpen">
      <span class="title">{{ title }}</span>
      
      <span class="chevron" :class="{ open: isOpen }">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </span>
    </button>

    <transition name="fade">
      <div v-if="isOpen" class="collapsible-content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  isOpen: Boolean
})
const emit = defineEmits(['toggle'])
</script>

<style scoped>
.collapsible-section {
  margin-bottom: 0.3rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

.collapsible-btn {
  /* all: unset; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: var(--vp-c-bg-alt);
  font-weight: 600;
  font-size: 1rem;
  color: var(--vp-c-text-1);
  transition: background-color 0.3s ease, color 0.3s ease;
  color: var(--vp-c-text-1);
  border-bottom: 1px solid var(--vp-c-border);
}

.collapsible-btn:hover {
  background-color: var(--vp-c-bg-hover);
  color: var(--vp-c-brand-1);
}

.title {
  flex: 1;
  text-align: left;
}

.chevron {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.75rem;
  transition: transform 0.3s ease;
  color: inherit;
}
.chevron svg {
  fill: currentColor;
}
.chevron.open {
  transform: rotate(90deg);
}

.collapsible-content {
  padding: 0.75rem 1rem;
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-border);
  transition: background-color 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* Deep styles for slotted content */
::v-deep(.collapsible-content a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.3s ease;
}

::v-deep(.collapsible-content a:hover) {
  color: var(--vp-c-brand-3);
  text-decoration: underline;
}

::v-deep(.collapsible-content ul) {
  list-style: none;
  padding-left: 1rem;
  margin: 0;
}

::v-deep(.collapsible-content li) {
  margin: 0.5rem 0;
  line-height: 1.6;
}
</style>
