import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../../site-pages.module.css';

const data = {
  'garden-party': {
    title:'Garden Party', image:'/images/parties/party-garden.webp', secondary:'/images/parties/party-birthday.webp',
    intro:'A compact Capri setup for smaller garden celebrations where you still want proper seating and a finished event space.',
    size:'20ft × 20ft', capacity:'18 seated as standard',
    sectionLabel:'Garden Party package', sectionTitle:'A compact setup with the basics already covered.',
    includes:['20ft × 20ft Capri marquee','18 chairs','Twinkle lights','3 × 4ft round tables','1 × trestle table','Plain + clear side walls'],
    ideal:'A practical fit for birthdays, family celebrations and smaller garden events.',
    note:'This preset gives you the core marquee, seating, tables, lighting and side walls. You can add anything else you need when you start the booking.'
  },
  'informal-party': {
    title:'Informal Party', image:'/images/parties/party-engagement.webp', secondary:'/images/parties/party-garden.webp',
    intro:'A flexible standing-party setup for celebrations where guests will spend more time mingling than sitting at tables.',
    size:'28ft × 28ft or 20ft × 30ft', capacity:'Standing room for 55',
    sectionLabel:'Informal Party package', sectionTitle:'More open floor space, less formal seating.',
    includes:['Capri marquee','Standing room for 55','Twinkle lights','Plain + clear side walls'],
    ideal:'Designed around engagements, birthdays, anniversaries and relaxed drinks-led celebrations.',
    note:'This preset keeps the floor plan deliberately open. Tables, chairs, heating and other additions can be added if your event needs them.'
  },
  'large-party': {
    title:'Large Party', image:'/images/parties/party-birthday.webp', secondary:'/images/parties/party-engagement.webp',
    intro:'A larger Capri footprint for busy celebrations where guest flow and open party space matter.',
    size:'28ft × 38ft', capacity:'Standing room for 100',
    sectionLabel:'Large Party package', sectionTitle:'Built for a bigger crowd without filling the marquee with furniture.',
    includes:['28ft × 38ft Capri marquee','Standing room for 100','Twinkle lights','Plain + clear side walls'],
    ideal:'Suited to milestone birthdays, larger celebrations and events built around drinks, music and socialising.',
    note:'The standard setup prioritises standing capacity. Add furniture, heating, a dance floor or other requirements during the booking journey.'
  },
  '45-guests': {
    title:'45 Guests', image:'/images/weddings/wedding-castle.webp', secondary:'/images/weddings/wedding-countryside.webp',
    intro:'A seated package for smaller weddings and private events where everyone needs a proper place at the table.',
    size:'20ft × 30ft', capacity:'Up to 45 seated',
    sectionLabel:'45 Guest package', sectionTitle:'A complete seated starting layout for up to 45 people.',
    includes:['20ft × 30ft Capri marquee','6 × 4ft round tables','2 × trestle tables','45 chairs','Dandydura matting','Plain + clear side walls'],
    ideal:'A good starting point for smaller wedding receptions, private dining and seated celebrations.',
    note:'The standard furniture and flooring are already built into this preset. You can add lighting, heating, a dance floor or other extras as required.'
  },
  '80-guests': {
    title:'80 Guests', image:'/images/weddings/wedding-castle-reception.webp', secondary:'/images/weddings/wedding-castle.webp',
    intro:'A larger seated package for wedding receptions, milestone events and hospitality with a fuller guest list.',
    size:'28ft × 38ft', capacity:'Up to 80 seated',
    sectionLabel:'80 Guest package', sectionTitle:'A larger seated layout with furniture and flooring already planned in.',
    includes:['28ft × 38ft Capri marquee','8 × 5ft round tables','2 × trestle tables','80 chairs','Dandydura matting','Plain + clear side walls'],
    ideal:'Suited to larger wedding receptions, seated celebrations and corporate hospitality.',
    note:'This preset covers the core seated setup. Extra furniture, lighting, heating, a dance floor and other additions can be selected during booking.'
  }
} as const;

export default async function PackagePage({params}:{params:Promise<{package:string}>}){
  const {package:slug}=await params;
  const item=data[slug as keyof typeof data];
  if(!item) notFound();
  const related=Object.entries(data).filter(([key])=>key!==slug).slice(0,3);
  return <main>
    <SiteHeader />
    <section className={styles.hero}>
      <img className={styles.heroImage} src={item.image} alt={item.title + ' Capri marquee'}/>
      <div className={styles.heroOverlay}/>
      <div className={'shell ' + styles.heroInner}>
        <span className={styles.eyebrow}>Marquee package</span>
        <h1>{item.title}</h1>
        <p>{item.intro}</p>
        <div className={styles.packageHeroMeta}><span>{item.size}</span><span>{item.capacity}</span></div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={'shell ' + styles.split}>
        <img src={item.secondary} alt={'Example Capri marquee setup for ' + item.title}/>
        <div className={styles.copy}>
          <span className={styles.label}>{item.sectionLabel}</span>
          <h2>{item.sectionTitle}</h2>
          <p>{item.ideal}</p>
          <ul className={styles.checks}>{item.includes.map(x=><li key={x}>{x}</li>)}</ul>
          <p className={styles.note}>{item.note} Final availability and site details are confirmed after the site visit.</p>
          <Link className="button button-primary button-large" href={'/?package=' + slug + '#booking'}>Choose this package & date →</Link>
        </div>
      </div>
    </section>

    <section className={styles.relatedSection}>
      <div className="shell"><span className={styles.label}>Other packages</span><div className={styles.related}>{related.map(([key,p])=><Link href={'/packages/' + key} key={key}>{p.title} →</Link>)}</div></div>
    </section>
    <SiteFooter />
  </main>
}