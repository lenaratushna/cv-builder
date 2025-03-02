<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div class="toggle" :class="{ active: modelValue }" @click="toggle">
    <div class="toggle-circle"></div>
  </div>
</template>

<style scoped>
.toggle {
  width: 40px;
  height: 20px;
  background-color: var(--neutral-color);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle.active {
  background-color: var(--primary-color);
}

.toggle-circle {
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
}

.toggle.active .toggle-circle {
  transform: translateX(20px);
}
</style>
