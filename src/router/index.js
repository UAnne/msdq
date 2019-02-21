import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import details from '@/views/details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/details/:id/',
      name: 'details',
      component: details
    }
  ]
})
