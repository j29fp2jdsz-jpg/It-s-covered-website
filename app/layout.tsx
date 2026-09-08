import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "It's Covered | Marquee Hire",
  description: 'Stylish marquee hire for weddings, parties, corporate events and festivals.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
