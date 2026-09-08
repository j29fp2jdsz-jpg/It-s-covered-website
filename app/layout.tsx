import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: "It's Covered | Capri Marquee Hire South Wales",
    template: "%s | It's Covered",
  },
  description: 'Capri marquee hire for weddings, parties, corporate events and outdoor occasions across South Wales and beyond.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
