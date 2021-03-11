<template>
  <div
    :class="
      `ambre-button ambre-button-hover ambre-button-${type} ${
        disabled ? 'ambre-button-disabled' : ''
      }`
    "
    @click="handleChange"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change'],
  setup(props, context) {
    const data = reactive({
      object: {},
      handleChange() {
        context.emit('change', 'handle change')
      }
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>
