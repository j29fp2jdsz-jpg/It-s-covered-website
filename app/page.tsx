import Link from 'next/link';
import BookingWizard from '@/components/BookingWizard';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from './home.module.css';

const packages = [
  {
    slug: 'garden-party',
    title: 'Garden Party',
    image: 'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/20ftx20ft-Capri-Marquee-pkb3062by5kel22h6auixd0e6vqq4oxb593bn22z8y.jpg',
    copy: 'A beautifully simple Capri setup for smaller gatherings, birthdays and relaxed celebrations.',
    meta: 'Ideal for intimate events',
  },
  {
    slug: 'informal-party',
    title: 'Informal Party',
    image: 'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/28x28-Caerleon-p3melmwu7h56y7kk1685e7gq9bc6fk45a9i479ymsy.jpg',
    copy: 'Flexible Capri space for family parties, engagements and easy-going get-togethers.',
    meta: 'Space to relax and celebrate',
  },
  {
    slug: '80-guests',
    title: '80 Guests',
    image: 'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/Roath-Church-wedding-guests-2-p3mn5mp1l6rj6g6xkazcehi1ih9wl6tvmoxp79anzm.jpg',
    copy: 'A spacious choice for weddings, larger parties and polished corporate occasions.',
    meta: 'Made for larger celebrations',
  },
];

const work = [
  ['weddings', 'Weddings', 'Elegant settings for the whole day.', 'https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg'],
  ['parties', 'Parties', 'Relaxed, lively spaces built around your guests.', 'https://itscovered.co.uk/wp-content/uploads/2021/03/Brilliant-party-Newport.jpg'],
  ['corporate', 'Corporate', 'Professional layouts for hospitality and events.', 'https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg'],
  ['festivals-events', 'Festivals & Events', 'Flexible cover for bigger outdoor occasions.', 'https://itscovered.co.uk/wp-content/uploads/2018/12/marquee5.jpg'],
];

