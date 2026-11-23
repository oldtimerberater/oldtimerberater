<script>
	import legal from '#lib/config/legal.json';
	import contact from '#lib/config/contact.json';
</script>

<svelte:head>
	<title>Privacy Policy</title>
	<meta
		name="description"
		content="Information about personal data processing, website access, correspondence and your rights under the GDPR."
	/>
</svelte:head>

<main class="privacy-page layout-grid">
	<h1>Privacy Policy</h1>

	<div class="privacy-content layout-reading">
		<section aria-labelledby="controller-title">
			<h2 id="controller-title">Data Controller</h2>

			<p>{legal.legalName}</p>
			<p>Berlin, Germany</p>

			<p>
				For enquiries concerning your personal data, please contact me at
				<a class="is-interactive" href={`mailto:${contact.email}`}>
					{contact.email}
				</a>.
			</p>
		</section>

		<section id="access" aria-labelledby="access-title">
			<h2 id="access-title">Website Access</h2>

			<p>
				When you visit this website, your browser establishes a connection with the web server.
				Technical information, including your IP address and the requested resource, is processed to
				deliver the website to your device.
			</p>

			<p>
				This information is processed temporarily during the connection. The website does not
				maintain access logs or retain records of individual visits.
			</p>

			<p>
				The legal basis is Article 6(1)(f) GDPR. My legitimate interest is the reliable delivery and
				operation of the website.
			</p>
		</section>

		<section aria-labelledby="technologies-title">
			<h2 id="technologies-title">Cookies and Tracking</h2>

			<p>
				This website does not use cookies, analytics services, visitor tracking or advertising
				technologies.
			</p>
		</section>

		<section aria-labelledby="communication-title">
			<h2 id="communication-title">Email and Telephone Communication</h2>

			<p>
				When you contact me by email or telephone, I process the contact details and information you
				provide to respond to your enquiry and, where applicable, discuss or carry out an advisory
				engagement.
			</p>

			<p>
				Where communication concerns a requested service or an existing contractual relationship,
				processing is based on Article 6(1)(b) GDPR. Other enquiries are processed under Article
				6(1)(f) GDPR, based on my legitimate interest in responding to correspondence.
			</p>

			<p>
				You are under no obligation to contact me. If you do, I need sufficient contact information
				to respond to your enquiry.
			</p>
		</section>

		<section aria-labelledby="services-title">
			<h2 id="services-title">Email Service Provider</h2>

			<p>
				I use Gmail, a service provided by Google, to receive, send and store email correspondence.
			</p>

			<p>
				Correspondence processed through Gmail may be handled on Google's infrastructure outside the
				European Economic Area. Google describes its data processing and international transfer
				safeguards in its
				<a
					class="is-interactive"
					href="https://policies.google.com/privacy"
					target="_blank"
					rel="noopener noreferrer"
				>
					Privacy Policy
				</a>.
			</p>
		</section>

		<section aria-labelledby="disclosure-title">
			<h2 id="disclosure-title">Information Shared During an Engagement</h2>

			<p>
				An advisory engagement may require communication with motor-car owners, sellers, dealers,
				archives or independent specialists.
			</p>

			<p>
				We will discuss what information about you and your requirements needs to be shared with
				these parties before making enquiries on your behalf. Depending on the engagement,
				recipients may be located in Europe or the United States.
			</p>
		</section>

		<section aria-labelledby="retention-title">
			<h2 id="retention-title">Data Retention</h2>

			<p>
				I retain correspondence and related information for as long as necessary to handle your
				enquiry or carry out an advisory engagement.
			</p>

			<p>
				Where statutory retention obligations apply, the relevant information is retained for the
				required period. Information may also need to be retained where necessary to establish,
				exercise or defend legal claims.
			</p>

			<p>
				Otherwise, personal data is deleted when it is no longer required for the purpose for which
				it was collected.
			</p>
		</section>

		<section aria-labelledby="rights-title">
			<h2 id="rights-title">Your Data Protection Rights</h2>

			<p>Under the GDPR, you may have the right to request:</p>

			<ul>
				<li>access to your personal data;</li>
				<li>correction of inaccurate personal data;</li>
				<li>deletion of your personal data;</li>
				<li>restriction of processing;</li>
				<li>data portability, where applicable;</li>
				<li>objection to processing based on legitimate interests.</li>
			</ul>

			<p>
				You can exercise these rights by contacting me at
				<a class="is-interactive" href={`mailto:${contact.email}`}>
					{contact.email}
				</a>.
			</p>
		</section>

		<section aria-labelledby="decisions-title">
			<h2 id="decisions-title">Automated Decision-Making</h2>

			<p>
				No automated decision-making or profiling within the meaning of Article 22 GDPR is carried
				out in connection with website visits or enquiries.
			</p>
		</section>

		<section aria-labelledby="complaints-title">
			<h2 id="complaints-title">Supervisory Authority</h2>

			<p>You have the right to lodge a complaint with a data protection supervisory authority.</p>

			<p>
				The supervisory authority responsible for Berlin is the
				<a
					class="is-interactive"
					href="https://www.datenschutz-berlin.de/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Berliner Beauftragte für Datenschutz und Informationsfreiheit
				</a>.
			</p>
		</section>
	</div>
</main>

<style>
	.privacy-page {
		padding-block: clamp(3rem, 6vw, 5rem) var(--layout-section-gap);
		row-gap: clamp(3rem, 6vw, 5rem);
	}

	.privacy-page > h1 {
		grid-column: 2 / -1;
		margin: 0;
	}

	.privacy-content {
		grid-column: 2 / span 8;
		min-width: 0;

		display: grid;
		row-gap: clamp(2.5rem, 5vw, 4rem);
	}

	.privacy-content section > h2 {
		margin-block-start: 0;
	}

	.privacy-content section > :last-child {
		margin-block-end: 0;
	}

	@media (max-width: 64rem) {
		.privacy-page > h1,
		.privacy-content {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 48rem) {
		.privacy-page {
			row-gap: 2.5rem;
		}
	}
</style>
