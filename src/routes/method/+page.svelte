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
				The starting point is the particular motor car you have in mind and the qualities that make
				it interesting to you.
			</p>

			<p>
				A maker and model give the search its broad outline. Period, coachwork, specification,
				provenance, originality and restoration history help define the individual example you are
				seeking.
			</p>

			<p>
				We discuss your expectations regarding condition and intended use, together with the
				geographical scope, timescale and financial parameters of the search.
			</p>

			<p>These requirements form the mandate and guide the assessment of each candidate.</p>
		</section>

		<section id="research" aria-labelledby="research-title">
			<h2 id="research-title">Research</h2>

			<p>
				The search may lead through private owners, collectors, specialist dealers, marque clubs,
				restorers, auction offerings and historical archives.
			</p>

			<p>
				Depending on the motor car, I pursue enquiries through these sources and investigate leads
				arising from personal contacts.
			</p>

			<p>
				When a possible candidate emerges, I establish what can be learned about its history,
				specification and availability. The findings help us decide whether the car deserves closer
				examination.
			</p>
		</section>

		<section id="evidence" aria-labelledby="evidence-title">
			<h2 id="evidence-title">Evidence</h2>

			<p>
				I examine the records associated with an individual motor car to establish its history and
				identity.
			</p>

			<p>
				Ownership and registration documents, period correspondence, photographs, invoices,
				coachbuilder records and restoration documentation can each contribute important
				information.
			</p>

			<p>
				I compare these sources, investigate discrepancies and consider how the surviving
				documentation relates to the motor car itself.
			</p>

			<p>
				Some conclusions can be firmly established through documentary evidence. Others depend on
				historical interpretation or require further investigation. I explain these distinctions and
				the significance of any remaining questions.
			</p>
		</section>

		<section id="motor-car" aria-labelledby="motor-car-title">
			<h2 id="motor-car-title">The Motor Car</h2>

			<p>The motor car itself provides another source of historical evidence.</p>

			<p>
				Its identity, surviving original components, coachwork, period specification, alterations
				and restoration history reveal how the individual car has developed over its lifetime.
			</p>

			<p>
				I consider these characteristics alongside the documentation and examine how much of the
				car's historical character has survived.
			</p>

			<p>
				Originality, preservation, restoration quality and mechanical condition each require careful
				consideration. Their importance also depends on the collector's expectations and intended
				use.
			</p>

			<p>
				Where specialist technical examination is appropriate, I can coordinate an inspection and
				discuss the findings with you.
			</p>
		</section>

		<section id="judgement" aria-labelledby="judgement-title">
			<h2 id="judgement-title">Independent Judgement</h2>

			<p>
				My assessment brings together the motor car's history, its present condition, the available
				evidence and the requirements established in the collector's mandate.
			</p>

			<p>
				I explain the strengths of each promising candidate, the questions that deserve attention
				and the implications of the findings.
			</p>

			<p>
				The resulting recommendation may be to undertake further research, proceed to negotiations,
				reject the candidate or continue searching.
			</p>

			<p>I explain the reasons for my judgement so that you can decide how to proceed.</p>
		</section>

		<section id="acquisition" aria-labelledby="acquisition-title">
			<h2 id="acquisition-title">The Acquisition</h2>

			<p>
				When you decide to pursue a particular motor car, I can assist with communication with its
				owner or seller, examination of additional records and coordination of specialist
				inspections.
			</p>

			<p>
				My involvement may extend to negotiations, examination of acquisition documents and
				practical arrangements for transfer.
			</p>

			<p>
				Throughout the process, I seek to clarify the material questions concerning the car and its
				acquisition, allowing you to make an informed decision.
			</p>

			<p>
				We agree on the extent of my involvement according to the circumstances of the individual
				motor car.
			</p>

			<p>
				You can <a class="is-interactive" href="/contact/">make a private enquiry</a> to discuss a possible
				engagement.
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
