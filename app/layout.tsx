import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Domki Na Pniu · Jarosławiec',
  description:
    'Dwanaście drewnianych domków letniskowych 180 m od plaży w Jarosławcu. Dla 4–6 osób. Witamy gości osobiście.',
  keywords: ['domki letniskowe', 'Jarosławiec', 'nad morzem', 'wynajem', 'wakacje'],
  openGraph: {
    title: 'Domki Na Pniu · Jarosławiec',
    description: 'Premium domki letniskowe 180 m od plaży. Cicho. Naturalnie. Osobiście.',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
