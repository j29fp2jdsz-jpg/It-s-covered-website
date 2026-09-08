import { notFound } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Link from 'next/link';

const pages: Record<string, { title: string; intro: string; cards: { title: string; copy: string }[] }> = {
  marquees: {
    title: 'Marquees for every kind of event',
    intro: 'From intimate garden gatherings to larger celebrations, we’ll help you choose a marquee that suits your guest count, layout and venue.',
    cards: [
      { title: 'Capri Marquees', copy: 'Distinctive, elegant structures that create an open, contemporary event space.' },
      { title: 'Flexible layouts', copy: 'Configure your space for seated dining, standing receptions, bars, buffets and dance floors.' },
      { title: 'Professional setup', copy: 'Our team handles delivery, installation and collection around your event schedule.' },
    ],
  },
  packages: {
    title: 'Marquee packages made simple',
    intro: 'Browse popular starting points, then tailor your setup with optional extras. Final pricing will be confirmed after a site visit.',
    cards: [
      { title: 'Garden Party', copy: 'A compact setup for smaller celebrations and garden events.' },
      { title: 'Informal Party', copy: 'A flexible party package for relaxed gatherings and family occasions.' },
      { title: '80 Guests', copy: 'A larger setup designed for weddings, parties and corporate events.' },
    ],
  },
  events: {
    title: 'Covered for every occasion',
    intro: 'Weddings, parties, corporate events, festivals and community gatherings — we’ll help shape the marquee around the event.',
    cards: [
      { title: 'Weddings', copy: 'Elegant marquee spaces for ceremonies, receptions and evening celebrations.' },
      { title: 'Parties', copy: 'Birthday parties, anniversaries, engagement celebrations and more.' },
      { title: 'Corporate', copy: 'Professional, flexible spaces for launches, hospitality and business events.' },
      { title: 'Festivals & Events', copy: 'Reliable marquee cover for public events, shows, community events and festivals.' },
    ],
  },
  about: {
    title: 'About It’s Covered',
    intro: 'A family-run marquee hire company based in Monmouthshire, supporting events across South Wales and beyond.',
    cards: [
      { title: 'Experienced', copy: 'Years of practical event experience and a straightforward, hands-on approach.' },
      { title: 'Local', copy: 'Based in Monmouthshire and covering venues throughout South Wales and further afield.' },
      { title: 'Personal service', copy: 'From first enquiry to final collection, you deal with a team that understands your event.' },
    ],
  },
  contact: {
    title: 'Let’s talk about your event',
    intro: 'Start with the booking planner or get in touch directly if you need help before you begin.',
    cards: [
      { title: 'Start a booking', copy: 'Choose your date and tell us about your event so we can recommend a suitable marquee.' },
      { title: 'Call us', copy: '01633 123 456' },
      { title: 'Email us', copy: 'info@itscovered.co.uk' },
    ],
  },
};

const gallery = [
  ['Weddings', 'https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg'],
  ['Parties', 'https://itscovered.co.uk/wp-content/uploads/2021/03/Brilliant-party-Newport.jpg'],
  ['Corporate', 'https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg'],
  ['Festivals & Events', 'https://itscovered.co.uk/wp-content/uploads/2018/12/marquee5.jpg'],
];

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === 'our-work') {
    return (
      <main>
        <SiteHeader />
        <section className="page-hero"><div className="shell"><span className="kicker">Our portfolio</span><h1>Our Work</h1><p>Real marquees, real events and a range of different settings across South Wales and beyond.</p></div></section>
        <section className="page-content"><div className="shell"><div className="gallery-grid">{gallery.map(([label, image]) => <figure key={label}><img src={image} alt={`${label} marquee event`} /><figcaption>{label}</figcaption></figure>)}</div><div className="centered" style={{marginTop: 34}}><Link className="button button-primary button-large" href="/#booking">Start Your Booking</Link></div></div></section>
        <SiteFooter />
      </main>
    );
  }

  const page = pages[slug];
  if (!page) notFound();

  return (
    <main>
      <SiteHeader />
      <section className="page-hero"><div className="shell"><span className="kicker">It’s Covered</span><h1>{page.title}</h1><p>{page.intro}</p></div></section>
      <section className="page-content"><div className="shell"><div className="info-grid">{page.cards.map((card) => <article className="info-card" key={card.title}><h3>{card.title}</h3><p>{card.copy}</p>{slug === 'contact' && card.title === 'Call us' ? <a className="text-link" href="tel:01633123456">Call now →</a> : slug === 'contact' && card.title === 'Email us' ? <a className="text-link" href="mailto:info@itscovered.co.uk">Email us →</a> : null}</article>)}</div><div className="centered" style={{marginTop: 34}}><Link className="button button-primary button-large" href="/#booking">Start Your Booking</Link></div></div></section>
      <SiteFooter />
    </main>
  );
}
