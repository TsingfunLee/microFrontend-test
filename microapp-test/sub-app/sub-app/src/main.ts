import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'
import './public-path'

const router = createRouter({
  // 👇 __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL),
  routes,
})

const app = createApp(App)
app.use(router).mount('#sub-app')

console.log('子应用挂载')

window.addEventListener('unmount', function(){
  app.unmount()
})