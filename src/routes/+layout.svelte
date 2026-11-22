<script>
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import { page } from '$app/state';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="site-shell">
	<header class="site-header">
		<nav class="primary-navigation layout-container" aria-label="Primary navigation">
			<a class="is-interactive" href="/" aria-current={page.route.id === '/' ? 'page' : undefined}>
				Home
			</a>
			<a
				class="is-interactive"
				href="/method"
				aria-current={page.route.id === '/method' ? 'page' : undefined}
			>
				Method
			</a>
			<a
				class="is-interactive"
				href="/advisor"
				aria-current={page.route.id === '/advisor' ? 'page' : undefined}
			>
				Advisor
			</a>
			<a
				class="is-interactive"
				href="/contact"
				aria-current={page.route.id === '/contact' ? 'page' : undefined}
			>
				Contact
			</a>
		</nav>
	</header>

	{@render children()}

	<footer class="site-footer">
		<nav class="legal-navigation layout-container" aria-label="Legal information">
			<a class="is-interactive" href="/imprint">Imprint</a>
			<a class="is-interactive" href="/privacy">Privacy Policy</a>
		</nav>
	</footer>
</div>

<style>
	.site-shell {
		--site-header-height: 4rem;

		min-height: 100svh;

		display: grid;
		grid-template-rows: auto minmax(0, 1fr) auto;
	}

	/* Desktop navigation */

	.primary-navigation {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: max-content;
		align-items: center;
		justify-content: end;

		column-gap: clamp(1.5rem, 3vw, 3rem);
		min-height: var(--site-header-height);
	}

	.primary-navigation a {
		display: grid;
		align-items: center;

		min-height: 2.75rem;

		color: inherit;
		text-decoration: none;
		white-space: nowrap;
	}

	.primary-navigation a[aria-current='page'] {
		text-decoration: underline;
		text-underline-offset: 0.35em;
	}

	.primary-navigation a:focus-visible,
	.legal-navigation a:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 4px;
	}

	/* Footer */

	.site-footer {
		padding-block: 2rem;
	}

	.legal-navigation {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: max-content;
		justify-content: start;
		align-items: center;
		gap: 1.5rem;
	}

	.legal-navigation a {
		color: var(--color-secondary);
	}

	/* Mobile navigation */

	@media (max-width: 48rem) {
		.site-shell {
			--mobile-navigation-height: 4rem;

			grid-template-rows: minmax(0, 1fr) auto;

			padding-bottom: calc(var(--mobile-navigation-height) + env(safe-area-inset-bottom) + 1rem);
		}

		.site-header {
			position: fixed;
			inset: auto 0 0;
			z-index: 100;

			background: var(--color-background);
			border-top: 1px solid var(--color-secondary);

			padding-bottom: env(safe-area-inset-bottom);
		}

		.primary-navigation {
			width: 100%;
			max-width: none;
			min-height: var(--mobile-navigation-height);
			padding-inline: 0.5rem;

			grid-auto-flow: row;
			grid-auto-columns: auto;
			grid-template-columns: repeat(4, minmax(0, 1fr));
			gap: 0;
		}

		.primary-navigation a {
			min-height: var(--mobile-navigation-height);
			padding-inline: 0.25rem;

			place-items: center;
			text-align: center;
		}
	}
</style>
