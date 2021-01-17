<template>
  <div>
    <h1>components</h1>
    <h3>ambre-table:</h3>
    <ambre-table :list="[1,2,3]" @change="handleChange"></ambre-table>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class Index extends Vue {
  private list = []

  mounted () {
    this.handleInit()
  }

  handleInit () {
    console.log('environment ready')
  }

  handleChange (value) {
    console.log(value)
  }
}
</script>
