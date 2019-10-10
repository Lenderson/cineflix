import Vue from 'vue'
import Vuex from 'vuex'

import loader from '@/store/loader'
import movies from '@/movie/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loader,
    movies
  },
  strict: process.env.NODE_ENV !== 'production'
})
