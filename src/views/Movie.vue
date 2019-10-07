<template>
  <div class="movie">
    <img
      :src="getPosterUrl(movie.posterPath)"
      class="movie-poster"
      alt="movie poster"
    >

    <div class="movie-infos">
      <div class="movie-infos__title">
        <h1>{{ movie.title }}</h1>

        <h3>({{ movie.releaseYear }})</h3>
      </div>

      <div class="movie-infos__actions">
        <div class="movie-infos__score">
          <Icon
            class="movie-infos__score-icon" 
            type="award"
          />

          <h2 class="movie-infos__score-value"> {{ movie.score }} </h2>
        </div>

        <SButton
          class="movie-infos__favorite-button"
          :class="{ '--favorited': isFavorited }"
          theme="float"
          @click="toggleFavorite"
        >
          <Icon
            slot="icon"
            type="heart"
          />
        </SButton>

      </div>

      <div class="movie-infos__overview">
        <h3 class="movie-infos__overview-title">Overview</h3>

        <p class="movie-infos__overview-text"> {{ movie.overview }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import apiMovie from '@/api/movie'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Movie',

  props: {
    movieId: {
      type: [Number, String],
      required: true,
      default: () => 0
    }
  },

  data() {
    return {
      movie: {
        id: '',
        title: '',
        overview: '',
        posterPath: '',
        releaseYear: '',
        score: ''
      }
    }
  },

  computed: {
    ...mapGetters(['favorites']),

    isFavorited() {
      return !!this.favorites.find(
        movie => parseInt(movie.id) === parseInt(this.movieId)
      )
    }
  },

  created() {
    this.load()
  },

  methods: {
    ...mapActions(['getFavoriteMovies', 'addToFavorites', 'removeFromFavorites']),

    async load() {
      this.getFavoriteMovies()
      const response = await apiMovie.getMovie(this.movieId)
      this.setMovie(response.data)
    },

    setMovie(movie) {
      this.movie = {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        posterPath: movie.poster_path,
        releaseYear: this.getReleaseYear(movie.release_date),
        score: movie.vote_average
      }
    },

    getPosterUrl(posterPath) {
      return posterPath ? `https://image.tmdb.org/t/p/w300${posterPath}` : ''
    },

    getReleaseYear(releaseDate) {
      return releaseDate.split('-')[0]
    },

    toggleFavorite() {
      this.isFavorited
        ? this.removeFromFavorites(this.movieId)
        : this.addToFavorites(this.movie)
    }
  }
}
</script>

<style lang="sass">

.movie
  display: flex
  padding: 96px 192px
  box-sizing: border-box
  color: $color_neutral_primary

  &-poster
    width: 350px
    height: 100%
    border-radius: 4px

  &-infos
    margin-left: 64px

    &__title

      h3
        color: $color_neutral_secondary

    &__actions
      display: flex
      align-items: center
      margin-top: 32px

    &__score
      display: flex
      align-items: center

      &-icon
        width: 48px
    
    &__favorite-button
      margin-left: 24px
      cursor: pointer
      
      i
        width: 32px

      &.--favorited
        color: #FF469F
    
      &:hover
        color: #FF469F
    
    &__overview
      margin-top: 48px
      width: 80%

      &-text
        margin-top: 8px

</style>
