import {
	Login
} from '../../request/api.js'

import store from '../../store/store.js'

//登录
export const login = (username, password) => {
	Login.login({
		password: password,
		username: username
	}, (res) => {
		console.log('成功返回数据：' + JSON.stringify(res));
		console.log('成功登录');
		let result = res.result;
		store.dispatch("updateUserInfoAsync", result);
	}, (err) => {
		console.log('失败返回数据:' + JSON.stringify(err));
	})
}
