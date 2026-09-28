"use client";

export default function Home() {
	return (
		<main>
			{/* NAVIGATION */}
			<nav className="navbar">
				<div className="logo">
					BLADE<span>.</span>
				</div>

				<div className="nav-links">
					<a href="#home">Home</a>
					<a href="#about">About</a>
					<a href="#gallery">Gallery</a>
					<a href="#visit">Visit</a>
				</div>

				<a className="nav-button" href="tel:+27787520194">
					CALL NOW
				</a>
			</nav>

			{/* HERO */}
			<section id="home" className="hero">
				<div className="hero-content">
					<p className="eyebrow">AERORAND • MIDDELBURG</p>

					<h1>
						SHARP
						<br />
						<span>BY DESIGN.</span>
					</h1>

					<p className="hero-text">
						Your local barber in Middelburg. Clean cuts, sharp details and
						proper barbering — all in one place.
					</p>

					<div className="hero-buttons">
						<a href="tel:+27787520194" className="primary-button">
							CALL BLADE
						</a>

						<a
							href="https://wa.me/27787520194"
							target="_blank"
							rel="noopener noreferrer"
							className="secondary-button"
						>
							WHATSAPP →
						</a>
					</div>
				</div>

				<div className="hero-mark">
					<div className="blade-circle">
						<span>B</span>
					</div>
				</div>
			</section>

			{/* STATEMENT */}
			<section id="about" className="statement">
				<p className="section-label">THE BLADE STANDARD</p>

				<h2>
					LOOK GOOD.
					<br />
					<span>FEEL SHARP.</span>
				</h2>

				<p>
					A modern barber experience based in Aerorand, Middelburg. Built
					around attention to detail and making sure you leave looking your
					best.
				</p>
			</section>

			{/* GALLERY */}
			<section id="gallery" className="gallery-section">
				<div className="gallery-heading">
					<div>
						<p className="section-label">THE WORK</p>

						<h2>
							FRESH
							<br />
							<span>EVERY TIME.</span>
						</h2>
					</div>

					<p>
						A preview space for Blade&apos;s latest cuts and barber work.
						<br />
						Real client photos can be added here.
					</p>
				</div>

				<div className="gallery-grid">
					<div className="gallery-card gallery-one">
						<div>
							<span>01</span>
							<strong>THE DETAIL</strong>
						</div>
					</div>

					<div className="gallery-card gallery-two">
						<div>
							<span>02</span>
							<strong>THE FINISH</strong>
						</div>
					</div>

					<div className="gallery-card gallery-three">
						<div>
							<span>03</span>
							<strong>THE LOOK</strong>
						</div>
					</div>
				</div>
			</section>

			{/* INFORMATION */}
			<section id="visit" className="info-section">
				<div className="info-card">
					<p className="section-label">LOCATION</p>

					<h3>AERORAND</h3>

					<p>Keiskamma Drive</p>
					<p>Middelburg, Mpumalanga</p>

					<a
						href="https://www.google.com/maps/search/?api=1&query=Blade+Barber+Keiskamma+Drive+Aerorand+Middelburg+Mpumalanga"
						target="_blank"
						rel="noopener noreferrer"
					>
						OPEN IN MAPS ↗
					</a>
				</div>

				<div className="info-card">
					<p className="section-label">OPENING HOURS</p>

					<div className="hours">
						<div>
							<span>MON — FRI</span>
							<strong>08:30 — 18:00</strong>
						</div>

						<div>
							<span>SAT — SUN</span>
							<strong>08:30 — 17:00</strong>
						</div>
					</div>
				</div>

				<div className="info-card contact-card">
					<p className="section-label">CONTACT</p>

					<h3>078 752 0194</h3>

					<a href="tel:+27787520194">CALL THE BARBER →</a>

					<a
						href="https://wa.me/27787520194"
						target="_blank"
						rel="noopener noreferrer"
					>
						WHATSAPP BLADE →
					</a>
				</div>
			</section>

			{/* CTA */}
			<section className="cta">
				<p className="section-label">READY?</p>

				<h2>
					TIME TO GET
					<br />
					<span>SHARP.</span>
				</h2>

				<div className="hero-buttons">
					<a href="tel:+27787520194" className="primary-button">
						CALL BLADE
					</a>

					<a
						href="https://wa.me/27787520194"
						target="_blank"
						rel="noopener noreferrer"
						className="secondary-button"
					>
						WHATSAPP →
					</a>
				</div>
			</section>

			{/* MOBILE CONTACT BAR */}
			<div className="mobile-contact">
				<a href="tel:+27787520194">
					<span aria-hidden="true">☎</span>
					CALL
				</a>

				<a
					href="https://wa.me/27787520194"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span aria-hidden="true">✆</span>
					WHATSAPP
				</a>

				<a
					href="https://www.google.com/maps/search/?api=1&query=Blade+Barber+Keiskamma+Drive+Aerorand+Middelburg+Mpumalanga"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span aria-hidden="true">⌖</span>
					MAP
				</a>
			</div>

			{/* FOOTER */}
			<footer>
				<div className="logo">
					BLADE<span>.</span>
				</div>

				<p>© 2026 Blade Barber • Middelburg, Mpumalanga</p>
			</footer>
		</main>
	);
}
