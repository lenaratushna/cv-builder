<script setup>
import { ref } from 'vue'
import { useCVStore } from '@/stores/cvStore'
import { useScaleStore } from '@/stores/scaleStore'
import html2pdf from 'html2pdf.js'

const cvStore = useCVStore()
const scaleStore = useScaleStore()

const loading = ref(false)

function exportPDF() {
  loading.value = true
  const pdfConfig = {
    margin: 0,
    filename: cvStore.cv.title,
  }
  const cv = cvStore.cvRef.value
  const originalScale = scaleStore.scalePercentage

  scaleStore.scalePercentage = 100
  setTimeout(() => {
    html2pdf()
      .from(cv)
      .set(pdfConfig)
      .save()
      .then(() => {
        scaleStore.scalePercentage = originalScale
        loading.value = false
      })
  }, 500)
}
</script>

<template>
  <button @click="exportPDF" class="btn primary-btn">Download PDF</button>
  <div class="overlay" v-if="loading">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--light-color);
  z-index: 100;
  overflow: hidden;
}

.loader {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(var(--primary-color) 0 0);
  background:
    var(--c) 0% 50%,
    var(--c) 50% 50%,
    var(--c) 100% 50%;
  background-size: 20% 100%;
  animation: l1 1s infinite linear;
}

@keyframes l1 {
  0% {
    background-size:
      20% 100%,
      20% 100%,
      20% 100%;
  }
  33% {
    background-size:
      20% 10%,
      20% 100%,
      20% 100%;
  }
  50% {
    background-size:
      20% 100%,
      20% 10%,
      20% 100%;
  }
  66% {
    background-size:
      20% 100%,
      20% 100%,
      20% 10%;
  }
  100% {
    background-size:
      20% 100%,
      20% 100%,
      20% 100%;
  }
}
</style>
