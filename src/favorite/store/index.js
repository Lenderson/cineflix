import * as types from './types'

const state = {
  favorites: []
}

const getters = {
  favorites: state => state.favorites
}

const mutations = {
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
  getFavoriteMovies: ({ commit }) => {
    const favoriteMovies = JSON.parse(localStorage.getItem('favorites')) || []
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
