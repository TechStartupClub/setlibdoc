<script lang="ts">
	import type { Endpoint } from '$lib/types/apiObject';
	import { resolve } from '$app/paths';
	import { ErrorColors } from '$lib/types/httpErrors';

	let { endPoint }: { endPoint: Endpoint } = $props();
</script>

<div class="border border-border rounded-md p-4 mb-4" id={endPoint.id}>
	<div class="flex items-center mb-2">
		<span class={`font-mono font-bold mr-4 ${endPoint.method ? endPoint.method : 'text-gray-500'}`}
			>{endPoint.method ?? 'UNKNOWN'}</span
		>
		<span class="font-mono text-lg">{endPoint.route}</span>
	</div>
	{#if endPoint.description}
		<p class="mb-2 text-sm text-gray-600">{endPoint.description}</p>
	{/if}
	{#if endPoint.response}
		<div class="mt-2">
			<span class="font-semibold">Response Type:</span>
			<span class="font-mono">{endPoint.response.type}</span>
			{#if endPoint.response.description}
				<p class="text-sm text-gray-600">{endPoint.response.description}</p>
			{/if}
			<!-- Move this into Endpoint container -->
			{#if endPoint.response.example}
				<p class="mt-1 text-sm">
					<span class="font-semibold">Example:</span>
				</p>
				<pre class="p-1 rounded overflow-x-auto">
					<code>
						{JSON.stringify(endPoint.response.example, null, 2)}
					</code>
				</pre>
			{/if}
		</div>
	{/if}
	{#if endPoint.statusCodes && endPoint.statusCodes.length > 0}
		<div class="mt-2">
			<span class="font-semibold">Status Codes:</span>
			<ul class="list-disc list-inside">
				{#each endPoint.statusCodes as code}
					<li>
						<a href="{resolve('/')}#{code.code}" class={ErrorColors[code.code]}>{code.code}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
