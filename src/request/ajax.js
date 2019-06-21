import Vue from 'vue'
/**
 * 接口请求方法
 */

let baseUrl;

if (process.env.NODE_ENV === 'development') {
	console.log('开发环境');
	baseUrl = 'http://116.62.212.169:8091/senior-service/';
} else if (process.env.NODE_ENV === 'production') {
	console.log('生产环境');
	baseUrl = 'http://116.62.212.169:8091/senior-service/';
}

let apiFun = {
	getDataFromServer(apiName, data, method, successCallback, errorCallback) {
		uni.showLoading({
			title: '加载中...'
		});
		method = method || 'POST';
		uni.request({
			url: baseUrl + apiName,
			method: method,
			header: {
				'Cache-Control': 'no-cache',
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
			data: data,
			success: (res) => {
				if (res.data.errorCode == 0) {
					successCallback && successCallback(res.data);
				} else if (res.data.errorCode == -1) {
					errorCallback && errorCallback(res.data);
				}
			},
			fail: (err) => {
				// 请求接口失败
				uni.showToast({
					icon: 'none',
					title: '请求失败,请稍候再试'
				});
				errorCallback && errorCallback(err);
			},
			complete: () => {
				uni.hideLoading();
				var str = '';
				//字符串拼接
				for (var i in data) {
					str += `${i}=${data[i]}&`;
				}
				//删除最后一个$
				if (str.length > 0) {
					str = str.substr(0, str.length - 1);
				}
				const api = `${baseUrl}${apiName}?${str}`
				console.error('========request请求路径=========' + api);
			}
		})
	}
};


export default {
	baseUrl,
	apiFun
};
