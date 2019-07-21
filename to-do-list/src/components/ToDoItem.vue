<template>
	<div v-bind:class="{evenItem:index % 2 !== 0 , oddItem:index % 2 ===0}">
		<li v-if="item.status"><input type="checkbox" @click="isSelect($event)" name="items" v-bind:value="content"/>
			{{item.content}}{{item.status}}
		</li>
		<li v-else><input type="checkbox" @click="isSelect($event)" name="items" v-bind:value="content"/>
			<s>{{item.content}}{{item.status}}</s>
		</li>
	</div>
</template>

<script>
export default {
  props:['item','index'],
	methods:{
		isSelect(e){
			if(e.target.checked){
				this.item.status = false
			}
			else{
				this.item.status = true
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		@import url("../style/to-do-list.css");
</style>
