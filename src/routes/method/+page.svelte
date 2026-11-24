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
				Every search begins with understanding the particular motor car you are looking for, and
				why.
			</p>

			<p>
				The maker and model are only the starting point. Period, coachwork, specification,
				provenance and originality may distinguish one example from another in ways that are
				important to you.
			</p>

			<p>
				We establish your expectations regarding restoration history, condition and intended use,
				together with the geographical scope, timescale and financial parameters of the search.
			</p>

			<p>
				These requirements guide the decisions that follow. A motor car does not become the right
				choice simply because it is available.
			</p>
		</section>

		<section id="research" aria-labelledby="research-title">
			<h2 id="research-title">Research</h2>

			<p>Not every motor car worth considering is publicly offered for sale.</p>

			<p>
				Depending on what we are looking for, I make enquiries among private owners, collectors,
				specialist dealers, marque clubs and restorers. Auction offerings, archives and personal
				contacts may provide further leads.
			</p>

			<p>
				The objective is not to assemble a long list of available cars. It is to identify individual
				examples whose history and characteristics justify closer examination.
			</p>

			<p>An interesting lead is a starting point for research, not yet a recommendation.</p>
		</section>

		<section id="evidence" aria-labelledby="evidence-title">
			<h2 id="evidence-title">Evidence</h2>

			<p>
				A motor car's represented history must be distinguished from what can actually be
				established.
			</p>

			<p>
				Ownership and registration documents, period correspondence, historical photographs,
				invoices, coachbuilder records and restoration documentation may each contribute to
				understanding an individual car.
			</p>

			<p>
				I compare the available information, investigate discrepancies and consider whether the
				evidence supports the history being presented.
			</p>

			<p>
				Documented facts, plausible historical interpretations and unsupported claims must remain
				separate. Where the records are incomplete or contradictory, I explain what remains
				uncertain and whether further investigation may resolve it.
			</p>
		</section>

		<section id="motor-car" aria-labelledby="motor-car-title">
			<h2 id="motor-car-title">The Motor Car</h2>

			<p>A motor car's appearance does not necessarily reveal its historical integrity.</p>

			<p>
				Its identity, surviving original components, coachwork, period specification, alterations
				and restoration history must be considered together with the documentary evidence.
			</p>

			<p>
				A restoration may produce a beautiful motor car while changing characteristics important to
				its history. Conversely, signs of age or use may be part of what makes a well-preserved
				example interesting.
			</p>

			<p>
				Where specialist technical examination is appropriate, I can coordinate an inspection and
				discuss its findings with you.
			</p>

			<p>
				The assessment must consider not only what the car is today, but how faithfully it
				represents its history and how well it meets your requirements.
			</p>
		</section>

		<section id="judgement" aria-labelledby="judgement-title">
			<h2 id="judgement-title">Independent Judgement</h2>

			<p>Research and examination must lead to a recommendation.</p>

			<p>
				Depending on the evidence and the collector's mandate, that recommendation may be to
				investigate further, proceed to negotiations, reject the candidate or continue searching.
			</p>

			<p>
				I explain the reasons for my judgement, including the strengths of the individual car,
				uncertainties surrounding its history and any concerns that could affect the acquisition.
			</p>

			<p>
				There is no obligation to recommend a purchase. Sometimes continuing the search is the
				better decision.
			</p>
		</section>

		<section id="acquisition" aria-labelledby="acquisition-title">
			<h2 id="acquisition-title">The Acquisition</h2>

			<p>
				When a motor car justifies proceeding, I can assist with communication with its owner or
				seller, further documentary research, specialist inspections and clarification of
				outstanding questions.
			</p>

			<p>
				My involvement may extend to negotiations, examination of acquisition documents and
				practical arrangements for transfer.
			</p>

			<p>
				The purpose is not to complete a transaction as quickly as possible, but to ensure that the
				collector understands the material questions before making a decision.
			</p>

			<p>
				The extent of my involvement depends on the circumstances of the individual motor car and is
				agreed with the collector.
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
