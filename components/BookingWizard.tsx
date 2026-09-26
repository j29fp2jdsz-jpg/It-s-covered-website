'use client';

import { useEffect, useMemo, useState } from 'react';

type EventDetails = {
  type: string;
  guests: number;
  style: string;
  postcode: string;
  venue: string;
  surface: string;
  dancefloor: boolean;
  bar: boolean;
  buffet: boolean;
  access: string;
  notes: string;
};

type ContactDetails = { name: string; email: string; phone: string };

type SavedEnquiry = {
  date: string;
  details: EventDetails;
  marquee: string;
  extras: string[];
  contact: ContactDetails;
  packageSlug?: string;
};

const marqueeOptions = [
  { id: 'garden', name: 'Garden Party', capacity: 30, copy: '20ft × 20ft option for smaller garden events.' },
  { id: '45-guests', name: '45 Guests', capacity: 45, copy: 'Seated package option for up to 45 guests.' },
  { id: 'informal', name: 'Informal Party', capacity: 55, copy: 'Standing-party option for up to 55 guests.' },
  { id: '80-guests', name: '80 Guests', capacity: 80, copy: 'Seated package option for up to 80 guests.' },
  { id: 'large', name: 'Large Party', capacity: 100, copy: '28ft × 38ft standing-party option for up to 100 guests.' },
];

const packagePresets = {
  'garden-party': {
    name: 'Garden Party',
    marquee: 'garden',
    guests: 18,
    style: 'Seated',
    includedExtras: ['Tables', 'Chairs', 'Lighting', 'Side walls'],
    includes: ['20ft × 20ft Capri marquee', '18 chairs', '3 × 4ft round tables', '1 × trestle table', 'Twinkle lights', 'Plain + clear side walls'],
    capacity: '18 seated as standard',
  },
  'informal-party': {
    name: 'Informal Party',
    marquee: 'informal',
    guests: 55,
    style: 'Standing',
    includedExtras: ['Lighting', 'Side walls'],
    includes: ['Capri marquee', 'Standing room for 55', 'Twinkle lights', 'Plain + clear side walls'],
    capacity: 'Up to 55 standing',
  },
  'large-party': {
    name: 'Large Party',
    marquee: 'large',
    guests: 100,
    style: 'Standing',
    includedExtras: ['Lighting', 'Side walls'],
    includes: ['28ft × 38ft Capri marquee', 'Standing room for 100', 'Twinkle lights', 'Plain + clear side walls'],
    capacity: 'Up to 100 standing',
  },
  '45-guests': {
    name: '45 Guests',
    marquee: '45-guests',
    guests: 45,
    style: 'Seated',
    includedExtras: ['Tables', 'Chairs', 'Flooring', 'Side walls'],
    includes: ['20ft × 30ft Capri marquee', '6 × 4ft round tables', '2 × trestle tables', '45 chairs', 'Dandydura matting', 'Plain + clear side walls'],
    capacity: 'Up to 45 seated',
  },
  '80-guests': {
    name: '80 Guests',
    marquee: '80-guests',
    guests: 80,
    style: 'Seated',
    includedExtras: ['Tables', 'Chairs', 'Flooring', 'Side walls'],
    includes: ['28ft × 38ft Capri marquee', '8 × 5ft round tables', '2 × trestle tables', '80 chairs', 'Dandydura matting', 'Plain + clear side walls'],
    capacity: 'Up to 80 seated',
  },
} as const;

const extrasList = ['Tables', 'Chairs', 'Flooring', 'Lighting', 'Heating', 'Dance floor', 'Side walls', 'Furniture'];
const STORAGE_KEY = 'its-covered-enquiry-v1';

