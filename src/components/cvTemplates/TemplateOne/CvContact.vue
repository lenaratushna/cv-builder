<script setup>
import EditableField from '@/components/EditableField.vue'
import LocationIcon from '@/components/icons/LocationIcon.vue'
import MobileIcon from '@/components/icons/MobileIcon.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import GitHubIcon from '@/components/icons/GitHubIcon.vue'

import { useCVStore } from '@/stores/cvStore'
import InternetIcon from '@/components/icons/InternetIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
const cvStore = useCVStore()
</script>

<template>
  <ul class="contact-list">
    <li v-if="cvStore.cv.contact.location" class="contact-item">
      <span><LocationIcon color="#3a3a3a" /></span>
      <EditableField v-model="cvStore.cv.contact.location" />
    </li>
    <li v-if="cvStore.cv.contact.phone" class="contact-item">
      <span><MobileIcon color="#3a3a3a" /></span>
      <EditableField v-model="cvStore.cv.contact.phone" />
    </li>
    <li v-if="cvStore.cv.contact.email" class="contact-item">
      <span><MailIcon color="#3a3a3a" width="20px" /></span>
      <EditableField
        tag="a"
        v-model="cvStore.cv.contact.email"
        :href="`mailto:${cvStore.cv.contact.email}`"
      />
    </li>
    <li v-if="cvStore.cv.contact.linkedin" class="contact-item">
      <span><LinkedinIcon color="#3a3a3a" width="17px" /></span>
      <EditableField
        tag="a"
        v-model="cvStore.cv.contact.linkedin"
        :href="`https://${cvStore.cv.contact.linkedin}`"
      />
    </li>
    <li v-if="cvStore.cv.contact.github" class="contact-item">
      <span><GitHubIcon color="#3a3a3a" width="20px" /></span>
      <EditableField
        tag="a"
        v-model="cvStore.cv.contact.github"
        :href="`https://github.com/${cvStore.cv.contact.github}`"
      />
    </li>
    <template v-for="link in cvStore.cv.contact.links" :key="link">
      <li v-if="link.text" class="contact-item">
        <span><InternetIcon color="#3a3a3a" width="23px" /></span>
        <EditableField tag="a" v-model="link.text" :href="link.url" />
      </li>
    </template>
  </ul>
</template>

<style scoped>
.contact-list {
  list-style: none;
  padding: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.contact-item:not(:last-child) {
  margin-bottom: 8px;
}

.contact-item > span:first-child {
  display: flex;
  min-width: 30px;
  justify-content: center;
  align-items: center;
}
</style>
