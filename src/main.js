import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from './plugins/axios'
import VOffline from './plugins/vueoffline'
import ElementUI from 'element-ui'
import './assets/scss/global.scss'
import './plugins/vuenotify'
import './plugins/vuelidate'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Axios() // running axios instance
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

new Vue({
  router,
  store,
  VOffline,
  render: (h) => h(App),
}).$mount('#app')
