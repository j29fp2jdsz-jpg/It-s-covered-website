import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../site-pages.module.css';

const packages = [
  { slug:'garden-party', title:'Garden Party', image:'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/20ftx20ft-Capri-Marquee-pkb3062by5kel22h6auixd0e6vqq4oxb593bn22z8y.jpg', meta:'20ft × 20ft · intimate events', copy:'A compact Capri setup for smaller celebrations, garden parties and relaxed get-togethers.' },
  { slug:'informal-party', title:'Informal Party', image:'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/28x28-Caerleon-p3melmwu7h56y7kk1685e7gq9bc6fk45a9i479ymsy.jpg', meta:'Flexible layout · standing up to 55', copy:'A relaxed, adaptable setup with room for guests to mingle, eat and celebrate.' },
  { slug:'large-party', title:'Large Party', image:'https://itscovered.co.uk/wp-content/uploads/2021/03/Brilliant-party-Newport.jpg', meta:'28ft × 38ft · standing up to 100', copy:'For larger parties where you need more breathing room, guest flow and flexibility.' },
  { slug:'45-guests', title:'45 Guests', image:'https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg', meta:'Seated setup · up to 45', copy:'A complete seated event starting point with tables, chairs, flooring and lighting.' },
  { slug:'80-guests', title:'80 Guests', image:'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/Roath-Church-wedding-guests-2-p3mn5mp1l6rj6g6xkazcehi1ih9wl6tvmoxp79anzm.jpg', meta:'Seated setup · up to 80', copy:'A spacious Capri package for weddings, larger parties and polished corporate occasions.' },
];

export default function PackagesPage(){
  return <main>
    <SiteHeader />
    <section className={styles.hero}><img className={styles.heroImage} src="https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg" alt="Capri marquee event setup"/><div className={styles.heroOverlay}/><div className={`shell ${styles.heroInner}`}><span className={styles.eyebrow}>Marquee packages</span><h1>Start with a package. Make it yours.</h1><p>Our packages give you a sensible starting point for different guest numbers and event styles. We’ll tailor the final setup around your venue, access and plans.</p></div></section>
    <section className={styles.section}><div className="shell"><div className={styles.sectionHead}><div><span className={styles.label}>Choose your starting point</span><h2>Popular setups, clearly explained.</h2><p>No guessing and no wall of text. Pick the package closest to your event, then refine it through the booking journey.</p></div><Link className="button button-primary" href="/#booking">Choose Your Date →</Link></div><div className={styles.cardGrid}>{packages.map((item)=><article className={styles.visualCard} key={item.slug}><img src={item.image} alt={`${item.title} Capri marquee package`} loading="lazy"/><div className={styles.cardBody}><span className={styles.cardMeta}>{item.meta}</span><h3>{item.title}</h3><p>{item.copy}</p><Link className={styles.link} href={`/packages/${item.slug}`}>View package →</Link></div></article>)}</div></div></section>
    <section className={`${styles.section} ${styles.soft}`}><div className="shell"><div className={styles.split}><img src="https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg" alt="Capri marquee setup"/><div className={styles.copy}><span className={styles.label}>Not sure which one?</span><h2>That’s what the booking journey is for.</h2><p>Tell us your date, guest numbers, layout and whether you need room for things like a bar, buffet or dance floor. We’ll recommend the closest fit, then Fin confirms the details on site.</p><ul className={styles.checks}><li>Guest count and seating style</li><li>Bar, buffet and dance floor space</li><li>Venue surface and access</li><li>Optional extras</li></ul><Link className="button button-primary button-large" href="/#booking">Start with your date →</Link></div></div></div></section>
    <section className={styles.cta}><div className={`shell ${styles.ctaInner}`}><div><h2>Ready to find your setup?</h2><p>Choose your date and we’ll guide you from there.</p></div><Link className="button button-light button-large" href="/#booking">Choose Your Date →</Link></div></section>
    <SiteFooter />
  </main>
}
