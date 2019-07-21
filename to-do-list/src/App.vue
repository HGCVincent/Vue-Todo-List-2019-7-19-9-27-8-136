<template>
  <div id="app">
   <h1>Jquery To Do List</h1>
	 <h3>Simple Todo List with adding and filter by diff status</h3>
	 <input id="valueInput" v-model="inputValue"/>
	 <button id="addButton" @click="handleSubmit">Add</button>
	 <ol>
			<todo-item v-for= "(item,index) of list"
			:item = "item"
			:index = "index"
			@complete = "hadleComplete"
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
			this.list.push({content:this.inputValue , status:true}),
			this.inputValue = ''
		},
		hadleComplete (index) {
			this.$set(list[index],state,false)
		}
	}
}
</script>

<style scoped="scoped">
	@import url("style/to-do-list.css");
</style>
