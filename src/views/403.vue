<template>
  <div class="error">
    <img
      class="error__ilustration"
      src="~@/assets/403.svg"
      alt="error 403"
    >

    <div class="error__details">
      <h1 class="details__title">Você não tem permissão para visitar esta página.</h1>
      
      <p class="details__error-type">Erro 403 - Proibido.</p>
      
      <h4 class="details__comment">
        Acreditamos que você tenha chegado aqui por engano. Podemos levá-lo de volta para que você continue navegando.
      </h4>

      <SButton
        class="details__home-button" 
        size="big"
        @click="backToPortal()"
      >
        <Icon 
          slot="left"
          type="arrow-left"
        />
        
        Voltar ao Portal SAS
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
