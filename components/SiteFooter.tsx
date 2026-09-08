import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-main">itscovered</span>
            <span className="brand-sub">MARQUEE HIRE</span>
          </div>
          <p>Stylish marquee hire for weddings, parties, corporate events and festivals across South Wales and beyond.</p>
        </div>
        <div>
          <strong>Explore</strong>
          <Link href="/marquees">Marquees</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/events">Events</Link>
          <Link href="/our-work">Our Work</Link>
        </div>
        <div>
          <strong>Contact</strong>
          <a href="tel:01633123456">01633 123 456</a>
          <a href="mailto:info@itscovered.co.uk">info@itscovered.co.uk</a>
          <span>Monmouthshire · South Wales</span>
        </div>
      </div>
      <div className="shell footer-bottom">© 2026 It’s Covered. All rights reserved.</div>
    </footer>
  );
}
