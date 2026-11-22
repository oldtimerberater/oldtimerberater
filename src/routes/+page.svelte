<script>
	import contact from '#lib/config/contact.json';

	const url = 'https://oldtimerberater.eu/';

	const structuredData = JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${url}#website`,
				name: 'Independent Advisory',
				url,
				inLanguage: 'en',
				publisher: {
					'@id': `${url}#organization`
				}
			},
			{
				'@type': 'Organization',
				'@id': `${url}#organization`,
				name: 'Independent Advisory',
				url,
				description: 'Independent advisory for collectors of historically significant motor cars.',
				email: contact.email,
				telephone: contact.phone.replaceAll(' ', '')
			},
			{
				'@type': 'Service',
				'@id': `${url}#service`,
				name: 'Independent Advisory for Collectors of Historically Significant Motor Cars',
				serviceType: 'Motor car acquisition advisory',
				description:
					'Research, assessment and acquisition advisory for collectors of historically significant motor cars.',
				provider: {
					'@id': `${url}#organization`
				},
				areaServed: ['Europe', 'United States'],
				url
			}
		]
	}).replace(/</g, '\\u003c');
</script>

<svelte:head>
	<title>Independent Advisory for Collectors of Historically Significant Motor Cars</title>
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

	<section id="advisory" class="home-sections" aria-labelledby="advisory-title">
		<h2 id="advisory-title">The Search</h2>

		<p>
			I need to understand the particular motor car you want to acquire: its model, coachwork and
			specification, the provenance and originality you expect, its condition and how you intend to
			use it.
		</p>

		<p>
			I search across Europe and the United States, examine promising cars and their documentation,
			and share my findings with you. We can discuss which examples deserve closer examination and
			what remains to be verified.
		</p>
	</section>
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
