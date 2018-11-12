import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Link from '@/components/Link'
import User from '@/components/users'
import Maneger from '@/components/Maneger'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path: '/Maneger',
      name: 'Maneger',
      component: Maneger
    },
    {
    	path:'/User',
    	name:'User',
    	component:User
    }
  ]
})
