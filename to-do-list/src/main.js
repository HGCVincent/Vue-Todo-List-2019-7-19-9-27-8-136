import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        list: [],
        allItemList: [],
    },
    mutations:{
        showAll(state){
            state.list = state.allItemList;
        },
        showComplete(state){
            state.list = state.allItemList.filter(item => item.status === false);
        },
        showActive(state){
            state.list = state.allItemList.filter(item => item.status === true);
        }
    }
})
new Vue({
    store,
  render: h => h(App),
}).$mount('#app')
