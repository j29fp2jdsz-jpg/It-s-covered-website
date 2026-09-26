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
        <Link className="brand brand-logo brand-wordmark" href="/" aria-label="It's Covered home">
          <svg className="brand-canopy" viewBox="0 0 600 118" aria-hidden="true">
            <path d="M18 102 C88 78 138 42 202 54 C258 65 292 18 346 21 C410 25 446 67 510 57 C544 52 568 39 585 30 L576 91 C526 76 471 78 429 95 C390 111 350 97 313 79 C271 59 228 66 192 90 C152 117 101 111 18 102 Z" fill="#d8e3cf"/>
            <path d="M18 102 C75 78 122 49 174 57 C225 64 266 34 307 27 C349 20 389 56 432 65 C478 75 531 56 585 30 C547 64 520 82 482 91 C435 103 396 97 358 79 C314 58 275 57 235 74 C188 94 147 111 18 102 Z" fill="#9db38b"/>
            <path d="M18 102 C101 111 152 117 192 90 C228 66 271 59 313 79 C350 97 390 111 429 95 C471 78 526 76 576 91 L585 30 C568 39 544 52 510 57 C446 67 410 25 346 21 C292 18 258 65 202 54 C138 42 88 78 18 102 Z" fill="none" stroke="#244f3b" strokeWidth="5"/>
          </svg>
          <span className="brand-word">itscovered</span>
          <span className="brand-tag">MARQUEE HIRE</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <Link key={label} href={href} aria-current={isActive(href) ? 'page' : undefined}>{label}</Link>)}
        </nav>
        <Link className="button button-primary header-cta" href="/#booking">Start Your Booking</Link>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? '×' : '☰'}</button>
      </div>
      {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, href]) => <Link key={label} href={href} aria-current={isActive(href) ? 'page' : undefined}>{label}</Link>)}<Link className="button button-primary" href="/#booking">Start Your Booking</Link></nav>}
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
