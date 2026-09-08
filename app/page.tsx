import Link from 'next/link';
import BookingWizard from '@/components/BookingWizard';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from './home.module.css';

const packages = [
  { slug:'garden-party', title:'Garden Party', image:'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/20ftx20ft-Capri-Marquee-pkb3062by5kel22h6auixd0e6vqq4oxb593bn22z8y.jpg', copy:'A compact Capri setup for smaller celebrations and relaxed garden events.', meta:'20ft × 20ft · intimate events' },
  { slug:'informal-party', title:'Informal Party', image:'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/28x28-Caerleon-p3melmwu7h56y7kk1685e7gq9bc6fk45a9i479ymsy.jpg', copy:'Flexible space for guests to mingle, eat, drink and celebrate.', meta:'Flexible layout · standing up to 55' },
  { slug:'80-guests', title:'80 Guests', image:'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/Roath-Church-wedding-guests-2-p3mn5mp1l6rj6g6xkazcehi1ih9wl6tvmoxp79anzm.jpg', copy:'A larger seated Capri setup for weddings, parties and hospitality.', meta:'Seated setup · up to 80' },
];

const work = [
  ['Weddings','Romantic receptions and evening celebrations','https://itscovered.co.uk/wp-content/uploads/2026/06/Marquee-Wedding-festival0.jpg'],
  ['Parties','Relaxed garden parties and bigger celebrations','https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/20ftx20ft-Capri-Marquee-pkb3062by5kel22h6auixd0e6vqq4oxb593bn22z8y.jpg'],
  ['Corporate','Professional hospitality and event spaces','https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg'],
  ['Festivals & Events','Flexible cover for larger outdoor occasions','https://itscovered.co.uk/wp-content/uploads/2018/12/marquee5.jpg'],
] as const;

const events = [
  ['weddings', 'Weddings', 'Create a beautiful setting for your big day.', 'https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg'],
  ['parties', 'Parties', 'Birthdays, anniversaries, engagements and more.', 'https://itscovered.co.uk/wp-content/uploads/2021/03/Brilliant-party-Newport.jpg'],
  ['corporate', 'Corporate', 'Professional marquee solutions for business events.', 'https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg'],
  ['festivals-events', 'Festivals & Events', 'Flexible cover for shows, community events and festivals.', 'https://itscovered.co.uk/wp-content/uploads/2018/12/marquee5.jpg'],
];

export default function Home() {
  return (
    <main className={styles.homeRoot}>
      <SiteHeader />

      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <div className="hero-copy-wrap">
            <p className="eyebrow">Capri marquee hire across South Wales & beyond</p>
            <h1>Unforgettable events<br /><span>start here.</span></h1>
            <p className="hero-copy">Distinctive Capri marquees for weddings, parties, corporate events and outdoor occasions — professionally installed and planned around your venue.</p>
            <div className="hero-actions">
              <a className="button button-primary button-large" href="#booking">Choose Your Date <span aria-hidden="true">→</span></a>
              <Link className="button button-ghost button-large" href="/our-work">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.workFirst} aria-labelledby="work-heading">
        <div className="shell">
          <div className={styles.workHead}>
            <div><span className="kicker">Our work</span><h2 id="work-heading">Real events. Extraordinary settings.</h2><p>A quick look at the kind of spaces we create before you start planning yours.</p></div>
            <Link className={`button button-outline ${styles.desktopCta}`} href="/our-work">View Full Gallery →</Link>
          </div>
          <div className={styles.workCarousel} aria-label="Examples of our work">
            {work.map(([title,copy,image]) => <article key={title} className={styles.workSlide}>
              <img src={image} alt={`${title} marquee installation`} loading="lazy" />
              <div className={styles.workCopy}><strong>{title}</strong><small>{copy}</small></div>
            </article>)}
          </div>
          <div className={styles.mobileGalleryLink}><Link href="/our-work">View Full Gallery →</Link></div>
        </div>
      </section>

      <section className="booking-section booking-section-direct" id="booking">
        <div className="shell">
          <div className={`section-heading centered booking-heading ${styles.bookingIntro}`}>
            <span className="kicker">Ready to start?</span>
            <h2>Choose your event date.</h2>
            <p>Start with the date. We’ll guide you through your event details, suitable Capri options and any extras.</p>
          </div>
          <BookingWizard />
        </div>
      </section>

      <section className="content-section packages-section" id="packages">
        <div className="shell">
          <div className="section-row">
            <div><span className="kicker">Popular choices</span><h2>Useful starting points, not rigid bundles.</h2><p>Choose the package closest to your plans and we’ll tailor the final setup around the venue, access and event.</p></div>
            <Link className="button button-primary" href="/packages">View All Packages →</Link>
          </div>
          <div className="package-grid">
            {packages.map((item, index) => <article className={`package-card ${index === 2 ? 'package-featured' : ''}`} key={item.title}>
              <div className="package-image-wrap"><img src={item.image} alt={`${item.title} Capri marquee setup`} loading="lazy" />{index === 2 && <span className="package-badge">Popular</span>}</div>
              <div className="package-body"><span className="package-meta">{item.meta}</span><h3>{item.title}</h3><p>{item.copy}</p><Link className="card-link" href={`/packages/${item.slug}`}>View package →</Link></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="content-section soft" id="events">
        <div className="shell">
          <div className="section-row"><div><span className="kicker">For every occasion</span><h2>Different events need different spaces.</h2><p>See how we approach weddings, parties, corporate occasions and larger outdoor events.</p></div><Link href="/events" className="text-link">Explore Events →</Link></div>
          <div className="event-grid">
            {events.map(([slug, title, copy, image]) => <Link href={`/events/${slug}`} className="event-card" key={title}><img src={image} alt={`${title} marquee event`} loading="lazy" /><div className="event-overlay"><span className="event-kicker">It’s Covered</span><h3>{title}</h3><p>{copy}</p><span className="event-link">Explore →</span></div></Link>)}
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Why choose It’s Covered">
        <div className="shell trust-grid">
          {[['01','Family run'],['02','Experienced event setup'],['03','Delivery & installation'],['04','Based in Monmouthshire'],['05','Site visit before confirmation']].map(([number,item])=><div key={item}><span>{number}</span><strong>{item}</strong></div>)}
        </div>
      </section>

      <section className={`content-section ${styles.expectSection}`}>
        <div className="shell">
          <div className="section-heading"><span className="kicker">What to expect</span><h2>Clear online. Properly checked in person.</h2><p>The website gets the useful information together quickly. The site visit then confirms the practical details before anything is final.</p></div>
          <div className={styles.expectGrid}>
            <article><span>01</span><h3>Tell us the basics</h3><p>Date, guest numbers, event type, location and what you want from the space.</p></article>
            <article><span>02</span><h3>We narrow down the setup</h3><p>The booking journey helps identify suitable Capri sizes and useful extras.</p></article>
            <article><span>03</span><h3>We confirm it on site</h3><p>Access, measurements, availability and final pricing are checked before confirmation.</p></article>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner"><div><span className="kicker light">Ready when you are</span><h2>Start with your date.</h2><p>A few details now make the site visit and final quote much easier.</p></div><a className="button button-light button-large" href="#booking">Choose Your Date →</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
