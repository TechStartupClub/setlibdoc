<script lang="ts">
	import { MethodColors } from '$lib/types/httpMethods';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	const errorCodes: string[][] = [
		['200', 'OK', MethodColors.GET, 'Everything worked as expected.'],
		[
			'201',
			'Created',
			MethodColors.POST,
			'The request has been fulfilled and resulted in a new resource being created.'
		],
		[
			'202',
			'Accepted',
			MethodColors.PUT,
			'The request has been accepted for processing, but the processing has not been completed.'
		],
		[
			'204',
			'No Content',
			MethodColors.DELETE,
			'The server successfully processed the request and is not returning any content.'
		],
		[
			'400',
			'Bad Request',
			MethodColors.POST,
			'The server could not understand the request due to invalid syntax.'
		],
		[
			'401',
			'Unauthorized',
			MethodColors.GET,
			'The client must authenticate itself to get the requested response.'
		],
		[
			'403',
			'Forbidden',
			MethodColors.DELETE,
			'The client does not have access rights to the content.'
		],
		['404', 'Not Found', MethodColors.GET, 'The server can not find the requested resource.'],
		[
			'409',
			'Conflict',
			MethodColors.PUT,
			'This response is sent when a request conflicts with the current state of the server.'
		],
		[
			'500',
			'Internal Server Error',
			MethodColors.GET,
			"The server has encountered a situation it doesn't know how to handle."
		],
		[
			'502',
			'Bad Gateway',
			MethodColors.GET,
			'The server was acting as a gateway or proxy and received an invalid response from the upstream server.'
		],
		[
			'503',
			'Service Unavailable',
			MethodColors.GET,
			'The server is not ready to handle the request.'
		]
	];
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
		{#each errorCodes as [code, title, color, description]}
			<div class="mb-2">
				<div class="flex items-center gap-2">
					<span class="font-bold {color}">{code}</span>
					<span>{title}</span>
				</div>
				<span>{description}</span>
			</div>
		{/each}
	</div>
</div>
