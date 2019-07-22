<template>
	<div id="app">
		<tittleAndInput></tittleAndInput>
		<div>
			<ol>
				<todo-item v-for="(item,index) of list" :item="item" :index="index"></todo-item>
			</ol>
		</div>
		<filter-button></filter-button>
	</div>
</template>

<script>
	import ToDoItem from './components/ToDoItem.vue'
	import FilterButtons from './components/FilterButtons'
	import TittleAndInput from './components/TittleAndInput'

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
	}
</script>

<style scoped="scoped">
	@import url("style/to-do-list.css");
</style>