const postcodeLooksValid = (value: string) => /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(value.trim());
const emailLooksValid = (value: string) => /^\S+@\S+\.\S+$/.test(value.trim());

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [details, setDetails] = useState<EventDetails>({
    type: 'Wedding', guests: 60, style: 'Mixed', postcode: '', venue: '', surface: 'Grass',
    dancefloor: false, bar: false, buffet: false, access: 'Under 10m', notes: '',
  });
  const [marquee, setMarquee] = useState('80-guests');
  const [extras, setExtras] = useState<string[]>([]);
  const [packageSlug, setPackageSlug] = useState('');
  const [contact, setContact] = useState<ContactDetails>({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as SavedEnquiry;
        if (saved.date) setDate(saved.date);
        if (saved.details) setDetails((current) => ({ ...current, ...saved.details }));
        if (saved.marquee) setMarquee(saved.marquee);
        if (saved.extras) setExtras(saved.extras);
        if (saved.contact) setContact(saved.contact);
        if (saved.packageSlug) {
          setPackageSlug(saved.packageSlug);
          const savedPreset = packagePresets[saved.packageSlug as keyof typeof packagePresets];
          if (savedPreset) {
            setMarquee(savedPreset.marquee);
            setExtras((saved.extras?.length ? saved.extras : [...savedPreset.includedExtras]));
            setDetails((current) => ({ ...current, guests: savedPreset.guests, style: savedPreset.style }));
          }
        }
      }

      const requestedPackage = new URLSearchParams(window.location.search).get('package') || '';
      const preset = packagePresets[requestedPackage as keyof typeof packagePresets];
      if (preset) {
        setPackageSlug(requestedPackage);
        setMarquee(preset.marquee);
        setExtras([...preset.includedExtras]);
        setDetails((current) => ({ ...current, guests: preset.guests, style: preset.style }));
      }
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ date, details, marquee, extras, contact, packageSlug }));
  }, [loaded, date, details, marquee, extras, contact, packageSlug]);

  const spaceBuffer = (details.dancefloor ? 15 : 0) + (details.bar ? 10 : 0) + (details.buffet ? 10 : 0) + (details.style === 'Seated' ? 10 : 0);
  const recommended = useMemo(() => {
    const effectiveGuests = details.guests + spaceBuffer;
    return marqueeOptions.find((option) => option.capacity >= effectiveGuests) ?? marqueeOptions[marqueeOptions.length - 1];
  }, [details.guests, spaceBuffer]);

  const activePackage = packageSlug ? packagePresets[packageSlug as keyof typeof packagePresets] : undefined;

  useEffect(() => {
    if (activePackage) {
      if (marquee !== activePackage.marquee) setMarquee(activePackage.marquee);
      return;
    }
    setMarquee(recommended.id);
  }, [recommended.id, activePackage, marquee]);

  const effectiveMarquee = activePackage?.marquee ?? marquee;
  const chosen = marqueeOptions.find((item) => item.id === effectiveMarquee) ?? recommended;
  const includedExtras: string[] = activePackage ? [...activePackage.includedExtras] : [];
  const addedExtras = extras.filter((item) => !includedExtras.includes(item));
  const toggleExtra = (extra: string) => {
    if (includedExtras.includes(extra)) return;
    setExtras((current) => current.includes(extra) ? current.filter((item) => item !== extra) : [...current, extra]);
  };

  const stepValid = useMemo(() => {
    if (step === 1) return Boolean(date);
    if (step === 2) return details.guests > 0 && details.guests <= 500 && postcodeLooksValid(details.postcode);
    if (step === 3) return Boolean(marquee);
    if (step === 4) return true;
    return contact.name.trim().length > 1 && emailLooksValid(contact.email) && contact.phone.trim().length >= 7;
  }, [step, date, details, marquee, contact]);

  const next = () => {
    if (!stepValid) return;
    setStep((current) => Math.min(5, current + 1));
    requestAnimationFrame(() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };
  const back = () => setStep((current) => Math.max(1, current - 1));

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Website marquee enquiry — ${contact.name || 'New customer'}`);
    const body = encodeURIComponent([
      `Name: ${contact.name}`, `Email: ${contact.email}`, `Phone: ${contact.phone}`, `Date: ${date}`,
      `Event: ${details.type}`, `Guests: ${details.guests}`, `Layout: ${details.style}`, `Venue: ${details.venue || 'Not supplied'}`,
      `Postcode: ${details.postcode}`, `Surface: ${details.surface}`, `Van access: ${details.access}`,
      `Space needed: ${[details.dancefloor && 'Dance floor', details.bar && 'Bar', details.buffet && 'Buffet'].filter(Boolean).join(', ') || 'None specified'}`,
      `Selected package: ${activePackage?.name || 'Custom / no package'}`, `Selected marquee: ${chosen.name}`,
      `Package includes: ${activePackage?.includes.join(', ') || 'Not applicable'}`,
      `Added extras: ${addedExtras.join(', ') || 'None selected'}`, `Notes: ${details.notes || 'None'}`,
    ].join('\n'));
    return `mailto:info@itscovered.co.uk?subject=${subject}&body=${body}`;
  }, [contact, date, details, chosen.name, extras, activePackage?.name, activePackage?.includes, addedExtras]);

  async function submitEnquiry() {
    if (!stepValid || sending) return;
    setSending(true);
    setSubmitError('');
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, details, marquee: chosen, extras, contact, package: activePackage ? { slug: packageSlug, ...activePackage } : null }),
      });
      if (!response.ok) throw new Error('Delivery is not configured yet');
      setSubmitted(true);
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      setSubmitError('Automatic delivery is not connected yet. You can send the completed enquiry by email using the button below.');
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="wizard-card success-card" role="status">
        <span className="success-mark">✓</span>
        <h3>Enquiry sent.</h3>
        <p>Thanks {contact.name}. It’s Covered now has the details needed to review your event and arrange a site visit to confirm access, measurements, availability and the final setup.</p>
        <button className="button button-outline" type="button" onClick={() => { setSubmitted(false); setStep(1); }}>Start another enquiry</button>
      </div>
    );
  }

  return (
    <div className="wizard-card">
      {activePackage && <div className="wizard-package-summary">
        <div><span>Selected package</span><strong>{activePackage.name}</strong></div>
        <div><span>Capacity</span><strong>{activePackage.capacity}</strong></div>
        <div><span>Included</span><strong>{activePackage.includes.length} items</strong></div>
      </div>}
      <div className="wizard-progress" aria-label={`Step ${step} of 5`}>
        {['Date', 'Event', 'Marquee', 'Extras', 'Review'].map((label, index) => (
          <button type="button" key={label} className={step === index + 1 ? 'progress-step active' : step > index + 1 ? 'progress-step complete' : 'progress-step'} onClick={() => index + 1 < step && setStep(index + 1)} aria-current={step === index + 1 ? 'step' : undefined}>
            <span>{index + 1}</span>{label}
          </button>
        ))}
      </div>

      {step === 1 && <section className="wizard-panel">
        <span className="kicker">Step 1 of 5</span><h3>Pick your date</h3><p>Choose your event date first. We’ll carry it through the enquiry with the marquee, package and equipment you select.</p>
        {activePackage && <div className="package-preset">
          <div><span className="package-preset-kicker">Package selected</span><strong>{activePackage.name}</strong><small>{activePackage.capacity}</small></div>
          <ul>{activePackage.includes.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>}
        <label className="field-label" htmlFor="event-date">Event date</label>
        <input id="event-date" className="field-control" type="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().slice(0,10)} />
        {date && <p className="provisional-note">Great — we’ll carry {new Date(`${date}T12:00:00`).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} through the rest of your enquiry.</p>}
      </section>}

      {step === 2 && <section className="wizard-panel form-grid">
        <div className="full-field"><span className="kicker">Step 2 of 5</span><h3>Tell us about your event</h3><p>Guest numbers, layout, surface and access help narrow down which marquee setup is practical for the site.</p></div>
        <label>Event type<select className="field-control" value={details.type} onChange={(e) => setDetails({...details, type: e.target.value})}><option>Wedding</option><option>Birthday / Party</option><option>Corporate</option><option>Festival / Event</option><option>Other</option></select></label>
        <label>Guest count<input className="field-control" type="number" min="1" max="500" value={details.guests} onChange={(e) => setDetails({...details, guests: Number(e.target.value)})} /></label>
        <label>Layout<select className="field-control" value={details.style} onChange={(e) => setDetails({...details, style: e.target.value})}><option>Seated</option><option>Standing</option><option>Mixed</option></select></label>
        <label>Venue / location name <span style={{fontWeight:400, color:'#687068'}}>(optional)</span><input className="field-control" value={details.venue} onChange={(e) => setDetails({...details, venue: e.target.value})} placeholder="e.g. Usk Castle" /></label>
        <label>Venue postcode<input className="field-control" autoComplete="postal-code" value={details.postcode} onChange={(e) => setDetails({...details, postcode: e.target.value.toUpperCase()})} placeholder="e.g. NP15 1AA" aria-invalid={details.postcode.length > 3 && !postcodeLooksValid(details.postcode)} />{details.postcode.length > 3 && !postcodeLooksValid(details.postcode) && <small style={{color:'#9b3a32'}}>Please enter a valid UK postcode.</small>}</label>
        <label>Installation surface<select className="field-control" value={details.surface} onChange={(e) => setDetails({...details, surface: e.target.value})}><option>Grass</option><option>Concrete</option><option>Tarmac</option><option>Gravel</option><option>Other / unsure</option></select></label>
        <label>How close can the van get?<select className="field-control" value={details.access} onChange={(e) => setDetails({...details, access: e.target.value})}><option>Under 10m</option><option>10–25m</option><option>25–50m</option><option>50–100m</option><option>More than 100m / difficult access</option></select></label>
        <fieldset className="full-field check-group"><legend>Do you need space for any of these?</legend>{[['dancefloor','Dance floor'],['bar','Bar'],['buffet','Buffet']].map(([key,label]) => <label className="check-option" key={key}><input type="checkbox" checked={Boolean(details[key as keyof EventDetails])} onChange={(e) => setDetails({...details, [key]: e.target.checked})} />{label}</label>)}</fieldset>
        <label className="full-field">Anything else we should know? <span style={{fontWeight:400, color:'#687068'}}>(optional)</span><textarea className="field-control" style={{minHeight:92, resize:'vertical'}} value={details.notes} onChange={(e) => setDetails({...details, notes:e.target.value})} placeholder="Steps, slopes, narrow gates, timings or anything unusual about the site." /></label>
      </section>}

      {step === 3 && <section className="wizard-panel">
        <span className="kicker">Step 3 of 5</span><h3>{activePackage ? 'Your package setup' : 'Pick your marquee'}</h3>
        {activePackage ? <>
          <p>You chose the <strong>{activePackage.name}</strong> package. Its standard setup is already loaded below.</p>
          <div className="package-preset package-preset-large">
            <div><span className="package-preset-kicker">Preset package</span><strong>{activePackage.name}</strong><small>{activePackage.capacity}</small></div>
            <ul>{activePackage.includes.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </> : <>
          <p>For {details.guests} guests{spaceBuffer ? ' plus the extra space you asked for' : ''}, we recommend <strong>{recommended.name}</strong>. You can still choose another suitable option.</p>
          <div className="choice-grid">{marqueeOptions.map((option) => <button type="button" key={option.id} className={`choice-card ${marquee === option.id ? 'selected' : ''}`} onClick={() => setMarquee(option.id)}>
            {recommended.id === option.id && <span className="recommend-badge">Recommended</span>}<strong>{option.name}</strong><span>Up to {option.capacity} guests</span><small>{option.copy}</small>
          </button>)}</div>
        </>}
      </section>}

      {step === 4 && <section className="wizard-panel">
        <span className="kicker">Step 4 of 5</span><h3>{activePackage ? 'Included items & extras' : 'Optional extras'}</h3><p>{activePackage ? 'Items included in your package are already selected. Add anything else you want us to consider.' : 'Add anything you’re considering. Nothing here is locked in until the site visit and final confirmation.'}</p>
        <div className="extras-grid">{extrasList.map((extra) => {
          const included = includedExtras.includes(extra);
          return <button type="button" key={extra} aria-pressed={extras.includes(extra)} disabled={included} className={`extra-card ${extras.includes(extra) ? 'selected' : ''} ${included ? 'included' : ''}`} onClick={() => toggleExtra(extra)}><span>{included ? '✓' : extras.includes(extra) ? '✓' : '+'}</span>{extra}{included && <small>Included</small>}</button>;
        })}</div>
      </section>}

      {step === 5 && <section className="wizard-panel form-grid">
        <div className="full-field"><span className="kicker">Step 5 of 5</span><h3>Review your enquiry</h3><p>Check the event details, package and any extras you’ve added, then tell us how to contact you.</p></div>
        <div className="estimate-box full-field">
          <div><span>Event date</span><strong>{new Date(`${date}T12:00:00`).toLocaleDateString('en-GB')}</strong></div><div><span>Event</span><strong>{details.type} · {details.guests} guests</strong></div>
          {activePackage && <div><span>Selected package</span><strong>{activePackage.name} · {activePackage.capacity}</strong></div>}
          <div><span>Selected marquee</span><strong>{chosen.name}</strong></div><div><span>Location</span><strong>{details.venue ? `${details.venue}, ` : ''}{details.postcode}</strong></div>
          {activePackage && <div><span>Package includes</span><strong>{activePackage.includes.join(', ')}</strong></div>}
          <div><span>{activePackage ? 'Added extras' : 'Optional extras'}</span><strong>{activePackage ? (addedExtras.length ? addedExtras.join(', ') : 'None added') : (extras.length ? extras.join(', ') : 'None selected')}</strong></div>
        </div>
        <p className="provisional-note full-field">This enquiry is based on the information provided. Availability and final event details will be confirmed following a site visit.</p>
        <label>Your name<input className="field-control" autoComplete="name" value={contact.name} onChange={(e) => setContact({...contact, name:e.target.value})} /></label>
        <label>Email address<input className="field-control" type="email" autoComplete="email" value={contact.email} onChange={(e) => setContact({...contact, email:e.target.value})} /></label>
        <label>Phone number<input className="field-control" type="tel" autoComplete="tel" value={contact.phone} onChange={(e) => setContact({...contact, phone:e.target.value})} /></label>
        <div style={{display:'flex', alignItems:'end'}}><p style={{margin:0, color:'#687068', fontSize:14}}>Next step: the enquiry is reviewed and a site visit can be arranged to check access, measurements and the proposed layout.</p></div>
        {submitError && <div className="provisional-note full-field" role="alert"><strong>{submitError}</strong><div style={{marginTop:12}}><a className="button button-outline" href={mailtoHref}>Send completed enquiry by email</a></div></div>}
      </section>}

      <div className="wizard-actions">
        {step > 1 && <button className="button button-outline" type="button" onClick={back}>Back</button>}
        {step < 5 ? <button className="button button-primary" type="button" onClick={next} disabled={!stepValid}>{step === 2 ? 'Show Suitable Marquees' : step === 4 ? 'Review My Enquiry' : 'Continue'}</button> : <button className="button button-primary" type="button" onClick={submitEnquiry} disabled={!stepValid || sending}>{sending ? 'Sending…' : 'Send My Enquiry & Arrange Site Visit'}</button>}
      </div>
    </div>
  );
}
