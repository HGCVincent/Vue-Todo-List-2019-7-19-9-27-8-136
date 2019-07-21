<template>
	<div v-bind:class="{evenItem:index % 2 !== 0 , oddItem:index % 2 ===0}">
		<li><input type="checkbox" name="items" v-bind:value="content"/>
			{{content}}
		</li>
	</div>
</template>

<script>
export default {
  props:['content','index']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		@import url("../style/to-do-list.css");
</style>
