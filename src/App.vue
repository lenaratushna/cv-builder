<script setup>
import AppHeader from '@/components/header/AppHeader.vue'
import AppSidebar from '@/components/sidebar/AppSidebar.vue'
import ScaleControls from '@/components/ScaleControls.vue'
import { useCVStore } from '@/stores/cvStore'

const cvStore = useCVStore()
cvStore.$subscribe((_, state) => {
  localStorage.setItem('cv', JSON.stringify(state.cv))
})
</script>

<template>
  <div class="app">
    <AppHeader />
    <div class="wrapper">
      <AppSidebar />
      <div class="cv-container">
        <ScaleControls />
        <component :is="cvStore.currentTemplate"></component>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}

.cv-container {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  overflow-x: auto;
  padding-top: 10px;
}

@media screen and (max-width: 1173px) {
  .wrapper {
    flex-direction: column;
  }

  .cv-container {
    display: block;
  }
}
</style>
