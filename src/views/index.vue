<template>
  <LayoutLanding>
    <div class="demo-image__preview">
      <h1>GALERY</h1>

      <el-input v-model="search" placeholder="Seaching by name">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-table
        :data="
          datas.filter(
            (data) =>
              !search || data.alt.toLowerCase().includes(search.toLowerCase()),
          )
        "
        stripe
        height="500"
        style="width: 100%"
        lazy
      >
        <el-table-column prop="id" label="ID" width="100"></el-table-column>
        <el-table-column prop="alt" label="Name" width="300"></el-table-column>
        <el-table-column
          prop="photographer"
          label="Photographer"
          align="center"
          width="200"
        >
          <template slot-scope="scope">
            <el-tag
              type="success"
              effect="plain"
              style="text-transform: capitalize"
            >
              {{ scope.row && scope.row.photographer }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="src.small" label="Photo" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row && scope.row.src">
              <el-image
                :src="scope.row.src.small"
                :previewSrcList="[scope.row.src.large]"
                style="width: 150px; height: 150px"
                fit="contain"
                lazy
              >
                <div slot="placeholder" class="image-slot">
                  Loading
                  <span class="dot">...</span>
                </div>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
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
    return {
      search: '',
    }
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
