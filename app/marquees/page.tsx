import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../site-pages.module.css';

const views = [
  ['/images/weddings/wedding-castle.webp','Wedding reception'],
  ['/images/corporate/corporate-stage.webp','Presentation space'],
  ['/images/events/event-rugby.webp','Event hospitality'],
] as const;

export default function MarqueesPage(){
  return <main><SiteHeader />
    <section className={styles.hero}>
      <img className={styles.heroImage} src="/images/hero/hero-desktop.webp" alt="Capri marquee at an outdoor event"/>
      <div className={styles.heroOverlay}/>
      <div className={'shell ' + styles.heroInner}>
        <span className={styles.eyebrow}>Capri marquees</span>
        <h1>A marquee that looks different for a reason.</h1>
        <p>Capri marquees use twin peaks, curved roof lines and open sides to create a lighter structure with fewer visual barriers around the event.</p>
      </div>
    </section>

    <section className={styles.section}>
      <div className="shell">
        <div className={styles.productIntro}>
          <div><span className={styles.label}>Why Capri</span><h2>Open when you want it. Enclosed when you need it.</h2></div>
          <div><p>The open-sided shape works well in gardens, venues and event fields where you still want views out. Plain or clear side walls can be added when shelter is needed, while the floor plan can be set up for dining, standing guests, bars, presentations or event operations.</p></div>
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
        <div className={styles.inlineAction}><Link className="button button-primary button-large" href="/packages">See Marquee Packages →</Link></div>
      </div>
    </section>
    <SiteFooter />
  </main>
}