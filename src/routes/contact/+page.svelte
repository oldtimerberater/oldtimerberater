<script>
	import contact from '#lib/config/contact.json';
	import { entities, jsonLd } from '#lib/seo/structured-data.js';

	const structuredData = jsonLd([entities.business, entities.contact]);
</script>

<svelte:head>
	<title>Private Enquiries</title>
	<meta
		name="description"
		content="Private enquiries concerning historically significant motor cars, including research, assessment and acquisition advice. Contact by email or telephone."
	/>
	{@html `<script type="application/ld+json">${structuredData}</script>`}
</svelte:head>

<main class="contact-page layout-grid">
	<h1>Private Enquiries</h1>

	<div class="contact-content layout-reading">
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

		<p>I will treat your enquiry and any information you share with me in confidence.</p>
	</div>
</main>

<style>
	.contact-page {
		padding-block: clamp(3rem, 6vw, 5rem) var(--layout-section-gap);
		align-items: start;
		row-gap: clamp(3rem, 6vw, 5rem);
	}

	.contact-page > h1 {
		grid-column: 1 / span 4;
		margin: 0;
	}

	.contact-content {
		grid-column: 5 / span 7;
		min-width: 0;
	}

	.contact-content address {
		font-style: normal;
	}

	.contact-content address p:first-child {
		margin-block-start: 0;
	}

	.contact-content > p {
		margin-block-start: clamp(3rem, 6vw, 5rem);
		margin-block-end: 0;
	}

	@media (max-width: 64rem) {
		.contact-page > h1 {
			grid-column: 1 / span 2;
		}

		.contact-content {
			grid-column: 3 / -1;
		}
	}

	@media (max-width: 48rem) {
		.contact-page > h1,
		.contact-content {
			grid-column: 1 / -1;
		}
	}
</style>
