<script lang="ts">
	import type { ApiObject } from '$lib/types/apiObject';
	import RouteCard from './route-card.svelte';

	interface Props {
		apiObject: ApiObject;
	}
	let { apiObject }: Props = $props();
</script>

<div>
	{#each apiObject.endPoints as endpoint}
		<RouteCard endPoint={endpoint} />
	{/each}
</div>
