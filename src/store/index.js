import Vue from 'vue'
import Vuex from 'vuex'
import mPicture from './modules/picture'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    pictures: mPicture,
  },
})
