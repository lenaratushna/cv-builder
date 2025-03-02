<script setup>
import DownloadPDFButton from './DownloadPDFButton.vue'
</script>

<template>
  <header class="header">
    <div class="app-title"><span>CV</span> Builder</div>
    <DownloadPDFButton />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: end;
  gap: 20px;
  padding: 20px 0px;
}

.app-title {
  font-size: 28px;
  font-weight: 600;
}

.app-title span {
  color: var(--primary-color);
}
</style>
