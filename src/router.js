import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import PageNotFound from '@/views/PageNotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '*',
      component: PageNotFound,
    },
    {
      path: '/todo',
      component: () => import('./views/Todo.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuth = localStorage.getItem('todo-user');
    if (isAuth) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})

export default router

