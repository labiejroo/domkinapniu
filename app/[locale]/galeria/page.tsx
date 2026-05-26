import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { SubpageHero } from '@/components/layout/SubpageHero';
import { BookingCTA } from '@/components/features/home/BookingCTA';
import { GalleryGrid, type Photo } from '@/components/features/galeria/GalleryGrid';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: t('galeriaMetaTitle'),
    description: t('galeriaMetaDesc'),
  };
}

export default async function GaleriaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const photos = t.raw('galeriaPhotos') as Photo[];
  const heroMeta = t.raw('galeriaHeroMeta') as Array<{ label: string; value: string }>;

  return (
    <>
      <SubpageHero
        current={t('galeriaHeroCurrent')}
        title={t('galeriaHeroTitle')}
        italic={t('galeriaHeroItalic')}
        lede={t('galeriaHeroLede')}
        meta={heroMeta}
      />

      <GalleryGrid photos={photos}/>

      <BookingCTA/>
    </>
  );
}
