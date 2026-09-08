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
      <style jsx global>{`
        .desktop-nav a[aria-current='page']{color:#19392d;border-bottom-color:#6f8f5f}
        @media(max-width:760px){
          .site-header .header-cta{display:none}
          .site-header .nav-wrap{min-height:66px}
          .site-header .brand{margin-right:auto}
          .site-header .menu-button{display:grid;place-items:center;margin-left:auto}
          .site-header .mobile-nav{padding:10px 18px 18px;box-shadow:0 18px 34px rgba(16,42,32,.10)}
          .site-header .mobile-nav a:not(.button){padding:13px 2px;border-bottom:1px solid #eef1ec}
          .site-header .mobile-nav .button{width:100%;margin-top:12px}
        }
      `}</style>
    </header>
  );
}
