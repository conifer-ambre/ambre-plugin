import { createApp } from 'vue'
import App from '@/App.vue'
import 'dayjs/locale/zh-cn'
import router from '@/router'
import utils from '@/utils/index'
import ElementPlus from 'element-plus'
import components from '@/components/index'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import '@/styles/atom.scss'
import '@/styles/views.scss'
import '@/styles/components.scss'
const app = createApp(App)
app.config.globalProperties.$utils = utils
app
  .use(router)
  .use(components)
  .use(ElementPlus, { locale })
  .mount('#app')
