export default {
  data() {
    return {}
  },
  computed: {
    overlay() {
      return this.$loading({
        lock: true,
        text: 'Waiting',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
    },
  },
  methods: {
    formatCurrency(value) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      })
        .format(value)
        .split(',')[0]
    },
    convertMoney(value) {
      let replaceMoney = String(value).replaceAll('.', '')
      return parseInt(replaceMoney)
    },
  },
}
