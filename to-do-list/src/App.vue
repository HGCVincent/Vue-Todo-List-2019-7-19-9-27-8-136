<template>
	<div>
		<router-view/>
	</div>

</template>

<script>
    import TodoList from './views/TodoList'

	export default {
		name: 'welcome',
		components: {
			'todoList':TodoList
		},
	}
</script>

<style scoped="scoped">
	@import url("style/to-do-list.css");
</style>
