<script lang="ts" module>
	const data = {
		navMain: [
			{
				title: 'Overview',
				url: '/setlibdoc',
				items: [
					{
						title: 'Introduction',
						isActive: true,
						url: '/setlibdoc#introduction'
					},
					{
						title: 'Errors',
						url: '/setlibdoc#errors'
					}
				]
			},
			{
				title: 'Auth',
				url: '/setlibdoc/auth',
				items: [
					{
						title: 'The Auth object',
						url: '/setlibdoc/auth/#object'
					},
					{
						title: 'Login',
						url: '/setlibdoc/auth/#login'
					},
					{
						title: 'Register',
						url: '/setlibdoc/auth/#register'
					},
					{
						title: 'Logout',
						url: '/setlibdoc/auth#logout'
					}
				]
			},
			{
				title: 'Users',
				url: '/setlibdoc/users',
				items: [
					{
						title: 'The User object',
						url: '/setlibdoc/users/#object'
					},
					{
						title: 'Create a user',
						url: '/setlibdoc/users/#create'
					},
					{
						title: 'Edit a user',
						url: '/setlibdoc/users/#edit'
					},
					{
						title: 'Delete a user',
						url: '/setlibdoc/users/#delete'
					}
				]
			},
			{
				title: 'Problems',
				url: '/setlibdoc/problems',
				items: [
					{
						title: 'The Problem object',
						url: '/setlibdoc/problems/#object'
					},
					{
						title: 'Create a problem',
						url: '/setlibdoc/problems/#create'
					},
					{
						title: 'Edit a problem',
						url: '/setlibdoc/problems/#edit'
					},
					{
						title: 'Delete a problem',
						url: '/setlibdoc/problems/#delete'
					}
				]
			},
			{
				title: 'Tickets',
				url: '/setlibdoc/tickets',
				items: [
					{
						title: 'The Tickets object',
						url: '/setlibdoc/tickets/#object'
					},
					{
						title: 'Create a ticket',
						url: '/setlibdoc/tickets#create'
					},
					{
						title: 'Edit a ticket',
						url: '/setlibdoc/tickets#edit'
					},
					{
						title: 'Delete a ticket',
						url: '/setlibdoc/tickets#delete'
					}
				]
			}
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
						<a href="/setlibdoc" {...props}>
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
										<Sidebar.MenuSubButton isActive={subItem.isActive}>
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
