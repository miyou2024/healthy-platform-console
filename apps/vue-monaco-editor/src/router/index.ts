import { createRouter, createWebHistory } from 'vue-router';
import TxtMonacoEditor from '../views/TextMonacoEditor.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'txt',
      component: TxtMonacoEditor,
    },
    {
      path: '/html',
      name: 'html',
      component: () => import('../views/HtmlMonacoEditor.vue'),
    },
    {
      path: '/js_ts',
      name: 'js_ts',
      component: () => import('../views/JsTsMonacoEditor.vue'),
    },
    {
      path: '/monaco-editor',
      name: 'monaco-editor',
      component: () => import('../views/MonacoEditor.vue'),
    },
  ],
});

export default router;
