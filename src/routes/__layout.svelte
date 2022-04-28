<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const env = await fetch('/env.json');
		return {
			stuff: {
				env: await env.json()
			}
		};
	};
</script>

<slot />
