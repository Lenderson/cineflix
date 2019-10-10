<template>
  <transition-group
    tag="section"
    name="card"
    class="movies"
    appear
  >
    <MoviePoster
      v-for="movie in filteredMovies"
      :key="movie.id"
      :title="movie.title"
      :overview="movie.overview"
      :score="movie.voteAverage"
      :image="getPosterUrl(movie.posterPath)"
      :release-year="getReleaseYear(movie.releaseDate)"
      :is-favorited="isFavorited(movie.id)"
      @favorite="toggleFavorite(movie)"
      @click.native="$router.push({ name: 'movie', params: { movieId: movie.id } })"
    />
  </transition-group>
</template>

<script>
import MoviePoster from '../components/MoviePoster'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Movies',

  components: {
    MoviePoster
  },

  props: {
    searchText: {
      type: String,
      required: true,
      default: () => ''
    }
  },

  computed: {
    ...mapGetters(['movies', 'favorites']),

    filteredMovies() {
      return this.movies.filter(movie =>
        movie.title.toLowerCase().includes(this.searchText.toLowerCase())
      )
    }
  },

  created() {
    this.load()
  },

  methods: {
    ...mapActions(['getFavoriteMovies', 'getMovies', 'addToFavorites', 'removeFromFavorites']),

    async load() {
      try{
        this.getFavoriteMovies()
        await this.getMovies()
      } catch (error) {
        console.warn(error)
      }
    },

    isFavorited(movieId) {
      return !!(this.favorites && this.favorites.find(movie => movie.id === movieId))
    },

    toggleFavorite(selectedMovie) {
      const movieId = selectedMovie.id
      this.isFavorited(movieId)
        ? this.removeFromFavorites(movieId)
        : this.addToFavorites(selectedMovie)
    },

    getReleaseYear(date) {
      return new Date(date).getFullYear()
    },

    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w200${posterPath}`
    },
  }
}
</script>

<style lang="sass">

.movies
  display: grid
  grid-template-columns: repeat(auto-fill, 200px)
  grid-gap: 32px
  justify-content: center
  box-sizing: border-box
  padding: 48px
  color: $color_neutral_primary

</style>
