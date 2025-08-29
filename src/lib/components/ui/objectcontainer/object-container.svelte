<script lang="ts">
	import EndpointContainer from '$lib/components/ui/endpointcontainer/endpoint-container.svelte';
	import type { ApiObject, Endpoint } from '$lib/types/apiObject';
	import type { RouteColorMap } from '$lib/types/httpMethods';
	import { TypeColors } from '$lib/types/typeNames';

	interface Props {
		apiObject: ApiObject;
	}
	let { apiObject }: Props = $props();

	const endpoints: Endpoint[] = apiObject.endPoints;
	let routes: RouteColorMap = endpoints.map((endpoint) => [
		endpoint.method,
		endpoint.route
	]) as RouteColorMap;
</script>

<div class="p-4 flex">
	<div>
		<h3>Attributes</h3>
		<br />
		{#each apiObject.attributes as attr: String[]}
			<div>
				<div class="flex items-center gap-2">
					<span>{attr.name}</span>
					<span class={TypeColors[attr.type]}>{attr.type ?? 'UNKNOWN'}</span>
				</div>
				<span>{attr.description}</span>
			</div>
			<br />
		{/each}
	</div>

	<EndpointContainer routeMap={routes} />
</div>
