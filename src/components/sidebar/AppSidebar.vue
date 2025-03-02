<script setup>
import ContactsSection from './ContactsSection.vue'
import CvPhoto from './CvPhoto.vue'
import CvTitle from './CvTitle.vue'
import EducationSection from './EducationSection.vue'
import ExperienceSection from './ExperienceSection.vue'
import ProfileSection from './ProfileSection.vue'
import SkillsSection from './SkillsSection.vue'
import LanguageSection from './LanguageSection.vue'
import TemplateSwitcher from './TemplateSwitcher.vue'
</script>

<template>
  <div class="sidebar">
    <CvTitle />
    <TemplateSwitcher />
    <CvPhoto />
    <ProfileSection />
    <ContactsSection />
    <SkillsSection />
    <LanguageSection />
    <EducationSection />
    <ExperienceSection />
  </div>
</template>

<style scoped>
.sidebar {
  width: 350px;
  height: 100%;
  padding: 10px 10px 10px 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

@media screen and (max-width: 1173px) {
  .sidebar {
    width: 100%;
    height: auto;
  }
}
</style>
