<script lang="ts">
	import ErrorCodeContainer from '$lib/components/ui/error-code-container/error-code-container.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
</script>

<div>
	<section id="introduction">
		<h2 class="text-2xl font-bold mb-2">API Reference</h2>
		<p class="mb-4">
			The SetLib API is organized around REST. Our API has predictable resource-oriented URLs,
			accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP
			response codes, authentication, and verbs.
		</p>
	</section>
	<Separator />
	<ErrorCodeContainer />
</div>
