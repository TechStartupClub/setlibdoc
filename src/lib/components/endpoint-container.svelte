<script lang="ts">
	export let routeMap;
</script>

<div class="rounded-xl bg-primary text-secondary m-3 p-3">
	{#each routeMap as [method, route]}
		<div class="flex">
			<div class="bg-green-600"><p>{method}</p></div>
			<p>{route}</p>
		</div>
	{/each}
</div>
