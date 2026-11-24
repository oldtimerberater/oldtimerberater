<script>
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
	<title>Independent Historic Motor Car Acquisition Advisory</title>
	<meta
		name="description"
		content="Independent advisory for collectors of historically significant motor cars. Research, provenance evaluation and acquisition advice across Europe and the United States."
	/>
	{@html `<script type="application/ld+json">${structuredData}</script>`}
</svelte:head>

<main class="home-page layout-grid">
	<div class="home-introduction">
		<div class="home-statement">
			<h1>Independent Advisory</h1>

			<p>for Collectors of Historically Significant Motor Cars</p>
		</div>
	</div>

	<div class="home-sections">
		<section id="advisory" aria-labelledby="advisory-title">
			<h2 id="advisory-title">The Advisory</h2>

			<p>Every search begins with understanding the particular motor car you have in mind.</p>

			<p>
				I want to know what draws you to it: the model, the period, the coachwork or perhaps the
				history of an individual example. We discuss the provenance, originality, condition and
				restoration history you expect, together with how you intend to use the car.
			</p>

			<p>
				Your requirements guide my enquiries among owners, collectors and specialists across Europe
				and the United States. When a promising candidate emerges, I examine its history,
				documentation and individual characteristics to establish whether it deserves closer
				consideration.
			</p>

			<p>
				You can read more about my
				<a class="is-interactive" href="/method/">approach to research and assessment</a>.
			</p>
		</section>

		<section id="historical-significance" aria-labelledby="historical-significance-title">
			<h2 id="historical-significance-title">Historical Significance</h2>

			<p>
				The historical significance of a motor car arises from its individual history and
				characteristics.
			</p>

			<p>
				Provenance, rarity, coachwork, originality, preservation and associations with particular
				people or events may all contribute to its importance.
			</p>

			<p>
				Two examples of the same model can differ substantially in historical significance. Their
				individual histories and surviving characteristics deserve careful examination.
			</p>
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
