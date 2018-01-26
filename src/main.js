// Built in Vue Imports
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'




// Vue material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css' // Theme

import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery


Vue.use(VueMaterial)


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
