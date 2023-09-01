import { createRouter, createWebHistory } from 'vue-router';

import Layout from '@/views/Layout/index.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'Home',
        component: () => import('@/views/HomeView.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 'user' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
