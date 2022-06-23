<template>
  <el-container>
    <el-aside width="250px" class="md:block hidden">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo h-screen"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header
        class="flex justify-end items-center text-white bg-neutral-900"
      >
        <span class="mr-5">Tom</span>
        <el-button
          icon="el-icon-setting"
          size="small"
          circle
          @click="$router.push('/')"
        ></el-button>
      </el-header>

      <notifications position="top right" />
      <el-main class="container mx-auto">
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'dasboard',
}
</script>
