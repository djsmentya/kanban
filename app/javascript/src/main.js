import Vue from 'vue'

import router from './router'
import store from './store'
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
  })

  console.log(app)
})