const events = [
  ['weddings', 'Weddings', 'Create a beautiful setting for your big day.', 'https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg'],
  ['parties', 'Parties', 'From birthdays to anniversaries and everything in between.', 'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/Party-Marquee-Dog-p3meq7elfheddyxmcnbv0jye7qteul968vo36p6qk2.jpg'],
  ['corporate', 'Corporate', 'Professional marquee solutions for business events.', 'https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg'],
  ['festivals-events', 'Festivals & Events', 'Flexible cover for shows, community events and festivals.', 'https://itscovered.co.uk/wp-content/uploads/2018/12/marquee5.jpg'],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <div className="hero-copy-wrap">
            <p className="eyebrow">Marquee hire across South Wales & beyond</p>
            <h1>Unforgettable events<br /><span>start here.</span></h1>
            <p className="hero-copy">Distinctive Capri marquees, professionally installed for weddings, parties, corporate events and larger outdoor occasions.</p>
            <div className="hero-actions">
              <Link className="button button-primary button-large" href="/our-work">See Our Work <span aria-hidden="true">→</span></Link>
              <a className="button button-ghost button-large" href="#booking">Choose Your Date</a>
            </div>
            <div className="hero-proof" aria-label="Why choose It's Covered">
              <span>Family run</span><span>Professional setup</span><span>Monmouthshire based</span>
            </div>
            <div className={styles.heroNote}>Capri marquees • proven event setups • personal service</div>
          </div>
        </div>
      </section>

      <section className={styles.workFirst} aria-labelledby="work-first-title">
        <div className="shell">
          <div className={styles.workHead}>
            <div>
              <span className="kicker">See what we do</span>
              <h2 id="work-first-title">Real events before you start planning yours.</h2>
              <p>Have a look at the kind of spaces It’s Covered already creates, then start your enquiry when you’re ready.</p>
            </div>
            <Link className={`button button-outline ${styles.desktopCta}`} href="/our-work">View all our work →</Link>
          </div>
          <div className={styles.workGrid}>
            {work.map(([slug, title, copy, image]) => (
              <Link className={styles.workCard} href={`/our-work/${slug}`} key={slug}>
                <img src={image} alt={`${title} marquee by It’s Covered`} loading="lazy" />
                <div className={styles.workCopy}>
                  <span>Our work</span>
                  <strong>{title}</strong>
                  <small>{copy}</small>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="booking-section booking-section-direct" id="booking">
        <div className="shell">
          <div className={`section-heading centered booking-heading booking-heading-direct ${styles.bookingIntro}`}>
            <span className="kicker">Ready to start?</span>
            <h2>Choose your event date</h2>
            <p>Start with the date. We’ll then guide you through the event, suitable Capri marquee options, extras and your provisional estimate.</p>
            <div className={styles.bookingFlow} aria-label="Booking steps">
              <span>1 Date</span><span>2 Event</span><span>3 Marquee</span><span>4 Extras</span><span>5 Estimate</span>
            </div>
          </div>
          <BookingWizard />
          <p className={`centered ${styles.brandRule}`}><strong>Visual rule:</strong> marquee imagery on this site represents Capri marquees or documented It’s Covered installations.</p>
        </div>
      </section>

      <section className="content-section packages-section" id="packages">
        <div className="shell">
          <div className="section-row">
            <div><span className="kicker">Popular choices</span><h2>Marquee packages made simple</h2><p>Popular starting points using the Capri marquee range, with more sizes and layouts available.</p></div>
            <Link className="button button-primary" href="/packages">View All Marquee Packages <span aria-hidden="true">→</span></Link>
          </div>
          <div className="package-grid">
            {packages.map((item, index) => (
              <article className={`package-card ${index === 2 ? 'package-featured' : ''}`} key={item.title}>
                <div className="package-image-wrap">
                  <img src={item.image} alt={`${item.title} Capri marquee setup`} loading="lazy" />
                  {index === 2 && <span className="package-badge">Popular</span>}
                </div>
                <div className="package-body">
                  <span className="package-meta">{item.meta}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <Link className="card-link" href={`/packages/${item.slug}`}>View package <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section soft" id="events">
        <div className="shell">
          <div className="section-row"><div><span className="kicker">For every occasion</span><h2>Whatever you’re planning, we’ve got you covered.</h2><p>Flexible marquee spaces shaped around the way you want your event to feel.</p></div><Link href="/events" className="text-link">Explore all events →</Link></div>
          <div className="event-grid">
            {events.map(([slug, title, copy, image]) => (
              <Link href={`/events/${slug}`} className="event-card" key={title}>
                <img src={image} alt={`${title} marquee event`} loading="lazy" />
                <div className="event-overlay"><span className="event-kicker">It’s Covered</span><h3>{title}</h3><p>{copy}</p><span className="event-link">See what’s included <span aria-hidden="true">→</span></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Why customers choose It's Covered">
        <div className="shell trust-grid">
          {[
            ['01', 'Family run'], ['02', 'Trusted & experienced'], ['03', 'Delivery & professional setup'], ['04', 'Based in Monmouthshire'], ['05', 'Events of all sizes']
          ].map(([number, item]) => <div key={item}><span>{number}</span><strong>{item}</strong></div>)}
        </div>
      </section>

      <section className="content-section testimonials">
        <div className="shell">
          <div className="section-heading"><span className="kicker">What customers say</span><h2>Trusted for memorable events</h2><p>Good events feel effortless. That’s the standard we want every customer to experience.</p></div>
          <div className="testimonial-grid">
            <blockquote><div className="stars" aria-label="5 out of 5 stars">★★★★★</div>“Absolutely fantastic from start to finish. The marquee looked incredible and the team were a pleasure to work with.”<cite>Private event customer</cite></blockquote>
            <blockquote><div className="stars" aria-label="5 out of 5 stars">★★★★★</div>“Professional, reliable and great value. Made our event stress free.”<cite>Corporate client</cite></blockquote>
            <blockquote><div className="stars" aria-label="5 out of 5 stars">★★★★★</div>“Can’t recommend It’s Covered enough. The whole process was easy and the marquee was perfect.”<cite>Private party customer</cite></blockquote>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner"><div><span className="kicker light">Ready when you are</span><h2>Let’s make your event extraordinary.</h2><p>Choose your date, tell us about your event and take the first step today.</p></div><a className="button button-light button-large" href="#booking">Choose Your Date <span aria-hidden="true">→</span></a></div>
      </section>

      <a className={styles.mobileBookingBar} href="#booking">Choose Your Date →</a>
      <SiteFooter />
    </main>
  );
}
