<template>
  <LayoutDefault>
    <div class="page-404">
      <h2 class="page-404-title mb-3 text-dark">404 | Not Found</h2>
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
