export default {
  path: '/auth',
  name: 'auth',
  component: () => import('@/views/auth/AuthLayout.vue'),
  children: [
    {
      path: 'registrar',
      name: 'register',
      component: () => import('@/views/auth/RegisterView.vue'),
    },
    {
      path: 'login',
      name: 'login',
      component: () => import('@/views/auth/LoginView.vue'),
    },
  ],
}
