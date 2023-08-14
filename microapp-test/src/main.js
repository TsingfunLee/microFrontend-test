import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app'
import router from './router'


createApp(App).use(router).mount('#app')

microApp.start({
  plugins: {
    modules: {
      // appName即应用的name值
      myPage: [{
        loader(code) {
          if (process.env.NODE_ENV === 'development') {
            // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
            code = code.replace(/(from|import)(\s*['"])(\/my-page\/)/g, all => {
              return all.replace('/my-page/', 'http://localhost:5173/my-page/')
            })
          }

          return code
        }
      }]
    }
  }
})
