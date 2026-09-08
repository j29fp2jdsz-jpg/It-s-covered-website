import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../site-pages.module.css';

const gallery=[
['weddings','Weddings','https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg'],
['parties','Parties','https://itscovered.co.uk/wp-content/uploads/2021/03/Brilliant-party-Newport.jpg'],
['corporate','Corporate','https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg'],
['festivals-events','Festivals & Events','https://itscovered.co.uk/wp-content/uploads/2018/12/marquee5.jpg']
];
export default function OurWorkPage(){return <main><SiteHeader />
<section className={styles.hero}><img className={styles.heroImage} src="https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg" alt="It’s Covered marquee event"/><div className={styles.heroOverlay}/><div className={`shell ${styles.heroInner}`}><span className={styles.eyebrow}>Our work</span><h1>Real events. Real marquees.</h1><p>A look at the different kinds of spaces we create across weddings, parties, corporate occasions and larger events.</p></div></section>
<section className={styles.section}><div className="shell"><div className={styles.sectionHead}><div><span className={styles.label}>Portfolio</span><h2>Choose a gallery.</h2><p>Tap into the type of event you’re planning and explore more examples of how the spaces can come together.</p></div><Link className="button button-primary" href="/#booking">Choose Your Date →</Link></div><div className={styles.gallery}>{gallery.map(([slug,label,image])=><figure key={slug}><Link href={`/our-work/${slug}`} aria-label={`View ${label} gallery`}><img src={image} alt={`${label} marquee event`} loading="lazy"/><figcaption>{label} <span aria-hidden="true">→</span></figcaption></Link></figure>)}</div></div></section>
<section className={`${styles.section} ${styles.soft}`}><div className="shell"><div className={styles.sectionHead}><div><span className={styles.label}>Explore by event</span><h2>Looking for something closer to your plans?</h2><p>See what typically matters for each event type, then come back here for visual inspiration.</p></div></div><div className={styles.related}><Link href="/events/weddings">Wedding planning →</Link><Link href="/events/parties">Party planning →</Link><Link href="/events/corporate">Corporate planning →</Link><Link href="/events/festivals-events">Festivals & Events →</Link></div></div></section>
<section className={styles.cta}><div className={`shell ${styles.ctaInner}`}><div><h2>Like what you see?</h2><p>Choose your date and we’ll start shaping the right setup for your event.</p></div><Link className="button button-light button-large" href="/#booking">Start Your Enquiry →</Link></div></section>
<SiteFooter /></main>}
