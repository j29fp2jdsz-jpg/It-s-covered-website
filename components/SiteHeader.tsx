'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  ['Home', '/'], ['Marquees', '/marquees'], ['Packages', '/packages'], ['Events', '/events'], ['Our Work', '/our-work'], ['About', '/about'], ['Contact', '/contact']
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="brand" href="/" aria-label="It's Covered home">
          <span className="brand-main">itscovered</span>
          <span className="brand-sub">MARQUEE HIRE</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <Link key={label} href={href} aria-current={isActive(href) ? 'page' : undefined}>{label}</Link>)}
        </nav>
        <Link className="button button-primary header-cta" href="/#booking">Choose Your Date</Link>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? '×' : '☰'}</button>
      </div>
      {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, href]) => <Link key={label} href={href} aria-current={isActive(href) ? 'page' : undefined}>{label}</Link>)}<Link className="button button-primary" href="/#booking">Choose Your Date</Link></nav>}
    </header>
  );
}
