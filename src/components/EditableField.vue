<script setup>
defineOptions({
  inheritAttrs: false,
})

defineProps({
  modelValue: String,
  tag: {
    type: String,
    default: 'div',
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="editable-el" :class="$attrs.class">
    <component
      :is="tag"
      v-bind="{ ...$attrs, class: undefined }"
      v-editable="{
        modelValue,
        onUpdate: (val) => $emit('update:modelValue', val),
      }"
      class="block"
    >
      <slot>{{ modelValue }}</slot>
    </component>
  </div>
</template>

<style scoped>
.editable-el {
  position: relative;
}

.block {
  display: block;
  white-space: pre-line;
}
</style>
