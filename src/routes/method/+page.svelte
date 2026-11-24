<script>
	import { m } from '../../paraglide/messages.js';
	import { ParaglideMessage } from '@inlang/paraglide-js-svelte';
	import { entities, jsonLd } from '#lib/seo/structured-data.js';

	const structuredData = jsonLd([entities.service]);
</script>

<svelte:head>
	<title>{m.method_meta_title()}</title>
	<meta name="description" content={m.method_meta_description()} />

	{@html `<script type="application/ld+json">${structuredData}</script>`}
</svelte:head>

<main class="method-page layout-grid">
	<h1>{m.common_method()}</h1>

	<nav class="method-index" aria-label={m.method_navigation_label()}>
		<ul>
			<li>
				<a class="is-interactive" href="#mandate">
					{m.method_mandate_title()}
				</a>
			</li>
			<li>
				<a class="is-interactive" href="#research">
					{m.method_research_title()}
				</a>
			</li>
			<li>
				<a class="is-interactive" href="#evidence">
					{m.method_evidence_title()}
				</a>
			</li>
			<li>
				<a class="is-interactive" href="#motor-car">
					{m.method_motor_car_title()}
				</a>
			</li>
			<li>
				<a class="is-interactive" href="#judgement">
					{m.method_judgement_title()}
				</a>
			</li>
			<li>
				<a class="is-interactive" href="#acquisition">
					{m.method_acquisition_title()}
				</a>
			</li>
		</ul>
	</nav>

	<div class="method-content layout-reading">
		<section id="mandate" aria-labelledby="mandate-title">
			<h2 id="mandate-title">{m.method_mandate_title()}</h2>

			<p>{m.method_mandate_p1()}</p>
			<p>{m.method_mandate_p2()}</p>
			<p>{m.method_mandate_p3()}</p>
			<p>{m.method_mandate_p4()}</p>
		</section>

		<section id="research" aria-labelledby="research-title">
			<h2 id="research-title">{m.method_research_title()}</h2>

			<p>{m.method_research_p1()}</p>
			<p>{m.method_research_p2()}</p>
			<p>{m.method_research_p3()}</p>
		</section>

		<section id="evidence" aria-labelledby="evidence-title">
			<h2 id="evidence-title">{m.method_evidence_title()}</h2>

			<p>{m.method_evidence_p1()}</p>
			<p>{m.method_evidence_p2()}</p>
			<p>{m.method_evidence_p3()}</p>
			<p>{m.method_evidence_p4()}</p>
		</section>

		<section id="motor-car" aria-labelledby="motor-car-title">
			<h2 id="motor-car-title">{m.method_motor_car_title()}</h2>

			<p>{m.method_motor_car_p1()}</p>
			<p>{m.method_motor_car_p2()}</p>
			<p>{m.method_motor_car_p3()}</p>
			<p>{m.method_motor_car_p4()}</p>
			<p>{m.method_motor_car_p5()}</p>
		</section>

		<section id="judgement" aria-labelledby="judgement-title">
			<h2 id="judgement-title">{m.method_judgement_title()}</h2>

			<p>{m.method_judgement_p1()}</p>
			<p>{m.method_judgement_p2()}</p>
			<p>{m.method_judgement_p3()}</p>
			<p>{m.method_judgement_p4()}</p>
		</section>

		<section id="acquisition" aria-labelledby="acquisition-title">
			<h2 id="acquisition-title">{m.method_acquisition_title()}</h2>

			<p>{m.method_acquisition_p1()}</p>
			<p>{m.method_acquisition_p2()}</p>
			<p>{m.method_acquisition_p3()}</p>
			<p>{m.method_acquisition_p4()}</p>

			<p>
				<ParaglideMessage message={m.method_acquisition_p5} inputs={{}}>
					{#snippet link({ children })}
						<a class="is-interactive" href="/contact/">
							{@render children?.()}
						</a>
					{/snippet}
				</ParaglideMessage>
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
