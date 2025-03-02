<script setup>
import { computed } from 'vue'
import { useCVStore } from '@/stores/cvStore'

const cvStore = useCVStore()

const changeTemplate = (template) => {
  cvStore.setTemplate(template)
}

const accentColor = computed(() => cvStore.cv.styles.accentColor)
const contrastColor = computed(() => cvStore.cv.styles.contrastColor)
</script>

<template>
  <div class="template-switcher">
    <div
      v-for="(template, index) in cvStore.templateKeys"
      :key="template"
      @click="changeTemplate(template)"
      class="template-btn"
      :class="{ active: cvStore.cv.template === template }"
    >
      <img :src="`./images/template-${index + 1}.png`" alt="template" />
    </div>
  </div>
  <template v-if="cvStore.cv.template === 'TemplateTwo'">
    <div class="template-color">
      <span>Accent color</span>
      <label for="accent-color" class="color-box accent"></label>
      <input id="accent-color" v-model="cvStore.cv.styles.accentColor" type="color" />
    </div>
    <div class="template-color">
      <span>Contrast color</span>
      <label for="contrast-color" class="color-box contrast"></label>
      <input id="contrast-color" v-model="cvStore.cv.styles.contrastColor" type="color" />
    </div>
  </template>
</template>

<style scoped>
.template-switcher {
  display: flex;
  gap: 10px;
}

.template-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 106px;
  border: 1px solid var(--neutral-color);
  border-radius: 2px;
  background: white;
  cursor: pointer;
  transition: 0.2s;
}

.template-btn img {
  width: 100%;
  height: 100%;
}

.template-btn.active {
  border-color: var(--primary-color);
}

.template-color {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

.template-color input {
  display: none;
}

.template-color .color-box {
  width: 30px;
  height: 30px;
  border: 1px solid var(--neutral-color);
  cursor: pointer;
}

.color-box.accent {
  background-color: v-bind(accentColor);
}

.color-box.contract {
  background-color: v-bind(contrastColor);
}
</style>
