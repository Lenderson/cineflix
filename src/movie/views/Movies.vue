<template>
  <div class="movies">
    <MoviesBody :movies="filteredMovies"/>
  </div>
</template>

<script>
import MoviesBody from '../components/MoviesBody'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Movies',
   
  components: {
    MoviesBody
  },

  props: {
    searchText: {
      type: String,
      required: true,
      default: () => ''
    }
  },

  computed: {
    ...mapGetters(['movies']),

    filteredMovies() {
      console.log(this.movies)
      return this.movies.filter(movie =>
        movie.title.toLowerCase().includes(this.searchText.toLowerCase())
      )
    }
  },

  created() {
    this.load()
  },

  methods: {
    ...mapActions(['getFavoriteMovies', 'getMovies']),

    async load() {
      this.getFavoriteMovies()
      await this.getMovies()
    }
  }
}
</script>

<style lang="sass">

.movies
  padding: 48px
  box-sizing: border-box
  color: $color_neutral_primary

</style>
