<template>
  <LayoutLanding>
    <div class="home">
      <h1>HOME {{ loading }}</h1>

      <pre>{{ datas }}</pre>
    </div>
  </LayoutLanding>
</template>
<script>
import LayoutLanding from '@/layouts/landing'
export default {
  name: 'Home',
  components: { LayoutLanding },
  data() {
    return {}
  },
  computed: {
    datas() {
      return this.$store.state['pictures']['datas']
    },
    loading() {
      return this.$store.state['pictures']['loading']
    },
    show_alert() {
      return this.$store.state['pictures']['show_alert']
    },
    status() {
      return this.$store.state['pictures']['status']
    },
    alert_title() {
      return this.$store.state['pictures']['alert_title']
    },
    alert_message() {
      return this.$store.state['pictures']['alert_message']
    },
  },
  watch: {
    show_alert(val) {
      if (val) {
        this.$notify({
          type: this.status,
          title: this.alert_title,
          text: this.alert_message,
        })
      }
      this.$store.commit('pictures/setShow', false)
    },
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      this.$store.commit('pictures/setLoading', true)
      await this.$store.dispatch('pictures/getImages')
    },
  },
}
</script>
