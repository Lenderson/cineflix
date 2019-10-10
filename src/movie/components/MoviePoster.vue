<template>
  <div class="poster">
    <div
      v-tooltip="{ content: overview, placement: 'top' }"
      class="poster__image"
    >
      <img
        :src="image"
        alt="movie poster"
      >

      <div class="poster__image-footer">
        <div class="poster__score">
          <Icon type="award"/>

          <p class="score"> {{ score }} </p>
        </div>

        <Icon
          :class="{ '--favorited': isFavorited }"
          class="poster__favorite-button"
          type="heart"
          @click.stop="$emit('favorite')"
        />
      </div>
    </div>
    
    <div class="poster__info">
      <p class="poster__title">{{ title }}</p>

      <p class="poster__sub-title">{{ releaseYear }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviePoster',

  props: {
    image: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true,
      default: () => ''
    },

    overview: {
      type: String,
      required: true,
      default: () => ''
    },

    score: {
      type: Number,
      required: true,
      default: () => 6.7
    },

    releaseYear: {
      type: Number,
      required: true,
      default: () => 2015
    },

    isFavorited: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style lang="sass">
$shadow-color: transparentize($color_neutral_primary, 0.6)

.poster
  width: fit-content

  &__image
    display: flex
    flex-direction: column
    align-items: center
    cursor: pointer

    img
      border-radius: 4px
      box-shadow: 0px 3px 6px -1px $shadow-color

      &:hover
        +anim(200ms)
        box-shadow: 0 6px 12px rgba(0,0,0,.35)

    &-footer
      display: flex
      align-items: center
      justify-content: space-between
      width: 100%
      margin-top: -35px
      border-bottom-left-radius: 4px
      border-bottom-right-radius: 4px
      box-sizing: border-box
      padding: 8px
      background-color: transparentize(black, 0.4)
      color: white

      i
        width: 20px

  &__score
    display: flex
    align-items: center

    .score
      font-size: 14px
      margin-left: 4px
      font-weight: 600
  
  &__favorite-button

    &.--favorited
      color: #FF469F
    
    &:hover
      color: #FF469F
  
  &__title
    font-size: 14px
    font-weight: 600
  
  &__sub-title
    font-size: 12px
    margin-top: 4px
    color: $color_neutral_secondary

  &__info
    margin-left: -8px
    align-items: center
    box-sizing: border-box
    padding: 8px
    border-radius: 6px
  
  &__action-button
    width: 100%
    margin: 32px 0 0 0

.tooltip
  width: 250px
  box-sizing: border-box

  &-inner
    font-size: 14px
    padding: 16px !important
    box-sizing: border-box

</style>
