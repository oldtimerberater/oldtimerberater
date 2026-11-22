<svelte:head>
	<title>Selected Mandates — Independent Advisory</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="mandates-page layout-grid">
	<h1>Selected Mandates</h1>

	<div class="mandates-list">
		<!--
			Only real, anonymised mandates will appear here.

			Each mandate will be presented as an article containing:

			1. Object sought
			2. Collector's criteria
			3. Research
			4. Findings
			5. Judgement
			6. Outcome

			No identifying information or photographs without
			express permission.
		-->
	</div>
</main>

<style>
	.mandates-page {
		padding-block: clamp(3rem, 6vw, 5rem) var(--layout-section-gap);
		row-gap: var(--layout-section-gap);
	}

	.mandates-page > h1 {
		grid-column: 1 / -1;
		margin: 0;
	}

	.mandates-list {
		grid-column: 1 / -1;
		min-width: 0;

		display: grid;
		grid-template-columns: minmax(0, 1fr);
		row-gap: var(--layout-section-gap);
	}
</style>
