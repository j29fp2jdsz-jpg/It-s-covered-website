'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

const items = [
  { category:'weddings', label:'Castle wedding', image:'/images/weddings/wedding-castle.webp' },
  { category:'weddings', label:'Wedding reception', image:'/images/weddings/wedding-countryside.webp' },
  { category:'weddings', label:'Castle reception', image:'/images/weddings/wedding-castle-reception.webp' },
  { category:'parties', label:'Garden party', image:'/images/parties/party-garden.webp' },
  { category:'parties', label:'Engagement celebration', image:'/images/parties/party-engagement.webp' },
  { category:'parties', label:'Birthday celebration', image:'/images/parties/party-birthday.webp' },
  { category:'corporate', label:'Presentation setup', image:'/images/corporate/corporate-stage.webp' },
  { category:'corporate', label:'Corporate reception', image:'/images/corporate/corporate-reception.webp' },
  { category:'corporate', label:'Business networking', image:'/images/corporate/corporate-networking.webp' },
  { category:'festivals-events', label:'Rugby hospitality', image:'/images/events/event-rugby.webp' },
  { category:'festivals-events', label:'Motorsport event hub', image:'/images/events/event-motocross.webp' },
  { category:'festivals-events', label:'Race registration', image:'/images/events/event-registration.webp' },
  { category:'festivals-events', label:'Beach festival', image:'/images/events/event-beach.webp' },
] as const;

const filters = [
  ['all','All'],
  ['weddings','Weddings'],
  ['parties','Parties'],
  ['corporate','Corporate'],
  ['festivals-events','Festivals & Events'],
] as const;

export default function WorkGallery({ classes }: { classes: Record<string,string> }) {
  const [active, setActive] = useState<(typeof filters)[number][0]>('all');
  const [selected, setSelected] = useState<(typeof items)[number] | null>(null);
  const visible = useMemo(() => active === 'all' ? items : items.filter(item => item.category === active), [active]);

  return <>
    <div className={classes.filterBar} role="tablist" aria-label="Filter event inspiration">
      {filters.map(([key,label]) => <button key={key} type="button" role="tab" aria-selected={active===key} className={active===key ? classes.activeFilter : ''} onClick={() => setActive(key)}>{label}</button>)}
    </div>
    <div className={classes.galleryGrid}>
      {visible.map((item,index) => <button type="button" className={classes.galleryCard} key={item.category + '-' + item.label + '-' + index} onClick={() => setSelected(item)} aria-label={'Open ' + item.label}>
        <Image src={item.image} alt={item.label} fill sizes="(max-width:640px) 100vw, (max-width:900px) 50vw, 33vw" />
        <span className={classes.galleryCaption}>{item.label}</span>
      </button>)}
    </div>
    {selected && <div className={classes.lightbox} role="dialog" aria-modal="true" aria-label={selected.label} onClick={() => setSelected(null)}>
      <button type="button" className={classes.lightboxClose} onClick={() => setSelected(null)} aria-label="Close image">×</button>
      <div className={classes.lightboxImage} onClick={(event) => event.stopPropagation()}>
        <Image src={selected.image} alt={selected.label} fill sizes="95vw" priority />
        <span>{selected.label}</span>
      </div>
    </div>}
  </>;
}