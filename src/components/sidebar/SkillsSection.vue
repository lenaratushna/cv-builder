<script setup>
import { useCVStore } from '@/stores/cvStore'
import SectionShowToggle from './SectionShowToggle.vue'

const cvStore = useCVStore()

const addSkill = () => {
  cvStore.cv.skills.push({ id: Date.now(), text: '' })
}

const removeSkill = (id) => {
  cvStore.cv.skills = cvStore.cv.skills.filter((skill) => skill.id !== id)
}
</script>

<template>
  <div class="skills">
    <div class="sidebar-heading">
      <div>Skills</div>
      <SectionShowToggle v-model="cvStore.cv.sections.skills.show" />
    </div>
    <div v-show="cvStore.cv.sections.skills.show" class="skills-fields">
      <div v-for="skill in cvStore.cv.skills" :key="skill.id" class="skill-item">
        <input v-model="skill.text" type="text" placeholder="Enter a skill" />
        <button @click="removeSkill(skill.id)" class="delete-btn">&times;</button>
      </div>
      <button @click="addSkill" class="add-btn circle-btn">&plus;</button>
    </div>
  </div>
</template>

<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
}

.skills-fields {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.skill-item {
  display: flex;
  align-items: center;
}

.skill-item > input {
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
