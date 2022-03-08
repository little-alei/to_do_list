<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-05 14:48:44
 * @LastEditTime: 2022-03-07 16:57:17
 * @Description: 输入框联动,添加组件
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<div class="todo-header">
		<input ref="input" type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addItem" />
	</div>
</template>

<script>
// 生成唯一id
import { nanoid } from "nanoid";
export default {
	methods: {
		addItem() {
			this.$emit("addTodo", { id: nanoid(), title: this.$refs.input.value, isEdit: false, done: false });
			this.$refs.input.value = "";
		},
	},
	name: "TopHeader",
};
</script>

<style scoped>
/*header*/
/* .todo-header {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	background-color: #f5f5f5;
	border-bottom: 1px solid #e5e5e5;
} */
.todo-header input {
	display: flex;
	width: -webkit-fill-available;
	height: 28px;
	font-size: 14px;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 4px 7px;
}

.todo-header input:focus {
	outline: none;
	border-color: rgba(82, 168, 236, 0.8);
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
