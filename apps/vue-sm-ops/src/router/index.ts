import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/jsx',
      name: 'jsx',
      component: () => import('../views/Jsx.vue'),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/shop/index.vue'),
      children: [
        {
          path: '/shop/category-tag',
          name: 'shop_category-tag',
          component: () => import('../views/shop/category-tag/index.vue'),
        },
        {
          path: '/shop/customer',
          name: 'shop_customer',
          component: () => import('../views/shop/customer/index.vue'),
        },
        {
          path: '/shop/commodity',
          name: 'shop_commodity',
          component: () => import('../views/shop/commodity/index.vue'),
        },
        {
          path: '/shop/order',
          name: 'shop_order',
          component: () => import('../views/shop/order/index.vue'),
        }
      ]
    },
  ],
});

export default router;
