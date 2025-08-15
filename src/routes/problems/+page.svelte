<script lang="ts">
	import EndpointContainer from '$lib/components/endpoint-container.svelte';
	let data = [
		['GET', '/api/problems'],
		['POST', '/api/problems']
	];
</script>

<div>
	<h1>Problems</h1>
	<EndpointContainer routeMap={data} />
</div>
