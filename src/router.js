import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Book from './views/Book.vue'
// @ts-ignore
import Auth from './views/Auth.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'spellbooks',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "about" */ './views/Spellbooks.vue')
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/spellbook/:id',
      name: 'Book',
      component: Book
    }
  ]
})
