import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components/index'
import './styles/index.scss'

createApp(App).use(router).use(components).mount('#app')
