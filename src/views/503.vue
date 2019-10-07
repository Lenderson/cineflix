<template>
  <div class="error">
    <img
      class="error__ilustration"
      src="~@/assets/503.svg"
      alt="error 503"
    >

    <div class="error__details">
      <h1 class="details__title">Nosso serviço está temporariamente indisponível.</h1>
      
      <p class="details__error-type">Erro 503 - Serviço indisponível.</p>
      
      <h4 class="details__comment">
        Já estamos trabalhando para resolver o problema e não devemos demorar.
        Tente novamente mais tarde.
      </h4>

      <SButton
        class="details__home-button" 
        size="big"
        @click="$router.push({ name: 'home' })"
      >
        <Icon 
          slot="left"
          type="arrow-left"
        />
        
        Voltar para o início
      </SButton>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created() {
    this.hideMainLoading()
  },

  methods: {
    ...mapActions(['hideMainLoading']),

    backToPortal() {
      window.location.href = process.env.VUE_APP_PORTAL_URI
    }
  }
}
</script>

<style lang="sass">

.error
  display: flex
  flex-direction: row-reverse
  padding: 144px 72px
  justify-content: space-between

  +mq_large
    flex-direction: row-reverse
    padding: 32px 40px

  +mq_small
    display: block

  &__details

    +mq_small
      text-align: center

    .details__title
      color: $color_main
      max-width: 648px
      padding-bottom: 16px

      +mq_large
        font-size: 20px

    .details__error-type
      color: $color_neutral_secondary
      padding-bottom: 32px

      +mq_large
        font-size: 10px
        padding-bottom: 16px

    .details__comment
      color: $color_neutral_secondary
      max-width: 656px
      padding-bottom: 48px

      +mq_large
        font-size: 14px
        font-weight: 400
        padding-bottom: 32px

    .details__home-button
      width: fit-content
  
  &__ilustration

    +mq_large
      align-self: start
      width: 50%

    +mq_small
      width: 100%
      padding-bottom: 16px
</style>
