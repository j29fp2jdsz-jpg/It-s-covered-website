import Link from 'next/link';
import BookingWizard from '@/components/BookingWizard';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from './home.module.css';

const eventShowcase = [
  {
    slug: 'weddings',
    title: 'Weddings',
    copy: 'Elegant outdoor spaces for ceremonies, receptions and evening celebrations.',
    image: '/images/weddings/wedding-castle.webp',
  },
  {
    slug: 'parties',
    title: 'Parties',
    copy: 'Birthday, engagement and garden celebrations with room to make them your own.',
    image: '/images/parties/party-birthday.webp',
  },
  {
    slug: 'corporate',
    title: 'Corporate',
    copy: 'Hospitality, networking, launches and practical event spaces with a polished finish.',
    image: '/images/corporate/corporate-stage.webp',
  },
  {
    slug: 'festivals-events',
    title: 'Festivals & Events',
    copy: 'Rugby, motorsport, race villages, festivals and larger outdoor occasions.',
    image: '/images/events/event-rugby.webp',
  },
] as const;

const packages = [
  { slug:'garden-party', title:'Garden Party', image:'/images/parties/party-garden.webp', meta:'20ft × 20ft', copy:'A compact starting point for smaller celebrations.' },
  { slug:'informal-party', title:'Informal Party', image:'/images/parties/party-engagement.webp', meta:'Flexible party layout', copy:'A relaxed setup for guests to mingle, eat and drink.' },
  { slug:'large-party', title:'Large Party', image:'/images/parties/party-beach.webp', meta:'28ft × 38ft', copy:'More room for busy parties, bars and larger guest numbers.' },
  { slug:'45-guests', title:'45 Guests', image:'/images/weddings/wedding-countryside.webp', meta:'Seated around 45', copy:'A comfortable seated package with the essentials covered.' },
  { slug:'80-guests', title:'80 Guests', image:'/images/weddings/wedding-castle-reception.webp', meta:'Seated up to 80', copy:'A larger Capri setup for weddings, hospitality and events.' },
] as const;

const testimonials = [
  { quote: 'Everything felt straightforward from the first conversation through to setup.', name: 'South Wales event customer' },
  { quote: 'The marquee completely changed the space and the team made the practical side easy.', name: 'Private event customer' },
  { quote: 'Professional, flexible and genuinely helpful when we were working out what would fit.', name: 'Event organiser' },
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
            <p className="eyebrow">Capri marquee hire across South Wales & beyond</p>
            <h1>Beautiful spaces.<br />Made for real events.</h1>
            <p>Distinctive Capri marquees for weddings, parties, corporate occasions, festivals and outdoor events.</p>
            <div className={styles.heroActions}>
              <a className="button button-primary button-large" href="#booking">Choose Your Date</a>
              <Link className="button button-ghost button-large" href="/our-work">See Our Work →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={'shell ' + styles.introGrid}>
          <div>
            <span className="kicker">It’s Covered Marquee Hire</span>
            <h2>One marquee style. A lot of different possibilities.</h2>
          </div>
          <div className={styles.introCopy}>
            <p>Based in Monmouthshire and working across South Wales and beyond, It’s Covered creates practical, good-looking event spaces around the people, venue and occasion.</p>
            <div className={styles.proofRow}>
              <span>Family run</span>
              <span>Professional setup</span>
              <span>Site visit before confirmation</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.showcase}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <div>
              <span className="kicker">What are you planning?</span>
              <h2>Different events. Different spaces.</h2>
            </div>
            <Link href="/events" className="text-link">Explore all events →</Link>
          </div>

          <div className={styles.showcaseGrid}>
            {eventShowcase.map((event) => (
              <Link href={'/events/' + event.slug} className={styles.showcaseItem} key={event.slug}>
                <div className={styles.showcaseImageWrap}>
                  <img src={event.image} alt={event.title + ' Capri marquee'} loading="lazy" />
                </div>
                <div className={styles.showcaseText}>
                  <div>
                    <h3>{event.title}</h3>
                    <p>{event.copy}</p>
                  </div>
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={'booking-section booking-section-direct ' + styles.bookingSection} id="booking">
        <div className="shell">
          <div className={'section-heading centered booking-heading ' + styles.bookingIntro}>
            <span className="kicker">Plan your event</span>
            <h2>Start with your date.</h2>
            <p>The booking portal handles the practical side. Tell us the date, event, marquee and extras, then we’ll confirm the final details on site.</p>
          </div>
          <BookingWizard />
        </div>
      </section>

      <section className={styles.packages} id="packages">
        <div className="shell">
          <div className={styles.sectionHead}>
            <div>
              <span className="kicker">Marquee packages</span>
              <h2>Useful starting points, not rigid boxes.</h2>
            </div>
            <Link href="/packages" className="text-link">Compare all packages →</Link>
          </div>

          <div className={styles.packageRail}>
            {packages.map((item) => (
              <article className={styles.packageTile} key={item.slug}>
                <Link href={'/packages/' + item.slug} className={styles.packageImage}>
                  <img src={item.image} alt={item.title + ' marquee package'} loading="lazy" />
                </Link>
                <div className={styles.packageText}>
                  <span>{item.meta}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <Link href={'/packages/' + item.slug}>View package →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.realWork}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <div>
              <span className="kicker">Visual inspiration</span>
              <h2>See how different event styles can feel.</h2>
            </div>
            <Link href="/events" className="text-link">Explore event ideas →</Link>
          </div>

          <div className={styles.realWorkGrid}>
            <figure>
              <img src="/images/events/event-motocross.webp" alt="Capri marquee used at a motocross event" loading="lazy" />
              <figcaption>Motorsport event village and hospitality</figcaption>
            </figure>
            <figure>
              <img src="/images/events/event-registration.webp" alt="Capri marquee used for race registration" loading="lazy" />
              <figcaption>Running event registration and race support</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <div>
              <span className="kicker">What customers value</span>
              <h2>Easy to deal with. Properly organised.</h2>
            </div>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((item) => (
              <blockquote key={item.quote}>
                <p>“{item.quote}”</p>
                <footer>{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="shell">
          <div className={styles.finalCtaInner}>
            <div>
              <span className="kicker light">Ready when you are</span>
              <h2>Have a date in mind?</h2>
              <p>Start your enquiry online and we’ll take it from there.</p>
            </div>
            <a className="button button-light button-large" href="#booking">Start Your Booking →</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
