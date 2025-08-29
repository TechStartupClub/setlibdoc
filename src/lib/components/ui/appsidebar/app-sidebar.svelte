<script lang="ts" module>
	import auth from '$lib/apidocs/auth.json';
	import problems from '$lib/apidocs/problems.json';
	import tickets from '$lib/apidocs/tickets.json';
	import users from '$lib/apidocs/users.json';

	const authObjectLinks = auth.endPoints.map((endpoint: { description: any; id: any }) => ({
		description: endpoint.description,
		url: `/setlibdoc/auth/#${endpoint.id}`
	}));
	const problemObjectLinks = problems.endPoints.map((endpoint: { description: any; id: any }) => ({
		description: endpoint.description,
		url: `/setlibdoc/problems/#${endpoint.id}`
	}));
	const ticketObjectLinks = tickets.endPoints.map((endpoint: { description: any; id: any }) => ({
		description: endpoint.description,
		url: `/setlibdoc/tickets/#${endpoint.id}`
	}));
	const userObjectLinks = users.endPoints.map((endpoint: { description: any; id: any }) => ({
		description: endpoint.description,
		url: `/setlibdoc/users/#${endpoint.id}`
	}));

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
						url: authObjectLinks[0].url
					},
					{
						title: 'Register',
						url: authObjectLinks[1].url
					},
					{
						title: 'Logout',
						url: authObjectLinks[2].url
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
						url: userObjectLinks[0].url
					},
					{
						title: 'Edit a user',
						url: userObjectLinks[1].url
					},
					{
						title: 'Delete a user',
						url: userObjectLinks[2].url
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
						url: problemObjectLinks[0].url
					},
					{
						title: 'Edit a problem',
						url: problemObjectLinks[1].url
					},
					{
						title: 'Get problem by id',
						url: problemObjectLinks[2].url
					},
					{
						title: 'Update problem by id',
						url: problemObjectLinks[2].url
					},
					{
						title: 'Delete problem by id',
						url: problemObjectLinks[2].url
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
						url: ticketObjectLinks[0].url
					},
					{
						title: 'Edit a ticket',
						url: ticketObjectLinks[1].url
					},
					{
						title: 'Delete a ticket',
						url: ticketObjectLinks[2].url
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
