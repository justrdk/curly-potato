<template>
	<div class="hello">
		<h1>{{ vuexMessage }}</h1>
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
		  msg: 'Hello Vue!',
		};
	},
	computed: {
		...mapGetters([
			'vuexMessage',
		]),
	},
};
</script>

<style scoped>
h1 {
	color: #42b983;
}
</style>
