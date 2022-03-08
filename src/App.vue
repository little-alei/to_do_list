<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-05 13:44:24
 * @LastEditTime: 2022-03-08 11:32:17
 * @Description: 总管App
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<TopHeader @addTodo="addTodo" />
				<TodoList :todo="todo" />
				<DoneItem :todo="todo" @handleSelectAll="handleSelectAll" @handleClearDone="handleClearDone" />
			</div>
			<div style="padding:10px;">
				<van-button round type="primary" size="large" @click="getData" style="height:40px;">同步服务器信息</van-button>
			</div>
		</div>
	</div>
</template>
<script>
import TopHeader from "./components/TopHeader.vue";
import TodoList from "./components/TodoList";
import DoneItem from "./components/DoneItem";
import Vue from "vue";
import { Button } from "vant";
import axios from "axios";
Vue.use(Button);
let mLocalArr = localStorage.getItem("todo");
export default {
	name: "App",
	components: {
		TopHeader,
		TodoList,
		DoneItem,
	},
	data() {
		return {
			/* todo: [
				{
					id: 1,
					title: "早上8:00起床",
					done: true,
				},
				{
					id: 2,
					title: "上午10点去买菜",
					done: false,
				},
				{
					id: 3,
					title: "学习Vue",
					done: false,
				},
				{
					id: 4,
					title: "睡觉去喝牛奶",
					done: false,
				},
			], */
			todo: mLocalArr ? JSON.parse(mLocalArr) : [],
		};
	},
	methods: {
		getData() {
			axios.get("http://localhost:8080/getTasks/students").then((res) => {
				this.todo = res.data;
				localStorage.setItem("todo", JSON.stringify(this.todo));
			});
		},
		// 接收任务
		addTodo(item) {
			this.todo.unshift(item);
		},
		checkTodo(id) {
			this.todo.forEach((item) => {
				if (item.id === id) {
					item.done = !item.done;
				}
			});
		},
		deleteTodo(id) {
			this.todo.forEach((item, index) => {
				if (item.id === id) {
					this.todo.splice(index, 1);
				}
			});
		},
		editTodo(mItem) {
			this.todo.forEach((item, index) => {
				if (item.id === mItem.id) {
					this.todo.splice(index, 1, item);
				}
			});
		},
		handleSelectAll(allDone) {
			this.todo.forEach((item) => {
				item.done = allDone;
			});
		},
		handleClearDone() {
			this.todo = this.todo.filter((item) => !item.done);
		},
	},
	watch: {
		todo: {
			// 需要深度监视
			handler(todo) {
				localStorage.setItem("todo", JSON.stringify(todo));
			},
			deep: true,
		},
	},
	mounted() {
		this.$bus.$on("checkTodo", this.checkTodo);
		this.$bus.$on("deleteTodo", this.deleteTodo);
	},
	beforeDestroy() {
		this.$bus.$off("checkTodo", this.checkTodo);
		this.$bus.$off("deleteTodo", this.deleteTodo);
	},
};
</script>

<style>
/*base*/
body {
	background: #fff;
}

.btn {
	display: inline-block;
	padding: 4px 12px;
	margin-bottom: 0;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
}

.btn-danger {
	color: #fff;
	background-color: #da4f49;
	border: 1px solid #bd362f;
}

.btn-danger:hover {
	color: #fff;
	background-color: #bd362f;
}

.btn-edit {
	margin-right: 5px;
	color: #fff;
	background-color: #138a80;
	border: 1px solid #046b49;
}

.btn-edit:hover {
	color: #fff;
	background-color: #0e756d;
}

.btn:focus {
	outline: none;
}

.todo-container {
	width: 100%;
	margin: 0 auto;
}
.todo-container .todo-wrap {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}
</style>
