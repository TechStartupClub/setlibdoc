<script lang="ts">
	import type { ApiObject } from '$lib/types/apiObject';
	import ObjectContainer from '$lib/components/ui/object-container/object-container.svelte';
	import { mapApiObject } from '$lib/doc-loader/apiMapping';
	import object from '$lib/api-docs/problems.json';
	import RouteCardContainer from '$lib/components/ui/route-cards/route-card-container.svelte';

	const data: ApiObject = mapApiObject(object);
</script>

<div class="">
	<ObjectContainer apiObject={data} />
	<RouteCardContainer apiObject={data} />
</div>
