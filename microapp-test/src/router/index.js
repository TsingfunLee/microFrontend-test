import {createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/*',
    name: 'home',
    component: () => import('../App.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: ()=>import('../views/Home.vue')
      },
      {
        path: '/my-page/:page*',
        name: 'my-page',
        component: ()=>import('../views/MyPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router