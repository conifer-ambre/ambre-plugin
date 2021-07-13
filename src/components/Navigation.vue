<template>
  <div :class="`ambre-navigation ${activated && 'ambre-navigation-activated'}`">
    <div class="ambre-navigation-menu" @click="handleActivated"></div>
  </div>
</template>

<script lang="ts">
import { LoadAnimation } from '@/types/store'
import lottie from 'lottie-web'
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.handleInit()
  },
  setup(props, context) {
    const data = reactive({
      animation: {},
      activated: false,
      object: {},
      handleInit() {
        const container = document.getElementsByClassName('ambre-navigation-menu')[0]
        data.animation = lottie.loadAnimation({
          container,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: 'https://assets1.lottiefiles.com/temp/lf20_Qi3v7b.json'
        })
      },
      handleClick() {
        context.emit('change', 'handle change')
      },
      handleActivated() {
        data.activated = !data.activated
        ;(data.animation as LoadAnimation).playSegments(data.activated ? [0, 70] : [71, 140], true)
      }
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>
