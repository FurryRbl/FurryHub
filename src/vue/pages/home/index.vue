<template>
	<div class="flex h-full flex-row">
		<Navigation class="max-md:hidden" />
		<Main class="flex-1" />
	</div>
</template>

<script>
import Main from './main.vue';
import Navigation from './navigation.vue';

export default {
	components: {
		Navigation,
		Main,
	},
};
</script>
