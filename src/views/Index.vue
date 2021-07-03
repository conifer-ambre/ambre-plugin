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
      <!-- ambre-element-table -->
      <h5>Element 表格:</h5>
      <h5>ambre-element-hunt:</h5>
      <div class="index-component">
        <ambre-element-hunt
          :options="ambre_hunt_options"
          :emits="ambre_hunt_emits"
          @search="handleSearch"
        />
      </div>
      <h5>ambre-element-table:</h5>
      <div class="index-component">
        <ambre-element-table
          :data="ambre_table_data"
          :options="ambre_table_options"
          :emits="ambre_table_emits"
        />
      </div>
      <h5>ambre-element-page:</h5>
      <div class="index-component">
        <ambre-element-page :total="ambre_page_total" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class Index extends Vue {
  private ambre_hunt_options = [
    {
      label: '输入框',
      prop: 'input',
      placeholder: '请输入'
    },
    {
      label: '下拉框单选',
      prop: 'select_single',
      type: 'select',
      placeholder: '请选择',
      options: [
        {
          label: '选项一',
          value: 1
        },
        {
          label: '选项二',
          value: 2
        }
      ]
    },
    {
      label: '下拉框多选',
      prop: 'select_multiple',
      type: 'select',
      placeholder: '请选择',
      multiple: true,
      options: [
        {
          label: '选项一',
          value: 1
        },
        {
          label: '选项二',
          value: 2
        }
      ]
    },
    {
      label: '日期',
      prop: 'date',
      type: 'date',
      placeholder: '请选择日期'
    },
    {
      label: '日期时间',
      prop: 'datetime',
      type: 'datetime',
      placeholder: '请选择日期时间'
    },
    {
      label: '日期时间范围',
      prop: 'datetimerange',
      type: 'datetimerange',
      placeholder: '请选择日期时间范围'
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

  mounted() {
    this.handleInit()
  }

  handleInit() {
    // console.log(this.$utils.format(1619518245000))
  }
}
</script>
