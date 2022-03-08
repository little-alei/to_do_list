/*
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-05 13:44:24
 * @LastEditTime: 2022-03-07 14:01:12
 * @Description:
 * 灵感来之不易,积累创造奇迹
 */
import Vue from "vue";
import App from "./App.vue";
// import plugin from './plugins'
Vue.config.productionTip = false;
// Vue.use(plugin)
new Vue({
	render: (h) => h(App),
	beforeCreate() {
    //安装全局事件总线
		Vue.prototype.$bus = this;
	},
}).$mount("#app");
