<script setup>
import { useCVStore } from '@/stores/cvStore'
import SectionShowToggle from './SectionShowToggle.vue'

const cvStore = useCVStore()

const addLanguage = () => {
  cvStore.cv.language.push({ id: Date.now(), name: '', level: '' })
}

const removeLanguage = (id) => {
  cvStore.cv.language = cvStore.cv.language.filter((lang) => lang.id !== id)
}
</script>

<template>
  <div class="language">
    <div class="sidebar-heading">
      <div>Languages</div>
      <SectionShowToggle v-model="cvStore.cv.sections.language.show" />
    </div>
    <div v-show="cvStore.cv.sections.language.show" class="language-fields">
      <div v-for="lang in cvStore.cv.language" :key="lang.id" class="language-item">
        <input v-model="lang.name" type="text" placeholder="Enter language" />
        <input v-model="lang.level" type="text" placeholder="Enter level (e.g. B2)" />
        <button @click="removeLanguage(lang.id)" class="delete-btn">&times;</button>
      </div>
      <button @click="addLanguage" class="add-btn circle-btn">&plus;</button>
    </div>
  </div>
</template>

<style scoped>
.language {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
}

.language-fields {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.language-item {
  display: flex;
  align-items: center;
}

.language-item > input {
  flex-grow: 1;
  margin-right: 4px;
}

.add-btn {
  margin: 4px auto 0 auto;
}

.delete-btn {
  border-radius: 0;
  background-color: transparent;
}
</style>
