<template>
	<div id="foot">
		<button v-bind:class="{filterButtonActive:btnStatus === 'All' , filterButtonDisable : btnStatus !== 'All'}" @click="showAll">ALL</button>
		<button v-bind:class="{filterButtonActive:btnStatus === 'Complete' , filterButtonDisable : btnStatus !== 'Compelete'}" @click="showComplete">complete</button>
		<button v-bind:class="{filterButtonActive:btnStatus === 'Active' , filterButtonDisable : btnStatus !== 'Active'}" @click="showActive">Action</button>
	</div>
</template>

<script>
	export default {
	    name: 'foot',
		data(){
	        return {
                btnStatus: '',
			}
		},
		methods:{
            showAll() {
            	this.$store.commit('showAll');
            	this.btnStatus = 'All';
            },
            showComplete() {
                this.$store.commit('showComplete');
            	this.btnStatus = 'Complete';
            },
            showActive() {
                this.$store.commit('showActive');
            	this.btnStatus = 'Active';
            }
		}
	}
</script>

<style>
	@import url("../style/to-do-list.css");
</style>
