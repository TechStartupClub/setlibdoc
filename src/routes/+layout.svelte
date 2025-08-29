<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/ui/app-sidebar/app-sidebar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Sidebar.Provider>
	<AppSidebar />
	<main class="p-4">
		{@render children?.()}
	</main>
</Sidebar.Provider>
