<script lang="ts">
	import { methodColors, methods, type RouteMap } from '$lib/components/endpointcontiner/constants';
	import EndpointContainer from '$lib/components/endpointcontiner/endpoint-container.svelte';

	let data: RouteMap = [
		[methods.GET, '/api/problems'],
		[methods.POST, '/api/problems'],
		[methods.DELETE, '/api/problems'],
	];
</script>

<div>
	<h1>Problems</h1>
	<EndpointContainer routeMap={data} />



    <div id="edit">
        <p>edit</p>
    </div>
</div>
