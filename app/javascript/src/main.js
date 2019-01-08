import Vue from 'vue'

import router from './router'
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
  })

  console.log(app)
})
