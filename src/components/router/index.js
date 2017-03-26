import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import beforeEach from './beforeEach'
import afterEach from './afterEach'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  hashbang: true,
  history: true,
  saveScrollPosition: true
})

router.afterEach(afterEach)
router.beforeEach(beforeEach)

export default router
