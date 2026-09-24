import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../site-pages.module.css';

const packages = [
  { slug:'garden-party', title:'Garden Party', image:'/images/parties/party-garden.webp', meta:'20ft × 20ft', copy:'A compact starting point for smaller garden celebrations.' },
  { slug:'informal-party', title:'Informal Party', image:'/images/parties/party-engagement.webp', meta:'Flexible layout · up to 55 standing', copy:'Relaxed space for guests to mingle, eat and celebrate.' },
  { slug:'large-party', title:'Large Party', image:'/images/parties/party-beach.webp', meta:'28ft × 38ft · up to 100 standing', copy:'More room for bigger guest lists, bars and dancing.' },
  { slug:'45-guests', title:'45 Guests', image:'/images/weddings/wedding-countryside.webp', meta:'20ft × 30ft · up to 45 seated', copy:'A practical seated starting point for smaller weddings and events.' },
  { slug:'80-guests', title:'80 Guests', image:'/images/weddings/wedding-castle-reception.webp', meta:'28ft × 38ft · up to 80 seated', copy:'A larger seated package for weddings and hospitality.' },
] as const;

export default function PackagesPage(){
  return <main>
    <SiteHeader />
    <section className={styles.simpleHero}>
      <div className="shell">
        <span className={styles.label}>Marquee packages</span>
        <h1>Start with the closest fit.</h1>
        <p>Packages are useful starting points, not rigid bundles. Pick the one closest to your event and we’ll refine the final setup around the venue and what you actually need.</p>
      </div>
    </section>

    <section className={styles.section}>
      <div className="shell">
        <div className={styles.packageBrowse}>
          {packages.map(item=><article className={styles.packageBrowseCard} key={item.slug}>
            <Link href={'/packages/' + item.slug} className={styles.packageBrowseImage}>
              <Image src={item.image} alt={item.title + ' Capri marquee package'} fill sizes="(max-width:700px) 86vw, (max-width:1100px) 44vw, 30vw"/>
            </Link>
            <div className={styles.packageBrowseText}>
              <span>{item.meta}</span>
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
              <Link href={'/packages/' + item.slug}>View package →</Link>
            </div>
          </article>)}
        </div>

        <div className={styles.packageFoot}>
          <p>Not sure which one is closest? The booking planner can recommend a starting point from your date, guest numbers and event type.</p>
          <Link className="button button-primary" href="/#booking">Use the booking planner →</Link>
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>
}