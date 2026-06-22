'use client';

import { useState } from 'react';
import { usePathname, Link } from '@/i18n/navigation';
import { BrandMark } from '@/components/brand/BrandMark';
import { Icon } from '@/components/brand/Icon';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/#o-nas',   label: 'O nas' },
  { href: '/#domki',   label: 'Domki' },
  { href: '/galeria',  label: 'Galeria' },
  { href: '/#okolica', label: 'Okolica' },
  { href: '/cennik',   label: 'Cennik' },
  { href: '/faq',      label: 'FAQ' },
  { href: '/#kontakt', label: 'Kontakt' },
];

export const SiteNav = () => {
  const pathname = usePathname();
  const [clickedHref, setClickedHref] = useState<string | null>(null);

  const activeHref = (() => {
    const subpageMatch = NAV_LINKS.find((l) => {
      const p = l.href.split('#')[0];
      return p && p !== '/' && pathname === p;
    });
    return subpageMatch ? subpageMatch.href : clickedHref;
  })();

  return (
    <nav className="sticky top-0 z-50 bg-brand-green-900 text-brand-sunlight border-b border-brand-sunlight/10">
      <div className="max-w-[1440px] mx-auto px-16 py-5 flex items-center justify-between gap-8">
        <Link href="/" className="inline-flex items-center gap-3 text-brand-sunlight no-underline">
          <BrandMark size={40} color="#c79d09" />
          <div className="leading-[1.1]">
            <div className="text-[11px] tracking-[0.2em] uppercase text-brand-mustard-300 font-medium">Domki</div>
            <div className="text-lg font-bold tracking-[0.06em] uppercase">Na Pniu</div>
          </div>
        </Link>

        <ul className="flex gap-9 list-none m-0 p-0">
          {NAV_LINKS.map((item) => {
            const active = activeHref === item.href;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setClickedHref(item.href)}
                  className={cn(
                    'text-sm font-medium tracking-[0.04em] pb-1.5 transition-colors no-underline',
                    active
                      ? 'text-brand-mustard-300 border-b border-brand-mustard-300'
                      : 'text-brand-sunlight/80 hover:text-brand-mustard-300 border-b border-transparent'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/#rezerwacja"
          className="bg-brand-mustard-500 hover:bg-brand-mustard-400 text-brand-green-900 px-6 py-3.5 rounded-full text-[13px] font-bold tracking-[0.12em] uppercase inline-flex items-center gap-2.5 no-underline transition-all"
        >
          Rezerwuj pobyt
          <Icon name="arrow-up-right" size={14} />
        </Link>
      </div>
    </nav>
  );
};

export default SiteNav;
