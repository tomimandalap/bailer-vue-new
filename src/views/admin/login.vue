<template>
  <LayoutDefault
    class="bg-[url('https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2200&q=80')] bg-bottom"
  >
    <div class="h-screen flex flex-col justify-center items-center">
      <Form typeForm />
    </div>
  </LayoutDefault>
</template>
<script>
import LayoutDefault from '@/layouts/default'
import Form from '@/components/Form'
export default {
  name: 'Home',
  components: { LayoutDefault, Form },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
