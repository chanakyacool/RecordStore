import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Records from '@/components/artists/Records'
import Artists from '@/components/artists/Artists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/records',
      name: 'Records',
      component: Records
    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artists
    }
  ]
})
