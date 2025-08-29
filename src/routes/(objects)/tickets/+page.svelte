<script lang="ts">
	import type { ApiObject } from '$lib/types/apiObject';
	import ObjectContainer from '$lib/components/ui/objectcontainer/object-container.svelte';
	import { mapApiObject } from '$lib/docloader/apiMapping';
	import object from '../../../lib/apidocs/tickets.json';
	import RouteCardContainer from '$lib/components/ui/routecards/route-card-container.svelte';

	const data: ApiObject = mapApiObject(object);
</script>

<div class="">
	<ObjectContainer apiObject={data} />
	<RouteCardContainer apiObject={data} />
</div>
