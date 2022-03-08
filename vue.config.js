/*
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-05 13:44:24
 * @LastEditTime: 2022-03-08 11:04:18
 * @Description: 全局配置文件
 * 灵感来之不易,积累创造奇迹
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	//开启代理服务器
	//方式一,不灵活
	/* devServer: {
		proxy: "http://localhost:5000",
	}, */
	//方式二
	devServer: {
		proxy: {
			"/getTasks": {
				target: "http://localhost:5000",
				pathRewrite: {
					"^/getTasks": "",
				},
				ws: true, //用于支持websocket
				changeOrigin: true, //用于请求头中的host值
			},
			"/getStudents": {
				target: "http://localhost:5001",
				pathRewrite: {
					"^/getStudents": "",
				},
			},
		},
	}, 
});
