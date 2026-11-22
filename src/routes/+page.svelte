<svelte:head>
	<title>Independent Advisory for Collectors of Historically Significant Motor Cars</title>
</svelte:head>

<main>
	<header class="cover layout-grid">
		<h1>Independent Advisory</h1>
		<p>for Collectors of Historically Significant Motor Cars</p>
	</header>

	<section id="advisory" class="editorial-section layout-grid" aria-labelledby="advisory-title">
		<h2 id="advisory-title">The Advisory</h2>

		<div class="editorial-content layout-reading">
			<p>
				The advisory exists for collectors seeking a specific historically significant motor car.
			</p>

			<p>It begins with the collector���s requirements, not with an available automobile.</p>

			<p>
				No inventory is maintained. No preselected motor car is promoted. The advisory has no
				interest in directing the collector towards an automobile merely because it is available.
			</p>
		</div>
	</section>

	<section
		id="historical-significance"
		class="editorial-section layout-grid"
		aria-labelledby="significance-title"
	>
		<h2 id="significance-title">Historical Significance</h2>

		<div class="editorial-content layout-reading">
			<p>
				A motor car’s significance can arise from its provenance, rarity, coachwork, originality,
				state of preservation, association with a person or event, or place in motoring history.
			</p>

			<p>Age alone does not establish significance.</p>

			<p>
				The advisory concerns motor cars whose historical identity and collectable importance
				justify serious research and careful judgement.
			</p>
		</div>
	</section>
</main>

<style>
	/* Cover */

	.cover {
		min-height: 100svh;
		grid-template-rows: minmax(0, 1fr) auto auto;
		padding-block: 2rem clamp(3rem, 8vh, 7rem);
	}

	.cover h1,
	.cover p {
		grid-column: 1 / span 10;
		margin: 0;
	}

	.cover h1 {
		grid-row: 2;
	}

	.cover p {
		grid-row: 3;
		max-width: 34rem;
		margin-top: 1rem;
	}

	/* Editorial sections */

	.editorial-section {
		align-items: start;
		margin-block: var(--layout-section-gap);
	}

	.editorial-section h2 {
		grid-column: 1 / span 4;
		margin: 0;
	}

	.editorial-content {
		grid-column: 5 / span 7;
	}

	.editorial-content p:first-child {
		margin-block-start: 0;
	}

	.editorial-content p:last-child {
		margin-block-end: 0;
	}

	/* Tablet */

	@media (max-width: 64rem) {
		.cover h1,
		.cover p {
			grid-column: 1 / -1;
		}

		.editorial-section h2 {
			grid-column: 1 / span 2;
		}

		.editorial-content {
			grid-column: 3 / -1;
		}
	}

	/* Mobile */

	@media (max-width: 48rem) {
		.cover {
			padding-block: 2rem 6rem;
		}

		.editorial-section {
			row-gap: 1.5rem;
		}

		.editorial-section h2,
		.editorial-content {
			grid-column: 1 / -1;
		}
	}
</style>
