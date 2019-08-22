import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import store from './store'

Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}