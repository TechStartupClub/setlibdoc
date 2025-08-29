<script lang="ts" module>
	import { resolve } from '$app/paths';
	import auth from '$lib/api-docs/auth.json';
	import problems from '$lib/api-docs/problems.json';
	import tickets from '$lib/api-docs/tickets.json';
	import users from '$lib/api-docs/users.json';

	/**
	 * Helper to create a navigation section for the sidebar
	 */
	function makeNavSection(title: string, basePath: any, object: { endPoints: any[] }) {
		return {
			title,
			url: resolve(basePath),
			items: [
				{
					title: `The ${title} object`,
					url: `${resolve(basePath)}/#object`
				},
				...object.endPoints.map((endpoint: { description: any; id: any }) => ({
					title: endpoint.id.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()),
					url: `${resolve(basePath)}/#${endpoint.id}`
				}))
			]
		};
	}

	/**
	 * Navigation data for the sidebar
	 */
	const data = {
		navMain: [
			{
				title: 'Overview',
				url: resolve('/'),
				items: [
					{
						title: 'Introduction',
						isActive: true,
						url: `${resolve('/')}#introduction`
					},
					{
						title: 'Errors',
						url: `${resolve('/')}#errors`
					}
				]
			},
			makeNavSection('Auth', '/auth', auth),
			makeNavSection('Users', '/users', users),
			makeNavSection('Problems', '/problems', problems),
			makeNavSection('Tickets', '/tickets', tickets)
		]
	};
</script>

<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import GalleryVerticalEndIcon from '@lucide/svelte/icons/notebook';
	import type { ComponentProps } from 'svelte';
	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {...restProps} bind:ref class="mt-2 mr-2">
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="sm">
					{#snippet child({ props })}
						<a href={resolve('/')} {...props}>
							<div
								class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
							>
								<GalleryVerticalEndIcon class="size-4" />
							</div>
							<div class="flex flex-col gap-0.5 leading-none">
								<span class="font-medium">SETLib</span>
								<span class="">v1.0.0</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.Menu>
				{#each data.navMain as item (item.title)}
					<Sidebar.MenuItem>
						<Sidebar.MenuButton class="font-medium">
							{#snippet child({ props })}
								<a href={item.url} {...props}>
									{item.title}
								</a>
							{/snippet}
						</Sidebar.MenuButton>
						{#if item.items?.length}
							<Sidebar.MenuSub>
								{#each item.items as subItem (subItem.title)}
									<Sidebar.MenuSubItem>
										<Sidebar.MenuSubButton>
											{#snippet child({ props })}
												<a href={subItem.url} {...props}>{subItem.title}</a>
											{/snippet}
										</Sidebar.MenuSubButton>
									</Sidebar.MenuSubItem>
								{/each}
							</Sidebar.MenuSub>
						{/if}
					</Sidebar.MenuItem>
				{/each}
			</Sidebar.Menu>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
