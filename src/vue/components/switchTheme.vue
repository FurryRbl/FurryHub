<template>
	<label :aria-label="theme === 'dark' ? '切换到明亮模式' : '切换到暗黑模式'" class="swap swap-rotate">
		<input type="checkbox" :checked="theme === 'dark'" @change="toggleTheme" />
		<darkModeIcon class="swap-on" />
		<lightModeIcon class="swap-off" />
	</label>
</template>

<script>
import { changeTheme } from '../../js/theme.js';
import lightModeIcon from '@material-design-icons/svg/round/brightness_7.svg';
import darkModeIcon from '@material-design-icons/svg/round/brightness_4.svg';

export default {
	name: 'SwitchTheme',
	components: {
		darkModeIcon,
		lightModeIcon,
	},
	data() {
		return {
			theme: localStorage.getItem('theme'),
		};
	},
	methods: {
		toggleTheme() {
			this.theme = this.theme === 'dark' ? 'light' : 'dark';
			changeTheme(this.theme);
		},
	},
};
</script>
