<script setup>
import { ref, onMounted } from 'vue'
import EditableField from '@/components/EditableField.vue'
import CvContact from './CvContact.vue'
import { useCVStore } from '@/stores/cvStore'
import { useScaleStore } from '@/stores/scaleStore'

const cvStore = useCVStore()
const scaleStore = useScaleStore()

const cvRef = ref(null)

onMounted(() => {
  cvStore.setCVRef(cvRef)
})
</script>

<template>
  <div ref="cvRef" class="cv" :style="{ transform: `scale(${scaleStore.scale})` }">
    <div class="cv-header">
      <div v-if="cvStore.cv.photo" class="cv-photo">
        <img :src="cvStore.cv.photo" alt="photo" />
      </div>
      <div>
        <EditableField v-model="cvStore.cv.name" class="name" />
        <EditableField v-model="cvStore.cv.jobTitle" class="job-title" />
      </div>
    </div>
    <div class="cv-body">
      <div class="left-col">
        <div class="cv-section" v-show="cvStore.cv.sections.contact.show">
          <EditableField v-model="cvStore.cv.sections.contact.title" class="section-heading" />
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
              <div class="language-item">
                <EditableField v-if="lang.name" v-model="lang.name" />
                <EditableField v-if="lang.level" v-model="lang.level" />
              </div>
            </li>
          </ul>
        </div>
        <div class="cv-section" v-show="cvStore.cv.sections.education.show">
          <EditableField v-model="cvStore.cv.sections.education.title" class="section-heading" />
          <template v-for="education in cvStore.cv.education" :key="education.id">
            <div v-if="education.university" class="education">
              <EditableField
                v-if="education.date"
                v-model="education.date"
                class="education-date"
              />
              <EditableField
                v-if="education.degree"
                v-model="education.degree"
                class="education-degree"
              />
              <EditableField v-if="education.university" v-model="education.university" />
            </div>
          </template>
        </div>
      </div>
      <div class="right-col">
        <div class="cv-section" v-show="cvStore.cv.sections.summary.show">
          <EditableField v-model="cvStore.cv.sections.summary.title" class="section-heading" />
          <EditableField v-model="cvStore.cv.summary" />
        </div>
        <div class="cv-section" v-show="cvStore.cv.sections.experience.show">
          <EditableField v-model="cvStore.cv.sections.experience.title" class="section-heading" />
          <template v-for="job in cvStore.cv.experience" :key="job.id">
            <div v-if="job.company" class="job">
              <EditableField v-if="job.position" v-model="job.position" class="job-position" />
              <div class="job-company">
                <EditableField v-if="job.company" v-model="job.company" />
                <div class="job-date">
                  <EditableField v-if="job.startDate" v-model="job.startDate" />
                  <span>-</span>
                  <EditableField v-if="job.endDate" v-model="job.endDate" />
                </div>
              </div>
              <EditableField v-if="job.desc" v-model="job.desc" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cv {
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', serif;
  padding: 30px 40px;
  color: #3a3a3a;
}

.cv-header {
  display: flex;
  gap: 46px;
  padding-bottom: 22px;
  border-bottom: 10px solid #e5e5e5;
  margin-bottom: 30px;
}

.cv-photo {
  width: 148px;
  height: auto;
}

.cv-photo img {
  width: 100%;
  height: 100%;
}

.name {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 4px;
}

.job-title {
  letter-spacing: 2px;
}

.cv-body {
  display: flex;
  flex: 1 1 auto;
}

.cv-section {
  padding: 15px 0 30px 0;
}

.cv-section:not(:last-child) {
  border-bottom: 2px solid #e5e5e5;
}

.left-col {
  min-width: 250px;
  padding-right: 30px;
  border-right: 2px solid #e5e5e5;
}

.right-col {
  flex-grow: 1;
  padding-left: 30px;
}

.section-heading {
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 14px;
}

.skills,
.language {
  padding-left: 18px;
}

.language-item {
  display: flex;
  gap: 6px;
}

.education:not(:last-child),
.job:not(:last-child) {
  margin-bottom: 14px;
}

.job-date {
  display: flex;
  gap: 1px;
}

.education-date,
.job-date {
  font-size: 12px;
}

.education-degree,
.job-position {
  font-weight: 600;
}

.job-company {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}
</style>
