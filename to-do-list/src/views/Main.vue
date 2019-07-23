<template>
    <div id="welcome">
        <input  placeholder="请输入姓名"/>
        <button @click="toPageHome">开始使用</button>
    </div>
</template>

<script>
    export default {
        name: "Main",
        methods:{
            toPageHome(){
                this.$router.push({path:'/Home'})
            }
        }
    }

</script>

<style scoped>

</style>