<template>
  <LayoutLanding>
    <div class="demo-image__preview">
      <h1>GALERY</h1>

      <el-table :data="datas" height="500" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column
          prop="photographer"
          label="Photographer"
          width="180"
        ></el-table-column>
        <el-table-column prop="src.small" label="Photo" align="right">
          >
          <template slot-scope="scope">
            <el-image
              v-if="scope.row && scope.row.src"
              style="width: 200px; height: 200px"
              :src="scope.row.src.small"
              :previewSrcList="[scope.row.src.large]"
              fit="contain"
              lazy
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
              <div slot="placeholder" class="image-slot">
                Loading
                <span class="dot">...</span>
              </div>
            </el-image>
          </template>
        </el-table-column>
      </el-table>
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
    loading(val) {
      if (val) {
        const result = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
        })

        result.close()
      }
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
