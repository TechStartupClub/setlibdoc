<script lang="ts">
	import { methodColors, type RouteMap } from './constants';

	let { routeMap }: { routeMap: RouteMap } = $props();
</script>

<div class="rounded-xl text-secondary m-3 p-3 bg-primary/50">
	{#each routeMap as [method, route]}
		<div class="flex gap-3">
			<div class="flex flex-col items-center">
				<p style="color: {methodColors[method]}" class="font-bold">{method}</p>
			</div>
			<p class="bg-mauve">{route}</p>
		</div>
	{/each}
</div>
