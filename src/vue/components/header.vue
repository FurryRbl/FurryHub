<template>
	<header class="navbar space-x-2 bg-base-100">
		<div aria-hidden="true" class="flex flex-row items-center space-x-2">
			<img src="/favicon.ico" width="30" height="30" />
			<h1 class="text-lg">毛绒枢纽</h1>
		</div>
		<nav class="flex flex-1 flex-row justify-between text-lg">
			<ol class="flex flex-row space-x-2">
				<li>
					<router-link to="/" class="nav-link">
						<homeIcon />
						<span>首页</span>
					</router-link>
				</li>
				<li>
					<router-link to="/about" class="nav-link">
						<homeIcon />
						<span>关于</span>
					</router-link>
				</li>
			</ol>
			<ul class="flex flex-row items-center space-x-2">
				<li>
					<SwitchTheme />
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
.nav-link {
	@apply flex flex-row items-center space-x-1 text-sm;
}
</style>

<script>
import SwitchTheme from '../components/switchTheme.vue';
import homeIcon from '@material-design-icons/svg/round/home.svg';
import favoriteBorderIcon from '@material-design-icons/svg/round/favorite_border.svg';

export default {
	name: 'Header',
	components: {
		homeIcon,
		SwitchTheme,
		favoriteBorderIcon,
	},
};
</script>
