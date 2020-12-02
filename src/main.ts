import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import components from '@/components/index'

createApp(App).use(router).use(ElementPlus).use(components).mount('#app')
