import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'events',
      component: () =>
        import('./views/Events.vue')
    },
    {
      path: '/buy',
      name: 'buy',
      component: () =>
        import('./views/Buy.vue')
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: () =>
        import('./views/Tickets.vue')
    },
    {
      path: '/verify',
      name: 'verify',
      component: () =>
        import('./views/Verify.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () =>
        import('./views/Admin.vue')
    }
  ]
})
