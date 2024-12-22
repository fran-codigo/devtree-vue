import { createRouter, createWebHistory } from 'vue-router'
import AuthRoutes from './auth'
import HomeView from '@/views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      ...AuthRoutes,
    },
  ],
})

export default router
