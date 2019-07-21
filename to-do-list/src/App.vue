<template>
  <div id="app">
		<div>
			<h1>Jquery To Do List</h1>
			<h3>Simple Todo List with adding and filter by diff status</h3>
			<input id="valueInput" v-model="inputValue"/>
			<button id="addButton" @click="handleSubmit">Add</button>
		</div>
		<div>
			<ol>
				<todo-item v-for= "(item,index) of list"
				:item = "item"
				:index = "index"
				></todo-item>
			</ol>
		</div>
		<div id="foot">
			<button v-bind:class="{filterButtonActive:btnStatus === 1 , filterButtonDisable : btnStatus !== 1}" @click="showAll">ALL</button>
			<button v-bind:class="{filterButtonActive:btnStatus === 2 , filterButtonDisable : btnStatus !== 2}" @click="showComplete">complete</button>
			<button v-bind:class="{filterButtonActive:btnStatus === 3 , filterButtonDisable : btnStatus !== 3}" @click="showActive">Action</button>
		</div>
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
			list:[],
			allItemList:[],
			btnStatus:1,
		}
	},
	methods:{
		handleSubmit() {
			this.list.push({content:this.inputValue , status:true});
			this.inputValue = '';
			this.allItemList = this.list;
		},
		showAll() {
			this.list = this.allItemList;
			this.btnStatus = 1;
		},
		showComplete(){
			this.list = this.allItemList.filter(item => item.status === false);
			this.btnStatus = 2;
		},
		showActive(){
			this.list = this.allItemList.filter(item => item.status === true);
			this.btnStatus = 3;
		}
	}
}
</script>

<style scoped="scoped">
	@import url("style/to-do-list.css");
</style>
