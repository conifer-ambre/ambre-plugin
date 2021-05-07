import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import components from '@/components/index'
import utils from '@/utils/index'
import '@/styles/atom.scss'
import '@/styles/views.scss'
import '@/styles/components.scss'
const app = createApp(App)
app.config.globalProperties.$utils = utils
app.use(router).use(components).mount('#app')
