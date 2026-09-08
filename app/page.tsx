import Link from 'next/link';
import BookingWizard from '@/components/BookingWizard';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const steps = [
  ['1', 'Pick your date', 'Choose your event date.'],
  ['2', 'Tell us about your event', 'Event type, guest numbers, location and layout.'],
  ['3', 'Pick your marquee', 'We’ll recommend suitable options.'],
  ['4', 'Add your extras', 'Tables, chairs, lighting, flooring and more.'],
  ['5', 'Estimated cost', 'Review your provisional estimate.'],
];

const packages = [
  { title: 'Garden Party', image: 'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/20ftx20ft-Capri-Marquee-pkb3062by5kel22h6auixd0e6vqq4oxb593bn22z8y.jpg', copy: 'Perfect for smaller gatherings, birthdays and relaxed celebrations.' },
  { title: 'Informal Party', image: 'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/28x28-Caerleon-p3melmwu7h56y7kk1685e7gq9bc6fk45a9i479ymsy.jpg', copy: 'A flexible setup for family parties, engagements and get-togethers.' },
  { title: '80 Guests', image: 'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/Roath-Church-wedding-guests-2-p3mn5mp1l6rj6g6xkazcehi1ih9wl6tvmoxp79anzm.jpg', copy: 'A spacious choice for weddings, larger parties and corporate events.' },
];

const events = [
  ['Weddings', 'Create a beautiful setting for your big day.', 'https://itscovered.co.uk/wp-content/uploads/2023/04/Wedding-Table-Decorations-1.jpg'],
  ['Parties', 'From birthdays to anniversaries and everything in between.', 'https://itscovered.co.uk/wp-content/uploads/elementor/thumbs/Party-Marquee-Dog-p3meq7elfheddyxmcnbv0jye7qteul968vo36p6qk2.jpg'],
  ['Corporate', 'Professional marquee solutions for business events.', 'https://itscovered.co.uk/wp-content/uploads/2021/03/Roath-Church-28x38ft-marquee.jpg'],
  ['Festivals & Events', 'Flexible cover for shows, community events and festivals.', 'https://itscovered.co.uk/wp-content/uploads/2018/12/marquee5.jpg'],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <p className="eyebrow">Marquee hire South Wales & beyond</p>
          <h1>Unforgettable events<br /><span>start here.</span></h1>
          <p className="hero-copy">Stylish, reliable marquee hire for weddings, parties, corporate events and more. Whatever the occasion, we’ll help you create an incredible experience.</p>
          <div className="hero-actions">
            <a className="button button-primary button-large" href="#booking">Start Your Booking</a>
            <Link className="button button-ghost button-large" href="/our-work">View Our Work</Link>
          </div>
        </div>
      </section>

      <section className="journey-strip" aria-labelledby="journey-title">
        <div className="shell journey-inner">
          <div className="journey-intro">
            <span className="kicker">Simple from the start</span>
            <h2 id="journey-title">Get your estimated quote</h2>
            <p>Follow five simple steps and we’ll show you a suitable starting point for your event.</p>
          </div>
          <div className="journey-grid compact">
            {steps.map(([number, title, copy]) => (
              <article className="journey-card" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="shell">
          <div className="section-heading centered">
            <span className="kicker">Plan your event</span>
            <h2>Start your booking</h2>
            <p>Tell us the basics now. Fin will arrange a site visit afterwards to confirm access, measurements, availability and final pricing.</p>
          </div>
          <BookingWizard />
        </div>
      </section>

      <section className="content-section" id="packages">
        <div className="shell">
          <div className="section-row">
            <div><span className="kicker">Popular choices</span><h2>Our Popular Marquee Packages</h2><p>Flexible options for different event sizes and styles.</p></div>
            <Link className="button button-primary" href="/packages">View All Marquee Packages</Link>
          </div>
          <div className="package-grid">
            {packages.map((item) => (
              <article className="package-card" key={item.title}>
                <img src={item.image} alt={`${item.title} marquee setup`} />
                <div className="package-body"><h3>{item.title}</h3><p>{item.copy}</p><Link href="/packages">View Package →</Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section soft" id="events">
        <div className="shell">
          <div className="section-row"><div><span className="kicker">For every occasion</span><h2>Events for every occasion</h2></div><Link href="/events" className="text-link">Explore all events →</Link></div>
          <div className="event-grid">
            {events.map(([title, copy, image]) => (
              <Link href="/events" className="event-card" key={title}>
                <img src={image} alt={`${title} marquee event`} />
                <div className="event-overlay"><h3>{title}</h3><p>{copy}</p><span>Explore →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="shell trust-grid">
          {['Family run', 'Trusted & experienced', 'Delivery & professional setup', 'Based in Monmouthshire', 'Events of all sizes'].map((item) => <div key={item}><span>✓</span><strong>{item}</strong></div>)}
        </div>
      </section>

      <section className="content-section testimonials">
        <div className="shell">
          <div className="section-heading"><span className="kicker">What customers say</span><h2>Trusted for memorable events</h2></div>
          <div className="testimonial-grid">
            <blockquote>“Absolutely fantastic from start to finish. The marquee looked incredible and the team were a pleasure to work with.”<cite>Private event customer</cite></blockquote>
            <blockquote>“Professional, reliable and great value. Made our event stress free.”<cite>Corporate client</cite></blockquote>
            <blockquote>“Can’t recommend It’s Covered enough. The whole process was easy and the marquee was perfect.”<cite>Private party customer</cite></blockquote>
          </div>
        </div>
      </section>

      <section className="work-teaser">
        <div className="work-teaser-overlay" />
        <div className="shell work-teaser-content"><span className="kicker light">See it in action</span><h2>Real events. Real marquees.</h2><p>Take a look at weddings, parties, corporate events and festivals we’ve helped bring to life.</p><Link className="button button-primary button-large" href="/our-work">View Our Work</Link></div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner"><div><span className="kicker light">Ready when you are</span><h2>Let’s make your event extraordinary.</h2><p>Choose your date, tell us about your event and start planning today.</p></div><a className="button button-light button-large" href="#booking">Start Your Booking</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
