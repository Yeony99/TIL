import Vue from 'vue'
import App from './App'
import Normal from './Normal'
import VuexTest from './VuexTest'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// store.js 등록
import {store} from './store'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Normal,
    },
    {
      path: '/vuex',
      component: VuexTest,
      name: 'VuexTest'
    }
  ]
})

new Vue({
  render: h => h(App),
  router,
  store: store // store.js 등록
}).$mount('#app');
