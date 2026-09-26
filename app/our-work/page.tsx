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
        <p>Browse wedding receptions, garden parties, corporate setups, rugby hospitality, race registration and other ways Capri marquees can be used.</p>
      </div>
    </section>

    <section className={styles.section}>
      <div className="shell">
        <div className={styles.intro}>
          <div>
            <span className={styles.label}>Gallery</span>
            <h2>See how the setup changes with the event.</h2>
            <p>Filter by weddings, parties, corporate events or festivals and sport.</p>
          </div>
        </div>
        <WorkGallery classes={styles} />
      </div>
    </section>

    <section className={styles.cta}>
      <div className={'shell ' + styles.ctaInner}>
        <div><h2>Seen a layout that suits your event?</h2><p>Use the booking planner to add your date, guest count, venue and any extras you need.</p></div>
        <Link className="button button-light button-large" href="/#booking">Start Your Booking →</Link>
      </div>
    </section>
    <SiteFooter />
  </main>
}