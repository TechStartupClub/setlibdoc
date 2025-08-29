<script lang="ts" module>
	const data = {
		navMain: [
			{
				title: 'Overview',
				url: '/',
				items: [
					{
						title: 'Introduction',
						isActive: true,
						url: '#introduction'
					},
					{
						title: 'Errors',
						url: '#errors'
					}
				]
			},
			{
				title: 'Auth',
				url: '/auth',
				items: [
					{
						title: 'The Auth object',
						url: 'auth/object'
					},
					{
						title: 'Login',
						url: '#login'
					},
					{
						title: 'Register',
						url: '#register'
					},
					{
						title: 'Logout',
						url: '#logout'
					}
				]
			},
			{
				title: 'Users',
				url: 'users',
				items: [
					{
						title: 'The User object',
						url: 'users/object'
					},
					{
						title: 'Create a user',
						url: '#create'
					},
					{
						title: 'Edit a user',
						url: '#edit'
					},
					{
						title: 'Delete a user',
						url: '#delete'
					}
				]
			},
			{
				title: 'Problems',
				url: '/problems',
				items: [
					{
						title: 'The Problem object',
						url: 'problems/object'
					},
					{
						title: 'Create a problem',
						url: '#create'
					},
					{
						title: 'Edit a problem',
						url: '#edit'
					},
					{
						title: 'Delete a problem',
						url: '#delete'
					}
				]
			},
			{
				title: 'Tickets',
				url: '/tickets',
				items: [
					{
						title: 'The Tickets object',
						url: 'tickets/object'
					},
					{
						title: 'Create a ticket',
						url: '#create'
					},
					{
						title: 'Edit a ticket',
						url: '#edit'
					},
					{
						title: 'Delete a ticket',
						url: '#delete'
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

<Sidebar.Root {...restProps} bind:ref>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="sm">
					{#snippet child({ props })}
						<a href="/" {...props}>
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
