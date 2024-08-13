declare module '*.svg' {
	import { DefineComponent } from 'vue';
	const component: DefineComponent;
	export default component;
}

declare module '*/navigation.json' {
	interface Link {
		name: string;
		description: string;
		avatar: string;
		url: string;
	}

	interface Site {
		name: string;
		link: Link[];
	}

	const siteData: Site[];

	export default siteData;
}
