import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Board from './components/Board'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/board/:id', name: 'board', component: Board, props: true }
  ]
})
