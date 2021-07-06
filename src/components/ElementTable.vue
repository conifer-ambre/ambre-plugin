<template>
  <div>
    <el-table :data="data">
      <el-table-column prop="label" label="日期" width="180"> </el-table-column>
      <el-table-column prop="power" label="姓名" width="180"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
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
  emits: ['change'],
  setup(props, context) {
    const data = reactive({
      object: {},
      handleChange() {
        context.emit('change', 'handle change')
      },
      handleExpand(item: { expand: boolean }) {
        item.expand = !item.expand
      }
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>
