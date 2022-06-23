<template>
  <div class="LayoutDefault">
    <main class="LayoutDefault__main container mx-auto">
      <notifications position="top right" />
      <slot />
    </main>
  </div>
</template>
<script>
export default {
  name: 'landing',
}
</script>
