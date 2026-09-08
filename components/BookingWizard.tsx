'use client';

import { useMemo, useState } from 'react';

type EventDetails = {
  type: string;
  guests: number;
  style: string;
  postcode: string;
  dancefloor: boolean;
  bar: boolean;
  buffet: boolean;
  access: string;
};

const marqueeOptions = [
  { id: 'garden', name: 'Garden Party', capacity: 30, copy: 'Ideal for smaller garden celebrations.' },
  { id: 'informal', name: 'Informal Party', capacity: 55, copy: 'A flexible option for relaxed parties and gatherings.' },
  { id: '80-guests', name: '80 Guests', capacity: 80, copy: 'A spacious setup for weddings, parties and corporate events.' },
  { id: 'large', name: 'Large Event', capacity: 120, copy: 'For bigger guest lists and events needing more room.' },
];

const extrasList = ['Tables', 'Chairs', 'Flooring', 'Lighting', 'Heating', 'Dance floor', 'Side walls', 'Furniture'];

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [details, setDetails] = useState<EventDetails>({
    type: 'Wedding',
    guests: 60,
    style: 'Mixed',
    postcode: '',
    dancefloor: false,
    bar: false,
    buffet: false,
    access: 'Under 10m',
  });
  const [marquee, setMarquee] = useState('80-guests');
  const [extras, setExtras] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const recommended = useMemo(() => {
    return marqueeOptions.find((option) => option.capacity >= details.guests) ?? marqueeOptions[marqueeOptions.length - 1];
  }, [details.guests]);

  const toggleExtra = (extra: string) => {
    setExtras((current) => current.includes(extra) ? current.filter((item) => item !== extra) : [...current, extra]);
  };

  const next = () => setStep((current) => Math.min(5, current + 1));
  const back = () => setStep((current) => Math.max(1, current - 1));

  if (submitted) {
    return (
      <div className="wizard-card success-card" role="status">
        <span className="success-mark">✓</span>
        <h3>Thanks — your enquiry is ready for review.</h3>
        <p>Fin can now follow up to arrange a site visit and confirm the final details, availability and price.</p>
        <button className="button button-outline" type="button" onClick={() => setSubmitted(false)}>Review enquiry</button>
      </div>
    );
  }

  return (
    <div className="wizard-card">
      <div className="wizard-progress" aria-label={`Step ${step} of 5`}>
        {['Date', 'Event', 'Marquee', 'Extras', 'Estimate'].map((label, index) => (
          <button
            type="button"
            key={label}
            className={step === index + 1 ? 'progress-step active' : step > index + 1 ? 'progress-step complete' : 'progress-step'}
            onClick={() => index + 1 < step && setStep(index + 1)}
            aria-current={step === index + 1 ? 'step' : undefined}
          >
            <span>{index + 1}</span>{label}
          </button>
        ))}
      </div>

      {step === 1 && (
        <section className="wizard-panel">
          <span className="kicker">Step 1</span>
          <h3>Pick your date</h3>
          <p>Choose your event date and we’ll use it throughout your enquiry.</p>
          <label className="field-label" htmlFor="event-date">Event date</label>
          <input id="event-date" className="field-control" type="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().slice(0,10)} />
        </section>
      )}

      {step === 2 && (
        <section className="wizard-panel form-grid">
          <div className="full-field"><span className="kicker">Step 2</span><h3>Tell us about your event</h3><p>A few details help us point you towards the right setup.</p></div>
          <label>Event type<select className="field-control" value={details.type} onChange={(e) => setDetails({...details, type: e.target.value})}><option>Wedding</option><option>Birthday / Party</option><option>Corporate</option><option>Festival / Event</option><option>Other</option></select></label>
          <label>Guest count<input className="field-control" type="number" min="1" max="500" value={details.guests} onChange={(e) => setDetails({...details, guests: Number(e.target.value)})} /></label>
          <label>Layout<select className="field-control" value={details.style} onChange={(e) => setDetails({...details, style: e.target.value})}><option>Seated</option><option>Standing</option><option>Mixed</option></select></label>
          <label>Venue postcode<input className="field-control" type="text" value={details.postcode} onChange={(e) => setDetails({...details, postcode: e.target.value.toUpperCase()})} placeholder="e.g. NP15 1AA" /></label>
          <label>Van access<select className="field-control" value={details.access} onChange={(e) => setDetails({...details, access: e.target.value})}><option>Under 10m</option><option>10–25m</option><option>25–50m</option><option>50–100m</option><option>More than 100m / difficult access</option></select></label>
          <fieldset className="full-field check-group"><legend>Do you need space for any of these?</legend>{[['dancefloor','Dance floor'],['bar','Bar'],['buffet','Buffet']].map(([key,label]) => <label className="check-option" key={key}><input type="checkbox" checked={Boolean(details[key as keyof EventDetails])} onChange={(e) => setDetails({...details, [key]: e.target.checked})} />{label}</label>)}</fieldset>
        </section>
      )}

      {step === 3 && (
        <section className="wizard-panel">
          <span className="kicker">Step 3</span>
          <h3>Pick your marquee</h3>
          <p>Based on {details.guests} guests, we recommend <strong>{recommended.name}</strong>.</p>
          <div className="choice-grid">
            {marqueeOptions.map((option) => (
              <button type="button" key={option.id} className={`choice-card ${marquee === option.id ? 'selected' : ''}`} onClick={() => setMarquee(option.id)}>
                {recommended.id === option.id && <span className="recommend-badge">Recommended</span>}
                <strong>{option.name}</strong><span>Up to {option.capacity} guests</span><small>{option.copy}</small>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="wizard-panel">
          <span className="kicker">Step 4</span>
          <h3>Optional extras</h3>
          <p>Choose anything you may want. You can confirm the details during the site visit.</p>
          <div className="extras-grid">{extrasList.map((extra) => <button type="button" key={extra} className={`extra-card ${extras.includes(extra) ? 'selected' : ''}`} onClick={() => toggleExtra(extra)}><span>{extras.includes(extra) ? '✓' : '+'}</span>{extra}</button>)}</div>
        </section>
      )}

      {step === 5 && (
        <section className="wizard-panel">
          <span className="kicker">Step 5</span>
          <h3>Your estimated event cost</h3>
          <div className="estimate-box">
            <div><span>Selected marquee</span><strong>{marqueeOptions.find((item) => item.id === marquee)?.name}</strong></div>
            <div><span>Event date</span><strong>{date || 'To be confirmed'}</strong></div>
            <div><span>Guest count</span><strong>{details.guests}</strong></div>
            <div><span>Optional extras</span><strong>{extras.length ? extras.join(', ') : 'None selected'}</strong></div>
            <div className="estimate-total"><span>Estimated total</span><strong>Pricing to be added</strong></div>
          </div>
          <p className="provisional-note">This is an initial estimate based on the information provided. Final pricing and availability will be confirmed following a site visit.</p>
        </section>
      )}

      <div className="wizard-actions">
        {step > 1 && <button className="button button-outline" type="button" onClick={back}>Back</button>}
        {step < 5 ? <button className="button button-primary" type="button" onClick={next} disabled={step === 1 && !date}>{step === 2 ? 'Show Suitable Marquees' : 'Continue'}</button> : <button className="button button-primary" type="button" onClick={() => setSubmitted(true)}>Send My Enquiry & Arrange Site Visit</button>}
      </div>
    </div>
  );
}
