<script lang="ts">
	import { variables } from '$lib/variables';
</script>

<p>This page uses the dangerous <code>variables</code> object that contains sensitive secrets.</p>
<pre><code>{JSON.stringify(variables, null, 2)}</code></pre>
