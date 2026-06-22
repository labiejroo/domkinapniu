import type { MetadataRoute } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { SITE_URL, hreflangMap } from '@/lib/seo';

const PAGES = ['/', '/cennik', '/faq', '/galeria', '/regulamin'];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((href) => ({
    url: `${SITE_URL}${getPathname({ href, locale: routing.defaultLocale })}`,
    alternates: {
      languages: Object.fromEntries(
        routing.locales
          .map((locale) => [hreflangMap[locale] ?? locale, `${SITE_URL}${getPathname({ href, locale })}`])
          .concat([['x-default', `${SITE_URL}${getPathname({ href, locale: routing.defaultLocale })}`]])
      ),
    },
  }));
}
