import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from './plugins/axios'
import VOffline from './plugins/vueoffline'
import './assets/scss/global.scss'
import './plugins/vuenotify'
import './plugins/vuelidate'

Axios() // running axios instance
Vue.config.productionTip = false

new Vue({
  router,
  store,
  VOffline,
  render: (h) => h(App),
}).$mount('#app')
