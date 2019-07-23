import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueAxios,Axios)

new Vue({
    store,
  render: h => h(App),
}).$mount('#app')
