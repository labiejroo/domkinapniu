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

export function buildLodgingBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    description:
      'Dwanaście drewnianych domków letniskowych nad morzem w Jarosławcu, 800 m od plaży.',
    url: SITE_URL,
    telephone: '+48506141730',
    email: 'domkinapniu@gmail.com',
    image: [`${SITE_URL}${DEFAULT_OG_IMAGE.url}`],
    priceRange: '350-590 PLN',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Morska 11',
      addressLocality: 'Jarosławiec',
      postalCode: '76-107',
      addressCountry: 'PL',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '8.9',
      bestRating: '10',
      reviewCount: '82',
    },
    amenityFeature: [
      'Basen sezonowy',
      'Boisko do siatkówki',
      'Prywatny taras i grill',
      'Klimatyzacja',
      'WiFi',
      'Parking',
      'Zwierzęta dozwolone',
    ].map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
    sameAs: [
      'https://www.instagram.com/domki_napniu',
      'https://www.booking.com/hotel/pl/domki-na-pniu.pl.html',
    ],
  };
}

export function buildFaqJsonLd(groups: { items: { q: string; a: string }[] }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: groups.flatMap((group) =>
      group.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      }))
    ),
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
