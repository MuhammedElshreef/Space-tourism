import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },

    {
      path: '/crew',
      name: 'crew',
      component: () => import('../views/CrewPage.vue')
    },
    {
      path: '/destination',
      name: 'destination',
      component: () => import('../views/DestinationPage.vue')
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('../views/TechnologyPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundPage.vue')
    }
  ]
})

export default router
