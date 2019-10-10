<template>
  <section class="movies-body">
    <transition-group
      tag="div"
      name="card"
      class="movies-body__grid"
      appear
    >
      <MoviePoster
        v-for="movie in movies"
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
  </section>
</template>

<script>
import MoviePoster from './MoviePoster'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MoviesBody',

  components: {
    MoviePoster
  },

  props: {
    movies: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  computed: {
    ...mapGetters(['favorites'])
  },

  created(){
    console.log(this.movies)
  },

  methods: {
    ...mapActions(['addToFavorites', 'removeFromFavorites']),

    getReleaseYear(date) {
      return new Date(date).getFullYear()
    },
    
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w200${posterPath}`
    },

    isFavorited(movieId) {
      return !!(this.favorites && this.favorites.find(movie => movie.id === movieId))
    },

    toggleFavorite(selectedMovie) {
      const movieId = selectedMovie.id
      this.isFavorited(movieId)
        ? this.removeFromFavorites(movieId)
        : this.addToFavorites(selectedMovie)
    }
  }
}
</script>

<style lang="sass">

.movies-body

  &__grid
    display: grid
    grid-template-columns: repeat(6, 1fr)
    grid-gap: 32px
    padding: 48px
    box-sizing: border-box
    width: 100%

</style>
