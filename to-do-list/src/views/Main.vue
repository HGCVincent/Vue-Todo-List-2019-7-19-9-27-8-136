<template>
    <!--<div id="welcome">-->
        <!--<input v-model="userName"  placeholder="请输入姓名"/>-->
        <!--<button @click="toPageHome">开始使用</button>-->
    <!--</div>-->
    <div class="container">
        <div class="components-input-demo-presuffix">
            <a-input placeholder="请输入你的姓名" v-model="userName" ref="userNameInput" @keyup.enter="toPageHome">
                <a-icon slot="prefix" type="user" />
                <a-icon v-if="userName" slot="suffix" type="close-circle" @click="emitEmpty" />
            </a-input>
            <br/><br/>
            <a-button type="primary" @click="toPageHome">开始使用</a-button>
        </div>
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
                if (this.userName !== '') {
                    this.$router.push({path: `/Home/${this.userName}`});
                }
                else {
                    alert("请输入您的姓名");
                }
            },
            emitEmpty () {
                this.$refs.userNameInput.focus()
                this.userName = ''
            },
        }
    }

</script>

<style scoped>
    .components-input-demo-presuffix .anticon-close-circle {
        cursor: pointer;
        color: #ccc;
        transition: color 0.3s;
        font-size: 12px;
    }
    .components-input-demo-presuffix .anticon-close-circle:hover {
        color: #999;
    }
    .components-input-demo-presuffix .anticon-close-circle:active {
        color: #666;
    }
    .container{
        width: 30%;
        text-align: center;
        margin: auto;
        margin-top: 20%;
    }
</style>