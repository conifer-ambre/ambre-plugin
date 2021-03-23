<template>
  <table class="ambre-table">
    <tr class="ambre-table-header">
      <th class="ambre-table-header-item" v-for="(item,index) in header" :key="index">{{ item.label }}</th>
      <th class="ambre-table-header-item" v-if="handle.length">handle</th>
    </tr>
    <tr class="ambre-table-body" v-for="(item,index) in data" :key="index">
      <td class="ambre-table-body-item" v-for="(child,index) in header" :key="index">{{ item[child.prop] }}</td>
      <td class="ambre-table-body-item">
        <template v-for="(item,index) in handle" :key="index">
          <ambre-button :type="item.type" class="margin-right-5">{{item.label}}</ambre-button>
        </template>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => []
    },
    header: {
      type: Array,
      default: () => []
    },
    handle: {
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
