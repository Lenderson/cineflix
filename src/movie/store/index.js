import apiMovie from '../api'
import * as types from './types'

const state = {
  movies: []
}

const getters = {
  movies: state => state.movies,
}

const mutations = {
  [types.SET_MOVIES]: (state, movies) => {
    state.movies = movies.map(movie => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      posterPath: movie.poster_path,
      releaseDate: movie.release_date,
      voteAverage: movie.vote_average
    }))
  }
}

const actions = {
  getMovies: async ({ commit }) => {
    const response = await apiMovie.getPopularMovies()
    const movies = response.data.results
    commit(types.SET_MOVIES, movies)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
