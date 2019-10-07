<template functional>
  <div
    :class="`
      spinner
      spinner--${props.size}
      spinner--${props.theme}
      ${data.staticClass}`
    "/>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    size: {
      type: String,
      default: 'regular'
    },
    additionalClass: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'accent'
    }
  }
}
</script>

<style lang="sass">

  .spinner
    display: inline-block
    border-radius: 100%
    width: 48px
    height: 48px
    transition: all 0.3s linear
    animation: spin 0.8s linear infinite

    &--big
      width: 64px
      height: 64px

    &--regular
      width: 48px
      height: 48px

    &--small
      width: 24px
      height: 24px
      border-width: 4px

    &--tiny
      width: 18px
      height: 18px
      border-width: 4px

    &--accent
      border: 5px solid $color_neutral_tertiary
      border-top: 5px solid $color_accent

    &--dark
      border: 5px solid rgba(255,255,255, .4)
      border-top: 5px solid white

  @keyframes spin
   0%
    transform: rotate(0deg)
   100%
    transform: rotate(360deg)

</style>
