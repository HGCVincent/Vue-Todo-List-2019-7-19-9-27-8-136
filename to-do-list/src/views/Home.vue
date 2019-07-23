<template>
    <div>
        <button @click="back">返回</button>
        <p>{{ userName }}</p>
        <ul>
            <li><a href="javaScript:void" @click="enterTodoList">TodoList</a></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
          return {
              userName : '',
          }
        },
        methods:{
            back(){
                this.$router.push('/')
            },
            enterTodoList(){
                this.$router.push('/todoList')
            }
        },
        beforeMount () {
            this.userName = this.$route.params.userName;
        },
    }
</script>

<style scoped>

</style>