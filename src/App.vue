<template>
	<div>
		<router-link to="/hello">Go to Hello</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
import store from './store/store';
import Hello from './components/Hello';

export default {
	store,
	components: {
		Hello,
	},
};
</script>

<style>
html {
	height: 100%;
}

body {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

#app {
	color: #2c3e50;
	margin-top: -100px;
	max-width: 600px;
	font-family: Source Sans Pro, Helvetica, sans-serif;
	text-align: center;
}

#app a {
	color: #42b983;
	text-decoration: none;
}

.logo {
	width: 100px;
	height: 100px
}
</style>
