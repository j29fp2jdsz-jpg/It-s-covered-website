'use client';

import { useMemo, useState } from 'react';

const items = [
  { category:'weddings', label:'Weddings', image:'https://itscovered.co.uk/wp-content/uploads/2026/06/Marquee-Wedding-festival0.jpg' },
  { category:'weddings', label:'Wedding reception', image:'https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg' },
  { category:'weddings', label:'Wedding guests', image:'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/Roath-Church-wedding-guests-2-p3mn5mp1l6rj6g6xkazcehi1ih9wl6tvmoxp79anzm.jpg' },
  { category:'parties', label:'Garden party', image:'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/20ftx20ft-Capri-Marquee-pkb3062by5kel22h6auixd0e6vqq4oxb593bn22z8y.jpg' },
  { category:'parties', label:'Party setup', image:'https://itscovered.co.uk/wp-content/uploads/2021/03/Brilliant-party-Newport.jpg' },
  { category:'parties', label:'Informal party', image:'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/28x28-Caerleon-p3melmwu7h56y7kk1685e7gq9bc6fk45a9i479ymsy.jpg' },
  { category:'corporate', label:'Corporate event', image:'https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg' },
  { category:'corporate', label:'Open event layout', image:'https://itscovered.co.uk/wp-content/uploads/2021/03/Open-double-canopy.jpg' },
  { category:'festivals-events', label:'Festival event', image:'https://itscovered.co.uk/wp-content/uploads/2018/12/marquee5.jpg' },
  { category:'festivals-events', label:'Street food event', image:'https://itscovered.co.uk/wp-content/uploads/2021/03/Streetfood-Warehouse-DJ.jpg' },
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
  const visible = useMemo(() => active === 'all' ? items : items.filter(item => item.category === active), [active]);

  return <>
    <div className={classes.filterBar} role="tablist" aria-label="Filter our work">
      {filters.map(([key,label]) => <button key={key} type="button" role="tab" aria-selected={active===key} className={active===key ? classes.activeFilter : ''} onClick={() => setActive(key)}>{label}</button>)}
    </div>
    <div className={classes.galleryGrid}>
      {visible.map((item,index) => <figure className={classes.galleryCard} key={`${item.category}-${item.label}-${index}`}>
        <img src={item.image} alt={item.label} loading="lazy" />
        <figcaption>{item.label}</figcaption>
      </figure>)}
    </div>
  </>;
}
