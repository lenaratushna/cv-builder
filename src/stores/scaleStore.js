import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useScaleStore = defineStore('scale', () => {
  const scalePercentage = ref(Number(localStorage.getItem('scalePercentage')) || 100)

  const scale = computed(() => scalePercentage.value / 100)

  watch(scalePercentage, (newScale) => {
    localStorage.setItem('scalePercentage', newScale)
  })

  return { scalePercentage, scale }
})
