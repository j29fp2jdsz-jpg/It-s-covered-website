import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from './events.module.css';

const events = [
  { slug:'weddings', title:'Weddings', kicker:'Ceremony · reception · evening', copy:'Elegant Capri spaces for dining, dancing and celebrating around the setting you chose.', image:'/images/weddings/wedding-castle.webp' },
  { slug:'parties', title:'Parties', kicker:'Birthdays · engagements · garden parties', copy:'Relaxed or dressed-up spaces with room for food, drinks, music and the people that matter.', image:'/images/parties/party-garden.webp' },
  { slug:'corporate', title:'Corporate', kicker:'Hospitality · launches · presentations', copy:'Polished event spaces for networking, presentations, client hospitality and team occasions.', image:'/images/corporate/corporate-stage.webp' },
  { slug:'festivals-events', title:'Festivals & Events', kicker:'Sport · festivals · race villages', copy:'Practical event cover for hospitality, registration, refreshments and high-footfall outdoor use.', image:'/images/events/event-motocross.webp' },
] as const;

export default function EventsPage(){
  return <main>
    <SiteHeader />
    <section className={styles.hero}>
      <img className={styles.heroImage} src="/images/events/event-rugby.webp" alt="Capri marquee at a sporting event" />
      <div className={styles.heroOverlay}/>
      <div className={'shell ' + styles.heroInner}>
        <span className={styles.eyebrow}>Events with It’s Covered</span>
        <h1>One marquee style. Very different events.</h1>
        <p>Choose the occasion below and see how the same Capri structure can become a completely different space.</p>
      </div>
    </section>

    <section className={styles.eventBrowse}>
      <div className="shell">
        {events.map((event,index)=><Link href={'/events/' + event.slug} className={styles.eventRow} key={event.slug}>
          <div className={styles.eventImage}><Image src={event.image} alt={event.title + ' Capri marquee'} fill sizes="(max-width:760px) 100vw, 56vw"/></div>
          <div className={styles.eventCopy}>
            <span>{event.kicker}</span>
            <h2>{event.title}</h2>
            <p>{event.copy}</p>
            <strong>Explore {event.title.toLowerCase()} →</strong>
          </div>
        </Link>)}
      </div>
    </section>

    <section className={styles.cta}>
      <div className={'shell ' + styles.ctaInner}>
        <div><h2>Already know your date?</h2><p>Use the planner and we’ll guide you through the practical details.</p></div>
        <Link href="/#booking" className="button button-light button-large">Start Your Booking →</Link>
      </div>
    </section>
    <SiteFooter />
  </main>
}