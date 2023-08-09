export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../App.vue')
  },
  {
    path: '/home',
    name: 'homePage',
    component: () => import('../App.vue')
  },
]