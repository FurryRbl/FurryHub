import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import(/* webpackChunkName: "home" */ './vue/pages/home/index.vue'),
	},
	{
		path: '/about',
		component: () => import(/* webpackChunkName: "about" */ './vue/pages/about.vue'),
	},
	{
		path: '/404',
		name: '404',
		component: () => import(/* webpackChunkName: "404" */ './vue/pages/404.vue'),
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/404',
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
