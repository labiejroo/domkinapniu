import { copy } from '@/lib/eng';
import type { FooterColumn } from '@/lib/types';

export const COLUMNS: FooterColumn[] = [
  {
    title: 'Strona',
    links: [
      { label: 'O nas', href: '#O-nas' },
      { label: 'Domki', href: '#Domki' },
      { label: 'Galeria', href: '#galeria' },
      { label: 'Okolica', href: '#Okolica' },
      { label: 'Cennik', href: '#cennik' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Rezerwacja',
    links: [
      { label: 'Sprawdź dostępność', href: '#rezerwacja' },
      { label: 'Regulamin', href: '#regulamin' },
      { label: 'Kontakt', href: '#Kontakt' },
    ],
  },
  {
    title: 'Kontakt',
    links: [
      { label: 'ul. Morska 11', href: '#' },
      { label: '76-107 Jarosławiec', href: '#' },
      { label: copy.phone, href: `tel:${copy.phone.replace(/\s/g, '')}` },
      { label: copy.email, href: `mailto:${copy.email}` },
    ],
  },
];

export const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/domki_napniu/' },
  {
    label: 'Booking',
    href: 'https://www.booking.com/hotel/pl/domki-na-pniu.pl.html?aid=356980&label=gog235jc-10CA0otgFCDWRvbWtpLW5hLXBuaXVIHlgDaLYBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAKl47bQBsACAdICJDhlZmE1MzVlLWFlNWMtNGE4OC05N2E2LTYwNjc0M2U5ODZlZdgCAeACAQ&sid=d07e5b1ec02c5a531fdc2eb5c8143a9d',
  },
];
