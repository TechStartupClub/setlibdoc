<script lang="ts">
	import { methodColors, type RouteMap } from './constants';

	let { routeMap }: { routeMap: RouteMap } = $props();
</script>

<div class="rounded-xl bg-primary text-secondary m-3 p-3">
	{#each routeMap as [method, route]}
		<div class="flex gap-3">
			<div class="theme">
				<p style="color: {methodColors[method]}" class="font-bold">{method}</p>
			</div>
			<p>{route}</p>
		</div>
	{/each}
</div>
