<template>
    <div id="TittleAndInput">
        <h1>Jquery To Do List</h1>
        <h3>Simple Todo List with adding and filter by diff status</h3>
        <!--<input id="valueInput" v-model="inputValue" @keyup.enter="handleSubmit" />-->
        <!--<a-button type="primary" @click="handleSubmit">Add</a-button>-->
        <a-input-search
            v-model="inputValue"
            pressEnter="handleSubmit"
            placeholder="input todo"
            @search="handleSubmit"
            enterButton = "ADD"
        />
    </div>
</template>

<script>

    export default {
        name: "TittleAndInput",
        data() {
            return {
                inputValue: '',
            }
        },
        methods: {
            handleSubmit() {
                if (this.inputValue !== '') {
                    this.$store.dispatch("addTodo",{
                        content: this.inputValue,
                        status: true
                    });
                    this.inputValue = '';
                } else {
                    alert("不能输入空值");
                }
            },
        }
    }
</script>

<style scoped>
    @import url('../style/to-do-list.css');
</style>