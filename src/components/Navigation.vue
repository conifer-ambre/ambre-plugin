<template>
  <div :class="`ambre-navigation ${activated && 'ambre-navigation-activated'}`">
    <div>Navigation</div>
    <div @click="handleActivated">Click</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(props, context) {
    const data = reactive({
      activated: false,
      object: {},
      handleClick() {
        context.emit('change', 'handle change')
      },
      handleActivated() {
        data.activated = !data.activated
      }
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>
