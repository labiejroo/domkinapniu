import type { Metadata } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export const SITE_URL = 'https://domkinapniu.pl';
export const SITE_NAME = 'Domki Na Pniu';
export const DEFAULT_OG_IMAGE = { url: '/assets/hero-beach.jpg', width: 5376, height: 3840 };

const ogLocaleMap: Record<string, string> = {
  pl: 'pl_PL',
  en: 'en_US',
  de: 'de_DE',
  cz: 'cs_CZ',
};

export function buildAlternates(locale: string, href: string) {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = getPathname({ href, locale: l });
  }
  languages['x-default'] = getPathname({ href, locale: routing.defaultLocale });

  return {
    canonical: getPathname({ href, locale }),
    languages,
  };
}

export function buildPageMetadata({
  locale,
  href,
  title,
  description,
  ogDescription,
}: {
  locale: string;
  href: string;
  title: string;
  description: string;
  ogDescription?: string;
}): Metadata {
  const ogDesc = ogDescription ?? description;

  return {
    title,
    description,
    alternates: buildAlternates(locale, href),
    openGraph: {
      title,
      description: ogDesc,
      url: getPathname({ href, locale }),
      siteName: SITE_NAME,
      locale: ogLocaleMap[locale] ?? locale,
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: ogDesc,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
