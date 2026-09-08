import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../events.module.css';

const eventPages = {
  weddings: {
    title:'Wedding Marquee Hire', eyebrow:'Weddings', intro:'Create a wedding space that feels completely yours — from relaxed countryside receptions to polished evening celebrations.', image:'https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg',
    body:'A marquee gives you the freedom to shape the day around your guests, your venue and the atmosphere you want. We help plan the practical side so the space still feels effortless on the day.',
    bullets:['Seated dining layouts','Bars, dance floors and evening space','Furniture, lighting and flooring options','Flexible layouts for ceremonies and receptions','Site visit before final confirmation']
  },
  parties: {
    title:'Party Marquee Hire', eyebrow:'Parties', intro:'Make birthdays, anniversaries, engagements and garden parties feel like a proper event — without making the process complicated.', image:'https://itscovered.co.uk/wp-content/uploads/2021/03/Brilliant-party-Newport.jpg',
    body:'Party setups can be relaxed or fully dressed depending on the occasion. We’ll help you work out the right footprint for standing guests, seating, food, drinks and dancing.',
    bullets:['Small garden parties to larger celebrations','Standing, seated or mixed layouts','Bars, buffet areas and dance floors','Lighting, heating and furniture options','Professional setup and collection']
  },
  corporate: {
    title:'Corporate Marquee Hire', eyebrow:'Corporate', intro:'Professional, flexible event space for hospitality, launches, staff events, exhibitions and client occasions.', image:'https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg',
    body:'Corporate events need to look polished and run smoothly. We can shape the layout around guest flow, presentation areas, catering, branding space and practical access requirements.',
    bullets:['Client hospitality and networking','Product launches and staff events','Flexible seating and presentation layouts','Catering and service areas','Reliable installation around event schedules']
  },
  'festivals-events': {
    title:'Festival & Event Marquee Hire', eyebrow:'Festivals & Events', intro:'Flexible marquee cover for public events, shows, festivals, community gatherings and larger outdoor occasions.', image:'https://itscovered.co.uk/wp-content/uploads/2018/12/marquee5.jpg',
    body:'Larger events need practical planning around access, turnaround times, footfall and how the marquee fits into the wider site. We’ll help you identify the right starting setup and confirm the details on site.',
    bullets:['Public and community events','Festival and show cover','Flexible open-sided layouts','High-footfall practical setups','Site and access planning before confirmation']
  }
} as const;

export default async function EventDetailPage({params}:{params:Promise<{event:string}>}){
  const {event}=await params;
  const data=eventPages[event as keyof typeof eventPages];
  if(!data) notFound();
  const others=Object.entries(eventPages).filter(([slug])=>slug!==event).slice(0,3);
  return <main>
    <SiteHeader />
    <section className={styles.hero}><img className={styles.heroImage} src={data.image} alt={`${data.eyebrow} marquee event`} /><div className={styles.heroOverlay}/><div className={`shell ${styles.heroInner}`}><span className={styles.eyebrow}>{data.eyebrow}</span><h1>{data.title}</h1><p>{data.intro}</p></div></section>
    <section className={styles.detail}><div className={`shell ${styles.detailGrid}`}><img className={styles.detailImage} src={data.image} alt={`${data.eyebrow} event setup`} /><div className={styles.detailCopy}><span className={styles.label}>Designed around your event</span><h2>A space that works properly, not just one that looks good.</h2><p>{data.body}</p><ul className={styles.checkList}>{data.bullets.map(item=><li key={item}>{item}</li>)}</ul><Link href="/#booking" className="button button-primary button-large">Choose Your Date →</Link></div></div></section>
    <section className={styles.section}><div className="shell"><span className={styles.label}>Explore other events</span><h2>Planning something different?</h2><div className={styles.related}>{others.map(([slug,item])=><Link key={slug} href={`/events/${slug}`}>{item.eyebrow} →</Link>)}</div></div></section>
    <section className={styles.cta}><div className={`shell ${styles.ctaInner}`}><div><h2>Let’s start with the date.</h2><p>Tell us when and what you’re planning, and we’ll guide you towards the right setup.</p></div><Link href="/#booking" className="button button-light button-large">Start Your Enquiry →</Link></div></section>
    <SiteFooter />
  </main>
}
