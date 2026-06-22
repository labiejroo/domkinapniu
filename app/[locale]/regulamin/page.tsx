import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { SubpageHero } from '@/components/layout/SubpageHero';
import { RegulaminBody, type Section } from '@/components/features/regulamin/RegulaminBody';
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return buildPageMetadata({
    locale,
    href: '/regulamin',
    title: t('regulaminMetaTitle'),
    description: t('regulaminMetaDesc'),
  });
}

export default async function RegulaminPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const sections = t.raw('regulaminSections') as Section[];
  const heroMeta = t.raw('regulaminHeroMeta') as Array<{ label: string; value: string }>;

  return (
    <>
      <SubpageHero
        current={t('regulaminHeroCurrent')}
        title={t('regulaminHeroTitle')}
        italic={t('regulaminHeroItalic')}
        lede={t('regulaminHeroLede')}
        meta={heroMeta}
      />

      <RegulaminBody sections={sections}/>
    </>
  );
}
