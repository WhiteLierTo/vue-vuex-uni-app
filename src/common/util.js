/* *
 * 通用公共js库，通用函数
 */

//校验方法
let verificationFnc = {
	regEx: {
		Strs: /^[\u0391-\uFFE5\w]+$/, //中文字、英文字母、数字和下划线
		NumEn: /^[_a-z0-9]+$/, //检查数字英文
		Int6: /^\d{6}$/, //检查6位数字
		QQ: /^[1-9]\d{4,10}$/, //检查QQ
		Tel: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/, //更新最新手机验证
		Mobile: /^((\(\d{3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}$/, //检查固定电话 //0471-1234567
		PostCode: /^[1-9]\d{5}(?!\d)$/, //检查中国邮政编码
		Email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/, //检查电子邮件
		CardId: /^(\d{6})(18|19|20)?(\d{2})([01]\d)([0123]\d)(\d{3})(\d|X|x)?$/, //简单检查身份证方法
		CardNum: /^[1-9]\d{14,18}$/, //检查一般卡号 15位-19位
		Time: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/ //检查时间格式YYYY-MM-DD
	}
};
//通用方法
let commonFnc = {
	//时间戳转换YYYY-MM-DD HH:MM:SS格式
	getStampTurnTime(timeStamp) {
		if (timeStamp > 0) {
			var date = new Date();
			date.setTime(timeStamp * 1000);
			var y = date.getFullYear();
			var m = date.getMonth() + 1;
			m = m < 10 ? ('0' + m) : m;
			var d = date.getDate();
			d = d < 10 ? ('0' + d) : d;
			var h = date.getHours();
			h = h < 10 ? ('0' + h) : h;
			var minute = date.getMinutes();
			var second = date.getSeconds();
			minute = minute < 10 ? ('0' + minute) : minute;
			second = second < 10 ? ('0' + second) : second;
			return `${y}-${m}-${d} ${h}:${minute}:${second}`;
		} else {
			return "";
		}
	},
	//获取当前日期 YYYY-MM-DD格式
	getNowFormatDate() {
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var strDate = date.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		return `${year}-${month}-${strDate}`;
	},
	//获取当前日期 YYYY-MM-DD HH:MM:SS格式
	getNowFormatTime() {
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var strDate = date.getDate();
		var strHour = date.getHours();
		var strMinute = date.getMinutes();
		var strSecond = date.getSeconds();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		if (strHour >= 0 && strHour <= 9) {
			strHour = "0" + strHour;
		}
		if (strMinute >= 0 && strMinute <= 9) {
			strMinute = "0" + strMinute;
		}
		if (strSecond >= 0 && strSecond <= 9) {
			strSecond = "0" + strSecond;
		}
		return `${year}-${month}-${strDate} ${strHour}:${strMinute}:${strSecond}`;
	},
	/**
	 * 毫秒转换友好的显示格式
	 * 输出格式：21小时前
	 * @param  {[type]} time [description]
	 * @return {[type]}      [description]
	 */
	getDateStr(date) {
		//获取js 时间戳
		var time = new Date().getTime();
		//去掉 js 时间戳后三位，与php 时间戳保持一致
		time = parseInt((time - date * 1000) / 1000);

		//存储转换值 
		var s;
		if (time < 60 * 10) { //十分钟内
			return '刚刚';
		} else if ((time < 60 * 60) && (time >= 60 * 10)) {
			//超过十分钟少于1小时
			s = Math.floor(time / 60);
			return s + "分钟前";
		} else if ((time < 60 * 60 * 24) && (time >= 60 * 60)) {
			//超过1小时少于24小时
			s = Math.floor(time / 60 / 60);
			return s + "小时前";
		} else if ((time < 60 * 60 * 24 * 3) && (time >= 60 * 60 * 24)) {
			//超过1天少于3天内
			s = Math.floor(time / 60 / 60 / 24);
			return s + "天前";
		} else {
			//超过3天
			var date = new Date(parseInt(date) * 1000);
			return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
		}
	},
	//深拷贝
	deepCopy(obj) {
		var result = Array.isArray(obj) ? [] : {};
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (typeof obj[key] === 'object') {
					result[key] = this.deepCopy(obj[key]); //递归复制
				} else {
					result[key] = obj[key];
				}
			}
		}
		return result;
	},
	//返回用于从一个对象解析出字符串
	getStringify(data) {
		return JSON.stringify(data);
	},
	//返回个字符串解析出json 对象
	getParse(data) {
		return JSON.parse(data);
	},
	//数组去重
	unique(arr) {
		var hash = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr.indexOf(arr[i]) == i) {
				hash.push(arr[i]);
			}
		}
		return hash;
	}
};

//通用登录方法
let login = {
	//登录提示框
	loginPrompt() {
		uni.showModal({
			title: '请登录',
			content: '请登录后继续操作',
			confirmText: '去登录',
			success: function(res) {
				if (res.confirm) {
					uni.navigateTo({
						url: '../login/login'
					});
					return false;
				}
			}
		});
	},
	//检查是否登录
	checklogin() {
		// 用户信息
		var userinfo = uni.getStorageSync('userinfo');
		// 登录后的token值，在请求api时传入
		var token = uni.getStorageSync('token');
		return {
			userinfo,
			token
		}
	}
}

export default {
	verificationFnc,
	commonFnc,
	login
}
