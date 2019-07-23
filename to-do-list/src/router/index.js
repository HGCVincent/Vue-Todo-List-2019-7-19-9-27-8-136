import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import Home from '../views/Home'
import TodoList from '../views/TodoList'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:Main,
            component:Main
        },
        {
            path: '/Home/:userName',
            name: Home,
            component: Home,
        },
        {
            path: '/todoList',
            component:TodoList
        }
    ]
})
