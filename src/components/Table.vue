<template>
  <table class="ambre-table">
    <!-- header -->
    <tr class="ambre-table-header">
      <th class="ambre-table-header-item" v-for="(item, index) in header" :key="index">
        {{ item.label }}
      </th>
      <th class="ambre-table-header-item" v-if="handle.length">操作</th>
    </tr>
    <!-- body -->
    <tr class="ambre-table-body" v-for="(item, index) in data" :key="index">
      <td
        class="ambre-table-body-item"
        v-for="(child, index) in header"
        :key="index"
        @click="handleExpand(item)"
      >
        {{ item[child.prop] }}
      </td>
      <div
        :style="`height:${item.expand ? header.length * 30 + handle.length * 35 : 0}px`"
        class="ambre-table-body-block"
      >
        <div v-for="(child, index) in header" :key="index">
          <span>{{ child.label }}</span>
          <span>: </span>
          <span>{{ item[child.prop] }}</span>
        </div>
        <div v-for="(item, index) in handle" :key="index">
          <ambre-button :type="item.type" class="">{{ item.label }}</ambre-button>
        </div>
      </div>
      <td class="ambre-table-body-item">
        <template v-for="(item, index) in handle" :key="index">
          <ambre-button :type="item.type" class="margin-right-5">{{ item.label }}</ambre-button>
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
