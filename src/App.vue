<template>
  <div id="app">
    <v-offline
      @detected-condition="amIOnline"
      online-class="online"
      offline-class="offline"
    >
      <DetectOffline v-if="!online" />
      <router-view />
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
