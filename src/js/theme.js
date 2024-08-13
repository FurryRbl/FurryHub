import { OverlayScrollbars } from 'overlayscrollbars';

let osInstance;

export const changeTheme = theme => {
	// 保存主题
	localStorage.setItem('theme', theme);

	// 设置主题
	document.documentElement.setAttribute('data-theme', theme);

	osInstance.options({
		scrollbars: {
			theme: theme === 'dark' ? 'os-theme-light' : 'os-theme-dark',
		},
	});
};

export const setTheme = () => {
	// 获取主题
	let theme = localStorage.getItem('theme');
	if (!theme) {
		// 获取系统主题
		theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		localStorage.setItem('theme', theme);
	}

	// 初始化滚动条
	osInstance = OverlayScrollbars(document.body, {
		scrollbars: {
			theme: theme === 'dark' ? 'os-theme-light' : 'os-theme-dark',
			autoHide: 'scroll',
			autoHideDelay: 250,
		},
	});

	// 设置主题
	changeTheme(theme);
};
