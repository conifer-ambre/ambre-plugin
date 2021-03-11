<template>
  <div class="ambre-button" @click="handleChange">Button</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  props: {
    list: {
      type: Array,
      default: () => []
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
