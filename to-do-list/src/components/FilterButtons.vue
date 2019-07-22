<template>
	<div id="foot">
		<button v-bind:class="{filterButtonActive:btnStatus === 1 , filterButtonDisable : btnStatus !== 1}" @click="showAll">ALL</button>
		<button v-bind:class="{filterButtonActive:btnStatus === 2 , filterButtonDisable : btnStatus !== 2}" @click="showComplete">complete</button>
		<button v-bind:class="{filterButtonActive:btnStatus === 3 , filterButtonDisable : btnStatus !== 3}" @click="showActive">Action</button>
	</div>
</template>

<script>
	export default {
	    name: 'foot',
		data(){
	        return {
                btnStatus: 1,
			}
		},
		methods:{
            showAll() {
            	this.$store.commit('showAll');
            	this.btnStatus = 1;
            },
            showComplete() {
                this.$store.commit('showComplete');
            	this.btnStatus = 2;
            },
            showActive() {
                this.$store.commit('showActive');
            	this.btnStatus = 3;
            }
		}
	}
</script>

<style>
	@import url("../style/to-do-list.css");
</style>
