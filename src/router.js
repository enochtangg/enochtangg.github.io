import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = []

import Home from './home.vue'
import AboutMe from './aboutme.vue'
import Photography from './photography.vue'
import Visualize from './visualize.vue'
import Connect from './connect.vue'

routes.push({
  name: 'home',
  path: '/',
  component: Home
})
routes.push({
  name: 'home',
  path: '/home',
  component: Home
})
routes.push({
  name: 'aboutme',
  path: '/aboutme',
  component: AboutMe
})
routes.push({
  name: 'photography',
  path: '/photography',
  component: Photography
})
routes.push({
  name: 'visualize',
  path: '/visualize',
  component: Visualize
})
routes.push({
  name: 'connect',
  path: '/connect',
  component: Connect
})

export default new VueRouter({
  routes: routes,
})
