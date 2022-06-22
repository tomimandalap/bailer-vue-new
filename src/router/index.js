import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index'),
    meta: { access: false },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/admin/index'),
    meta: { access: false },
  },
  {
    path: '/admin/login',
    name: 'Login',
    component: () => import('@/views/admin/login'),
    meta: { access: false },
  },
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      next('/404')
    },
  },
  {
    path: '/404',
    name: 'page404',
    component: () => import('@/views/404'),
    meta: { access: false },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
  // const access = to.meta.access
  // let token = store.getters['users/getToken'] || null

  // if (access) {
  //   if (token) next()
  //   else router.push('/login').catch(() => {})
  // } else if (!access) {
  //   if (token) router.push('/').catch(() => {})
  //   else next()
  // } else next()
})

router.afterEach((to) => {
  const DEFAULT_TITLE = process.env.VUE_APP_NAME
  Vue.nextTick(() => {
    document.title = DEFAULT_TITLE + ' | ' + to.name || DEFAULT_TITLE
  })
})

export default router
