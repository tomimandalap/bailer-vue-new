import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: '#1f73ff',
      success: '#45c83a',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      light: '#ffffff',
      dark: '#1e1e1e',
    },
  },
})
