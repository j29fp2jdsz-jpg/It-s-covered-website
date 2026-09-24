import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../site-pages.module.css';

export default function AboutPage(){
  return <main><SiteHeader />
    <section className={styles.simpleHero}>
      <div className="shell">
        <span className={styles.label}>About It’s Covered</span>
        <h1>Local people. Proper setup. No unnecessary fuss.</h1>
        <p>It’s Covered is a family-run marquee hire company based in Monmouthshire, working across South Wales and beyond.</p>
      </div>
    </section>

    <section className={styles.section}>
      <div className={'shell ' + styles.storyGrid}>
        <div className={styles.storyImage}><Image src="/images/hero/hero-desktop.webp" alt="Capri marquee event setup" fill sizes="(max-width:760px) 100vw, 52vw"/></div>
        <div className={styles.storyCopy}>
          <span className={styles.label}>How we think</span>
          <h2>Make the space look good. Make the day work even better.</h2>
          <p>Marquee hire is only useful if the setup works in the real world. Where people arrive, where the bar sits, how catering gets in, whether guests can move comfortably and what happens if the weather changes all matter.</p>
          <p>We keep the early stages simple, talk through what you actually need and confirm the practical details before the event. We’d rather recommend the right setup than make things more complicated than they need to be.</p>
          <Link className="text-link" href="/marquees">Why we use Capri marquees →</Link>
        </div>
      </div>
    </section>

    <section className={styles.minimalBand}>
      <div className="shell">
        <div className={styles.bandGrid}>
          <div><strong>Monmouthshire based</strong><span>Local knowledge with events across South Wales and beyond.</span></div>
          <div><strong>Family run</strong><span>A straightforward service rather than a faceless booking process.</span></div>
          <div><strong>Site-led planning</strong><span>The venue and access matter just as much as the guest count.</span></div>
          <div><strong>Flexible events</strong><span>Weddings, parties, corporate hospitality, sport and public events.</span></div>
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>
}