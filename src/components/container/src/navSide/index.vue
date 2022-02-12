<template>
	<el-aside style="width: auto">
		<el-menu
			:collapse="collapse"
			default-active="2"
			class="el-menu-vertical-demo"
		>
			<el-menu-item index="1">
				<el-icon><el-icon-menu /></el-icon>
				<span>首页</span>
			</el-menu-item>
			<el-menu-item index="2">
				<el-icon><el-icon-menu /></el-icon>
				<span>图标选择器</span>
			</el-menu-item>
			<el-menu-item index="3" disabled>
				<el-icon><el-icon-menu /></el-icon>
				<span>导航三</span>
			</el-menu-item>
			<el-menu-item index="4">
				<el-icon><el-icon-menu /></el-icon>
				<span>导航四</span>
			</el-menu-item>
		</el-menu>
	</el-aside>
</template>

<script setup lang="ts">
let props = defineProps<{
	collapse: Boolean;
}>();
</script>

<style lang="sass" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse)
	width: 200px
	min-height: 400px
.el-menu
	background: rgba(200,200,200, .1)
</style>
