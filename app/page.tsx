import Image from 'next/image';
import Link from 'next/link';
import BookingWizard from '@/components/BookingWizard';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from './home.module.css';

const moments = [
  { href:'/events/weddings', title:'Wedding receptions', category:'Weddings', image:'/images/real-work/wedding-day-capri.webp' },
  { href:'/events/parties', title:'Garden parties', category:'Parties', image:'/images/real-work/garden-evening.jpg' },
  { href:'/events/corporate', title:'Speaker & stage setups', category:'Corporate', image:'/images/corporate/corporate-stage.webp' },
  { href:'/events/festivals-events', title:'Rugby festivals', category:'Festivals & Events', image:'/images/events/event-rugby.webp' },
  { href:'/events/festivals-events', title:'Motorsport event villages', category:'Festivals & Events', image:'/images/events/event-motocross.webp' },
  { href:'/events/festivals-events', title:'Race registration', category:'Festivals & Events', image:'/images/events/event-registration.webp' },
  { href:'/events/weddings', title:'Wedding celebrations', category:'Weddings', image:'/images/weddings/wedding-countryside.webp' },
  { href:'/events/festivals-events', title:'Beach festivals', category:'Festivals & Events', image:'/images/events/event-beach.webp' },
] as const;

const packages = [
  { slug:'garden-party', title:'Garden Party', image:'/images/parties/party-garden.webp', meta:'20ft × 20ft', copy:'18-seat garden setup with tables, chairs, lighting and side walls.' },
  { slug:'informal-party', title:'Informal Party', image:'/images/parties/party-engagement.webp', meta:'Flexible party layout', copy:'Standing party setup for up to 55 with lighting and side walls.' },
  { slug:'large-party', title:'Large Party', image:'/images/parties/party-birthday.webp', meta:'28ft × 38ft', copy:'28ft × 38ft standing setup for celebrations of up to 100.' },
  { slug:'45-guests', title:'45 Guests', image:'/images/weddings/wedding-castle.webp', meta:'Seated around 45', copy:'Seated setup for 45 with tables, chairs, matting and side walls.' },
  { slug:'80-guests', title:'80 Guests', image:'/images/weddings/wedding-castle-reception.webp', meta:'Seated up to 80', copy:'Seated setup for 80 with tables, chairs, matting and side walls.' },
] as const;

