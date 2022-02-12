<template>
	<el-container>
		<!-- <el-header>Header</el-header> -->
		<el-container>
			<nav-side :collapse="isCollapse"></nav-side>
			<el-container>
				<el-header>
					<nav-header v-model:collapse="isCollapse"></nav-header>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import NavSide from "./navSide/index.vue";
import NavHeader from "./navHeader/index.vue";
import { ref } from "vue";
let isCollapse = ref(false);
</script>

<style lang="sass" scoped>
.el-header
	padding: 0
	background: rgba(200,200,200, .1)
	display: flex
</style>
