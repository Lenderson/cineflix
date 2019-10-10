import http from '@/api/http'

const getPopularMovies = () => {
  return http.get('/movie/now_playing')
}

const getMovie = movieId => {
  return http.get(`/movie/${movieId}`)
}

const getMoviePoster = (posterPath) => {
  const config = { baseURL: 'https://image.tmdb.org/t/p/w200/' }
  return http.get(posterPath, config)
}

export default {
  getPopularMovies,
  getMovie,
  getMoviePoster
}
