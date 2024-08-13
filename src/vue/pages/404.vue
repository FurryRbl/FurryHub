<template>
	<main class="flex h-screen flex-col items-center justify-center space-y-4">
		<p class="text-4xl">页面不存在</p>
		<router-link to="/">
			<button class="btn btn-primary rounded-full">
				<undoIcon />
				<span>返回首页</span>
			</button>
		</router-link>
	</main>
</template>

<script>
import undoIcon from '@material-design-icons/svg/round/undo.svg';

export default {
	components: {
		undoIcon,
	},
};
</script>
