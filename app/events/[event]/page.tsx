import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../events.module.css';

const eventPages = {
  weddings: {
    title:'Wedding Marquee Hire',
    eyebrow:'Weddings',
    intro:'Create a wedding reception that feels connected to the venue — with space for dinner, speeches, a bar and the evening celebration.',
    image:'/images/real-work/wedding-day-capri.webp',
    detail:'/images/real-work/wedding-guests.jpg',
    sectionLabel:'Wedding receptions',
    sectionTitle:'Plan the room around the way your wedding day actually runs.',
    body:'A wedding marquee needs to change character through the day. Guests need somewhere comfortable to sit and eat, speeches need clear sightlines, catering needs workable access, and the evening needs enough room for drinks and dancing without everything feeling cramped.',
    bullets:['Dining tables and guest seating','Space for speeches, bar and evening entertainment','Flooring, lighting and furniture options','Layouts shaped around the venue and guest numbers'],
    cta:'Plan Your Wedding Marquee'
  },
  parties: {
    title:'Party Marquee Hire',
    eyebrow:'Parties',
    intro:'Give birthdays, anniversaries, engagements and garden parties a proper focal point — without turning the garden into a formal venue.',
    image:'/images/real-work/garden-evening.jpg',
    detail:'/images/real-work/night-party.jpg',
    sectionLabel:'Parties & celebrations',
    sectionTitle:'Leave enough room for people to move, mingle and actually enjoy the party.',
    body:'Party layouts are usually less about rows of seating and more about flow. We look at where people will gather, whether you want a bar or buffet, how much standing space you need and whether dancing or entertainment needs its own area.',
    bullets:['Standing, seated or mixed party layouts','Bar and buffet space','Room for music, dancing or entertainment','Furniture, lighting and heating options'],
    cta:'Plan Your Party'
  },
  corporate: {
    title:'Corporate Marquee Hire',
    eyebrow:'Corporate',
    intro:'Create a professional temporary space for presentations, hospitality, launches, staff events and client occasions.',
    image:'/images/corporate/corporate-stage.webp',
    detail:'/images/corporate/corporate-reception.webp',
    sectionLabel:'Corporate events',
    sectionTitle:'Build the layout around the purpose of the event.',
    body:'A presentation needs sightlines and seating. A networking event needs open circulation. Hospitality needs catering and service space. We plan the marquee around what guests and staff actually need to do rather than forcing every corporate event into the same layout.',
    bullets:['Presentation and speaker areas','Networking and reception layouts','Catering and service space','Installation planned around event timings'],
    cta:'Plan Your Corporate Event'
  },
  'festivals-events': {
    title:'Festival & Event Marquee Hire',
    eyebrow:'Festivals & Events',
    intro:'Practical Capri cover for sport, race villages, festivals, public events and busy outdoor sites.',
    image:'/images/events/event-motocross.webp',
    detail:'/images/events/event-registration.webp',
    sectionLabel:'Festivals, sport & public events',
    sectionTitle:'At a busy event, the marquee needs to do a job.',
    body:'These setups are often less about table plans and more about function. A Capri can become registration, hospitality, refreshments, information, shelter or a central event hub, with open sides helping people move through quickly on high-footfall sites.',
    bullets:['Registration and check-in areas','Sport and event hospitality','Open-sided high-footfall layouts','Site access and operational positioning'],
    cta:'Plan Your Event Setup'
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
          <span className={styles.label}>{data.sectionLabel}</span>
          <h2>{data.sectionTitle}</h2>
          <p>{data.body}</p>
          <ul className={styles.checkList}>{data.bullets.map(item=><li key={item}>{item}</li>)}</ul>
          <Link href="/#booking" className="button button-primary button-large">{data.cta} →</Link>
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