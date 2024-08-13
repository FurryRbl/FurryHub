<template>
	<aside class="w-1/6 border-r border-r-base-300 px-10">
		<nav>
			<ul>
				<li v-for="(item, index) in navigation" :key="index" class="rounded-xl px-4 py-2 hover:bg-base-200 hover:text-blue-300">
					<a :href="`#${item.name}`">{{ index + 1 }}. {{ item.name }}</a>
				</li>
			</ul>
		</nav>
	</aside>
</template>

<script>
import navigation from '/data/navigation.json';

export default {
	data() {
		return {
			navigation,
		};
	},
};
</script>
