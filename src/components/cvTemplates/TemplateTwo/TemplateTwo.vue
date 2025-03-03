<script setup>
import { ref, onMounted, computed } from 'vue'
import EditableField from '@/components/EditableField.vue'
import CvContact from './CvContact.vue'
import { useCVStore } from '@/stores/cvStore'
import { useScaleStore } from '@/stores/scaleStore'

const cvStore = useCVStore()
const scaleStore = useScaleStore()

const accentColor = computed(() => cvStore.cv.styles.accentColor)
const contrastColor = computed(() => cvStore.cv.styles.contrastColor)

const cvRef = ref(null)

onMounted(() => {
  cvStore.setCVRef(cvRef)
})
</script>

<template>
  <div ref="cvRef" class="cv" :style="{ transform: `scale(${scaleStore.scale})` }">
    <div class="left-col">
      <div v-if="cvStore.cv.photo" class="cv-photo">
        <img :src="cvStore.cv.photo" alt="photo" />
      </div>
      <div v-else class="empty-space"></div>
      <div class="cv-section" v-show="cvStore.cv.sections.contact.show">
        <CvContact />
      </div>
      <div class="cv-section" v-show="cvStore.cv.sections.skills.show">
        <EditableField v-model="cvStore.cv.sections.skills.title" class="section-heading" />
        <ul class="skills">
          <li v-for="skill in cvStore.cv.skills" :key="skill.id">
            <EditableField v-if="skill.text" v-model="skill.text" />
          </li>
        </ul>
      </div>
      <div class="cv-section" v-show="cvStore.cv.sections.language.show">
        <EditableField v-model="cvStore.cv.sections.language.title" class="section-heading" />
        <ul class="language">
          <li v-for="lang in cvStore.cv.language" :key="lang.id">
            <EditableField v-if="lang.name" v-model="lang.name" />
            <EditableField v-if="lang.level" v-model="lang.level" />
          </li>
        </ul>
      </div>
      <div class="cv-section" v-show="cvStore.cv.sections.education.show">
        <EditableField v-model="cvStore.cv.sections.education.title" class="section-heading" />
        <template v-for="education in cvStore.cv.education" :key="education.id">
          <div v-if="education.university" class="education">
            <EditableField
              v-if="education.university"
              v-model="education.university"
              class="university-name"
            />
            <EditableField v-if="education.degree" v-model="education.degree" />
            <EditableField v-if="education.date" v-model="education.date" />
          </div>
        </template>
      </div>
    </div>
    <div class="right-col">
      <div class="cv-section">
        <EditableField v-model="cvStore.cv.name" class="name" />
        <EditableField v-model="cvStore.cv.jobTitle" class="job-title" />
      </div>
      <div class="cv-section" v-show="cvStore.cv.sections.summary.show">
        <EditableField v-model="cvStore.cv.sections.summary.title" class="section-heading" />
        <EditableField v-model="cvStore.cv.summary" />
      </div>
      <div class="cv-section" v-show="cvStore.cv.sections.experience.show">
        <EditableField v-model="cvStore.cv.sections.experience.title" class="section-heading" />
        <template v-for="job in cvStore.cv.experience" :key="job.id">
          <div v-if="job.company" class="job">
            <div class="job-date">
              <EditableField v-if="job.startDate" v-model="job.startDate" />
              <span>-</span>
              <EditableField v-if="job.endDate" v-model="job.endDate" />
            </div>
            <div>
              <EditableField v-if="job.company" v-model="job.company" class="job-company" />
              <EditableField v-if="job.position" v-model="job.position" class="job-position" />
              <EditableField v-if="job.desc" v-model="job.desc" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cv {
  display: flex;
  font-family: 'Mulish', sans-serif;
  padding: 38px 28px;
  color: #3a3a3a;
  background: linear-gradient(to bottom, v-bind(accentColor) 12%, transparent 12%);
}

.left-col {
  padding: 24px;
  border: 1px solid #000;
}

.right-col {
  width: 100%;
  max-width: 452px;
  padding: 50px 0 24px 24px;
}

.cv-section {
  margin-bottom: 30px;
}

.section-heading {
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 14px;
  border-bottom: 4px solid v-bind(accentColor);
}

.cv-photo {
  width: 234px;
  height: auto;
  margin-bottom: 30px;
}

.cv-photo img {
  width: 100%;
  height: 100%;
}

.name {
  font-size: 32px;
  font-weight: 800;
  color: v-bind(contrastColor);
}

.job-title {
  font-size: 20px;
}

.skills li:not(:last-child),
.language  li:not(:last-child){
  margin-bottom: 6px;
}

.language  li {
  display: flex;
  gap: 6px;
}

.education:not(:last-child) {
  margin-bottom: 14px;
}

.university-name {
  font-weight: 700;
}

.empty-space {
  height: 78px;
}

.job {
  display: flex;
}

.job:not(:last-child) {
  margin-bottom: 14px;
}

.job-date {
  flex: 1 0 78px;
  padding-right: 20px;
  text-align: center;
}

.job-company {
  font-weight: 700;
}

.job-position {
  margin-bottom: 8px;
}

ul {
  list-style: none;
}
</style>
