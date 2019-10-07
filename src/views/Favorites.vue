<template>
  <div class="favorites">
    <MoviesBody :movies="filteredMovies"/>
  </div>
</template>

<script>
import MoviesBody from '@/components/MoviesBody'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Favorites',

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
    ...mapGetters(['favorites']),

    filteredMovies() {
      return this.favorites.filter(movie =>
        movie.title.toLowerCase().includes(this.searchText.toLowerCase())
      )
    }
  },

   created() {
    this.load()
  },

  methods: {
    ...mapActions(['getFavoriteMovies']),

    async load() {
      this.getFavoriteMovies()
    }
  }
}
</script>

<style lang="sass">

.favorites
  padding: 48px
  box-sizing: border-box
  color: $color_neutral_primary

</style>
