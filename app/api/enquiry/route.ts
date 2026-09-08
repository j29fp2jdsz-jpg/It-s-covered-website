import { NextResponse } from 'next/server';

const destination = process.env.ENQUIRY_EMAIL || 'info@itscovered.co.uk';
const resendKey = process.env.RESEND_API_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { date, details, marquee, extras, contact } = body ?? {};

    if (!date || !details?.postcode || !marquee?.name || !contact?.name || !contact?.email || !contact?.phone) {
      return NextResponse.json({ ok: false, error: 'Missing required enquiry details.' }, { status: 400 });
    }

    if (!resendKey) {
      return NextResponse.json({ ok: false, error: 'Email delivery is not configured.' }, { status: 503 });
    }

    const spaceNeeds = [details.dancefloor && 'Dance floor', details.bar && 'Bar', details.buffet && 'Buffet'].filter(Boolean).join(', ') || 'None specified';
    const text = [
      'NEW IT’S COVERED WEBSITE ENQUIRY', '',
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Phone: ${contact.phone}`,
      '',
      `Event date: ${date}`,
      `Event type: ${details.type}`,
      `Guest count: ${details.guests}`,
      `Layout: ${details.style}`,
      `Venue: ${details.venue || 'Not supplied'}`,
      `Postcode: ${details.postcode}`,
      `Surface: ${details.surface}`,
      `Van access: ${details.access}`,
      `Space needed for: ${spaceNeeds}`,
      '',
      `Selected marquee: ${marquee.name}`,
      `Extras: ${extras?.length ? extras.join(', ') : 'None selected'}`,
      `Notes: ${details.notes || 'None'}`,
      '',
      'Please contact the customer to review the enquiry and arrange a site visit before confirming final availability and pricing.',
    ].join('\n');

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM_EMAIL || 'It’s Covered Website <onboarding@resend.dev>',
        to: [destination],
        reply_to: contact.email,
        subject: `New marquee enquiry — ${contact.name} — ${date}`,
        text,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend delivery failed:', error);
      return NextResponse.json({ ok: false, error: 'Unable to deliver enquiry.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Enquiry route failed:', error);
    return NextResponse.json({ ok: false, error: 'Unable to process enquiry.' }, { status: 500 });
  }
}
