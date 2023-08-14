import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app'
import router from './router'


createApp(App).use(router).mount('#app')

microApp.start()
