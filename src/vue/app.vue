<template>
	<Header />
	<div class="flex-1">
		<router-view></router-view>
	</div>
	<Footer />
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';

export default {
	components: {
		Header,
		Footer,
	},
};
</script>
