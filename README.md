# old-man-mall

# 前端开发规范

>1、命名规范（命名要见名知意）
```
	组件命名：英文单词 - 英文单词  示例：sign-in.vue
	方法命名：驼峰命名法+Fnc	示例：orderListFnc
	点击事件命名：驼峰命令法+HandleClick	示例：orderHandleClick
	data定义全局变量：驼峰命名法	示例：tableData
	跳转事件命名：turnTo+跳转页名	示例：turnToLogin
	class样式命名：英文单词或简写即可	示例：box
```

>2、组件方法声明顺序
``` 
	- components   
    - props    
    - data     
    - created
    - mounted
    - activited	
    - update
    - beforeRouteUpdate
    - metods   
    - filter
    - computed
    - watch

```

>3、注释规范
```
	1.公共组件使用说明
	2.各组件中重要函数或者类说明
	3.复杂的业务逻辑处理说明
	4.特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的hack、使用了某种算法或思路等需要进行注释描述
	5.注释块必须以/**（至少两个星号）开头**/；
	6.单行注释使用//；
```

>4、编码规范
```
	1.使用ES6风格编码源码
		定义变量使用let ,定义常量使用const
		使用export ，import 模块化
	2.组件 props 原子化
		提供默认值
		使用 type 属性校验类型
		使用 props 之前先检查该 prop 是否存在
	3.避免 this.$parent
	4.谨慎使用 this.$refs
	5.无需将 this 赋值给 component 变量
	6.调试信息console.log() debugger 使用完及时删除
```

>5、uni-request封装使用
```
	示例：
	 
	this.$api.Index.getDailyTips({
		传参
	},(res)=>{
		执行成功后逻辑
	},(err)=>{
		执行失败后逻辑
	})
	
	说明：能够使用this.$api，是因为在入口文件中定义了全局Vue.$api = Vue.prototype.$api = Api;

```

>6、公共方法封装使用
```
	1、规则校验(通常规则校验写在计算属性里面进行管理)
	if (this.$util.verificationFnc.regEx.CardNum.test('1')) {
		console.log('满足规则');
	} else {
		console.log('不满足规则');
	}
	
	2、通用方法
	this.$util.commonFnc.getStampTurnTime(1560222228)//时间戳转换YYYY-MM-DD HH:MM:SS格式
	this.$util.commonFnc.deepCopy(userinfo)//深拷贝
	等以此类推
	
	3、通用登录方法
	this.$util.login.loginPrompt();//登录提示框
	this.$util.login.checklogin();//判断是否登录
```

>7、项目结构介绍
```
	1、项目分为业务层（model）与视图层(view)
	2、数据管理存放在商店（store）
	3、如何使用封装?（以index为例）
		3.1、视图层（view）获取请求需要调用业务层（model）
		import {getGoodsList} from '../../model/index/index.js'
		说明：getGoodsList即是请求方法，直接使用即可。页面初始化：getGoodsList();
		
		3.2、业务层（model）
		import {Index} from '../../request/api.js'	
		import store from '../../store/store.js'
		说明：1.调用封装在api文件中的请求，请求成功后，将数据交给store去管理，最后将整个方法导出，便于其他文件去使用。
			  2.为什么导入store，是因为该文件不支持this.$store,this指向当前挂载app
			  
		3.3、数据层（store）
		import home from './modules/home.js'
		export default new Vuex.Store({
			modules: {
				home
			}
		})
		说明：每个功能定为一个模块，分别：state、getters、mutations、actions然后导出使用。然后再store主文件引用各个模块，最后导出。
```










## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
