<script setup>
import { useCVStore } from '@/stores/cvStore'

const cvStore = useCVStore()
</script>

<template>
  <input v-model="cvStore.cv.title" type="text" class="cv-title" placeholder="Untitled CV" />
</template>

<style scoped>
.cv-title {
  width: 100%;
  margin-bottom: 10px;
  border: none;
  font-size: 18px;
}
</style>
