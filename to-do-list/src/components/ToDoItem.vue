<template>
	<div v-bind:class="{evenItem:index % 2 !== 0 , oddItem:index % 2 ===0}">
		<li :class="{compeleteItem : item.status === false}">
			<input type="checkbox" @click="isSelect($event)" name="items" v-bind:value="item.content" :checked="!item.status" />
			<span @dblclick="dblHandle" v-if="!item.editable">{{item.content}}</span>
			<input v-else v-model="item.content" @blur="blurHandle(item.id,item.content)"/>
			<a-button class="deleteButton" type="danger" :size="size" @click="deleteTodo(item.id)">Delete</a-button>
		</li>
	</div>
</template>

<script>
	import mutationsType from '../store/mutationType'

	export default {
		props: ['item', 'index'],
		methods: {
			isSelect(e) {
				if (e.target.checked) {
					this.item.status = false;
				} else {
					this.item.status = true;
				}
                this.$store.dispatch('updateTodo',this.item);
			},
			deleteTodo(id){
			    this.$store.dispatch('deleteTodo',id);
			},
			dblHandle(){
			    this.item.editable = true;
			},
            blurHandle(id,content){
			    this.item.editable = false;
			    this.$store.dispatch('updateTodo',this.item);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../style/to-do-list.css");
	.deleteButton{
		float: right;
		margin-top: 5px;
		margin-right: 5px;
	}
</style>
