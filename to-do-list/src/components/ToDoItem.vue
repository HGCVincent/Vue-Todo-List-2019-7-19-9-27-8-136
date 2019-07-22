<template>
	<div v-bind:class="{evenItem:index % 2 !== 0 , oddItem:index % 2 ===0}">
		<li v-if="item.status">
			<input type="checkbox" @click="isSelect($event)" name="items" 
							v-bind:value="item.content" :checked="!item.status"/>
			{{item.content}}
		</li>
		<li v-else>
			<input type="checkbox" @click="isSelect($event)" name="items" 
							v-bind:value="item.content" :checked="!item.status"/>
			<s>{{item.content}}</s>
		</li>
	</div>
</template>

<script>
export default {
  props:['item','index'],
	methods:{
		isSelect(e){
			if(e.target.checked){
				this.item.status = false;
			}
			else{
				this.item.status = true;
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		@import url("../style/to-do-list.css");
</style>
