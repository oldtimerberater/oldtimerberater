<svelte:head>
	<title>The Advisor — Independent Advisory</title>
</svelte:head>

<main class="advisor-page layout-grid">
	<h1>The Advisor</h1>

	<section id="discretion" class="advisor-section" aria-labelledby="discretion-title">
		<h2 id="discretion-title">Discretion</h2>

		<div class="advisor-content layout-reading">
			<p>
				Collector identities, mandates, negotiations and completed acquisitions remain confidential.
			</p>

			<p>Information is disclosed only with the collector’s express approval.</p>

			<p>Initial enquiries are treated with the same discretion as active mandates.</p>
		</div>
	</section>

	<section id="advisor" class="advisor-section" aria-labelledby="advisor-title">
		<h2 id="advisor-title">Andrei</h2>

		<div class="advisor-content layout-reading">
			<p>Based in Berlin, Germany.</p>

			<p>Working with collectors and market participants across Europe and the United States.</p>

			<h3>Languages</h3>

			<ul>
				<li>English</li>
				<li>German</li>
				<li>Russian</li>
			</ul>

			<!--
				Add a concise, factual professional biography
				once Andrei's relevant experience has been verified.

				His surname must not appear in editorial content.
			-->
		</div>
	</section>
</main>

<style>
	.advisor-page {
		padding-block: clamp(3rem, 6vw, 5rem) var(--layout-section-gap);
		row-gap: var(--layout-section-gap);
	}

	.advisor-page > h1 {
		grid-column: 1 / -1;
		margin: 0;
	}

	/* Editorial sections */

	.advisor-section {
		grid-column: 1 / -1;
		min-width: 0;

		display: grid;
		grid-template-columns: repeat(var(--layout-columns), minmax(0, 1fr));
		column-gap: var(--layout-column-gap);
		align-items: start;
	}

	.advisor-section > h2 {
		grid-column: 1 / span 4;
		margin: 0;
	}

	.advisor-content {
		grid-column: 5 / span 7;
	}

	.advisor-content > :first-child {
		margin-block-start: 0;
	}

	.advisor-content > :last-child {
		margin-block-end: 0;
	}

	/* Tablet */

	@media (max-width: 64rem) {
		.advisor-section > h2 {
			grid-column: 1 / span 2;
		}

		.advisor-content {
			grid-column: 3 / -1;
		}
	}

	/* Mobile */

	@media (max-width: 48rem) {
		.advisor-section {
			row-gap: 1.5rem;
		}

		.advisor-section > h2,
		.advisor-content {
			grid-column: 1 / -1;
		}
	}
</style>
