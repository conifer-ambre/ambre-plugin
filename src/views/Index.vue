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
      <!-- ambre-table -->
      <h5>表格:</h5>
      <h5>ambre-table:</h5>
      <div class="index-component">
        <ambre-table
          :data="ambre_table_data"
          :header="ambre_table_header"
          :handle="ambre_table_handle"
        ></ambre-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class Index extends Vue {
  private ambre_table_header = [
    {
      label: '标签',
      prop: 'label'
    },
    {
      label: '权力',
      prop: 'power'
    }
  ]

  private ambre_table_data = [
    {
      label: '用户1',
      power: '管理员'
    },
    {
      label: '用户2',
      power: '管理员'
    },
    {
      label: '用户3',
      power: '管理员'
    },
    {
      label: '用户4',
      power: '管理员'
    }
  ]

  private ambre_table_handle = [
    {
      label: '编辑',
      prop: 'edit'
    },
    {
      label: '删除',
      prop: 'delete',
      type: 'serious'
    }
  ]

  mounted() {
    this.handleInit()
  }

  handleInit() {
    // console.log(this.$utils.format(1619518245000))
  }
}
</script>
