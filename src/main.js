import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'

import router from './router'

import './assets/main.css'
import App from './App.vue'

const app = createApp(App)
app.use(MotionPlugin)
app.use(router)
app.mount('#app')
