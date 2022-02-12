<template>
	<div>
		<el-button type="primary" @click="handleClick">
			<slot>选择图标</slot>
		</el-button>
		<el-dialog v-model="dialogVisible" :title="title" width="50%">
			<el-scrollbar height="500px">
				<div class="container">
					<div
						v-for="(item, index) in Object.keys(ElIcons)"
						:key="index"
						@click="clickItem(item)"
					>
						<div>
							<!-- 动态组件 -->
							<component
								:is="`el-icon-${toLine(item)}`"
							></component>
						</div>
						<div>
							{{ item }}
						</div>
					</div>
				</div>
			</el-scrollbar>
		</el-dialog>
	</div>
</template>
<script setup lang="ts">
import * as ElIcons from "@element-plus/icons-vue";
import { toLine } from "./../../../../utils/index";
import { useCopy } from "../../../../hooks/useCopy/index";
import { watch, ref } from "vue";

let props = defineProps<{
	title: string; //弹出框标题
	visible: boolean; // 控制弹出框的显示与隐藏
}>();

let emits = defineEmits(["update:visible"]);
// 拷贝一份父组件传入的visible
let dialogVisible = ref<boolean>(props.visible);

// 点击弹出弹框
const handleClick = () => {
	emits("update:visible", true);
};

// 点击icon复制
const clickItem = (item: string) => {
	let text = `<el-icon-${toLine(item)}/>`;
	useCopy(text); // 复制文本
	dialogVisible.value = false
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
<style lang="sass" scoped>

.container
	display: flex

	align-items: center
	justify-content: flex-start
	flex-wrap: wrap
	&>div
		flex: 1 1 20%
		text-align: center
		margin-bottom: 1.5em
		cursor: pointer
		svg
			width: 1.5em
			height: 1.5em
</style>
