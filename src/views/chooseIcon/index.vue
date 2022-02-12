<template>
	<div>
		<m-choose-icon title="选择图标" v-model:visible="visible">
		</m-choose-icon>
	</div>
</template>
<script setup lang="ts">
import mChooseIcon from "../../components/container/src/chooseIcon/index.vue";
import { ref } from "vue";

let visible = ref<boolean>(false);
</script>
<style lang="sass" scoped></style>
