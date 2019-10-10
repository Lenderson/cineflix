const Movies = () => import('./views/Movies')
const Movie = () => import('./views/Movie')

export default [
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
    path: '*',
    redirect: { name: 'movies' }
  }
]
