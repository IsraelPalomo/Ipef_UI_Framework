import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { name: 'Home', path: '/', component: () => import('../views/Home.vue') },
  {
    name: 'Details',
    path: '/details',
    component: () => import('../views/Details.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
