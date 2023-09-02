import { createRouter, createWebHistory } from 'vue-router';

import Layout from '@/views/Layout/index.vue';

export const baseRouters = [
  {
    path: '/',
    name: 'Root',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/HomeView.vue'),
        name: 'Dashboard',
        meta: { title: '主控台', icon: 'MailOutlined' },
      },
    ],
  },
  {
    path: '/test',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/test/index.vue'),
        name: 'Test',
        meta: { title: '测试页面', icon: 'MailOutlined' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: baseRouters,
});

router.beforeEach((to, from, next) => {
  console.log('Navigating from:', from.fullPath, 'to:', to.fullPath);
  next();
});

export default router;
