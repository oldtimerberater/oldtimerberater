<script>
	import contact from '#lib/config/contact.json';
	import { entities, jsonLd } from '#lib/seo/structured-data.js';

	const structuredData = jsonLd([entities.business, entities.contact]);
</script>

<svelte:head>
	<title>Private Enquiries — Historic Motor Car Advisory</title>
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

		align-content: center;
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

	/* Contact details */

	.contact-content address {
		display: grid;
		gap: 0.75rem;

		font-style: normal;
		font-size: clamp(1.125rem, calc(1rem + 0.35vw), 1.375rem);
	}

	.contact-content address p {
		margin: 0;
	}

	.contact-content address a {
		color: var(--color-text);

		text-decoration-color: var(--color-secondary);
		text-decoration-thickness: 1px;
		text-underline-offset: 0.25em;
	}

	.contact-content address a:hover {
		text-decoration-color: currentColor;
	}

	.contact-content address a:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 4px;
	}

	/* Confidentiality statement */

	.contact-content > p {
		margin-block: 2.5rem 0;
		color: var(--color-secondary);
	}

	/* Tablet */

	@media (max-width: 64rem) {
		.contact-page > h1 {
			grid-column: 1 / span 2;
		}

		.contact-content {
			grid-column: 3 / -1;
		}
	}

	/* Mobile */

	@media (max-width: 48rem) {
		.contact-page {
			align-content: start;

			padding-block: clamp(3rem, 9svh, 5rem) var(--layout-section-gap);

			row-gap: clamp(2.5rem, 7vw, 4rem);
		}

		.contact-page > h1,
		.contact-content {
			grid-column: 1 / -1;
		}
	}
</style>
