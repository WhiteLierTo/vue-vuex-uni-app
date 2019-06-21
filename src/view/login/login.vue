<template>
	<view>
		登录
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo: '',
				token: ''
			}
		},
		methods: {
			checkstat() {
				var logininfo = this.$util.login.checklogin();
				this.userinfo = logininfo.userinfo;
				this.token = logininfo.token;
			}
		},
		onLoad() {
			this.checkstat();
		}
	}
</script>

<style>
</style>
