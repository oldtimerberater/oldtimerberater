<script>
	import { entities, ids, jsonLd, pageEntity } from '#lib/seo/structured-data.js';

	const structuredData = jsonLd([
		entities.advisor,
		pageEntity({
			path: '/advisor/',
			name: 'The Advisor',
			description:
				'Meet Andrey Paymushin, an independent advisor based in Berlin, Germany, working with collectors across Europe and the United States.',
			type: 'ProfilePage',
			mainEntity: ids.advisor
		})
	]);
</script>

<svelte:head>
	<title>Independent Historic Motor Car Advisor — Berlin</title>
	<meta
		name="description"
		content="Berlin-based independent advisor for collectors of historically significant motor cars. Provenance research, vehicle assessment and acquisition support across Europe and the United States."
	/>
	{@html `<script type="application/ld+json">${structuredData}</script>`}
</svelte:head>

<main class="advisor-page layout-grid">
	<h1>The Advisor</h1>

	<section id="advisor" class="advisor-section" aria-labelledby="advisor-title">
		<h2 id="advisor-title">Andrey Paymushin</h2>

		<div class="advisor-content layout-reading">
			<p>I am based in Berlin, Germany.</p>

			<p>
				My work brings me into contact with collectors, owners and specialists across Europe and the
				United States.
			</p>

			<h3>Languages</h3>

			<ul>
				<li>English</li>
				<li>German</li>
				<li>Russian</li>
			</ul>
		</div>
	</section>

	<section id="discretion" class="advisor-section" aria-labelledby="discretion-title">
		<h2 id="discretion-title">Discretion</h2>

		<div class="advisor-content layout-reading">
			<p>
				I treat your enquiries, the details of your search, negotiations and acquisitions as
				confidential. The same discretion applies to an initial enquiry, before any formal
				engagement has begun.
			</p>

			<p>
				Before approaching an owner, seller or specialist, we agree what information about you and
				the motor car you are seeking may be disclosed. I share that information only with your
				express approval.
			</p>
		</div>
	</section>
</main>

<style>
	.advisor-page {
		padding-block: clamp(3rem, 6vw, 5rem);

		align-content: safe center;
		align-items: start;

		row-gap: clamp(3rem, 5vw, 5rem);
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

	/* Languages */

	.advisor-content h3 {
		margin-block: 2rem 0.75rem;
	}

	.advisor-content ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.5rem;

		margin: 0;
		padding: 0;

		list-style: none;
		color: var(--color-secondary);
	}

	/* Tablet */

	@media (max-width: 64rem) {
		.advisor-page {
			row-gap: clamp(3rem, 5vw, 4rem);
		}

		.advisor-section > h2 {
			grid-column: 1 / span 2;
		}

		.advisor-content {
			grid-column: 3 / -1;
		}
	}

	/* Mobile */

	@media (max-width: 48rem) {
		.advisor-page {
			align-content: start;

			padding-block: clamp(3rem, 9svh, 5rem) var(--layout-section-gap);

			row-gap: 2.5rem;
		}

		.advisor-section {
			row-gap: 1.5rem;
		}

		.advisor-section > h2,
		.advisor-content {
			grid-column: 1 / -1;
		}

		.advisor-content h3 {
			margin-block-start: 1.5rem;
		}
	}
</style>
