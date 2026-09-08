import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import WorkGallery from '@/components/WorkGallery';
import styles from './our-work.module.css';

export default function OurWorkPage(){
  return <main>
    <SiteHeader />
    <section className={styles.hero}>
      <img src="https://itscovered.co.uk/wp-content/uploads/2026/06/Marquee-Wedding-festival0.jpg" alt="It’s Covered Capri marquee event"/>
      <div className={styles.overlay}/>
      <div className={`shell ${styles.heroInner}`}>
        <span className={styles.eyebrow}>Our work</span>
        <h1>Real events. Extraordinary settings.</h1>
        <p>Explore weddings, parties, corporate occasions and outdoor events, all brought to life with distinctive Capri marquees and thoughtful layouts.</p>
      </div>
    </section>

    <section className={styles.section}>
      <div className="shell">
        <div className={styles.intro}>
          <div>
            <span className={styles.label}>Portfolio</span>
            <h2>Browse the work without the clutter.</h2>
            <p>Use the filters to jump straight to the kind of event you’re planning.</p>
          </div>
          <Link className="button button-primary" href="/#booking">Choose Your Date →</Link>
        </div>
        <WorkGallery classes={styles} />
      </div>
    </section>

    <section className={styles.cta}>
      <div className={`shell ${styles.ctaInner}`}>
        <div><h2>Seen something you like?</h2><p>Start with your date and we’ll guide you towards the right setup.</p></div>
        <Link className="button button-light button-large" href="/#booking">Choose Your Date →</Link>
      </div>
    </section>
    <SiteFooter />
  </main>
}
