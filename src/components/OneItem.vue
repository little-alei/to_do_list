<!--
 * @Author: 抠脚本人
 * @QQ: 742374184
 * @Date: 2022-03-05 14:49:40
 * @LastEditTime: 2022-03-08 10:10:05
 * @Description: 已添加未完成的列表
 * 灵感来之不易,积累创造奇迹
-->
<template>
	<li>
		<label>
			<!-- 违反了props参数只读的原则,十分不推荐 -->
			<input type="checkbox" :checked="isDone" @click="handleCheck(todoValue.id)" />
			<span v-show="!todoValue.isEdit" :class="doneTask" :value="todoValue.title">{{ todoValue.title }}</span>
			<input ref="mEdit" v-show="todoValue.isEdit" type="text" :value="todoValue.title" @blur="clearFocus(todoValue)" @keyup.enter="editDone(todoValue)" />
		</label>
		<div>
			<button @click="handleEdit(todoValue)" v-show="!todoValue.isEdit" class="btn btn-edit">编辑</button>
			<button @click="handleDelete(todoValue.id)" class="btn btn-danger">删除</button>
		</div>
	</li>
</template>

<script>
export default {
	name: "OneItem",
	props: ["todoValue"],
	methods: {
		handleCheck(id) {
			this.$bus.$emit("checkTodo", id);
		},
		handleDelete(id) {
			this.$bus.$emit("deleteTodo", id);
		},
		handleEdit(mItem) {
			// this.$set(mItem, "isEdit", true);
			mItem.isEdit = true;
			this.$nextTick(() => {
				//在下一次渲染后执行
				this.$refs.mEdit.focus();
			});
		},
		clearFocus(mItem) {
			mItem.isEdit = false;
		},
		editDone(mItem) {
			let doneText = this.$refs.mEdit.value;
			if (doneText != "") mItem.title = doneText;
			mItem.isEdit = false;
		},
	},
	computed: {
		doneTask() {
			return this.isDone ? "doneTodo" : "todo";
		},
		isDone() {
			return this.todoValue.done;
		},
	},
};
</script>

<style scoped>
/*item*/
.doneTodo {
	text-decoration: line-through;
	color: rgb(129, 128, 128);
}

.todo {
	text-decoration: none;
	color: black;
}

li {
	list-style: none;
	height: 36px;
	border-bottom: 1px solid #ddd;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

li label {
	float: left;
	cursor: pointer;
}

li div {
	display: none;
	padding-right: 2px;
}

li:hover div {
	display: block;
	padding-right: 2px;
}

li label li input {
	vertical-align: middle;
	margin-right: 6px;
	position: relative;
	top: -1px;
}

li:before {
	content: initial;
}

li:last-child {
	border-bottom: none;
}

li:hover {
	background-color: #a8f0d8;
}
</style>
