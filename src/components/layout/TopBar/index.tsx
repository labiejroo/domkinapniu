'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';
import { useRouter, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { routing } from '@/i18n/routing';

export const TopBar = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="bg-brand-black text-green-200/70 text-[13px] border-b border-white/[0.08]">
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-16 py-3 flex items-center justify-between gap-4">
        <div className="hidden md:flex gap-5 lg:gap-7 items-center">
          <span className="hidden lg:inline-flex items-center gap-2">
            <Icon name="pin" size={14} color="#d6b13e" />
            {t('address')}
            <a
              href="https://www.google.com/maps/place/Domki+Na+Pniu/@54.5370599,16.5381777,18z/data=!4m18!1m8!3m7!1s0x46fe316cbf34409b:0x5286d3045529062c!2sMorska+11,+76-107+Jaros%C5%82awiec!3b1!8m2!3d54.5378973!4d16.5377928!16s%2Fg%2F11s2pwcrq4!3m8!1s0x46fe31dec270688f:0xe8da0b47622cd486!5m2!4m1!1i2!8m2!3d54.5375831!4d16.5391826!16s%2Fg%2F11t0s_3gt4?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center bg-mustard-500 text-green-900 font-bold uppercase text-[10px] tracking-wider px-2.5 py-0.5 rounded-full no-underline hover:bg-mustard-400 transition-colors duration-150"
            >
              {t('navigateLabel')}
            </a>
          </span>
          <a
            href={`mailto:${t('email')}`}
            className="inline-flex items-center gap-2 text-green-200/70 no-underline hover:text-green-200 transition-colors duration-150"
          >
            <Icon name="mail" size={14} color="#d6b13e" />
            <span className="hidden xl:inline">{t('email')}</span>
            <span className="xl:hidden">domkinapniu@gmail.com</span>
          </a>
          <a
            href={`tel:${t('phone').replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 text-green-200/70 no-underline hover:text-green-200 transition-colors duration-150"
          >
            <Icon name="phone" size={14} color="#d6b13e" />
            {t('phone')}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Icon name="phone" size={14} color="#d6b13e" />
          <a
            href={`tel:${t('phone').replace(/\s/g, '')}`}
            className="text-brand-sunlight font-semibold no-underline"
          >
            {t('phone')}
          </a>
        </div>

        <div className="flex gap-4 items-center">
          <div className="hidden md:inline-flex gap-1.5 items-center text-[13px]">
            {routing.locales.map((l, i) => (
              <span key={l} className="inline-flex items-center gap-1.5">
                {i > 0 && <span className="opacity-30">·</span>}
                <button
                  type="button"
                  onClick={() => router.replace(pathname, { locale: l })}
                  className={cn(
                    'bg-transparent border-0 cursor-pointer text-[13px] px-0',
                    locale === l
                      ? 'text-mustard-300 font-semibold'
                      : 'text-green-200/70 hover:text-green-200'
                  )}
                >
                  {l === 'pl'
                    ? t('langPl')
                    : l === 'en'
                      ? t('langEn')
                      : l === 'de'
                        ? t('langDe')
                        : t('langCz')}
                </button>
              </span>
            ))}
          </div>

          <label htmlFor="localeSelect" className="sr-only">
            {t('selectLanguage')}
          </label>
          <select
            id="localeSelect"
            value={locale}
            onChange={(event) => router.replace(pathname, { locale: event.target.value })}
            className="md:hidden bg-brand-black text-green-200/70 border border-white/10 rounded-sm px-2 py-1 text-[13px] leading-[1.1] outline-none transition duration-150 hover:border-white/20 focus:border-mustard-300 focus:text-green-100"
          >
            {routing.locales.map((l) => (
              <option key={l} value={l}>
                {l === 'pl'
                  ? t('langPl')
                  : l === 'en'
                    ? t('langEn')
                    : l === 'de'
                      ? t('langDe')
                      : t('langCz')}
              </option>
            ))}
          </select>

          <span className="w-px h-3.5 bg-white/20" />
          <span className="inline-flex items-center gap-1.5 text-white">
            <Icon name="star" size={12} color="#d6b13e" />
            <strong>{t('ratingScore')}</strong>
            <span className="hidden sm:inline opacity-60">· {t('ratingCount')}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
