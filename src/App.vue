<template>
  <div id="app">
    <v-offline
      @detected-condition="amIOnline"
      online-class="online"
      offline-class="offline"
    >
      <router-view v-if="online" />
      <DetectOffline v-else />
    </v-offline>
  </div>
</template>
<script>
import DetectOffline from '@/components/DetectOffline'
export default {
  components: { DetectOffline },
  data() {
    return {
      online: true,
    }
  },
  methods: {
    amIOnline(e) {
      this.online = e
    },
  },
}
</script>
