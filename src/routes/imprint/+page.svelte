<script>
	import legal from '#lib/config/legal.json';
	import contact from '#lib/config/contact.json';
	import { entities, jsonLd } from '#lib/seo/structured-data.js';

	const structuredData = jsonLd([entities.business, entities.advisor, entities.contact]);
</script>

<svelte:head>
	<title>Imprint</title>
	<meta
		name="description"
		content="Legal information and contact details for Andrey Paymushin, providing research, assessment and acquisition advisory services for historically significant motor cars."
	/>
	{@html `<script type="application/ld+json">${structuredData}</script>`}
</svelte:head>

<main class="imprint-page layout-grid">
	<h1>Imprint</h1>

	<div class="imprint-content layout-reading">
		<section aria-labelledby="provider-title">
			<h2 id="provider-title">Service Provider</h2>

			<p>{legal.legalName}</p>
			<p>Legal form: {legal.legalForm}</p>
			<p>Berlin, Germany</p>
		</section>

		<section aria-labelledby="contact-title">
			<h2 id="contact-title">Contact</h2>

			<address>
				<p>
					<a class="is-interactive" href={`mailto:${contact.email}`}>
						{contact.email}
					</a>
				</p>

				<p>
					<a class="is-interactive" href={`tel:${contact.phone.replaceAll(' ', '')}`}>
						{contact.phone}
					</a>
				</p>
			</address>
		</section>

		<section aria-labelledby="registration-title">
			<h2 id="registration-title">Business Identification</h2>

			<p>Tax identification: {legal.taxIdentificationNumber}</p>
		</section>

		<section aria-labelledby="services-title">
			<h2 id="services-title">Advisory Services</h2>

			<p>
				I provide research, assessment and acquisition advisory services concerning historically
				significant motor cars.
			</p>

			<p>
				My remuneration may consist of fees paid by the collector, commissions paid by the seller,
				or both. Any seller commission or other economic interest connected with an acquisition will
				be disclosed to the collector.
			</p>
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

	.imprint-content address {
		font-style: normal;
	}

	@media (max-width: 64rem) {
		.imprint-page > h1,
		.imprint-content {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 48rem) {
		.imprint-page {
			row-gap: 2.5rem;
		}
	}
</style>
