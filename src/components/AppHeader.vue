<template>
  <div class="app__header">
    <div class="header__links">
      <div class="header__link">
        <SButton
          class="header__link-button"
          theme="float"
          @click.native="$router.push({ name: 'movies' })"
        >
          Movies
        </SButton>

        <div class="header__link--selected"/>
      </div>

      <div class="header__link">
        <SButton
          class="header__link-button"
          theme="float"
          @click.native="$router.push({ name: 'favorites' })"
        >
          Favorites
        </SButton>

        <div class="header__link--selected"/>
      </div>
    </div>

    <div class="header__search">
      <Icon
        type="search"
        stroke="white"
      />

      <input
        type="text"
        placeholder="Search..."
        @keyup="$emit('keyup', $event.target.value)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="sass">

.app__header
  height: 40px
  background-color: $color_main
  display: flex
  align-items: center
  justify-content: space-between
  position: relative

  .header

    &__links
      margin: 0 88px
      display: flex
      align-items: center

    &__link
      margin: 0 8px
      display: flex
      flex-direction: column
      align-items: center
      
      &-button
        color: white
      
      &--selected
        border-bottom: 2px solid white
        width: 85%

    &__search
      display: flex
      align-items: center
      padding-right: 64px

      i
        width: 18px
        height: 18px

      input
        margin-left: 8px
      
</style>
