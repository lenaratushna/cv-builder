<script setup>
import { useCVStore } from '@/stores/cvStore'
import SectionShowToggle from './SectionShowToggle.vue'

const cvStore = useCVStore()
</script>

<template>
  <div class="profile">
    <div class="sidebar-heading">
      <div>Profile</div>
      <SectionShowToggle v-model="cvStore.cv.sections.summary.show" />
    </div>
    <textarea v-model="cvStore.cv.summary"></textarea>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
}

textarea {
  height: 100px;
  overflow-y: scroll;
  resize: vertical;
  padding: 1px;
}
</style>
