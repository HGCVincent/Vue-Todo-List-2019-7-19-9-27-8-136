<template>
  <div id="app">
   <h1>Jquery To Do List</h1>
	 <h3>Simple Todo List with adding and filter by diff status</h3>
	 <input v-model="inputValue"/>
	 <button @click="handleSubmit">Add</button>
	 <ol>
			<todo-item v-for= "(item,index) of list"
			:content="item"
			></todo-item>
	 </ol>
	</div>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue'

export default {
  name: 'app',
  components: {
    'todo-item':ToDoItem
  },
	data (){
		return{
			inputValue : '',
			list:[]
		}
	},
	methods:{
		handleSubmit() {
			this.list.push(this.inputValue),
			this.inputValue = ''
		}
	}
}
</script>

<style>

</style>
