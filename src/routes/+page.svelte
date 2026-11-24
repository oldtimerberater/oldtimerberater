<script>
	import { m } from '../paraglide/messages.js';
	import { ParaglideMessage } from '@inlang/paraglide-js-svelte';
	import { entities, jsonLd } from '#lib/seo/structured-data.js';

	const structuredData = jsonLd([
		entities.business,
		entities.advisor,
		entities.contact,
		entities.service,
		entities.offer,
		entities.catalog
	]);
</script>

<svelte:head>
	<title>{m.home_meta_title()}</title>

	<meta name="description" content={m.home_meta_description()} />

	{@html `<script type="application/ld+json">${structuredData}</script>`}
</svelte:head>

<main class="home-page layout-grid">
	<div class="home-introduction">
		<div class="home-statement">
			<h1>{m.home_title()}</h1>

			<p>{m.home_subtitle()}</p>
		</div>
	</div>

	<div class="home-sections">
		<section id="advisory" aria-labelledby="advisory-title">
			<h2 id="advisory-title">{m.home_advisory_title()}</h2>

			<p>{m.home_advisory_p1()}</p>

			<p>{m.home_advisory_p2()}</p>

			<p>{m.home_advisory_p3()}</p>

			<p>
				<ParaglideMessage message={m.home_advisory_p4} inputs={{}}>
					{#snippet link({ children })}
						<a class="is-interactive" href="/method/">
							{@render children?.()}
						</a>
					{/snippet}
				</ParaglideMessage>
			</p>
		</section>

		<section id="historical-significance" aria-labelledby="historical-significance-title">
			<h2 id="historical-significance-title">
				{m.home_historical_significance_title()}
			</h2>

			<p>{m.home_historical_significance_p1()}</p>

			<p>{m.home_historical_significance_p2()}</p>

			<p>{m.home_historical_significance_p3()}</p>
		</section>
	</div>
</main>

<style>
	.home-page {
		min-height: calc(100svh - 10rem);
		align-items: stretch;
		padding-block: 0 clamp(2.5rem, 5vh, 4rem);
		row-gap: var(--layout-section-gap);
	}

	/* Left column */

	.home-introduction {
		grid-column: 1 / span 6;
		min-width: 0;

		container-type: inline-size;

		display: grid;
		grid-template-rows: minmax(0, 1fr) auto;
	}

	.home-statement {
		grid-row: 2;
		padding-bottom: clamp(0rem, 2vh, 1rem);
	}

	.home-statement h1 {
		margin: 0;
		white-space: nowrap;

		font-size: clamp(1.5rem, 8.5cqi, var(--font-size-cover));
		font-weight: var(--font-weight-cover);
		line-height: var(--line-height-cover);

		font-variation-settings:
			'wdth' var(--font-width-cover),
			'GRAD' var(--font-grade-cover);
	}

	.home-statement p {
		margin: 1.5rem 0 0;
		max-width: 30ch;
		font-size: var(--font-size-cover-description);
	}

	/* Right column */

	.home-sections {
		grid-column: 8 / -1;
		min-width: 0;
		align-self: center;
	}

	.home-sections h2 {
		margin: 0 0 1.5rem;
	}

	.home-sections > section + section {
		margin-block-start: var(--layout-section-gap);
	}

	.home-sections p {
		margin: 0 0 1rem;
	}

	.home-sections p:last-child {
		margin-bottom: 0;
	}

	/* Tablet */

	@media (max-width: 64rem) {
		.home-introduction {
			grid-column: 1 / span 3;
		}

		.home-sections {
			grid-column: 4 / -1;
		}
	}

	/* Mobile */

	@media (max-width: 48rem) {
		.home-page {
			min-height: 0;
			padding-block: 0 var(--layout-section-gap);
		}

		.home-introduction {
			grid-column: 1 / -1;

			min-height: calc(
				100svh - var(--mobile-navigation-height, 4rem) - env(safe-area-inset-bottom)
			);

			padding-block: 1.5rem 4rem;
		}

		.home-sections {
			grid-column: 1 / -1;
		}
	}
</style>
