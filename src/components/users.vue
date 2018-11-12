<template>
	<div class="main_tam">
		{{msg}}
		<div class="" :model='test'>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'User',
		data() {
			return {
				msg: '我是users',
				value: '000',
				test:false,
			}
		},
		methods: {
			click: function() {
				console.log('pppppp')
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>