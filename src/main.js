import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as joint from 'jointjs'
Vue.prototype.$joint = joint

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
