import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import WorkGallery from '@/components/WorkGallery';
import styles from './our-work.module.css';

export default function OurWorkPage(){
  return <main>
    <SiteHeader />
    <section className={styles.simpleHero}>
      <div className="shell">
        <span className={styles.eyebrow}>Our work</span>
        <h1>Picture the possibilities.</h1>
        <p>Weddings, parties, hospitality, sport and outdoor events — browse the visual styles and layouts that can be created with Capri marquees.</p>
      </div>
    </section>

    <section className={styles.section}>
      <div className="shell">
        <div className={styles.intro}>
          <div>
            <span className={styles.label}>Gallery</span>
            <h2>Less explaining. More showing.</h2>
            <p>Use the filters to jump between different event types.</p>
          </div>
        </div>
        <WorkGallery classes={styles} />
      </div>
    </section>

    <section className={styles.cta}>
      <div className={'shell ' + styles.ctaInner}>
        <div><h2>Found the sort of feel you want?</h2><p>Start with your date and we’ll work out the practical setup.</p></div>
        <Link className="button button-light button-large" href="/#booking">Start Your Booking →</Link>
      </div>
    </section>
    <SiteFooter />
  </main>
}