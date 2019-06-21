import Ajax from './ajax.js';

const http = {
	index: {
		GET_GOODS_LIST: 'srvGoods/list' //获取每日提示信息
	},
	login: {
		LOGIN: 'account/login'
	}
}

//首页
export const Index = {
	//获取商品列表
	getGoodsList(Obj, successCallback, errorCallback) {
		let requestData = {};
		requestData = Obj;
		Ajax.apiFun.getDataFromServer(http.index.GET_GOODS_LIST, requestData, 'GET', successCallback, errorCallback);
	}
};

//登录
export const Login = {
	//用户登录
	login(Obj, successCallback, errorCallback) {
		let requestData = {};
		requestData = Obj;
		Ajax.apiFun.getDataFromServer(http.login.LOGIN, requestData, 'POST', successCallback, errorCallback);
	}
}
