<template>
  <el-container class="z-10">
    <div class="text-black bg-slate-300 h-8 w-full">
      <el-container class="container mx-auto">
        <div class="flex justify-center items-center w-full mt-1">
          <i class="el-icon-loading"></i>
          <span class="ml-5">No Internet</span>
        </div>
      </el-container>
    </div>
  </el-container>
</template>
<script>
export default {
  name: 'detectOffline',
}
</script>
