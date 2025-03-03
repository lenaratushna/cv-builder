<script setup>
import { useCVStore } from '@/stores/cvStore'
import SectionShowToggle from './SectionShowToggle.vue'

const cvStore = useCVStore()

const addEducation = () => {
  cvStore.cv.education.push({ id: Date.now(), university: '', degree: '', date: '' })
}

const removeEducation = (id) => {
  cvStore.cv.education = cvStore.cv.education.filter((education) => education.id !== id)
}
</script>

<template>
  <div class="education">
    <div class="sidebar-heading">
      <div>Education</div>
      <SectionShowToggle v-model="cvStore.cv.sections.education.show" />
    </div>
    <div v-show="cvStore.cv.sections.education.show" class="education-fields">
      <div v-for="education in cvStore.cv.education" :key="education.id" class="education-item">
        <div class="inputs">
          <input
            v-model="education.university"
            type="text"
            placeholder="University"
            class="university"
          />
          <div class="inputs-row">
            <input v-model="education.degree" type="text" placeholder="Degree" />
            <input v-model="education.date" type="text" placeholder="Start date - end date" />
          </div>
        </div>
        <button @click="removeEducation(education.id)" class="delete-btn">&times;</button>
      </div>
      <button @click="addEducation" class="add-btn circle-btn">&plus;</button>
    </div>
  </div>
</template>

<style scoped>
.education {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
}

.education-fields {
  display: flex;
  flex-direction: column;
}

.education-item {
  display: flex;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 4px;
}

.education-item:not(:last-of-type) {
  margin-bottom: 14px;
}

.education-item .inputs {
  flex-grow: 1;
}

.inputs-row {
  display: flex;
}

.inputs .university {
  width: 100%;
  margin-bottom: 4px;
}

.inputs-row input {
  width: 100%;
  max-width: 50%;
}

.inputs-row input:first-child {
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
