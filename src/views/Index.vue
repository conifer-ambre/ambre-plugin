<template>
  <div class="index">
    <h3>组件库</h3>
    <h3>components</h3>
    <div class="index-card">
      <!-- ambre-button -->
      <h5>按钮:</h5>
      <h5>ambre-button:</h5>
      <div class="index-component">
        <ambre-button type="default">Button</ambre-button>
        <ambre-button type="primary">Button</ambre-button>
        <ambre-button type="success">Button</ambre-button>
        <ambre-button type="warning">Button</ambre-button>
        <ambre-button type="serious">Button</ambre-button>
      </div>
      <!-- ambre-button disabled -->
      <h5>按钮 禁用状态:</h5>
      <h5>ambre-button disabled:</h5>
      <div class="index-component">
        <ambre-button type="default" disabled>Button</ambre-button>
        <ambre-button type="primary" disabled>Button</ambre-button>
        <ambre-button type="success" disabled>Button</ambre-button>
        <ambre-button type="warning" disabled>Button</ambre-button>
        <ambre-button type="serious" disabled>Button</ambre-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class Index extends Vue {
  private list = []
}
</script>
