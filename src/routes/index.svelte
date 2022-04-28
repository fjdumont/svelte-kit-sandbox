<script lang="ts" context="module">
	export const load: Load = async ({ fetch }) => {
		const data = await fetch('/data.json');
		return {
			props: {
				data: await data.json()
			}
		};
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import type { Load } from '@sveltejs/kit';

	export let data: unknown;
</script>

<section>
	<h1>Client variables</h1>
	<p>
		These are passed from the load function from <code>__layout.svelte</code> down through
		<code>$page.stuff.env</code>
	</p>

	<pre><code>{JSON.stringify($page.stuff.env, null, 2)}</code></pre>
</section>

<section>
	<h1>Data</h1>

	<p>This is data loaded from an endpoint that uses a private variable.</p>
	<p>
		The variable (<code>VITE_SECRET</code>, or <code>variables.secret</code>) should not be visible
		in the client bundles.
	</p>
	<pre><code>{JSON.stringify(data, null, 2)}</code></pre>
</section>
