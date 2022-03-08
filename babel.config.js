/*
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-05 13:44:24
 * @LastEditTime: 2022-03-08 11:14:45
 * @Description: 引入插件
 * 灵感来之不易,积累创造奇迹
 */
module.exports = {
	presets: ["@vue/cli-plugin-babel/preset"],
	plugins: [
		[
			"import",
			{
				libraryName: "vant",
				libraryDirectory: "es",
				style: true,
			},
			"vant",
		],
	],
};
