<script lang="ts">
	import ErrorCodeContainer from '$lib/components/ui/error-code-container/error-code-container.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
</script>

<div>
	<section id="introduction">
		<h2 class="text-2xl font-bold mb-2">API Reference</h2>
		<p class="mb-4">
			Welcome to the SetLib API reference documentation. Here you'll find detailed information about
			our API endpoints, request and response formats, authentication methods, and error codes.
			Whether you're a developer integrating with SetLib or just exploring our capabilities, this
			guide will help you navigate and utilize our API effectively.
		</p>
	</section>
	<Separator />
	<ErrorCodeContainer />
</div>
