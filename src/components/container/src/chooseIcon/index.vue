<template>
	<div>
		<el-button type="primary" @click="handleClick">
			<slot>选择图标</slot>
		</el-button>
		<el-dialog v-model="dialogVisible" :title="title" width="30%">
			<slot></slot>
		</el-dialog>
	</div>
</template>
<script setup lang="ts">
import { watch, ref } from "vue";

let props = defineProps<{
	title: string; //弹出框标题
	visible: boolean; // 控制弹出框的显示与隐藏
}>();

let emits = defineEmits(["update:visible"]);
// 拷贝一份父组件传入的visible
let dialogVisible = ref<boolean>(props.visible);

const handleClick = () => {
	emits("update:visible", true);
};

watch(
	() => props.visible,
	(val) => {
		console.log("visible", val);
		dialogVisible.value = val;
	}
);

watch(
	() => dialogVisible.value,
	(val) => {
		console.log("dialogVisible", val);
		emits("update:visible", val);
	}
);
</script>
<style lang="sass" scoped></style>
