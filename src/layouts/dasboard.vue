<template>
  <div class="LayoutDefault">
    <main class="LayoutDefault__main container mx-auto">
      <h1>DASBOARD</h1>
      <notifications position="top right" />
      <slot />
    </main>
  </div>
</template>
<script>
export default {
  name: 'dasboard',
}
</script>
