import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    x_small: 320,
    small: 568,
    medium: 768,
    large: 992,
    x_large: Infinity
  }
})
