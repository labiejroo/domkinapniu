import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { buildLodgingBusinessJsonLd, buildPageMetadata } from '@/lib/seo';
import { TopBar } from '@/components/layout/TopBar';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/features/home/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return buildPageMetadata({
    locale,
    href: '/',
    title: t('metaTitle'),
    description: t('metaDescription'),
    ogDescription: t('ogDescription'),
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale });
  const lodgingJsonLd = buildLodgingBusinessJsonLd();

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
      />
      <div className="font-body bg-brand-sunlight text-brand-green-900 min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-mustard-500 focus:text-brand-black focus:px-4 focus:py-2 focus:rounded"
        >
          {t('skipToContent')}
        </a>
        <TopBar />
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
