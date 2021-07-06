<template>
  <div class="padding-top-20">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
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
