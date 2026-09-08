import Link from 'next/link';
import BookingWizard from '@/components/BookingWizard';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from './home.module.css';

const packages = [
  { slug:'garden-party', title:'Garden Party', image:'/images/carousel-garden.jpg', copy:'A compact Capri setup for smaller celebrations and relaxed garden events.', meta:'20ft × 20ft · intimate events' },
  { slug:'informal-party', title:'Informal Party', image:'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/28x28-Caerleon-p3melmwu7h56y7kk1685e7gq9bc6fk45a9i479ymsy.jpg', copy:'Flexible space for guests to mingle, eat, drink and celebrate.', meta:'Flexible layout · standing up to 55' },
  { slug:'large-party', title:'Large Party', image:'https://itscovered.co.uk/wp-content/uploads/2021/03/Open-double-canopy.jpg', copy:'More room for a lively celebration, bar areas and larger guest numbers.', meta:'28ft × 38ft · standing up to 100' },
  { slug:'45-guests', title:'45 Guests', image:'https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg', copy:'A comfortable seated setup with tables, chairs and matting included.', meta:'Seated layout · around 45 guests' },
  { slug:'80-guests', title:'80 Guests', image:'/images/carousel-wedding.jpg', copy:'A larger seated Capri setup for weddings, parties and hospitality.', meta:'Seated layout · up to 80' },
];

const work = [
  ['weddings','Weddings','Golden-hour wedding reception','/images/carousel-wedding.jpg'],
  ['parties','Garden Parties','Bright daytime Capri setup','/images/carousel-garden.jpg'],
  ['corporate','Larger Events','Professional linked Capri layouts','https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg'],
  ['festivals-events','Outdoor Events','Flexible cover for larger occasions','https://itscovered.co.uk/wp-content/uploads/2018/12/marquee5.jpg'],
] as const;

const events = [
  ['weddings', 'Weddings', 'Create a beautiful setting for your big day.', '/images/carousel-wedding.jpg'],
  ['parties', 'Parties', 'Birthdays, anniversaries, engagements and more.', '/images/carousel-garden.jpg'],
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
              <span className="kicker">Our work</span>
              <h2 id="work-heading">A glimpse of what’s possible.</h2>
              <p>Swipe through a few standout setups, then explore the full gallery if you want more inspiration.</p>
            </div>
            <Link className={`button button-outline ${styles.desktopCta}`} href="/our-work">View Full Gallery →</Link>
          </div>
          <div className={styles.workCarousel} aria-label="Featured It’s Covered work">
            {work.map(([slug,title,copy,image]) => (
              <Link key={slug} href={`/our-work?filter=${slug}`} className={styles.workSlide}>
                <img src={image} alt={`${title} marquee setup`} loading="lazy" />
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
            <span className="kicker">Ready to start?</span>
            <h2>Choose your event date.</h2>
            <p>Start with the date. We’ll guide you through your event details, suitable Capri options and any extras.</p>
          </div>
          <BookingWizard />
        </div>
      </section>

      <section className={`content-section packages-section ${styles.packagesSection}`} id="packages">
        <div className="shell">
          <div className="section-row">
            <div><span className="kicker">Marquee packages</span><h2>See every package without filling the page.</h2><p>Swipe through the full range and open any package for the detailed setup, capacity and inclusions.</p></div>
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

      <section className="content-section soft" id="events">
        <div className="shell">
          <div className="section-row"><div><span className="kicker">For every occasion</span><h2>Different events need different spaces.</h2><p>See how we approach weddings, parties, corporate occasions and larger outdoor events.</p></div><Link href="/events" className="text-link">Explore Events →</Link></div>
          <div className="event-grid">
            {events.map(([slug, title, copy, image]) => <Link href={`/events/${slug}`} className="event-card" key={title}><img src={image} alt={`${title} marquee event`} loading="lazy" /><div className="event-overlay"><span className="event-kicker">It’s Covered</span><h3>{title}</h3><p>{copy}</p><span className="event-link">Explore →</span></div></Link>)}
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
