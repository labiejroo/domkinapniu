'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/brand/Icon';

const LANG_LABELS: Record<string, string> = { pl: 'PL', en: 'ENG', de: 'DEU' };

export const SiteTopBar = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="bg-brand-green-900 text-brand-sunlight/70 text-[13px] border-b border-brand-sunlight/10">
      <div className="max-w-[1440px] mx-auto px-16 py-3 flex items-center justify-between gap-6">
        <div className="flex items-center gap-7">
          <span className="inline-flex items-center gap-2">
            <Icon name="pin" size={14} color="#d6b13e" />
            ul. Morska 11, 76-107 Jarosławiec
          </span>
          <a href="mailto:domkinapniu@gmail.com" className="inline-flex items-center gap-2 text-inherit no-underline hover:text-brand-sunlight transition-colors">
            <Icon name="mail" size={14} color="#d6b13e" />
            domkinapniu@gmail.com
          </a>
          <a href="tel:+48506141730" className="inline-flex items-center gap-2 text-inherit no-underline hover:text-brand-sunlight transition-colors">
            <Icon name="phone" size={14} color="#d6b13e" />
            +48 506 141 730
          </a>
        </div>
        <div className="flex items-center gap-5">
          <div className="inline-flex gap-1.5 items-center">
            {routing.locales.map((l, i) => (
              <span key={l} className="inline-flex items-center gap-1.5">
                {i > 0 && <span className="opacity-30">·</span>}
                <button
                  type="button"
                  onClick={() => router.replace(pathname, { locale: l })}
                  className={cn(
                    'bg-transparent border-0 cursor-pointer text-[13px] px-0',
                    locale === l ? 'text-brand-mustard-300 font-semibold' : 'text-brand-sunlight/70 hover:text-brand-sunlight'
                  )}
                >
                  {LANG_LABELS[l] ?? l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
          <span className="w-px h-3.5 bg-brand-sunlight/20" />
          <span className="inline-flex items-center gap-1.5 text-brand-sunlight">
            <Icon name="star" size={12} color="#d6b13e" />
            <strong>8,7</strong>
            <span className="opacity-60">· 81 opinii</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SiteTopBar;
