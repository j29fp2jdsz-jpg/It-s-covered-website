import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../site-pages.module.css';

const gallery = [
  ['weddings','Weddings','https://itscovered.co.uk/wp-content/uploads/2026/06/Marquee-Wedding-festival0.jpg'],
  ['parties','Parties','https://itscovered.co.uk/wp-content/uploads/2021/03/Brilliant-party-Newport.jpg'],
  ['corporate','Corporate','https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg'],
  ['festivals-events','Festivals & Events','https://itscovered.co.uk/wp-content/uploads/2018/12/marquee5.jpg']
] as const;

export default function OurWorkPage(){
  return <main>
    <SiteHeader />
    <section className={styles.hero}>
      <img className={styles.heroImage} src="https://itscovered.co.uk/wp-content/uploads/2026/06/Marquee-Wedding-festival0.jpg" alt="It’s Covered Capri marquee event"/>
      <div className={styles.heroOverlay}/>
      <div className={`shell ${styles.heroInner}`}>
        <span className={styles.eyebrow}>Our work</span>
        <h1>See the spaces come to life.</h1>
        <p>Weddings, parties, corporate occasions and outdoor events — all shaped around the venue, the guests and the way the day needs to feel.</p>
      </div>
    </section>

    <section className={styles.section}>
      <div className="shell">
        <div className={styles.sectionHead}>
          <div>
            <span className={styles.label}>Portfolio</span>
            <h2>Choose the kind of event you want to see.</h2>
            <p>We’ve tightened the gallery around the strongest Capri and It’s Covered imagery so the work does the talking.</p>
          </div>
          <Link className="button button-primary" href="/#booking">Choose Your Date →</Link>
        </div>

        <div className={styles.gallery}>
          {gallery.map(([slug,label,image]) => (
            <figure key={slug}>
              <Link href={`/our-work/${slug}`} aria-label={`View ${label} gallery`}>
                <img src={image} alt={`${label} Capri marquee event`} loading="lazy"/>
                <figcaption>{label} <span aria-hidden="true">→</span></figcaption>
              </Link>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section className={`${styles.section} ${styles.soft}`}>
      <div className="shell">
        <div className={styles.sectionHead}>
          <div>
            <span className={styles.label}>Explore by event</span>
            <h2>Looking for something closer to your plans?</h2>
            <p>See what normally matters for each event type, then come back here for visual inspiration.</p>
          </div>
        </div>
        <div className={styles.related}>
          <Link href="/events/weddings">Wedding planning →</Link>
          <Link href="/events/parties">Party planning →</Link>
          <Link href="/events/corporate">Corporate planning →</Link>
          <Link href="/events/festivals-events">Festivals & Events →</Link>
        </div>
      </div>
    </section>

    <section className={styles.cta}>
      <div className={`shell ${styles.ctaInner}`}>
        <div><h2>Seen enough to get started?</h2><p>Choose your date and we’ll start shaping the right Capri setup for your event.</p></div>
        <Link className="button button-light button-large" href="/#booking">Start Your Enquiry →</Link>
      </div>
    </section>
    <SiteFooter />
  </main>
}
