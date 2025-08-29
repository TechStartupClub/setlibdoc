<script lang="ts">
	import type { LayoutData } from './$types';
	let { data, children } = $props();
</script>

<div class="p-3 m-3">
	{@render children()}
</div>
