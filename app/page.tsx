import Link from 'next/link';
import BookingWizard from '@/components/BookingWizard';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from './home.module.css';

const packages = [
  { slug:'garden-party', title:'Garden Party', image:'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/20ftx20ft-Capri-Marquee-pkb3062by5kel22h6auixd0e6vqq4oxb593bn22z8y.jpg', copy:'A compact Capri setup for smaller celebrations and relaxed garden events.', meta:'20ft × 20ft · intimate events' },
  { slug:'informal-party', title:'Informal Party', image:'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/28x28-Caerleon-p3melmwu7h56y7kk1685e7gq9bc6fk45a9i479ymsy.jpg', copy:'Flexible space for guests to mingle, eat, drink and celebrate.', meta:'Flexible layout · standing up to 55' },
  { slug:'large-party', title:'Large Party', image:'https://itscovered.co.uk/wp-content/uploads/2021/03/Open-double-canopy.jpg', copy:'More room for a lively celebration, bar areas and larger guest numbers.', meta:'28ft × 38ft · standing up to 100' },
  { slug:'45-guests', title:'45 Guests', image:'https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg', copy:'A comfortable seated setup with tables, chairs and matting included.', meta:'Seated layout · around 45 guests' },
  { slug:'80-guests', title:'80 Guests', image:'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/Roath-Church-wedding-guests-2-p3mn5mp1l6rj6g6xkazcehi1ih9wl6tvmoxp79anzm.jpg', copy:'A larger seated Capri setup for weddings, parties and hospitality.', meta:'Seated layout · up to 80' },
];

const work = [
  ['weddings','Golden-hour wedding','A warm, elegant Capri setting for an unforgettable reception.','/images/hero-premium-mobile.svg'],
  ['parties','Garden celebration','Bright, relaxed and open — ideal for a polished garden occasion.','/images/work-premium-garden.svg'],
  ['festivals-events','Outdoor event','Capri marquees scaled up for a lively outdoor event.', 'https://itscovered.co.uk/wp-content/uploads/2026/06/Marquee-Wedding-festival0.jpg'],
] as const;

const events = [
  ['weddings', 'Weddings', 'Ceremonies, receptions and evening celebrations.'],
  ['parties', 'Parties', 'Birthdays, anniversaries, engagements and garden celebrations.'],
  ['corporate', 'Corporate', 'Hospitality, launches, team events and client occasions.'],
  ['festivals-events', 'Festivals & Events', 'Public events, shows, community gatherings and festivals.'],
] as const;

export default function Home() {
  return (
    <main className={styles.homeRoot}>
      <SiteHeader />

      <section className="hero" id="home">
        <picture className={styles.heroPicture} aria-hidden="true">
          <source media="(max-width: 720px)" srcSet="/images/hero-premium-mobile.svg" />
          <img src="/images/hero-premium-desktop.svg" alt="" />
        </picture>
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <div className="hero-copy-wrap">
            <p className="eyebrow">Capri marquee hire across South Wales & beyond</p>
            <h1>Unforgettable events<br /><span>start here.</span></h1>
            <p className="hero-copy">Distinctive Capri marquees for weddings, parties, corporate events and outdoor occasions — professionally installed and planned around your venue.</p>
            <div className="hero-actions">
              <a className="button button-primary button-large" href="#booking">Choose Your Date</a>
              <Link className="button button-ghost button-large" href="/our-work">See Our Work <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.workFirst} aria-labelledby="work-heading">
        <div className="shell">
          <div className={styles.workHead}>
            <div>
              <span className="kicker">Inspired by unforgettable events</span>
              <h2 id="work-heading">This is the feeling we’re creating.</h2>
              <p>From bright garden celebrations to golden-hour receptions, Capri marquees can completely transform an outdoor space.</p>
            </div>
            <Link className={`button button-outline ${styles.desktopCta}`} href="/our-work">View Full Gallery →</Link>
          </div>
          <div className={styles.workCarousel} aria-label="Capri marquee inspiration">
            {work.map(([slug,title,copy,image]) => (
              <Link key={slug} href={`/our-work?filter=${slug}`} className={styles.workSlide}>
                <img src={image} alt={`${title} Capri marquee inspiration`} loading="lazy" />
                <div className={styles.workCopy}><strong>{title}</strong><small>{copy}</small></div>
              </Link>
            ))}
          </div>
          <div className={styles.carouselHint}><span>Swipe to explore</span><Link href="/our-work">View full gallery →</Link></div>
        </div>
      </section>

      <section className="booking-section booking-section-direct" id="booking">
        <div className="shell">
          <div className={`section-heading centered booking-heading ${styles.bookingIntro}`}>
            <span className="kicker">Start here</span>
            <h2>Choose your event date.</h2>
            <p>Tell us the date first. We’ll guide you through the rest without making the process feel like paperwork.</p>
          </div>
          <BookingWizard />
        </div>
      </section>

      <section className={`content-section packages-section ${styles.packagesSection}`} id="packages">
        <div className="shell">
          <div className="section-row">
            <div><span className="kicker">Marquee packages</span><h2>Five sensible starting points.</h2><p>Swipe through the range, then open the package closest to what you have in mind.</p></div>
            <Link className="button button-primary" href="/packages">Compare All Packages →</Link>
          </div>
          <div className={styles.packageCarousel} aria-label="All marquee packages">
            {packages.map((item, index) => (
              <article className={`${styles.packageSlide} ${index === 4 ? styles.packageFeatured : ''}`} key={item.title}>
                <Link href={`/packages/${item.slug}`} className={styles.packageImageLink} aria-label={`View ${item.title} package`}>
                  <img src={item.image} alt={`${item.title} Capri marquee setup`} loading="lazy" />
                  {index === 4 && <span className={styles.packageBadge}>Popular</span>}
                </Link>
                <div className={styles.packageBody}>
                  <span className={styles.packageMeta}>{item.meta}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <Link className={styles.packageLink} href={`/packages/${item.slug}`}>View package →</Link>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.carouselHint}><span>Swipe to compare packages</span><Link href="/packages">View all details →</Link></div>
        </div>
      </section>

      <section className={styles.eventLinks} id="events">
        <div className="shell">
          <div className={styles.eventLinksHead}>
            <div><span className="kicker">Planning something?</span><h2>Find advice for your kind of event.</h2></div>
            <Link href="/events" className="text-link">Explore all events →</Link>
          </div>
          <div className={styles.eventLinkGrid}>
            {events.map(([slug,title,copy]) => (
              <Link href={`/events/${slug}`} className={styles.eventLinkCard} key={slug}>
                <strong>{title}</strong><span>{copy}</span><b aria-hidden="true">→</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.slimCta}>
        <div className="shell">
          <div className={styles.slimCtaInner}>
            <div><span className="kicker light">Ready when you are</span><h2>Already know your date?</h2></div>
            <a className="button button-light" href="#booking">Start your enquiry →</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
