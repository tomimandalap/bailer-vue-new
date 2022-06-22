<template>
  <div class="LayoutDefault">
    <main class="LayoutDefault__main pa-4">
      <h1>DASBOARD</h1>
      <notifications position="top right" class="mt-5 mr-2" />
      <slot />
    </main>
  </div>
</template>
<script>
export default {
  name: 'dasboard',
}
</script>
