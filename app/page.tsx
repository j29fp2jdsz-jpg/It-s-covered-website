import Image from 'next/image';
import Link from 'next/link';
import BookingWizard from '@/components/BookingWizard';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from './home.module.css';

const moments = [
  { href:'/events/weddings', title:'Wedding receptions', category:'Weddings', image:'/images/weddings/wedding-castle.webp' },
  { href:'/events/parties', title:'Garden parties', category:'Parties', image:'/images/parties/party-birthday.webp' },
  { href:'/events/corporate', title:'Speaker & stage setups', category:'Corporate', image:'/images/corporate/corporate-stage.webp' },
  { href:'/events/festivals-events', title:'Rugby festivals', category:'Festivals & Events', image:'/images/events/event-rugby.webp' },
  { href:'/events/festivals-events', title:'Motorsport event villages', category:'Festivals & Events', image:'/images/events/event-motocross.webp' },
  { href:'/events/festivals-events', title:'Race registration', category:'Festivals & Events', image:'/images/events/event-registration.webp' },
  { href:'/events/weddings', title:'Country weddings', category:'Weddings', image:'/images/weddings/wedding-countryside.webp' },
  { href:'/events/parties', title:'Outdoor celebrations', category:'Parties', image:'/images/parties/party-beach.webp' },
] as const;

const packages = [
  { slug:'garden-party', title:'Garden Party', image:'/images/parties/party-garden.webp', meta:'20ft × 20ft', copy:'Compact and relaxed for smaller celebrations.' },
  { slug:'informal-party', title:'Informal Party', image:'/images/parties/party-engagement.webp', meta:'Flexible party layout', copy:'Space to mingle, eat, drink and celebrate.' },
  { slug:'large-party', title:'Large Party', image:'/images/parties/party-beach.webp', meta:'28ft × 38ft', copy:'More room for busier parties and larger guest numbers.' },
  { slug:'45-guests', title:'45 Guests', image:'/images/weddings/wedding-countryside.webp', meta:'Seated around 45', copy:'A comfortable seated package with the essentials covered.' },
  { slug:'80-guests', title:'80 Guests', image:'/images/weddings/wedding-castle-reception.webp', meta:'Seated up to 80', copy:'A larger Capri setup for weddings and hospitality.' },
] as const;

const testimonials = [
  { quote:'Everything felt straightforward from the first conversation through to setup.', name:'South Wales event customer' },
  { quote:'The marquee completely changed the space and the practical side was made easy.', name:'Private event customer' },
  { quote:'Professional, flexible and genuinely helpful when we were working out what would fit.', name:'Event organiser' },
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
            <p>Weddings, parties, corporate occasions, festivals and outdoor events — professionally installed around your venue.</p>
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
            <h2>One distinctive marquee. Loads of possibilities.</h2>
          </div>
          <div className={styles.introCopy}>
            <p>Based in Monmouthshire, we create flexible Capri marquee spaces for events across South Wales and beyond — then handle the setup properly.</p>
            <div className={styles.proofRow}>
              <span>Family run</span>
              <span>Professional setup</span>
              <span>Site visit before confirmation</span>
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

      <section className={'booking-section booking-section-direct ' + styles.bookingSection} id="booking">
        <div className="shell">
          <div className={'section-heading centered booking-heading ' + styles.bookingIntro}>
            <span className="kicker">Plan your event</span>
            <h2>Start with your date.</h2>
            <p>Tell us when and what you’re planning. The portal guides you through the rest, then we confirm the details with a site visit.</p>
          </div>
          <BookingWizard />
        </div>
      </section>

      <section className={styles.packages} id="packages">
        <div className="shell">
          <div className={styles.sectionHead}>
            <div>
              <span className="kicker">Marquee packages</span>
              <h2>A simple place to start.</h2>
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
                  <Link href={'/packages/' + item.slug}>View package →</Link>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.swipeHint}>Swipe to compare →</div>
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
