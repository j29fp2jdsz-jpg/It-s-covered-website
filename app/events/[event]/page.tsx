import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../events.module.css';

const eventPages = {
  weddings: {
    title:'Wedding Marquee Hire', eyebrow:'Weddings', intro:'Create a wedding space that feels completely yours — from relaxed countryside receptions to polished evening celebrations.',
    image:'/images/weddings/wedding-castle.webp', detail:'/images/weddings/wedding-countryside.webp',
    body:'A Capri marquee gives you room to shape the day around the venue rather than hiding it. Dining, bars, dancing and guest flow can all be planned around the atmosphere you want.',
    bullets:['Seated dining layouts','Bars and dance floors','Furniture, lighting and flooring','Ceremony or reception layouts']
  },
  parties: {
    title:'Party Marquee Hire', eyebrow:'Parties', intro:'Birthdays, anniversaries, engagements and garden parties that feel like a proper occasion.',
    image:'/images/parties/party-garden.webp', detail:'/images/parties/party-engagement.webp',
    body:'Party setups can stay relaxed or be dressed up completely. The important bit is getting enough room for the way people will actually use the space.',
    bullets:['Small to larger celebrations','Standing, seated or mixed layouts','Bars, buffet areas and dancing','Lighting, heating and furniture']
  },
  corporate: {
    title:'Corporate Marquee Hire', eyebrow:'Corporate', intro:'Professional event space for hospitality, launches, presentations, staff events and client occasions.',
    image:'/images/corporate/corporate-stage.webp', detail:'/images/corporate/corporate-reception.webp',
    body:'Corporate events need clear guest flow and a polished finish. The layout can be built around presentation space, networking, catering and hospitality.',
    bullets:['Networking and hospitality','Presentation layouts','Catering and service areas','Event-timed installation']
  },
  'festivals-events': {
    title:'Festival & Event Marquee Hire', eyebrow:'Festivals & Events', intro:'Flexible cover for sport, public events, shows, race villages and larger outdoor occasions.',
    image:'/images/events/event-motocross.webp', detail:'/images/events/event-registration.webp',
    body:'Outdoor events often need the marquee to do a practical job as well as look good — registration, hospitality, refreshments, information or a central event hub.',
    bullets:['Sport and public events','Registration and hospitality','Open-sided high-footfall layouts','Access and site planning']
  }
} as const;

export default async function EventDetailPage({params}:{params:Promise<{event:string}>}){
  const {event}=await params;
  const data=eventPages[event as keyof typeof eventPages];
  if(!data) notFound();
  const others=Object.entries(eventPages).filter(([slug])=>slug!==event).slice(0,3);
  return <main>
    <SiteHeader />
    <section className={styles.hero}>
      <img className={styles.heroImage} src={data.image} alt={data.eyebrow + ' marquee event'} />
      <div className={styles.heroOverlay}/>
      <div className={'shell ' + styles.heroInner}><span className={styles.eyebrow}>{data.eyebrow}</span><h1>{data.title}</h1><p>{data.intro}</p></div>
    </section>

    <section className={styles.detail}>
      <div className={'shell ' + styles.detailGrid}>
        <div className={styles.detailImageWrap}><Image className={styles.detailImage} src={data.detail} alt={data.eyebrow + ' event setup'} fill sizes="(max-width:900px) 100vw, 52vw"/></div>
        <div className={styles.detailCopy}>
          <span className={styles.label}>Designed around the event</span>
          <h2>The layout should make the day easier.</h2>
          <p>{data.body}</p>
          <ul className={styles.checkList}>{data.bullets.map(item=><li key={item}>{item}</li>)}</ul>
          <Link href="/#booking" className="button button-primary button-large">Start Your Booking →</Link>
        </div>
      </div>
    </section>

    <section className={styles.relatedSection}>
      <div className="shell">
        <span className={styles.label}>Other event types</span>
        <div className={styles.related}>{others.map(([slug,item])=><Link key={slug} href={'/events/' + slug}>{item.eyebrow} →</Link>)}</div>
      </div>
    </section>
    <SiteFooter />
  </main>
}