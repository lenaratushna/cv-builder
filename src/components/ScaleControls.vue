<script setup>
import { useScaleStore } from '@/stores/scaleStore'

const scaleStore = useScaleStore()
</script>

<template>
  <div class="controls">
    <span>Scale:</span>
    <input type="range" min="10" max="100" step="5" v-model="scaleStore.scalePercentage" />
    <span>{{ scaleStore.scalePercentage }}%</span>
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

input[type='range'] {
  -webkit-appearance: none;
  appearance: none;
  width: 150px;
  height: 6px;
  background: var(--neutral-color);
  border-radius: 5px;
  outline: none;
  transition: background 0.3s;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

input[type='range']:hover {
  background: #ccc;
}

input[type='range']::-webkit-slider-thumb:hover {
  background: var(--primary-color);
}
</style>
