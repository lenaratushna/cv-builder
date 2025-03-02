<script setup>
import { useCVStore } from '@/stores/cvStore'
import SectionShowToggle from './SectionShowToggle.vue'

const cvStore = useCVStore()

const addJob = () => {
  cvStore.cv.experience.push({ id: Date.now(), company: '', date: '', position: '', desc: '' })
}

const removeJob = (id) => {
  cvStore.cv.experience = cvStore.cv.experience.filter((job) => job.id !== id)
}
</script>

<template>
  <div class="experience">
    <div class="sidebar-heading">
      <div>Experience</div>
      <SectionShowToggle v-model="cvStore.cv.sections.experience.show" />
    </div>
    <div v-show="cvStore.cv.sections.experience.show" class="experience-fields">
      <div v-for="job in cvStore.cv.experience" :key="job.id" class="job">
        <div>
          <input v-model="job.company" type="text" placeholder="Company name" />
          <input v-model="job.position" type="text" placeholder="Job position" />
          <div class="job-date">
            <input v-model="job.startDate" type="text" placeholder="Start date" />
            <input v-model="job.endDate" type="text" placeholder="End date" />
          </div>
          <textarea v-model="job.desc" placeholder="Description"></textarea>
        </div>
        <button @click="removeJob(job.id)" class="delete-btn">&times;</button>
      </div>
      <button @click="addJob" class="add-btn circle-btn">&plus;</button>
    </div>
  </div>
</template>

<style scoped>
.experience {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
}

.job {
  display: flex;
}

.job > div {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.job:not(:last-of-type) {
  margin-bottom: 14px;
}

.job-date {
  display: flex;
  gap: 4px;
}

.job-date input {
  flex-basis: 50%;
}

.add-btn {
  margin: 4px auto 0 auto;
}

.delete-btn {
  border-radius: 0;
  background-color: transparent;
}

textarea {
  height: 100px;
  overflow-y: scroll;
  resize: vertical;
  padding: 1px;
}
</style>
