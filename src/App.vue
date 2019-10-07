<template>
  <div id="app">
    <AppHeader @keyup="setSearchText"/>

    <router-view :search-text="searchText"/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',

  components: {
    AppHeader
  },
  
  data() {
    return {
      searchText: ''
    }
  },

  methods: {
    setSearchText(text) {
      this.searchText = text
    }
  }
}
</script>

<style lang="sass">

@import "~@/sass/main"
@import "~@/sass/typography"
@import "~@/sass/presets"
@import "~@/sass/transitions"
@import "~@/sass/overrides/tooltip"
@import "~@/sass/overrides/toasted"
@import "~@/sass/components/checkbox"
@import "~@/sass/components/radio"
@import "~@/sass/components/input"

body
  padding: 0
  margin: 0
  background: $color_neutral_quaternary

.app-main

  &__loading
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    height: calc(100vh - 40px)

</style>
