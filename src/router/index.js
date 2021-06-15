import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/404',
    component: () => import('@/views/Error.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      path: '/404',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
