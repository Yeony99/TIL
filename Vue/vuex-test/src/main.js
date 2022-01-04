import Vue from 'vue'
import App from './App'

// 2. store.js 등록
import {store} from './store'

new Vue({
  el: '#app',
  components: { App },
  store: store, // 3. 사용 등록
  template: '<App/>'
})
