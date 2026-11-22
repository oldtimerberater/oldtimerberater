<svelte:head>
	<title>Imprint — Independent Advisory</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="imprint-page layout-grid">
	<h1>Imprint</h1>

	<div class="imprint-content layout-reading">
		<section aria-labelledby="provider-title">
			<h2 id="provider-title">Service Provider</h2>

			<!--
				Full legal name
				Legal form
				Business address
			-->
		</section>

		<section aria-labelledby="contact-title">
			<h2 id="contact-title">Contact</h2>

			<!--
				Email address
				Telephone number
			-->
		</section>

		<section aria-labelledby="registration-title">
			<h2 id="registration-title">Registration and Regulatory Information</h2>

			<!--
				Applicable business register and registration number
				VAT identification number or business identification number, if applicable
				Regulatory authority, if applicable
			-->
		</section>

		<section aria-labelledby="services-title">
			<h2 id="services-title">Advisory Services and Remuneration</h2>

			<!--
				Legally accurate description of the advisory's role
				Basis of remuneration
				Disclosure of third-party commissions or economic interests
			-->
		</section>
	</div>
</main>

<style>
	.imprint-page {
		padding-block: clamp(3rem, 6vw, 5rem) var(--layout-section-gap);
		row-gap: clamp(3rem, 6vw, 5rem);
	}

	.imprint-page > h1 {
		grid-column: 2 / -1;
		margin: 0;
	}

	/* Legal content */

	.imprint-content {
		grid-column: 2 / span 8;
		min-width: 0;

		display: grid;
		row-gap: clamp(2.5rem, 5vw, 4rem);
	}

	.imprint-content section > h2 {
		margin-block-start: 0;
	}

	.imprint-content section > :last-child {
		margin-block-end: 0;
	}

	/* Tablet */

	@media (max-width: 64rem) {
		.imprint-page > h1,
		.imprint-content {
			grid-column: 1 / -1;
		}
	}

	/* Mobile */

	@media (max-width: 48rem) {
		.imprint-page {
			row-gap: 2.5rem;
		}
	}
</style>
