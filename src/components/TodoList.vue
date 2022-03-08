<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-05 14:49:40
 * @LastEditTime: 2022-03-05 21:50:57
 * @Description: 已添加未完成的列表
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<ul class="todo-main">
		<OneItem v-for="item in todo" :todoValue="item" :key="item.id" />
	</ul>
</template>

<script>
import OneItem from "./OneItem.vue";
export default {
	name: "TodoList",
	components: {
		OneItem,
	},
	props: ["todo"],
};
</script>

<style scoped>
/*main*/
.todo-main {
	margin-left: 0px;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding: 0px;
}

.todo-empty {
	height: 40px;
	line-height: 40px;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding-left: 5px;
	margin-top: 10px;
}
</style>
