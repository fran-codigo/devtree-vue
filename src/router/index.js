import { createRouter, createWebHistory } from 'vue-router'
import AuthRoutes from './auth'
import AdminRoutes from './admin'
import HomeView from '@/views/home/HomeView.vue'
import { authGuard } from './guards'

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

router.beforeEach((to, from, next) => {
  authGuard(to, from, next)
})

export default router
