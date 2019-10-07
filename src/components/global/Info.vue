<template>
  <div 
    class="info"
    :class="{ 'info--no-icon': !icon.name}"
  >
    <div
      v-if="icon.name"
      class="info-left"
    >
      <SasIcon
        v-if="!icon.color"
        :type="icon.name"
      />

      <SasIcon
        v-else
        :type="icon.name"
        :stroke="icon.color" 
      />
    </div>

    <div class="info-right">
      <p 
        v-if="label"
        class="info-right__label"
      >
        {{ label }}
      </p>
      
      <div 
        v-if="value.type"
        v-html="`<h${value.type}>${value.text}</h${value.type}>`"
      />

      <p 
        v-else-if="value.text"
        class="info-right__text"
        :style="{ color: value.color }"
      >
        {{ value.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',

  props: {
    icon: {
      type: Object,
      required: false,
      validator: value => {
        const { name, color } = value
        const validTypes =
          (typeof name === 'string') & (typeof color === 'string')
        return validTypes
      },
      default: () => ({ name: '', color: '' })
    },

    label: {
      type: String,
      required: false,
      default: () => ''
    },

    value: {
      type: Object,
      required: false,
      validator: value => {
        const { text, type } = value
        const validTypes =
          (typeof text === 'string') & (typeof type === 'number')
        return validTypes
      },
      default: () => ({ text: '', type: 0 })
    }
  }
}
</script>

<style lang="sass">

.info
  display: grid
  grid-gap: 8px
  grid-template-columns: 24px 1fr

  &--no-icon
    grid-template-columns: 1fr

  &-left
    display: flex
    align-items: center
    color: $color_neutral_tertiary

  &-right
    display: flex
    flex-direction: column
    justify-content: center

    &__label
      font-size: 12px
      color: $color_neutral_secondary
      margin-bottom: 4px

</style>
