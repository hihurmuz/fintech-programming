import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _66b28c60 = () => interopDefault(import('..\\pages\\articles\\_id.vue' /* webpackChunkName: "pages/articles/_id" */))
const _064a582f = () => interopDefault(import('..\\pages\\category\\_id.vue' /* webpackChunkName: "pages/category/_id" */))
const _7587eaf2 = () => interopDefault(import('..\\pages\\footer\\_id.vue' /* webpackChunkName: "pages/footer/_id" */))
const _09111616 = () => interopDefault(import('..\\pages\\maincategory\\_id.vue' /* webpackChunkName: "pages/maincategory/_id" */))
const _0e8ce26e = () => interopDefault(import('..\\pages\\menu\\_id.vue' /* webpackChunkName: "pages/menu/_id" */))
const _0e868905 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles/:id?",
    component: _66b28c60,
    name: "articles-id"
  }, {
    path: "/category/:id?",
    component: _064a582f,
    name: "category-id"
  }, {
    path: "/footer/:id?",
    component: _7587eaf2,
    name: "footer-id"
  }, {
    path: "/maincategory/:id?",
    component: _09111616,
    name: "maincategory-id"
  }, {
    path: "/menu/:id?",
    component: _0e8ce26e,
    name: "menu-id"
  }, {
    path: "/",
    component: _0e868905,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
