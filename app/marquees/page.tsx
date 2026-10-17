import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../site-pages.module.css';

const views = [
  ['/images/real-work/linked-capri-wide.jpg','Linked marquee setup'],
  ['/images/real-work/large-linked-setup.jpg','Large event setup'],
  ['/images/real-work/night-party.jpg','Evening marquee setup'],
] as const;

export default function MarqueesPage(){
  return <main><SiteHeader />
    <section className={styles.hero}>
      <img className={styles.heroImage} src="/images/hero/hero-desktop.webp" alt="Marquee at an outdoor event"/>
      <div className={styles.heroOverlay}/>
      <div className={'shell ' + styles.heroInner}>
        <span className={styles.eyebrow}>Marquee hire</span>
        <h1>A marquee that looks different for a reason.</h1>
        <p>Different marquee styles and footprints give us flexibility to build the right setup around the event, guest numbers and site.</p>
      </div>
    </section>

    <section className={styles.section}>
      <div className="shell">
        <div className={styles.productIntro}>
          <div><span className={styles.label}>Marquee options</span><h2>Different footprints for different events.</h2></div>
          <div><p>Our marquee range works across gardens, venues and event fields, with different footprints available depending on the space and how the event needs to flow. Plain or clear side walls can be added where shelter is needed.</p></div>
        </div>

        <div className={styles.marqueeTypes}>
          <article>
            <span className={styles.label}>Main marquee range</span>
            <h3>Flowing lines, open sides and flexible linked layouts.</h3>
            <p>Our main marquee range gives the distinctive high-peak look seen across our wedding, party and event setups. Different sizes can be used for seated or standing layouts, with plain and clear side-wall options included in selected packages.</p>
            <Link href="/packages" className="text-link">See package options →</Link>
          </article>
          <article>
            <span className={styles.label}>Alternative layout</span>
            <h3>Another footprint when the site calls for something different.</h3>
            <p>We also have two alternative marquee units for sites where a different footprint works better. Tell us the guest numbers, event style and available space and we can check the most suitable setup.</p>
            <Link href="/#booking" className="text-link">Ask about another setup →</Link>
          </article>
        </div>

        <div className={styles.imageStrip}>
          {views.map(([image,label])=><figure key={image}>
            <div className={styles.stripImage}><Image src={image} alt={label} fill sizes="(max-width:700px) 84vw, 31vw"/></div>
            <figcaption>{label}</figcaption>
          </figure>)}
        </div>
      </div>
    </section>

    <section className={styles.minimalBand}>
      <div className="shell">
        <div className={styles.bandGrid}>
          <div><strong>Small gardens</strong><span>Compact setups without making the space feel boxed in.</span></div>
          <div><strong>Large celebrations</strong><span>Linked or larger footprints for more guests and more going on.</span></div>
          <div><strong>Flexible layouts</strong><span>Dining, bars, dancing, presentations and service areas.</span></div>
          <div><strong>Site access matters</strong><span>Vehicle access, surface and working space are checked before the final setup is confirmed.</span></div>
        </div>
        <div className={styles.inlineAction}><Link className="button button-primary button-large" href="/#booking">Start with your date →</Link></div>
      </div>
    </section>
    <SiteFooter />
  </main>
}