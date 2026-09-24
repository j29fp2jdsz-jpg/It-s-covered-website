import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../site-pages.module.css';

export default function ContactPage(){
  return <main><SiteHeader />
    <section className={styles.contactHero}>
      <div className="shell">
        <span className={styles.label}>Contact</span>
        <h1>Got an event in mind?</h1>
        <p>If you know the date, the booking planner is the quickest way to start. If you’d rather talk first, call or email us.</p>
      </div>
    </section>

    <section className={styles.contactSimple}>
      <div className={'shell ' + styles.contactSimpleGrid}>
        <div>
          <span className={styles.label}>Talk to us</span>
          <a className={styles.bigContact} href="tel:07595497491">07595 497491</a>
          <a className={styles.bigContact} href="mailto:info@itscovered.co.uk">info@itscovered.co.uk</a>
          <p>Llanellen Court Farm<br/>Abergavenny<br/>NP7 9HT</p>
        </div>
        <div className={styles.contactAction}>
          <span className={styles.label}>Know your date?</span>
          <h2>Start the booking online.</h2>
          <p>It takes you through the details we need without making the first enquiry complicated.</p>
          <Link className="button button-primary button-large" href="/#booking">Start Your Booking →</Link>
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>
}