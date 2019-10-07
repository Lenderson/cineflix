<template>
  <div
    :style="{
      height, 
      width, 
      borderRadius,
      opacity,
      filter: dark ? 'brightness(125%)' : ''
    }"
    class="skeleton-bone"
  />
</template>


<script>
export default {
  name: 'SkeletonBone',

  props: {
    width: {
      type: String,
      default: '100%'
    },

    height: {
      type: String,
      default: '16px'
    },

    borderRadius: {
      type: String,
      default: '4px'
    },

    opacity: {
      type: String,
      default: '1'
    },

    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style lang="sass">

$bone-color: transparentize($color-neutral-tertiary, .8)

.skeleton-bone
  filter: brightness(100%)
  background: $bone-color
  position: relative
  overflow: hidden
  display: inline-block

  &::before
    content: ""
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: linear-gradient(90deg, transparent 0%, $bone-color 50%, transparent 80%)
    animation-duration: 1200ms
    animation-fill-mode: forwards
    animation-iteration-count: infinite
    animation-name: pulse
    animation-timing-function: ease-in-out


@keyframes pulse
  0%
    transform: translate3d(-80%, 0, 0)
  100%
    transform: translate3d(120%, 0, 0)

</style>
