<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-05 14:49:40
 * @LastEditTime: 2022-03-07 13:06:29
 * @Description: 已添加未完成的列表
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<div class="todo-footer" v-show="todo.length">
		<label>
			<input type="checkbox" @click="selectAll" :checked="allDone" />
		</label>
		<span>
			<span>已完成{{ doneCount }}</span> / 全部{{ todo.length }} {{great}}
		</span>
		<button @click="cleanDone" class="btn btn-danger">清除已完成任务</button>
	</div>
</template>

<script>
export default {
	name: "DoneItem",
	props: ["todo"],
	data() {
		return {};
	},
	methods: {
		cleanDone() {
			if (confirm("确定清除已完成任务吗?")) {
				this.$emit("handleClearDone");
			}
		},
		selectAll(event) {
			this.$emit("handleSelectAll", event.target.checked);
		},
	},
	computed: {
		allDone() {
			return this.todo.length === this.doneCount && this.doneCount > 0;
		},
		doneCount() {
			// return this.todo.filter(item => item.done).length;
			return this.todo.reduce((count, item) => (item.done ? count + 1 : count), 0);
		},
		great() {
			return this.allDone ? "✨" : "";
		},
	},
};
</script>

<style scoped>
/*footer*/
.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
}

.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
}

.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
}

.todo-footer button {
	float: right;
	margin-top: 5px;
}
</style>
