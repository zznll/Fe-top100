import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

import Search from './components/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
