import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import styles from '../../site-pages.module.css';

const data = {
  'garden-party': { title:'Garden Party', image:'/images/parties/party-garden.webp', secondary:'/images/parties/party-birthday.webp', intro:'A beautifully simple Capri setup for smaller garden celebrations and relaxed events.', size:'20ft × 20ft', capacity:'18 seated as standard', price:'£510', includes:['20ft × 20ft Capri marquee','18 chairs','Twinkle lights','3 × 4ft round tables','1 × trestle table','Plain + clear side walls'], ideal:'Birthdays, garden parties, family celebrations and smaller gatherings.' },
  'informal-party': { title:'Informal Party', image:'/images/parties/party-engagement.webp', secondary:'/images/parties/party-garden.webp', intro:'A flexible party setup with room to mingle, eat, drink and celebrate without overcomplicating the layout.', size:'28ft × 28ft or 20ft × 30ft', capacity:'Standing room for 55', price:'£516', includes:['Capri marquee','Standing room for 55','Twinkle lights','Plain + clear side walls'], ideal:'Engagements, birthdays, anniversaries and informal family parties.' },
  'large-party': { title:'Large Party', image:'/images/parties/party-birthday.webp', secondary:'/images/parties/party-engagement.webp', intro:'More space for bigger guest lists, better flow and a proper party atmosphere.', size:'28ft × 38ft', capacity:'Standing room for 100', price:'£587', includes:['28ft × 38ft Capri marquee','Standing room for 100','Twinkle lights','Plain + clear side walls'], ideal:'Large birthdays, celebrations, drinks-led events and bigger garden parties.' },
  '45-guests': { title:'45 Guests', image:'/images/weddings/wedding-castle.webp', secondary:'/images/weddings/wedding-countryside.webp', intro:'A ready-made seated setup for events where dining and guest comfort matter.', size:'20ft × 30ft', capacity:'Up to 45 seated', price:'£1,035', includes:['20ft × 30ft Capri marquee','6 × 4ft round tables','2 × trestle tables','45 chairs','Dandydura matting','Plain + clear side walls'], ideal:'Smaller weddings, seated parties and private dining events.' },
  '80-guests': { title:'80 Guests', image:'/images/weddings/wedding-castle-reception.webp', secondary:'/images/weddings/wedding-castle.webp', intro:'A spacious seated package for larger weddings, celebrations and corporate occasions.', size:'28ft × 38ft', capacity:'Up to 80 seated', price:'£1,286', includes:['28ft × 38ft Capri marquee','8 × 5ft round tables','2 × trestle tables','80 chairs','Dandydura matting','Plain + clear side walls'], ideal:'Weddings, milestone events, larger private parties and corporate hospitality.' }
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
          <span className={styles.label}>What’s included</span>
          <h2>A clear starting point.</h2>
          <div className={styles.packagePrice}>From {item.price}</div>
          <p>{item.ideal}</p>
          <ul className={styles.checks}>{item.includes.map(x=><li key={x}>{x}</li>)}</ul>
          <p className={styles.note}>This is an initial package price. Final pricing and availability are confirmed after the site visit once access, delivery, layout and extras have been checked.</p>
          <Link className="button button-primary button-large" href="/#booking">Start Your Booking →</Link>
        </div>
      </div>
    </section>

    <section className={styles.relatedSection}>
      <div className="shell"><span className={styles.label}>Other packages</span><div className={styles.related}>{related.map(([key,p])=><Link href={'/packages/' + key} key={key}>{p.title} →</Link>)}</div></div>
    </section>
    <SiteFooter />
  </main>
}