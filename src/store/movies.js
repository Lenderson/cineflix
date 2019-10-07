import apiMovie from '@/api/movie'
import * as types from './mutation-types'

const state = {
  movies: [],
  favorites: []
}

const getters = {
  movies: state => state.movies,
  favorites: state => state.favorites
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
  },

  [types.SET_FAVORITES]: (state, movies) => {
    state.favorites = movies
  },

  [types.ADD_TO_FAVORITES]: (state, movie) => {
    state.favorites.push(movie)
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  },

  [types.REMOVE_FROM_FAVORITES]: (state, movieId) => {
    state.favorites = state.favorites.filter(movie => movie.id !== movieId)
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  }
}

const actions = {
  getMovies: async ({ commit }) => {
    const response = await apiMovie.getPopularMovies()
    const movies = response.data.results
    commit(types.SET_MOVIES, movies)
  },

  getFavoriteMovies: ({ commit }) => {
    const favoriteMovies = JSON.parse(localStorage.getItem('favorites'))
    commit(types.SET_FAVORITES, favoriteMovies)
  },

  addToFavorites: ({ commit }, movie) => {
    commit(types.ADD_TO_FAVORITES, movie)
  },

  removeFromFavorites: ({ commit }, movieId) => {
    commit(types.REMOVE_FROM_FAVORITES, movieId)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
