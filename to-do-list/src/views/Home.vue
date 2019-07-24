<template>
    <div>
        <button @click="back">返回</button>
        <p>{{ userName }}</p>
        <ul>
            <li>
                <a href="javaScript:void(0)" @click="enterTodoList">TodoList</a>
            </li>
            <li>
                <a href="javaScript:void(0)" @click="enterMyprofile">Myprofile</a>
            </li>
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
                let se = confirm("你确定返回欢迎界面吗？");
                if (se) {
                    this.$router.push('/');
                }
            },
            enterTodoList(){
                this.$router.push(`/Home/${this.userName}`);
            },
            enterMyprofile(){
                this.$router.push(`/Home/${this.userName}/myprofile`);
                console.log(this);
            }
        },
        beforeMount () {
            this.userName = this.$route.params.userName;
        },
    }
</script>

<style scoped>

</style>