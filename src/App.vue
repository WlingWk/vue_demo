<template>
	<div>
		<div class="loginBar">
			<span style="display: inline-block;width: 142px;text-align: center;font-size: 20px;font-weight: 600;border-right: 1px solid #2c3e5017;background-color: lightcoral;">Wling</span>
			<a @click="showLoginModel" style="float: right;margin-right: 45px;" v-if="showLogin">登陆</a>
			<a @click="logout" style="float: right;margin-right: 45px;" v-if="!showLogin">退出</a>
		</div>
		<Menu :theme="theme1" active-name="1" style="height: 1010px;position: fixed;">
			<MenuItem name="4">
				<div @click="sendParams('./','')">
					<Icon type="ios-home" />
					<span >首页</span>
				</div>
			</MenuItem>
			<MenuItem name="1">
				<div @click="sendParams('./Maneger','Maneger')">
					<Icon type="ios-paper" />
					<span >内容管理</span>
				</div>
			<!--<router-link to='./Maneger' >内容管理</router-link>-->
			</MenuItem>
			<MenuItem name="2">
				<div @click="sendParams('./User','User')">
					<Icon type="ios-people" />
					<span >用户管理</span>
				</div>
			</MenuItem>
		</Menu>
		
		<Modal
	        v-model="loginModel"
	        title="登陆"
	        :loading="loading"
	        width='450'
	        @on-ok="setInfo">
	        <Input type="text" v-model="info.user" placeholder="username" style="margin-bottom: 20px;">
                <span type="ios-locked-outline" slot="prepend">用户名</span>
            </Input>
	        <Input type="password" v-model="info.pwd" placeholder="Password">
                <span type="ios-locked-outline" slot="prepend">密　码</span>
            </Input>

	    </Modal>
		
		<router-view></router-view>
	</div>
</template>

<script>
	import Index from './components/Index';
	export default {
		name: 'Index',
		components: {
			Index
		},
		data() {
			return {
				theme1: 'dark',
				msg:'opopop',
				loginModel:false,
				loading:false,
				showLogin:true,
				hadLogin:false,
				
				info:{
					user:'',
					pwd:'',
				}
			}
		},
		methods: {
			sendParams(path,name) {
				var el = event.target;
				if(this.hadLogin){
					$('.ivu-menu-item').removeClass('active')
					$(el).parents('.ivu-menu-item').addClass('active');
					this.$router.push({
						path: path,
						name: name,
						params: {
							name: name,
							dataObj: this.msg
						}
					})		
				}else{
	                this.error(false,'暂未登陆，不可访问其他页面');
				}
			},
			error (bool,info) {
                this.$Notice.error({
                    title: '警告！',
                    desc: bool ? '' : info
                });
           },
			showLoginModel(){
				this.loginModel = true;
			},
			setInfo(){
				if(this.info.user == 'wling' && this.info.pwd == '123456'){
					this.showLogin = false;
					this.hadLogin = true;
				}else{
					this.error(false,'账号或密码错误');
				}
			},
			logout(){
				localStorage.setItem('info','');
				this.showLogin = true;
				this.hadLogin = false;
				this.$router.push({
					path: '/',
					name: "Index",
				})
			}
		},
		mounted() {}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
	.ivu-menu {
		width: 142px !important;
		height: 100%;
	}
	.loginBar{
		height: 45px;
		line-height: 45px;
		border-bottom: 1px solid #2c3e5017;
	}
</style>