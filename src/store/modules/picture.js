import axios from 'axios'
const picture = {
  namespaced: true,
  state: () => ({
    datas: [],
    loading: false,
    show_alert: false,
    status: '',
    alert_title: '',
    alert_message: '',
  }),
  getters: {},
  mutations: {
    setDatas(state, payload) {
      state.datas = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setShow(state, payload) {
      state.show_alert = payload
    },
    setStatus(state, payload) {
      state.status = payload
    },
    setTitle(state, payload) {
      state.alert_title = payload
    },
    setMessage(state, payload) {
      state.alert_message = payload
    },
  },
  actions: {
    getImages(context) {
      return axios
        .get(`search?query=nature`)
        .then((res) => {
          const result = res.data.photos
          context.commit('setLoading', false)
          context.commit('setShow', false)
          context.commit('setDatas', result)
          return true
        })
        .catch((err) => {
          console.log(err.response)
          context.commit('setLoading', false)
          context.commit('setShow', true)
          context.commit('setStatus', 'error')
          context.commit('setTitle', `[${err.response.status}]`)
          context.commit('setMessage', err.response.statusText)
          return false
        })
    },
  },
}

export default picture
