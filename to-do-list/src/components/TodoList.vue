<template>
    <div id="app">
        <tittleAndInput></tittleAndInput>
        <div>
            <ol>
                <todo-item v-for="(item,index) of list" :item="item" :index="index"></todo-item>
            </ol>
        </div>
        <filter-button></filter-button>
        <router-view/>
    </div>

</template>

<script>
    import ToDoItem from './ToDoItem.vue'
    import FilterButtons from './FilterButtons'
    import TittleAndInput from './TittleAndInput'

    export default {
        name: 'app',
        components: {
            'tittleAndInput':TittleAndInput,
            'filterButton':FilterButtons,
            'todo-item': ToDoItem
        },
        computed: {
            list(){
                return this.$store.state.list;
            }
        },
        beforeCreate() {
            this.$store.dispatch("getTodos");
        }
    }
</script>

<style scoped="scoped">
    @import url("../style/to-do-list.css");
</style>
