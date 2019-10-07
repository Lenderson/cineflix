<template functional>
  <span 
    :class="`badge badge--${props.status} ${data.staticClass}`"
    :style="{ background: props.background, color: props.color }"
  >
    <slot/>
  </span>
</template>

<script>
export default {
  name: 'Badge',

  props: {
    color: {
      type: String,
      default: 'white'
    },

    background: {
      type: String,
      default: '#9e9fb1'
    },

    status: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="sass">

.badge
  display: inline-block
  text-align: center
  font-size: 13px
  padding: 4px 8px
  border-radius: 100px
  box-sizing: border-box

  &--success
    color: $color_success !important
    background: transparentize($color_success, .75) !important

  &--progress
    color: $color_brand_second !important
    background: transparentize($color_brand_second, .75) !important

  &--fail
    color: red !important
    background: transparentize(red, .75) !important

</style>
