export default {
  path: '/admin',
  name: 'admin',
  component: () => import('@/views/admin/AdminLayout.vue'),
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
