import * as types from '../mutation-types'

export default {
  [types.SHOW_MAIN_LOADING](state) {
    state.isLoading = true
  },

  [types.HIDE_MAIN_LOADING](state) {
    state.isLoading = false
  }
}