export default function Home() {
  return (
    <main className={styles.homeRoot}>
      <SiteHeader />

      <section className={styles.hero} id="home">
        <picture>
          <source media="(max-width: 720px)" srcSet="/images/hero/hero-mobile.webp" />
          <img className={styles.heroImage} src="/images/hero/hero-desktop.webp" alt="Capri marquee event at golden hour" />
        </picture>
        <div className={styles.heroShade} />
        <div className={'shell ' + styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Marquee hire across South Wales & beyond</p>
            <h1>Beautiful spaces.<br />Made for real events.</h1>
            <p>Distinctive Capri and Hex marquees for weddings, garden parties, corporate hospitality, race villages and outdoor events across South Wales.</p>
            <div className={styles.heroActions}>
              <a className="button button-primary button-large" href="#booking">Start Your Booking</a>
              <Link className="button button-ghost button-large" href="/our-work">See Our Work →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className="shell">
          <div className={styles.introPanel}>
            <div className={styles.introLead}>
              <span className="kicker">It’s Covered Marquee Hire</span>
              <h2>Distinctive marquees.<br />Built around your event.</h2>
            </div>
            <div className={styles.introDetails}>
              <p>Based in Monmouthshire, we supply and install Capri and Hex marquees, then shape the layout around your guest numbers, venue access and how the space needs to be used.</p>
              <div className={styles.proofGrid}>
                <div><span className={styles.proofIcon}>✓</span><strong>Family run</strong></div>
                <div><span className={styles.proofIcon}>✓</span><strong>Capri + Hex options</strong></div>
                <div><span className={styles.proofIcon}>✓</span><strong>Professional setup</strong></div>
                <div><span className={styles.proofIcon}>✓</span><strong>Site visit before confirmation</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.moments}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <div>
              <span className="kicker">Made for more than one kind of event</span>
              <h2>From weddings to race days.</h2>
            </div>
            <Link href="/events" className="text-link">Explore events →</Link>
          </div>

          <div className={styles.momentRail} aria-label="Different event types">
            {moments.map((item) => (
              <Link className={styles.momentCard} href={item.href} key={item.title}>
                <div className={styles.momentImage}>
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 720px) 78vw, (max-width: 1100px) 38vw, 27vw" />
                </div>
                <div className={styles.momentCaption}>
                  <span>{item.category}</span>
                  <strong>{item.title}</strong>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.swipeHint}>Swipe to see more →</div>
        </div>
      </section>


      <section className={styles.packages} id="packages">
        <div className="shell">
          <div className={styles.sectionHead}>
            <div>
              <span className="kicker">Marquee packages</span>
              <h2>Pick the setup closest to your event.</h2>
            </div>
            <Link href="/packages" className="text-link">Compare all packages →</Link>
          </div>

          <div className={styles.packageRail} aria-label="Marquee packages">
            {packages.map((item) => (
              <article className={styles.packageTile} key={item.slug}>
                <Link href={'/packages/' + item.slug} className={styles.packageImage}>
                  <Image src={item.image} alt={item.title + ' marquee package'} fill sizes="(max-width:720px) 86vw, (max-width:1100px) 42vw, 30vw" />
                </Link>
                <div className={styles.packageText}>
                  <span>{item.meta}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div className={styles.packageLinks}><Link href={'/packages/' + item.slug}>View package →</Link><Link href={'/?package=' + item.slug + '#booking'}>Choose this package →</Link></div>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.swipeHint}>Swipe to compare →</div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <div>
              <span className="kicker">Before you book</span>
              <h2>Useful answers before we visit the site.</h2>
            </div>
          </div>
          <div className={styles.faqGrid}>
            <details>
              <summary>How do I know which marquee or package I need?</summary>
              <p>Start with your guest numbers and whether the event is seated, standing or mixed. The planner also asks about bars, buffets, dance floors, surface and access so we can narrow down a practical starting setup.</p>
            </details>
            <details>
              <summary>Can I start an enquiry before every detail is decided?</summary>
              <p>Yes. A date, guest count and venue postcode are enough to begin. You can add the package, layout and extras you already know about, then the practical details are refined before final confirmation.</p>
            </details>
            <details>
              <summary>What extras can I include?</summary>
              <p>The planner currently covers tables, chairs, flooring, lighting, heating, dance floor, side walls and furniture. Package items are shown separately from anything you add.</p>
            </details>
            <details>
              <summary>Do you carry out a site visit?</summary>
              <p>Yes. Access, measurements, surface, proposed layout and final event details are checked before the setup is confirmed.</p>
            </details>
            <details>
              <summary>Do you only have Capri marquees?</summary>
              <p>No. Alongside the Capri range, It’s Covered also has two Hex marquees. Tell us about the site and event and we can confirm which style is the better fit.</p>
            </details>
            <details>
              <summary>Where do you cover?</summary>
              <p>It’s Covered is based in Monmouthshire and works across South Wales and beyond. Event location is captured in the booking planner so travel and site logistics can be checked properly.</p>
            </details>
          </div>
        </div>
      </section>

      <section className={'booking-section booking-section-direct ' + styles.bookingSection} id="booking">
        <div className="shell">
          <div className={'section-heading centered booking-heading ' + styles.bookingIntro}>
            <span className="kicker">Plan your event</span>
            <h2>Start with your date.</h2>
            <p>Choose the date, tell us the event type and guest count, then add the furniture or extras your setup needs.</p>
          </div>
          <BookingWizard />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
