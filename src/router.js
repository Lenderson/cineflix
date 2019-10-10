import Vue from 'vue'
import Router from 'vue-router'

import movieRoutes from '@/movie/routes'
const Favorites = () => import('@/views/Favorites')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    ...movieRoutes
  ]
})

export default router
