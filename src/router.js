import Vue from 'vue'
import Router from 'vue-router'

import movieRoutes from '@/movie/routes'
import favoriteRoutes from '@/favorite/routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...movieRoutes,
    ...favoriteRoutes
  ]
})

export default router
