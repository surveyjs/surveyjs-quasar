import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/pages/HomePage.vue') },
    { path: '/survey', component: () => import('@/pages/SurveyPage.vue') },
    { path: '/creator', component: () => import('@/pages/CreatorPage.vue') },
    { path: '/dashboard', component: () => import('@/pages/DashboardPage.vue') },
    { path: '/tabulator', component: () => import('@/pages/TabulatorPage.vue') },
    { path: '/pdf-export', component: () => import('@/pages/PdfExportPage.vue') },
  ],
})

export default router
