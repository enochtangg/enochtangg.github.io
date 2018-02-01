// Built in Vue Imports
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'




// Vue material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css' // Theme


Vue.use(VueMaterial)

// jQuery plugin
import 'expose-loader?$!expose-loader?jQuery!jquery'
import stalactite from './plugins/jquery.stalactite.min'
import fancybox from './plugins/fancy-box/source/jquery.fancybox'


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
