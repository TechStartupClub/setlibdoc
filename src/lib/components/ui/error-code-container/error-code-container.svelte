<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { ErrorCodes, ErrorColors } from '$lib/types/httpErrors';
</script>

<div id="errors" class="">
	<section>
		<h2 class="text-2xl font-bold mb-2">Error Codes</h2>
		<p class="mb-4">
			SetLib uses conventional HTTP response codes to indicate the success or failure of an API
			request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate
			an error that failed given the information provided (e.g., a required parameter was omitted).
			Codes in the 5xx range indicate an error with SetLib servers. Some 4xx errors that could be
			handled programmatically include an error code that briefly explains the error reported.
		</p>
	</section>

	<div class="rounded-xl text-secondary m-3 p-3 bg-primary/50">
		<h3>Error Codes</h3>
		<Separator />
		{#each ErrorCodes as errCode}
			<div class="mb-2" id={errCode.code as unknown as string}>
				<div class="flex items-center gap-2">
					<span class={`font-mono font-bold mr-4 ${errCode.code ? ErrorColors[errCode.code] : 'text-gray-500'}`} >{errCode.code}</span>
					<span>{errCode.name}</span>
				</div>
				<span>{errCode.description}</span>
			</div>
		{/each}
	</div>
</div>
