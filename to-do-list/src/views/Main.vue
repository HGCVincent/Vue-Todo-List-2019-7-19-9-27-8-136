<template>
    <div id="welcome">
        <input v-model="userName"  placeholder="请输入姓名"/>
        <button @click="toPageHome">开始使用</button>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data(){
            return {
                userName : '',
            }
        },
        methods:{
            toPageHome(){
                this.$router.push({path:`/Home/${this.userName}`})
            }
        }
    }

</script>

<style scoped>

</style>