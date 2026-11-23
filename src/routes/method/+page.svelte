<script>
	import { entities, jsonLd } from '#lib/seo/structured-data.js';

	const structuredData = jsonLd([entities.service]);
</script>

<svelte:head>
	<title>Historic Motor Car Research, Provenance & Assessment</title>
	<meta
		name="description"
		content="Historic motor car research and assessment: provenance, documentary evidence, originality, restoration history and acquisition support."
	/>
	{@html `<script type="application/ld+json">${structuredData}</script>`}
</svelte:head>

<main class="method-page layout-grid">
	<h1>Method</h1>

	<nav class="method-index" aria-label="Method sections">
		<ul>
			<li><a class="is-interactive" href="#mandate">The Collector’s Mandate</a></li>
			<li><a class="is-interactive" href="#research">Research</a></li>
			<li><a class="is-interactive" href="#evidence">Evidence</a></li>
			<li><a class="is-interactive" href="#motor-car">The Motor Car</a></li>
			<li><a class="is-interactive" href="#judgement">Independent Judgement</a></li>
			<li><a class="is-interactive" href="#acquisition">The Acquisition</a></li>
		</ul>
	</nav>

	<div class="method-content layout-reading">
		<section id="mandate" aria-labelledby="mandate-title">
			<h2 id="mandate-title">The Collector’s Mandate</h2>

			<p>
				We begin by discussing the motor car you have in mind, including the period, coachwork and
				specification that interest you.
			</p>

			<p>
				I also need to understand your expectations regarding provenance, originality, restoration
				history and condition, together with how you intend to use the car. We establish the
				geographical scope, timescale and financial parameters of the search.
			</p>
		</section>

		<section id="research" aria-labelledby="research-title">
			<h2 id="research-title">Research</h2>

			<p>
				Depending on the motor car, I make enquiries among private owners, specialist dealers,
				marque clubs, collectors and restorers. I also follow relevant auction offerings and
				investigate leads that may arise through personal contacts.
			</p>

			<p>
				When a possible candidate emerges, I establish its basic history, specification and
				availability. I then discuss the findings with you and determine whether the car warrants
				closer examination.
			</p>
		</section>

		<section id="evidence" aria-labelledby="evidence-title">
			<h2 id="evidence-title">Evidence</h2>

			<p>
				I examine the available records to establish the history of the individual motor car. These
				may include ownership and registration documents, period correspondence, photographs,
				invoices, coachbuilder records and documentation of restoration work.
			</p>

			<p>
				I compare information from different sources and investigate discrepancies. I distinguish
				documented facts from historical interpretations and claims that cannot be substantiated.
				Where the records are incomplete or contradictory, I explain what can be established, what
				remains uncertain and which questions warrant further investigation.
			</p>
		</section>

		<section id="motor-car" aria-labelledby="motor-car-title">
			<h2 id="motor-car-title">The Motor Car</h2>

			<p>
				The examination of a candidate concerns its identity, surviving original components,
				coachwork, period specification, alterations and restoration history. I consider how these
				characteristics correspond with the available documentation.
			</p>

			<p>
				Where specialist technical examination is appropriate, I can coordinate an inspection and
				discuss the resulting findings with you. The condition of the car, its historical
				characteristics and your intended use all contribute to the assessment.
			</p>
		</section>

		<section id="judgement" aria-labelledby="judgement-title">
			<h2 id="judgement-title">Independent Judgement</h2>

			<p>
				I explain my assessment of each promising candidate, including its strengths, the evidence
				supporting its history and any concerns that deserve further attention.
			</p>

			<p>
				We discuss how closely the car meets your requirements and whether further research,
				specialist examination or negotiations would be worthwhile. You will have my recommendation
				and the reasons behind it before deciding how to proceed.
			</p>
		</section>

		<section id="acquisition" aria-labelledby="acquisition-title">
			<h2 id="acquisition-title">The Acquisition</h2>

			<p>
				If you decide to pursue a particular motor car, I can remain involved in communication with
				the owner or seller, clarification of outstanding questions and coordination of any
				additional specialist examinations.
			</p>

			<p>
				My involvement can extend to negotiations, examination of the relevant documents and
				practical arrangements for acquisition and transfer. We agree on the extent of this
				assistance according to the circumstances of the particular car.
			</p>
			<p>
				If you wish to discuss a possible engagement, you may
				<a class="is-interactive" href="/contact/">make a private enquiry</a>.
			</p>
		</section>
	</div>
</main>

<style>
	.method-page {
		padding-block: clamp(3rem, 6vw, 5rem) var(--layout-section-gap);
		row-gap: clamp(3rem, 6vw, 5rem);
	}

	.method-page > h1 {
		grid-column: 1 / -1;
		margin: 0;
	}

	/* Section navigation */

	.method-index {
		grid-column: 1 / span 3;
		align-self: start;
		position: sticky;
		top: 2rem;
	}

	.method-index ul {
		display: grid;
		gap: 0.75rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	/* Editorial content */

	.method-content {
		grid-column: 5 / span 8;
		min-width: 0;

		display: grid;
		row-gap: var(--layout-section-gap);
	}

	.method-content section > h2 {
		margin-block-start: 0;
	}

	.method-content section > :last-child {
		margin-block-end: 0;
	}

	/* Tablet */

	@media (max-width: 64rem) {
		.method-index {
			grid-column: 1 / span 2;
		}

		.method-content {
			grid-column: 3 / -1;
		}
	}

	/* Mobile */

	@media (max-width: 48rem) {
		.method-page {
			row-gap: 2.5rem;
		}

		.method-index {
			grid-column: 1 / -1;
			position: static;
		}

		.method-content {
			grid-column: 1 / -1;
		}
	}
</style>
