import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../../site-pages.module.css';

const capriImages = {
  hero: 'https://itscovered.co.uk/wp-content/uploads/2026/06/Marquee-Wedding-festival0.jpg',
  weddingTable: 'https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg',
  guests: 'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/Roath-Church-wedding-guests-2-p3mn5mp1l6rj6g6xkazcehi1ih9wl6tvmoxp79anzm.jpg',
  garden: 'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/20ftx20ft-Capri-Marquee-pkb3062by5kel22h6auixd0e6vqq4oxb593bn22z8y.jpg',
  informal: 'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/28x28-Caerleon-p3melmwu7h56y7kk1685e7gq9bc6fk45a9i479ymsy.jpg',
  party: 'https://itscovered.co.uk/wp-content/uploads/2021/03/Brilliant-party-Newport.jpg',
  large: 'https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg',
  festival: 'https://itscovered.co.uk/wp-content/uploads/2018/12/marquee5.jpg',
  streetFood: 'https://itscovered.co.uk/wp-content/uploads/2021/03/Streetfood-Warehouse-DJ.jpg',
} as const;

const work = {
  weddings: {
    title: 'Wedding Marquee Gallery',
    intro: 'A closer look at wedding receptions, dining layouts and dressed Capri marquees across South Wales and beyond.',
    hero: capriImages.hero,
    images: [
      ['Wedding reception setting', capriImages.hero],
      ['Dressed dining layout', capriImages.weddingTable],
      ['Wedding guest layout', capriImages.guests],
      ['Garden Capri setup', capriImages.garden],
      ['Larger Capri configuration', capriImages.large],
    ]
  },
  parties: {
    title: 'Party Marquee Gallery',
    intro: 'Garden parties, birthdays and relaxed celebrations, from compact Capri setups to larger open-sided layouts.',
    hero: capriImages.party,
    images: [
      ['Evening party setup', capriImages.party],
      ['Garden party Capri', capriImages.garden],
      ['Informal Capri layout', capriImages.informal],
      ['Larger celebration space', capriImages.hero],
      ['Flexible party marquee', capriImages.large],
    ]
  },
  corporate: {
    title: 'Corporate Marquee Gallery',
    intro: 'Flexible Capri event spaces for hospitality, launches, staff events and client occasions.',
    hero: capriImages.large,
    images: [
      ['Corporate event Capri', capriImages.large],
      ['Open hospitality layout', capriImages.garden],
      ['Flexible event configuration', capriImages.informal],
      ['Larger guest setup', capriImages.guests],
      ['Evening hospitality space', capriImages.hero],
    ]
  },
  'festivals-events': {
    title: 'Festivals & Events Gallery',
    intro: 'Flexible cover for public events, festivals, community gatherings and high-footfall outdoor occasions.',
    hero: capriImages.festival,
    images: [
      ['Festival Capri setup', capriImages.festival],
      ['Outdoor event space', capriImages.hero],
      ['Street food event', capriImages.streetFood],
      ['Open-sided Capri cover', capriImages.garden],
      ['Large event configuration', capriImages.large],
    ]
  }
} as const;

export default async function WorkCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const data = work[category as keyof typeof work];
  if (!data) notFound();

  return <main>
    <SiteHeader />
    <section className={styles.hero}>
      <img className={styles.heroImage} src={data.hero} alt={data.title} />
      <div className={styles.heroOverlay} />
      <div className={`shell ${styles.heroInner}`}>
        <span className={styles.eyebrow}>Our work</span>
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
      </div>
    </section>

    <section className={styles.section}>
      <div className="shell">
        <div className={styles.sectionHead}>
          <div>
            <span className={styles.label}>Selected work</span>
            <h2>Picture the space before you plan it.</h2>
            <p>These are selected It’s Covered and Capri-style setups chosen to show the shape, scale and atmosphere clearly. We’ll keep replacing temporary imagery with the strongest original event photography as it becomes available.</p>
          </div>
          <Link className="button button-primary" href="/#booking">Choose Your Date →</Link>
        </div>

        <div className={styles.gallery}>
          {data.images.map(([label,image]) => (
            <figure key={`${label}-${image}`}>
              <img src={image} alt={label} loading="lazy" />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    <section className={`${styles.section} ${styles.soft}`}>
      <div className="shell">
        <div className={styles.sectionHead}>
          <div><span className={styles.label}>More inspiration</span><h2>Explore another type of event.</h2></div>
        </div>
        <div className={styles.related}>
          <Link href="/our-work/weddings">Weddings →</Link>
          <Link href="/our-work/parties">Parties →</Link>
          <Link href="/our-work/corporate">Corporate →</Link>
          <Link href="/our-work/festivals-events">Festivals & Events →</Link>
        </div>
      </div>
    </section>

    <section className={styles.cta}>
      <div className={`shell ${styles.ctaInner}`}>
        <div><h2>Want something like this?</h2><p>Choose your date and tell us what you’re planning. We’ll guide you towards the right Capri setup.</p></div>
        <Link className="button button-light button-large" href="/#booking">Start Your Enquiry →</Link>
      </div>
    </section>
    <SiteFooter />
  </main>
}
