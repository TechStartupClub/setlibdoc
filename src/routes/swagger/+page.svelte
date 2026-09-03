<script lang="ts">
	import { onMount } from 'svelte';
	import { asset } from '$app/paths';

	type SwaggerWindow = typeof window & {
		SwaggerUIBundle: any;
		SwaggerUIStandalonePreset: any;
	};

	function loadScript(src: string) {
		return new Promise<void>((resolvePromise, reject) => {
			const el = document.createElement('script');
			el.src = src;
			el.onload = () => resolvePromise();
			el.onerror = () => reject(new Error(`failed to load ${src}`));
			document.body.appendChild(el);
		});
	}

	onMount(() => {
		(async () => {
			await loadScript(asset('/swagger-ui/swagger-ui-bundle.js'));
			await loadScript(asset('/swagger-ui/swagger-ui-standalone-preset.js'));

			const { SwaggerUIBundle, SwaggerUIStandalonePreset } = window as SwaggerWindow;
			const ui = SwaggerUIBundle({
				url: asset('/openapi.json'),
				dom_id: '#swagger-ui',
				presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
				plugins: [SwaggerUIBundle.plugins.DownloadUrl],
				layout: 'StandaloneLayout'
			});

			// Authorize box opens pre-filled with "Bearer " so you only paste the token.
			ui.preauthorizeApiKey('BearerAuth', 'Bearer ');
		})();
	});
</script>

<svelte:head>
	<title>Swagger UI · SETLib API</title>
	<link rel="stylesheet" href={asset('/swagger-ui/swagger-ui.css')} />
	<style>
		/* swagger-ui was built for a plain light page — give it one, independent of the
		   site's own dark theme, instead of fighting the global styles for it. */
		body:has(#swagger-page) {
			background: #fafafa;
		}
	</style>
</svelte:head>

<div id="swagger-page">
	<div id="swagger-ui"></div>
</div>
