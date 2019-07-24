import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueAxios,Axios)
Vue.use(Antd)

new Vue({
    store,
    router,
  render: h => h(App),
}).$mount('#app')
