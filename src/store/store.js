import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import login from './modules/login.js'
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home,
		login
	}
})
