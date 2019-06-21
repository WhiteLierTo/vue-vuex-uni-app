import Vue from 'vue'
import App from './App'
import Ajax from './request/ajax.js'
import Api from './request/api.js'
import Util from './common/util.js'
import Store from './store/store.js'

Vue.prototype.$ajax = Ajax;
Vue.prototype.$api = Api;
Vue.prototype.$util = Util;
Vue.prototype.$store = Store;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
