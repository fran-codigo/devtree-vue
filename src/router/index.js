import { createRouter, createWebHistory } from 'vue-router'
import AuthRoutes from './auth'
import AdminRoutes from './admin'
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
    {
      ...AdminRoutes,
    },
  ],
})

export default router
