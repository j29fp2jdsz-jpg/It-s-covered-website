import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from './events.module.css';

const events = [
  { slug:'weddings', title:'Weddings', kicker:'Ceremony · reception · evening', copy:'Reception spaces built around dining, speeches, a bar and the move into the evening celebration.', image:'/images/weddings/wedding-castle.webp' },
  { slug:'parties', title:'Parties', kicker:'Birthdays · engagements · garden parties', copy:'Garden celebrations with room to mingle, serve food and drinks, add music and keep the party flowing.', image:'/images/parties/party-garden.webp' },
  { slug:'corporate', title:'Corporate', kicker:'Hospitality · launches · presentations', copy:'Purpose-built temporary space for presentations, networking, hospitality, launches and staff events.', image:'/images/corporate/corporate-stage.webp' },
  { slug:'festivals-events', title:'Festivals & Events', kicker:'Sport · festivals · race villages', copy:'Working event space for registration, hospitality, refreshments, shelter and busy public sites.', image:'/images/events/event-motocross.webp' },
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