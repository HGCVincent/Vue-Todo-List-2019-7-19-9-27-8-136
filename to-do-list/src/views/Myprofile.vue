<template>
    <div>
        <p>UserName:{{userName}}</p>
        <p>Telephone:123456464798</p>
    </div>
</template>

<script>
    export default {
        name: "Myprofile",
        data(){
            return{
                userName:this.$route.params.userName,
            }
        }
    }
</script>

<style scoped>

</style>