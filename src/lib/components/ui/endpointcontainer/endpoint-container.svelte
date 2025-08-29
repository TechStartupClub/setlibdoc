<script lang="ts">
	import { MethodColors, type RouteColorMap } from '$lib/types/httpMethods';

	let { routeMap }: { routeMap: RouteColorMap } = $props();
</script>

<div class="rounded-xl text-secondary m-3 p-3 bg-primary/50">
	{#each routeMap as [method, route]}
		<div class="flex gap-3">
			<div class="flex flex-col items-center">
				<p class="font-bold {MethodColors[method] || 'bg-gray-500'}">{method}</p>
			</div>
			<p class="text-cat-mantle">{route}</p>
		</div>
	{/each}
</div>
