import Vue from 'vue'
import Router from 'vue-router'

const Movies = () => import('@/views/Movies')
const Movie = () => import('@/views/Movie')
const Favorites = () => import('@/views/Favorites')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },

    {
      path: '/movies/:movieId',
      name: 'movie',
      component: Movie,
      props: true
    },

    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },

    {
      path: '*',
      redirect: { name: 'movies' }
    }
  ]
})

export default router
