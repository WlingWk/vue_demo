<template>
  <div class="main_tam" style="text-align: center;padding-top: 120px;">
   	<h1 style="text-align: center;">欢迎来到VUE demo</h1>
   	<img src="../../build/logo.png" style="margin: 0 auto;"/>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      modelTest:false,
    }
  },
  methods:{
  	showModel(){
  		console.log('ppp');
  		console.log(this.modelTest)
  		this.modelTest = true;
  	}
  }
}
</script>

<style scoped>
	.active{
		
	}
</style>
