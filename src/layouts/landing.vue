<template>
  <div class="LayoutDefault">
    <main class="LayoutDefault__main" style="padding: 24px 80px">
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
