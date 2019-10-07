<template>
  <transition
    name="modal"
    mode="out-in"
  >
    <div
      class="modal__container"
      @keyup.esc="$emit('close')"
    >
      <div class="modal">
        <SButton
          class="modal__close"
          theme="float"
          @click.native="$emit('close')"
        >
          <Icon type="x"/>
        </SButton>

        <div
          v-if="$slots.header"
          class="modal__title"
        >
          <slot name="header"/>
        </div>

        <div
          v-if="$slots.body"
          class="modal__body"
        >
          <slot name="body"/>
        </div>

        <div
          v-if="$slots.footer"
          class="modal__footer"
        >
          <slot name="footer"/>
        </div>
      </div>

      <div
        class="modal__overlay"
        @click="$emit('close')"
      />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  mounted() {
    document.body.classList.add('lock-scroll')
  },
  destroyed() {
    document.body.classList.remove('lock-scroll')
  }
}
</script>

<style lang="sass">

.modal
  background: #ffffff
  border-radius: 12px
  min-width: 500px
  max-height: 100%
  padding: 24px
  backface-visibility: hidden
  overflow-x: auto
  transition: all .3s ease
  position: relative
  z-index: 3

  +mq_modal
    min-width: auto
    width: 100vw
    height: 100vh
    border-radius: 0
    padding: 24px
    overflow-y: scroll
    scroll-behavior: smooth

  +mq_x_small
    padding: 16px

  &__container
    backface-visibility: hidden
    position: fixed
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    z-index: 9999
    display: flex
    align-items: center
    justify-content: center

  &__title
    margin-bottom: 24px
    color: $color_neutral_primary

    +mq_small
      margin-top: 24px

    +mq_x_small
      margin-top: 32px

  &__footer
    margin-top: 40px
    display: flex

    .btn ~ .btn
      margin-left: 16px

    +mq_modal
      position: fixed
      bottom: 0
      width: 100%
      left: 0
      box-sizing: border-box
      box-shadow: 0 -1px 12px rgba(0,0,0,.1)
      padding: 8px 16px
      z-index: 100

  &__options
    display: flex
    align-items: center

    &__item

      & ~ &
        margin-left: 24px

  &__overlay
    display: flex
    top: 0
    left: 0
    bottom: 0
    right: 0
    position: fixed
    align-items: center
    backface-visibility: hidden
    justify-content: center
    background: rgba(0,0,0,.5)
    transition: opacity .4s ease

  &__close
    position: absolute
    right: 8px
    top: 8px
    opacity: .67

  // Transition Animations
  &-enter
    opacity: 0

  &-leave-active
    opacity: 0

  &-enter &,
  &-leave-active &
    transform: scale(0.92) translateY(25%)

    +mq_small
      transform: translateY(50%)

</style>
