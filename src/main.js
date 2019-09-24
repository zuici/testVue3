import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './mock/mockServer'  //没有暴露，把js加载过来，类似加载CSS

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
