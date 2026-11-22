<svelte:head>
	<title>Privacy Policy — Independent Advisory</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="privacy-page layout-grid">
	<h1>Privacy Policy</h1>

	<div class="privacy-content layout-reading">
		<section aria-labelledby="controller-title">
			<h2 id="controller-title">Data Controller</h2>

			<!--
				Full legal name
				Business address
				Contact information
				Data protection officer, if applicable
			-->
		</section>

		<section aria-labelledby="access-title">
			<h2 id="access-title">Website Access and Server Logs</h2>

			<!--
				Personal data collected during website access
				Purposes and legal bases of processing
				Server logging configuration
				Log retention periods
			-->
		</section>

		<section aria-labelledby="communication-title">
			<h2 id="communication-title">Email and Telephone Communication</h2>

			<!--
				Processing of enquiries
				Purposes and legal bases
				Retention periods
			-->
		</section>

		<section aria-labelledby="services-title">
			<h2 id="services-title">Service Providers and Data Recipients</h2>

			<!--
				Recipients and processors, where applicable
				International transfers, where applicable
			-->
		</section>

		<section aria-labelledby="technologies-title">
			<h2 id="technologies-title">Cookies and Third-Party Technologies</h2>

			<!--
				Document technologies actually used by the website.
			-->
		</section>

		<section aria-labelledby="retention-title">
			<h2 id="retention-title">Data Retention</h2>

			<!--
				Retention periods or criteria for determining them.
			-->
		</section>

		<section aria-labelledby="rights-title">
			<h2 id="rights-title">Your Data Protection Rights</h2>

			<!--
				Applicable rights under the GDPR.
				How to exercise those rights.
			-->
		</section>

		<section aria-labelledby="complaints-title">
			<h2 id="complaints-title">Supervisory Authority</h2>

			<!--
				Right to lodge a complaint.
				Relevant supervisory authority.
			-->
		</section>
	</div>
</main>

<style>
	.privacy-page {
		padding-block: clamp(3rem, 6vw, 5rem) var(--layout-section-gap);
		row-gap: clamp(3rem, 6vw, 5rem);
	}

	.privacy-page > h1 {
		grid-column: 2 / -1;
		margin: 0;
	}

	/* Legal content */

	.privacy-content {
		grid-column: 2 / span 8;
		min-width: 0;

		display: grid;
		row-gap: clamp(2.5rem, 5vw, 4rem);
	}

	.privacy-content section > h2 {
		margin-block-start: 0;
	}

	.privacy-content section > :last-child {
		margin-block-end: 0;
	}

	/* Tablet */

	@media (max-width: 64rem) {
		.privacy-page > h1,
		.privacy-content {
			grid-column: 1 / -1;
		}
	}

	/* Mobile */

	@media (max-width: 48rem) {
		.privacy-page {
			row-gap: 2.5rem;
		}
	}
</style>
