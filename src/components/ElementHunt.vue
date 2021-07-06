<template>
  <div>
    <el-form :model="formInline">
      <el-row :gutter="20">
        <!-- hunt options -->
        <el-col
          :span="6"
          v-for="({ label, prop, type, placeholder, multiple, options }, index) in options"
          :key="index"
        >
          <el-form-item :label="label">
            <el-select
              v-if="type === 'select'"
              v-model="form[prop]"
              :placeholder="placeholder"
              :multiple="multiple"
              :collapse-tags="multiple"
              clearable
            >
              <el-option
                v-for="({ label, value }, index) in options"
                :key="index"
                :label="label"
                :value="value"
              />
            </el-select>
            <el-date-picker
              v-else-if="['date', 'datetime'].indexOf(type) > -1"
              v-model="form[prop]"
              :type="type"
              :placeholder="placeholder"
              clearable
            />
            <el-date-picker
              v-else-if="type === 'datetimerange'"
              v-model="form[prop]"
              :type="type"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              clearable
            />
            <el-input v-else v-model="form[prop]" :placeholder="placeholder" clearable />
          </el-form-item>
        </el-col>
        <!-- hunt emits -->
        <el-col :span="24">
          <el-form-item>
            <div class="flex-justify-align-start flex-wrap">
              <div class="padding-bottom-10 padding-right-10">
                <el-button type="primary" @click="handleQuery">查询</el-button>
              </div>
              <div
                v-for="(item, index) in 25"
                :key="index"
                class="padding-bottom-10 padding-right-10"
              >
                <el-button type="primary" @click="handleSubmit">查询</el-button>
              </div>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['change'],
  setup(props, context) {
    const data = reactive({
      form: {},
      // handleQuery() {
      // },
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
