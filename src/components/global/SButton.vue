<template>
  <button
    :class="[`btn btn--${size} btn--${theme}`, { 'btn--icon-only' : $slots.icon, 'btn--loading' : loading } ]"
    :disabled="disabled || loading"
    type="button"
    @click="$emit('click')"
    @blur="$emit('blur')"
  >

    <SasSpinner
      v-if="loading"
      size="small"
      theme="dark"
      additional-class="btn__spinner"
    />

    <div
      v-if="$slots.left"
      class="btn__icon  btn__icon--left"
    >
      <slot name="left"/>
    </div>

    <div
      v-if="$slots.icon"
      class="btn__icon  btn__icon"
    >
      <slot name="icon"/>
    </div>

    <slot/>

    <div
      v-if="$slots.right"
      class="btn__icon  btn__icon--right"
    >
      <slot name="right"/>
    </div>
  </button>
</template>

<script>
export default {
  name: 'SButton',

  props: {
    loading: {
      type: Boolean,
      default: false
    },

    theme: {
      type: String,
      default: 'primary'
    },

    size: {
      type: String,
      required: false,
      default: 'regular'
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="sass">

.btn
  appearance: none
  border: none
  border-radius: 8px
  box-sizing: border-box
  display: inline-flex
  align-items: center
  justify-content: center
  cursor: pointer

  &--loading
    font-size: 0

  &__spinner
    position: absolute

  &:focus
    outline: 0

  &:disabled
    cursor: disabled
    opacity: .5
    pointer-events: none

  &__icon
    display: flex

  // Sizes
  &--big
    height: 48px
    padding: 0 24px

    &.btn--icon-only
      width: 48px
      padding: 0

    .btn__icon

      &--left
        margin-right: 12px
        margin-left: -8px

      &--right
        margin-left: 12px
        margin-right: -8px

  &--regular
    height: 36px
    padding: 0 16px

    &.btn--icon-only
      width: 36px
      padding: 0


    .btn__icon

      &--left
        margin-right: 8px
        margin-left: -6px

      &--right
        margin-left: 8px
        margin-right: -6px

  &--small
    height: 28px
    padding: 0 12px

    &.btn--icon-only
      width: 28px
      padding: 0

    .btn__icon

      &--left
        margin-right: 6px
        margin-left: -4px

      &--right
        margin-left: 6px
        margin-right: -4px

  // Styles
  &--primary
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 50%), $color_accent
    color: #ffffff
    border: 1px solid rgba(0, 0, 0, 0.08)
    box-shadow: 0px 1px 2px rgba(9, 30, 66, 0.14)
    +anim(150ms)

    &:hover
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%), darken($color_accent, 5%)
      +anim(150ms)

  &--danger
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 50%), $color_danger
    color: #ffffff
    border: 1px solid rgba(0, 0, 0, 0.08)
    box-shadow: 0px 1px 2px rgba(9, 30, 66, 0.14)
    +anim(150ms)

    &:hover
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%), darken($color_danger, 5%)
      +anim(150ms)

  &--secondary
    background: linear-gradient(180deg, rgba(21, 41, 75, 0) 50%, rgba(21, 41, 75, 0.15) 100%), #FFFFFF
    border: 1px solid #C3C5CC
    box-shadow: 0px 1px 2px rgba(9, 30, 66, 0.14)
    color: transparentize($color_neutral_primary, .2)
    +anim(150ms)

    .btn__icon

    &:hover
      background: linear-gradient(180deg, rgba(21, 41, 75, 0) 50%, rgba(21, 41, 75, 0.20) 100%), darken(#ffffff, 3%)
      +anim(150ms)

  &--float
    background: rgba(21, 41, 75, 0)
    color: transparentize($color_neutral_primary, .2)
    +anim(150ms)

    &-dark
      color: white
      background: rgba(21, 41, 75, 0)
      +anim(150ms)

      &:hover
        background: rgba(0, 0, 0, 0.2)
        +anim(150ms)

    &.btn--small
      padding: 0 8px

    &.btn--regular
      padding: 0 10px

    &:hover
      background: rgba(0, 0, 0, 0.2)
      +anim(150ms)

  &--icon-only
    font-size: 0

</style>
