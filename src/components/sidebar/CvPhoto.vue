<script setup>
import { useCVStore } from '@/stores/cvStore'

const cvStore = useCVStore()

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      cvStore.cv.photo = reader.result
    }
    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <div class="image-section">
    <div class="sidebar-heading">
      <div>Photo</div>
    </div>
    <div class="image-buttons">
      <label class="btn primary-btn">
        <span>Upload photo</span>
        <input class="hidden" type="file" @change="handleFileUpload" accept="image/*" />
      </label>
      <button class="btn outline-btn" @click="cvStore.cv.photo = ''">Remove photo</button>
    </div>
  </div>
</template>

<style scoped>
.image-section {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.image-buttons {
  display: flex;
  gap: 4px;
}

.btn {
  padding: 2px 4px;
}

.hidden {
  display: none;
}
</style>
