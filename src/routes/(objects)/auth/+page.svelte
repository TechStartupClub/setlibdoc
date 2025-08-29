<script lang="ts">
	import type { ApiObject } from '$lib/types/apiObject';
	import RouteCard from '$lib/components/ui/routecards/route-card.svelte';
	import ObjectContainer from '$lib/components/ui/objectcontainer/object-container.svelte';
	import { loadApiDoc } from '$lib/docloader/docLoader';
	import { mapApiObject } from '$lib/docloader/apiMapping';
	import object from '../../../lib/apidocs/auth.json';
	import RouteCardContainer from '$lib/components/ui/routecards/route-card-container.svelte';

	const data: ApiObject = mapApiObject(object);
</script>

<div class="">
	<ObjectContainer apiObject={data} />
	<RouteCardContainer apiObject={data} />
</div>
