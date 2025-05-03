
<template>
  <div class="collapsible-section">
    <button @click="emit('toggle')" class="collapsible-btn">
      <span>{{ title }}</span>
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
  margin-bottom: 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.collapsible-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: var(--vp-c-bg-alt);
  border: none;
  padding: 12px 16px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  color: var(--vp-c-text-1);
}

.collapsible-btn:hover {
  background: var(--vp-c-bg-hover);
}

.chevron {
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.chevron.open {
  transform: rotate(90deg);
}

.collapsible-content {
  padding: 12px 16px;
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-border);
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}


::v-deep(.collapsible-content a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

::v-deep(.collapsible-content a:hover) {
  color: var(--vp-c-brand-3);
  /* text-decoration: underline; */
}

::v-deep(.collapsible-content ul) {
  padding-left: 1.2rem;
  margin: 0;
}

::v-deep(.collapsible-content li) {
  margin: 0.5rem 0;
  line-height: 1.8;
}

</style>

