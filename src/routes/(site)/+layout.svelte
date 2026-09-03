<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/ui/app-sidebar/app-sidebar.svelte';
	import SidebarTrigger from '$lib/components/ui/sidebar/sidebar-trigger.svelte';

	let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<main class="p-4">
		<SidebarTrigger />
		{@render children?.()}
	</main>
</Sidebar.Provider>
