<template>

  <div 
    :class="[
      'box', 
      `box--${elevation}`, 
      {[`box--rise-on-hover-to-${'riseOnHover'}`] : riseOnHover}]"
    :style="{ padding : noPadding ? 0 : padding, borderRadius: borderRadius }"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Box',

  props: {
    noPadding: {
      type: Boolean,
      default: false
    },

    padding: {
      type: String,
      default: '16px'
    },

    elevation: {
      type: [String, Number],
      default: 1
    },

    riseOnHover: {
      type: [String, Number]
    },

    borderRadius: {
      type: String,
      default: '8px'
    }
  },

  data() {
    return {
      mouseOn: false
    }
  }
}
</script>


<style lang="sass">

$shadow-color: transparentize($color_neutral_primary, 0.6)

=elevation($z)
  @if $z == 1
    box-shadow: 0px 2px 6px -1px $shadow-color
  @if $z == 2
    box-shadow: 0px 6px 8px -1px $shadow-color
  @if $z == 3
    box-shadow: 0px 10px 16px -2px $shadow-color
  @if $z == 4
    box-shadow: 0px 24px 32px -6px $shadow-color

.box
  color: $color-neutral-primary
  box-sizing: border-box
  background: white
  border: 1px solid transparentize($color_neutral_quaternary, 0.6)
  transition: all 200ms ease-in-out

  @for $i from 1 through 4
    &--#{$i}
      +elevation($i)

  @for $i from 1 through 4
    &--rise-on-hover-to-#{$i}:hover
      +elevation($i)

</style>
