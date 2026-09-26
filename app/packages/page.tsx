import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../site-pages.module.css';

const packages = [
  { slug:'garden-party', title:'Garden Party', image:'/images/parties/party-garden.webp', meta:'20ft × 20ft', copy:'18-seat garden setup with tables, chairs, lighting and side walls.' },
  { slug:'informal-party', title:'Informal Party', image:'/images/parties/party-engagement.webp', meta:'Flexible layout · up to 55 standing', copy:'Standing party setup for up to 55 with lighting and side walls.' },
  { slug:'large-party', title:'Large Party', image:'/images/parties/party-birthday.webp', meta:'28ft × 38ft · up to 100 standing', copy:'28ft × 38ft standing setup for celebrations of up to 100.' },
  { slug:'45-guests', title:'45 Guests', image:'/images/weddings/wedding-castle.webp', meta:'20ft × 30ft · up to 45 seated', copy:'Seated setup for 45 with tables, chairs, matting and side walls.' },
  { slug:'80-guests', title:'80 Guests', image:'/images/weddings/wedding-castle-reception.webp', meta:'28ft × 38ft · up to 80 seated', copy:'Seated setup for 80 with tables, chairs, matting and side walls.' },
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
              <div className={styles.packageBrowseLinks}><Link href={'/packages/' + item.slug}>View details →</Link><Link href={'/?package=' + item.slug + '#booking'}>Choose this package →</Link></div>
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