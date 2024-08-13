<template>
	<main class="p-2">
		<ul>
			<li v-for="(item, index) in navigation" :key="index" :id="item.name">
				<h1 class="mb-2 indent-4">{{ index + 1 }}. {{ item.name }}</h1>
				<div>
					<ul class="flex flex-row flex-wrap">
						<li v-for="siteItem in item.link" class="m-2 h-24 w-64 select-none rounded-xl bg-base-200 p-4 max-sm:mx-0 max-sm:my-4 max-sm:w-full">
							<a :href="appendTrackingParams(siteItem.url)" target="_blank" class="flex h-full flex-row space-x-2">
								<img v-if="siteItem.avatar" :src="siteItem.avatar" aria-hidden="true" class="h-16 w-16" />
								<div class="flex flex-col overflow-hidden text-ellipsis">
									<h1 :title="siteItem.name" class="overflow-hidden text-ellipsis whitespace-nowrap">{{ siteItem.name }}</h1>
									<p :title="siteItem.description" class="line-clamp-2 max-h-8 text-xs">
										{{ siteItem.description }}
									</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</main>
</template>

<script>
import navigation from '/data/navigation.json';

export default {
	data() {
		return {
			navigation,
		};
	},
	methods: {
		appendTrackingParams(url) {
			const link = new URL(url);
			link.searchParams.set('ref', 'furryhub.top');
			return link.href;
		},
	},
};
</script>
