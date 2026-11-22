<script>
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav aria-label="Primary navigation">
		<a href="/">Home</a>
		<a href="/method/">Method</a>
		<a href="/advisor/">The Advisor</a>
		<a href="/contact/">Contact</a>
	</nav>
</header>

{@render children()}

<footer>
	<nav aria-label="Legal information">
		<a href="/imprint/">Imprint</a>
		<a href="/privacy/">Privacy Policy</a>
	</nav>
</footer>
