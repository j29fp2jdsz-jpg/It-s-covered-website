import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from './events.module.css';

const eventCards = [
  { slug:'weddings', title:'Weddings', copy:'Elegant, flexible marquee spaces for ceremonies, receptions and evening celebrations.', image:'https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg' },
  { slug:'parties', title:'Parties', copy:'Birthdays, anniversaries, engagements and celebrations built around your guest list and garden.', image:'https://itscovered.co.uk/wp-content/uploads/2021/03/Brilliant-party-Newport.jpg' },
  { slug:'corporate', title:'Corporate', copy:'Professional event spaces for launches, hospitality, staff events and client occasions.', image:'https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg' },
  { slug:'festivals-events', title:'Festivals & Events', copy:'Reliable, flexible cover for public events, shows, community gatherings and festivals.', image:'https://itscovered.co.uk/wp-content/uploads/2018/12/marquee5.jpg' },
];

export default function EventsPage(){
  return <main>
    <SiteHeader />
    <section className={styles.hero}>
      <img className={styles.heroImage} src="https://itscovered.co.uk/wp-content/uploads/2026/06/Marquee-Wedding-festival0.jpg" alt="Capri marquee at an event" />
      <div className={styles.heroOverlay}/>
      <div className={`shell ${styles.heroInner}`}><span className={styles.eyebrow}>Events with It’s Covered</span><h1>Whatever the occasion, we’ll make the space feel right.</h1><p>From intimate garden parties to weddings, corporate hospitality and large public events, we shape the marquee around the atmosphere you want to create.</p></div>
    </section>
    <section className={styles.intro}>
      <div className="shell">
        <div className={styles.introGrid}><div><span className={styles.label}>Choose your event</span><h2>Start with the occasion.</h2></div><p className={styles.introText}>Every event needs something slightly different. Guest numbers, seating style, bars, dance floors, buffet areas, access and the setting itself all change the right setup. Pick your event type below to see what we’d normally consider and how the process works.</p></div>
        <div className={styles.cards}>{eventCards.map(card=><Link key={card.slug} href={`/events/${card.slug}`} className={styles.card}><img src={card.image} alt={`${card.title} marquee event`} /><div className={styles.cardOverlay}><h3>{card.title}</h3><p>{card.copy}</p><span>See what’s included →</span></div></Link>)}</div>
      </div>
    </section>
    <section className={styles.section}><div className="shell"><span className={styles.label}>Handled properly</span><h2>More than just putting up a marquee.</h2><div className={styles.featureGrid}><div className={styles.feature}><strong>Planning the space</strong><p>We consider guest flow, furniture, bars, dance floors, catering and how people will actually use the marquee.</p></div><div className={styles.feature}><strong>Professional installation</strong><p>Delivery, setup and collection are planned around the venue, access and event timings.</p></div><div className={styles.feature}><strong>Site visit before confirmation</strong><p>Final availability, measurements, access and pricing are checked on site before everything is locked in.</p></div></div></div></section>
    <section className={styles.cta}><div className={`shell ${styles.ctaInner}`}><div><h2>Know your date already?</h2><p>Start there and we’ll guide you through the rest.</p></div><Link href="/#booking" className="button button-light button-large">Choose Your Date →</Link></div></section>
    <SiteFooter />
  </main>
}
