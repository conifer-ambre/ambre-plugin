import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import components from '@/components/index'
import '@/styles/atom.scss'
import '@/styles/views.scss'
import '@/styles/components.scss'

createApp(App).use(router).use(components).mount('#app')
