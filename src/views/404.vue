<template>
  <LayoutDefault>
    <div class="h-screen flex flex-col justify-center items-center">
      <h2 class="">404 | Not Found</h2>
      <router-link to="/">HOME</router-link>
    </div>
  </LayoutDefault>
</template>
<script>
import LayoutDefault from '@/layouts/default'
export default {
  name: 'page404',
  components: { LayoutDefault },
}
</script>
