import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ba90a654 = () => interopDefault(import('..\\pages\\articles\\_id.vue' /* webpackChunkName: "pages/articles/_id" */))
const _3e12ff97 = () => interopDefault(import('..\\pages\\categories\\_id.vue' /* webpackChunkName: "pages/categories/_id" */))
const _21343bea = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ba90a654,
    name: "articles-id"
  }, {
    path: "/categories/:id?",
    component: _3e12ff97,
    name: "categories-id"
  }, {
    path: "/",
    component: _21343bea,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
