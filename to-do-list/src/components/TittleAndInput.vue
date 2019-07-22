<template>
    <div id="TittleAndInput">
        <h1>Jquery To Do List</h1>
        <h3>Simple Todo List with adding and filter by diff status</h3>
        <input id="valueInput" v-model="inputValue" @keyup.enter="handleSubmit" />
        <button id="addButton" @click="handleSubmit">Add</button>
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
                    this.$store.state.list.push({
                        content: this.inputValue,
                        status: true
                    });
                    this.inputValue = '';
                    this.$store.state.allItemList = this.$store.state.list;
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