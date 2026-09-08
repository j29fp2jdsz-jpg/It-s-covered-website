const navItems = ['Home', 'Marquees', 'Packages', 'Events', 'Our Work', 'About', 'Contact'];

const steps = [
  ['01', 'Pick your date', 'Choose the date you want for your event.'],
  ['02', 'Tell us about your event', 'Guest count, event type, layout and location.'],
  ['03', 'Pick your marquee', 'We will recommend suitable packages and show what is available.'],
  ['04', 'Add your extras', 'Choose furniture, lighting, flooring, heating and more.'],
  ['05', 'Initial quote', 'See an estimated price including delivery and setup.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#home" aria-label="It's Covered home">
            <span className="brand-main">itscovered</span>
            <span className="brand-sub">MARQUEE HIRE</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
            ))}
          </nav>
          <a className="button button-primary header-cta" href="#booking">Start Your Booking</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <p className="eyebrow">Marquee hire across South Wales & beyond</p>
          <h1>Your perfect event.<br />Beautifully covered.</h1>
          <p className="hero-copy">Pick your date, tell us about your event and we’ll guide you to the right marquee package.</p>
          <div className="hero-actions">
            <a className="button button-primary button-large" href="#booking">Start Your Booking</a>
            <a className="button button-ghost button-large" href="#packages">Explore Packages</a>
          </div>
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="shell">
          <div className="section-heading centered">
            <span className="kicker">Simple from the start</span>
            <h2>Plan your marquee in five easy steps</h2>
            <p>The booking journey is designed to show you suitable, available options before you need to contact us.</p>
          </div>
          <div className="journey-grid">
            {steps.map(([number, title, copy]) => (
              <article className="journey-card" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="centered cta-row">
            <a className="button button-primary button-large" href="#date">Choose Your Date</a>
          </div>
        </div>
      </section>

      <section className="placeholder-section" id="packages">
        <div className="shell split-panel">
          <div>
            <span className="kicker">Built around your event</span>
            <h2>Packages for weddings, parties, corporate events and festivals.</h2>
            <p>We’ll feature a small number of popular packages here and make the full package range easy to browse.</p>
          </div>
          <a className="button button-outline button-large" href="#all-packages">View All Packages</a>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <strong>itscovered</strong>
          <span>Professional marquee hire and event support.</span>
        </div>
      </footer>
    </main>
  );
}
