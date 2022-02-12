<template>
	<div class="header" @click="toggle">
		<el-icon v-if="collapse">
			<el-icon-expand></el-icon-expand>
		</el-icon>
		<el-icon v-else>
			<el-icon-fold></el-icon-fold>
		</el-icon>
	</div>
</template>
<script setup lang="ts">
let props = defineProps<{
	collapse: Boolean;
}>();

let emits = defineEmits(["update:collapse"]);

const toggle = () => {
	console.log("click");
	emits("update:collapse", !props.collapse);
};
</script>
<style lang="sass" scoped>
.header
	display: flex
	justify-content: flex-start
	align-items: center
	padding-left: 30px
</style>
