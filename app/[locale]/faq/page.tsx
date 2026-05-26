import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { SubpageHero } from '@/components/layout/SubpageHero';
import { BookingCTA } from '@/components/features/home/BookingCTA';
import { FAQList, type FAQGroup } from '@/components/features/faq/FAQList';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: t('faqMetaTitle'),
    description: t('faqMetaDesc'),
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const groups = t.raw('faqGroups') as FAQGroup[];
  const heroMeta = t.raw('faqHeroMeta') as Array<{ label: string; value: string }>;

  return (
    <>
      <SubpageHero
        current={t('faqHeroCurrent')}
        eyebrow={t('faqHeroEyebrow')}
        title={t('faqHeroTitle')}
        italic={t('faqHeroItalic')}
        lede={t('faqHeroLede')}
        meta={heroMeta}
      />

      <FAQList groups={groups}/>

      <BookingCTA/>
    </>
  );
}
