import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/features/home/Footer';
import { SubpageHero } from '@/components/layout/SubpageHero';
import { BookingCTA } from '@/components/features/home/BookingCTA';
import { Icon } from '@/components/brand/Icon';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return { title: t('notFoundMetaTitle') };
}

export default async function NotFound() {
  const t = await getTranslations();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="font-body bg-brand-sunlight text-brand-green-900 min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-mustard-500 focus:text-brand-black focus:px-4 focus:py-2 focus:rounded"
        >
          {t('skipToContent')}
        </a>
        <TopBar />
        <NavBar />

        <main id="main-content">
          <SubpageHero
            current={t('notFoundHeroCurrent')}
            title={t('notFoundHeroTitle')}
            italic={t('notFoundHeroItalic')}
            lede={t('notFoundHeroLede')}
          />

          <section className="bg-brand-sunlight px-16 pb-32">
            <div className="max-w-[1280px] mx-auto flex gap-4 flex-wrap">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-brand-black text-brand-sunlight border-[1.5px] border-brand-black px-6 py-3.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase no-underline"
              >
                {t('notFoundCtaHome')} <Icon name="arrow-right" size={14} />
              </Link>
              <Link
                href="/cennik"
                className="inline-flex items-center gap-2 bg-transparent text-brand-green-900 border-[1.5px] border-brand-green-900/25 px-6 py-3.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase no-underline"
              >
                {t('notFoundCtaPricing')} <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </section>

          <BookingCTA />
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
