<template>
  <LayoutDefault
    class="bg-[url('https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2200&q=80')] bg-bottom"
  >
    <div class="h-screen flex flex-col justify-center items-center">
      <el-card class="w-4/12 min-h-min">
        <h1 class="font-bold text-[32px] mb-5">LOGIN</h1>

        <span class="text-[12px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
          porro!
        </span>

        <el-form ref="form" :model="form" :rules="rules" status-icon>
          <el-form-item label="Email" prop="email">
            <el-input
              v-model="form.email"
              prefix-icon="el-icon-message"
            ></el-input>
          </el-form-item>

          <el-form-item label="Password" prop="password">
            <el-input
              v-model="form.password"
              prefix-icon="el-icon-user-solid"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item class="flex justify-end items-center">
            <el-button size="large" type="info" @click="$router.push('/')">
              Back
            </el-button>
            <el-button
              size="large"
              type="primary"
              @click="$refs['form'].resetFields()"
            >
              Reset
            </el-button>
            <el-button
              size="large"
              type="success"
              :loading="loading"
              @click="submit"
            >
              Submit
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </LayoutDefault>
</template>
<script>
import LayoutDefault from '@/layouts/default'
export default {
  name: 'Home',
  components: { LayoutDefault },
  data() {
    return {
      loading: false,
      form: {
        email: '',
        password: '',
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'emaple@twincode.com',
            trigger: ['blur', 'change'],
          },
        ],
        password: [
          {
            required: true,
            message: 'Please input password',
            trigger: ['blur', 'change'],
          },
        ],
      },
    }
  },
  computed: {},
  mounted() {},
  methods: {
    submit() {
      this.$refs['form'].validate((valid) => {
        if (!valid) return false

        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.$refs['form'].resetFields()
          console.log('JOS', this.form)
          this.$router.push('/admin')
        }, 1000)
      })
    },
  },
}
</script>
