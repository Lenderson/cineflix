import * as types from '../mutation-types'

export default {
  showMainLoading: ({ commit }) => {
    commit(types.SHOW_MAIN_LOADING)
  },

  hideMainLoading: ({ commit }) => {
    commit(types.HIDE_MAIN_LOADING)
  }
}
