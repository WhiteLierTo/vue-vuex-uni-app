import {
	Index
} from '../../request/api.js'

import store from '../../store/store.js'

//获取商场列表
export const getGoodsList = () => {	
	Index.getGoodsList({}, (res) => {
		console.log('成功返回数据：' + JSON.stringify(res));
		let result = res.result.list;
		store.dispatch("updateGoodsListAsync", result);
	}, (err) => {
		console.log('失败返回数据:' + JSON.stringify(err));
	})
}
