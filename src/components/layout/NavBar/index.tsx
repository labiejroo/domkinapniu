'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Icon } from '@/components/ui/Icon';
import { BrandMark } from '@/components/ui/Brand';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/lib/types';

export const NavBar = () => {
  const t = useTranslations();
  const navItems = t.raw('navItems') as NavItem[];
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-brand-black text-brand-sunlight sticky top-0 z-50 border-b border-white/[0.08]">
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-16 py-4 lg:py-5 flex items-center justify-between gap-4 lg:gap-8">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-brand-sunlight no-underline shrink-0"
        >
          <BrandMark size={36} color="#c79d09" />
          <div className="leading-[1.1]">
            <div className="text-[10px] tracking-widest2 uppercase text-mustard-300 font-medium">
              {t('siteSubtitle')}
            </div>
            <div className="text-base font-bold tracking-[0.06em] uppercase">Na Pniu</div>
          </div>
        </Link>

        <ul className="hidden lg:flex gap-9 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href || '/'}
                className="no-underline text-[14px] font-medium tracking-wider text-white/80 transition-colors duration-150 hover:text-mustard-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#rezerwacja"
            className="hidden sm:inline-flex items-center gap-2 bg-mustard-500 text-green-900 px-5 py-3 rounded-full text-[13px] font-bold tracking-wider2 uppercase cursor-pointer transition-all duration-200 hover:bg-mustard-400 hover:-translate-y-px no-underline"
          >
            {t('bookStay')}
            <Icon name="arrow-up-right" size={13} color="#1a2419" />
          </a>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center bg-transparent border-0 cursor-pointer text-brand-sunlight"
          >
            <Icon name={open ? 'close' : 'menu'} size={22} color="#FFFCF5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden bg-green-800 border-t border-white/10 overflow-hidden transition-all duration-300',
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="list-none m-0 p-0 px-5 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href || '/'}
                onClick={() => setOpen(false)}
                className="block py-3 text-[15px] font-medium text-white/85 no-underline border-b border-white/10 hover:text-mustard-300 transition-colors duration-150"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <a
              href="#rezerwacja"
              onClick={() => setOpen(false)}
              className="sm:hidden inline-flex items-center gap-2 bg-mustard-500 text-green-900 px-5 py-3 rounded-full text-[13px] font-bold tracking-wider2 uppercase no-underline w-full justify-center"
            >
              {t('bookStay')}
              <Icon name="arrow-up-right" size={13} color="#1a2419" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
