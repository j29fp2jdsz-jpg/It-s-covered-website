import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../../site-pages.module.css';

const work = {
  weddings: {
    title:'Wedding Gallery',
    intro:'Ceremony, reception and evening inspiration using Capri marquees in very different settings.',
    hero:'/images/weddings/wedding-castle.webp',
    images:[
      ['Castle wedding','/images/weddings/wedding-castle.webp'],
      ['Wedding reception','/images/weddings/wedding-countryside.webp'],
      ['Evening reception','/images/weddings/wedding-castle-reception.webp'],
      ['Castle reception','/images/weddings/wedding-castle-reception.webp'],
    ]
  },
  parties: {
    title:'Party Gallery',
    intro:'Garden parties, birthdays, engagements and outdoor celebrations with room to make the space your own.',
    hero:'/images/parties/party-garden.webp',
    images:[
      ['Garden party','/images/parties/party-garden.webp'],
      ['Engagement celebration','/images/parties/party-engagement.webp'],
      ['Birthday event','/images/parties/party-birthday.webp'],
      ['Birthday celebration','/images/parties/party-birthday.webp'],
    ]
  },
  corporate: {
    title:'Corporate Gallery',
    intro:'Presentation, networking and hospitality layouts with a cleaner, more professional feel.',
    hero:'/images/corporate/corporate-stage.webp',
    images:[
      ['Presentation setup','/images/corporate/corporate-stage.webp'],
      ['Corporate reception','/images/corporate/corporate-reception.webp'],
      ['Networking space','/images/corporate/corporate-networking.webp'],
      ['Business networking','/images/corporate/corporate-networking.webp'],
    ]
  },
  'festivals-events': {
    title:'Festivals & Events Gallery',
    intro:'Sport, race villages and outdoor event hubs where the marquee has a practical job to do.',
    hero:'/images/events/event-rugby.webp',
    images:[
      ['Rugby hospitality','/images/events/event-rugby.webp'],
      ['Motorsport hub','/images/events/event-motocross.webp'],
      ['Running event','/images/events/event-running.webp'],
      ['Race registration','/images/events/event-registration.webp'],
      ['Beach festival','/images/events/event-beach.webp'],
    ]
  }
} as const;

export default async function WorkCategoryPage({params}:{params:Promise<{category:string}>}){
  const {category}=await params;
  const data=work[category as keyof typeof work];
  if(!data) notFound();

  return <main>
    <SiteHeader />
    <section className={styles.hero}>
      <img className={styles.heroImage} src={data.hero} alt={data.title}/>
      <div className={styles.heroOverlay}/>
      <div className={'shell ' + styles.heroInner}><span className={styles.eyebrow}>Our work</span><h1>{data.title}</h1><p>{data.intro}</p></div>
    </section>

    <section className={styles.section}>
      <div className="shell">
        <div className={styles.gallerySimple}>
          {data.images.map(([label,image])=><figure key={label + image}><img src={image} alt={label} loading="lazy"/><figcaption>{label}</figcaption></figure>)}
        </div>
      </div>
    </section>

    <section className={styles.relatedSection}>
      <div className="shell">
        <span className={styles.label}>Explore another event type</span>
        <div className={styles.related}>
          <Link href="/our-work/weddings">Weddings →</Link>
          <Link href="/our-work/parties">Parties →</Link>
          <Link href="/our-work/corporate">Corporate →</Link>
          <Link href="/our-work/festivals-events">Festivals & Events →</Link>
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>
}