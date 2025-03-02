<script setup>
import { useCVStore } from '@/stores/cvStore'
import SectionShowToggle from './SectionShowToggle.vue'

const cvStore = useCVStore()

const addLink = () => {
  cvStore.cv.contact.links.push({ id: Date.now(), text: '', url: '' })
}

const removeLink = (id) => {
  cvStore.cv.contact.links = cvStore.cv.contact.links.filter((link) => link.id !== id)
}
</script>

<template>
  <div class="contacts">
    <div class="sidebar-heading">
      <div>Contacts</div>
      <SectionShowToggle v-model="cvStore.cv.sections.contact.show" />
    </div>
    <div v-show="cvStore.cv.sections.contact.show" class="contacts-fields">
      <label>
        <span>Location:</span>
        <input
          v-model="cvStore.cv.contact.location"
          type="text"
          placeholder="City, Country"
        />
      </label>
      <label>
        <span>Phone:</span>
        <input
          v-model="cvStore.cv.contact.phone"
          type="text"
          placeholder="+380 XX XXX XXXX"
        />
      </label>
      <label>
        <span>E-mail:</span>
        <input
          v-model="cvStore.cv.contact.email"
          type="text"
          placeholder="email@example.com"
        />
      </label>
      <label>
        <span>LinkedIn:</span>
        <div>
          <span>https://</span>
          <input
            v-model="cvStore.cv.contact.linkedin"
            type="url"
            placeholder="linkedin.com/in/username"
          />
        </div>
      </label>
      <label>
        <span>GitHub:</span>
        <input
          v-model="cvStore.cv.contact.github"
          type="text"
          placeholder="username"
        />
      </label>
      <div class="links" v-show="cvStore.cv.contact.links.length">
        <div v-for="link in cvStore.cv.contact.links" :key="link.id" class="link-item">
          <input v-model="link.text" type="text" placeholder="Link text" />
          <input v-model="link.url" type="url" placeholder="URL" />
          <button @click="removeLink(link.id)" class="delete-btn">&times;</button>
        </div>
      </div>
      <button @click="addLink" class="add-btn circle-btn">&plus;</button>
    </div>
  </div>
</template>

<style scoped>
.contacts {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
}

.contacts-fields {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contacts label {
  display: flex;
  justify-content: space-between;
}

.contacts label > span {
  flex-basis: 90px;
}

.contacts label input,
.link-item input {
  flex-grow: 1;
}

.contacts label > div {
  flex-grow: 1;
  display: flex;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.link-item {
  display: flex;
  align-items: center;
}

.link-item > input {
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
