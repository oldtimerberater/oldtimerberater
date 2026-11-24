<script>
	import '../app.css';
	import robotoFlexUrl from '@fontsource-variable/roboto-flex/files/roboto-flex-latin-full-normal.woff2?url';
	import { page } from '$app/state';
	import { m } from '../paraglide/messages.js';
	import { siteLocale, siteUrl, siteUrls } from '#lib/config/site.js';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preload" href={robotoFlexUrl} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="canonical" href={new URL(page.url.pathname, siteUrl).href} />

	{#each Object.entries(siteUrls) as [locale, url]}
		<link rel="alternate" hreflang={locale} href={new URL(page.url.pathname, url).href} />
	{/each}

	<link rel="alternate" hreflang="x-default" href={new URL(page.url.pathname, siteUrls.en).href} />
</svelte:head>

{#snippet languageSelector()}
	<nav class="language-navigation" aria-label={m.navigation_language_label()}>
		<a
			class="is-interactive"
			href={new URL(page.url.pathname, siteUrls.en).href}
			hreflang="en"
			aria-label={m.language_en()}
			aria-current={siteLocale === 'en' ? 'page' : undefined}>EN</a
		>

		<a
			class="is-interactive"
			href={new URL(page.url.pathname, siteUrls.de).href}
			hreflang="de"
			aria-label={m.language_de()}
			aria-current={siteLocale === 'de' ? 'page' : undefined}>DE</a
		>
	</nav>
{/snippet}

<div class="site-shell">
	<header class="site-header">
		<div class="header-navigation layout-container">
			<nav class="primary-navigation" aria-label={m.navigation_primary_label()}>
				<a
					class="is-interactive"
					href="/"
					aria-current={page.route.id === '/' ? 'page' : undefined}
				>
					{m.navigation_home()}
				</a>

				<a
					class="is-interactive"
					href="/method/"
					aria-current={page.route.id === '/method' ? 'page' : undefined}
				>
					{m.common_method()}
				</a>

				<a
					class="is-interactive"
					href="/advisor/"
					aria-current={page.route.id === '/advisor' ? 'page' : undefined}
				>
					{m.navigation_advisor()}
				</a>

				<a
					class="is-interactive"
					href="/contact/"
					aria-current={page.route.id === '/contact' ? 'page' : undefined}
				>
					{m.common_contact()}
				</a>
			</nav>
			<div class="desktop-language-selector">
				{@render languageSelector()}
			</div>
		</div>
	</header>

	{@render children()}

	<footer class="site-footer">
		<nav class="legal-navigation layout-container" aria-label={m.navigation_legal_label()}>
			<a class="is-interactive" href="/imprint/">{m.common_imprint()}</a>
			<a class="is-interactive" href="/privacy/">{m.common_privacy()}</a>
		</nav>
		<div class="mobile-language-selector layout-container">
			{@render languageSelector()}
		</div>
	</footer>
</div>

<style>
	.site-shell {
		--site-header-height: 4rem;

		min-height: 100svh;

		display: grid;
		grid-template-rows: auto minmax(0, 1fr) auto;
	}

	/* Language navigation */

	.header-navigation {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: clamp(1.5rem, 3vw, 3rem);
	}

	.language-navigation {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.language-navigation a {
		display: grid;
		place-items: center;
		min-height: 2.75rem;

		color: var(--color-secondary);
		text-decoration: none;
	}

	.language-navigation a[aria-current='page'] {
		color: var(--color-text);
		text-decoration: underline;
		text-underline-offset: 0.35em;
	}

	.language-navigation a:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 4px;
	}

	.mobile-language-selector {
		display: none;
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
		.header-navigation {
			width: 100%;
			max-width: none;
		}

		.desktop-language-selector {
			display: none;
		}

		.mobile-language-selector {
			display: block;
			margin-block-start: 1rem;
		}

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
