<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-heard class = ant-layout-header>
            <a-button type="primary" @click="back">
                <a-icon type="left" />Go back
            </a-button>
            <label class="userName">{{userName}}</label>
        </a-layout-heard>
        <a-layout>
            <a-layout-sider
                    :trigger="null"
                    collapsible
                    v-model="collapsed"
            >
                <div class="logo" />
                <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
                    <a-menu-item key="1" @click="enterTodoList">
                        <a-icon type="user" />
                        <span>TodoList</span>
                    </a-menu-item>
                    <a-menu-item key="2" @click="enterMyprofile">
                        <a-icon type="video-camera" />
                        <span>Myprofile</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                    <router-view/>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
    <!--<div>-->
        <!--<button @click="back">返回</button>-->
        <!--<p>{{ userName }}</p>-->
        <!--<ul>-->
            <!--<li>-->
                <!--<a href="javaScript:void(0)" @click="enterTodoList">TodoList</a>-->
            <!--</li>-->
            <!--<li>-->
                <!--<a href="javaScript:void(0)" @click="enterMyprofile">Myprofile</a>-->
            <!--</li>-->
        <!--</ul>-->
        <!--<router-view></router-view>-->
    <!--</div>-->
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
            },
        },
        beforeMount () {
            this.userName = this.$route.params.userName;
        },
    }
</script>

<style scoped>
    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255,255,255,.2);
        margin: 16px;
    }
    .ant-layout-header{
        color: #fff;
    }
    .userName{
        float:right;
    }
</style>