<template>
	<view>
		<view v-for="(item,index) in goodsList" :key='index'>{{item.name}}</view>
		<button type="primary" @click="loginHandleClick">登录</button>
		用户信息:{{getUserInfo}}
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex";
	import {
		getGoodsList
	} from '../../model/index/index.js'

	import {
		login
	} from '../../model/login/login.js'
	export default {
		data() {
			return {
				username: 'Sean',
				password: '123456'
			}

		},
		computed: {
			// ...mapState(['goodsList'])
			goodsList() {
				return this.$store.state.home.goodsList
			},
			getGoodsList() {
				return this.$store.getters.getGoodsList
			},
			//获取用户信息
			getUserInfo() {
				return this.$store.state.login.userInfo.nickname
			}
		},
		methods: {
			loginHandleClick() {
				login(this.username, this.password);
			}
		},
		onLoad() {
			getGoodsList();
			console.error('数据：' + JSON.stringify(this.goodsList));
		}
	}
</script>

<style>

</style>
