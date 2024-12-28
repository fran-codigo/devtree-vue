export default {
  path: '/admin',
  name: 'admin',
  component: () => import('@/views/admin/AdminLayout.vue'),
  meta: { requiresAuth: true },
  children: [
    {
      path: '',
      name: 'linktree',
      component: () => import('@/views/admin/LinkTreeView.vue'),
    },
    {
      path: 'perfil',
      name: 'profile',
      component: () => import('@/views/admin/ProfileView.vue'),
    },
  ],
}
