<script>
	import { greet } from './greet';

	let { host = 'SvelteKit 2', guest = 'Vitest' } = $props();
</script>

<h1>{greet(host)}</h1>
<p>{greet(guest)}</p>
