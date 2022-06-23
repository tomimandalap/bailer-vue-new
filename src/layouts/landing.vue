<template>
  <el-container>
    <el-header
      class="flex justify-between items-center text-white bg-neutral-900"
    >
      <router-link to="/" class="text-white hover:text-[pink]">
        NAVBAR
      </router-link>
      <div class="d-flex justify-end items-center">
        <router-link to="/admin" class="text-white hover:text-[pink] mr-5">
          Admin
        </router-link>
        <router-link to="/admin/login" class="text-white hover:text-[pink]">
          Login
        </router-link>
      </div>
    </el-header>

    <el-main>
      <slot />
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'landing',
  data() {
    return {}
  },
}
</script>
