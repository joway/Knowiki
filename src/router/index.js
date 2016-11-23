import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import WikiIndex from '../views/WikiIndex.vue'
import SearchResult from '../views/SearchResult.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/test', component: WikiIndex },
    { path: '/search', component: SearchResult },
    { path: '/', redirect: '/test' }
  ]
})
