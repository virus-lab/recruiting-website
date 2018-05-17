// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueCountdown from '@xkeshi/vue-countdown'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueAnalytics from 'vue-analytics'

Vue.component('countdown', VueCountdown)

Vue.use(BootstrapVue)

Vue.use(VueAnalytics, {
  id: 'UA-93918089-4'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
