<svelte:head>
	<title>Method — Independent Advisory</title>
</svelte:head>

<main class="method-page layout-grid">
	<h1>Method</h1>

	<nav class="method-index" aria-label="Method sections">
		<ul>
			<li><a href="#mandate">The Collector’s Mandate</a></li>
			<li><a href="#research">Research</a></li>
			<li><a href="#evidence">Evidence</a></li>
			<li><a href="#motor-car">The Motor Car</a></li>
			<li><a href="#judgement">Independent Judgement</a></li>
			<li><a href="#acquisition">The Acquisition</a></li>
			<li><a href="#principles">Principles</a></li>
		</ul>
	</nav>

	<div class="method-content layout-reading">
		<section id="mandate" aria-labelledby="mandate-title">
			<h2 id="mandate-title">The Collector’s Mandate</h2>

			<p>Every engagement begins with a defined mandate.</p>

			<p>The mandate records what the collector is seeking and why:</p>

			<ul>
				<li>maker and model;</li>
				<li>period;</li>
				<li>coachwork;</li>
				<li>specification;</li>
				<li>provenance;</li>
				<li>degree of originality;</li>
				<li>acceptable restoration history;</li>
				<li>condition;</li>
				<li>intended use;</li>
				<li>geographic scope;</li>
				<li>timing;</li>
				<li>financial parameters.</li>
			</ul>

			<p>The market does not define the objective. The collector does.</p>
		</section>

		<section id="research" aria-labelledby="research-title">
			<h2 id="research-title">Research</h2>

			<p>The search is conducted across Europe and the United States.</p>

			<p>It can include:</p>

			<ul>
				<li>private collections;</li>
				<li>owners known through personal contacts;</li>
				<li>specialist dealers;</li>
				<li>marque networks;</li>
				<li>clubs;</li>
				<li>workshops and restorers;</li>
				<li>auction houses;</li>
				<li>archives;</li>
				<li>publicly offered motor cars.</li>
			</ul>

			<p>The purpose is not to produce the largest possible number of candidates.</p>

			<p>It is to identify the few that justify closer examination.</p>
		</section>

		<section id="evidence" aria-labelledby="evidence-title">
			<h2 id="evidence-title">Evidence</h2>

			<p>
				A motor car’s represented history is treated as a claim until it is supported by evidence.
			</p>

			<p>Research can include:</p>

			<ul>
				<li>ownership records;</li>
				<li>registration documents;</li>
				<li>period correspondence;</li>
				<li>invoices;</li>
				<li>archival material;</li>
				<li>historical photographs;</li>
				<li>coachbuilder records;</li>
				<li>restoration documentation;</li>
				<li>identification of the motor car and its principal components.</li>
			</ul>

			<p>
				Documented fact, plausible interpretation and unsupported representation are kept separate.
			</p>
		</section>

		<section id="motor-car" aria-labelledby="motor-car-title">
			<h2 id="motor-car-title">The Motor Car</h2>

			<p>Presentation is not evidence of historical integrity.</p>

			<p>Each candidate is considered in relation to:</p>

			<ul>
				<li>its represented identity;</li>
				<li>surviving original elements;</li>
				<li>coachwork;</li>
				<li>period specification;</li>
				<li>alterations made during its life;</li>
				<li>restoration history;</li>
				<li>consistency between the motor car and its documentation;</li>
				<li>suitability for the collector’s mandate.</li>
			</ul>

			<p>Cosmetic appearance is considered separately from historical significance.</p>
		</section>

		<section id="judgement" aria-labelledby="judgement-title">
			<h2 id="judgement-title">Independent Judgement</h2>

			<p>Each candidate leads to one of four conclusions:</p>

			<ul>
				<li><strong>Investigate further.</strong></li>
				<li><strong>Proceed to negotiation.</strong></li>
				<li><strong>Reject the motor car.</strong></li>
				<li><strong>Continue searching.</strong></li>
			</ul>

			<p>A completed transaction is not, by itself, a successful result.</p>

			<p>
				The recommendation must be supported by the available evidence and remain consistent with
				the collector’s mandate.
			</p>
		</section>

		<section id="acquisition" aria-labelledby="acquisition-title">
			<h2 id="acquisition-title">The Acquisition</h2>

			<p>Where a candidate warrants further consideration, the advisory can continue through:</p>

			<ul>
				<li>communication with the owner or seller;</li>
				<li>examination of additional records;</li>
				<li>coordination of relevant specialist inspection;</li>
				<li>clarification of unresolved questions;</li>
				<li>comparison with alternative candidates;</li>
				<li>negotiation;</li>
				<li>document review;</li>
				<li>support through acquisition and transfer.</li>
			</ul>

			<p>The purpose is not to accelerate the transaction.</p>

			<p>
				It is to protect the collector’s position until the material questions have been resolved.
			</p>
		</section>

		<section id="principles" aria-labelledby="principles-title">
			<h2 id="principles-title">Principles</h2>

			<ul>
				<li><strong>The collector’s mandate before market availability.</strong></li>
				<li><strong>Evidence before representations.</strong></li>
				<li><strong>Provenance before assumption.</strong></li>
				<li><strong>Historical integrity before cosmetic presentation.</strong></li>
				<li><strong>Patience before compromise.</strong></li>
				<li><strong>No acquisition is preferable to the wrong acquisition.</strong></li>
			</ul>
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
