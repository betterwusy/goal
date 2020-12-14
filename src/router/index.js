import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 需要底部栏的页面在根路由的children下注册
    path: '/',
    name: 'index',
    redirect: '/index',
    component: () => import('../views/public/BottomNav.vue'),
    children: [{
      path: '/index',
      name: 'index',
      component: () => import('../views/Index.vue')
    }, {
      path: '/plan',
      name: 'plan',
      component: () => import('../views/Plan.vue')
    }, {
      path: '/sports',
      name: 'sports',
      component: () => import('../views/Sports.vue')
    }, {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue')
    }, {
      path: '/user',
      name: 'user',
      component: () => import('../views/User.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
