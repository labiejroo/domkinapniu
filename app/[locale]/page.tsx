import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/features/home/Hero';
import { Story } from '@/components/features/home/Story';
import { FeatureGrid } from '@/components/features/home/FeatureGrid';
import { CottageAnatomy } from '@/components/features/home/CottageAnatomy';
import { Okolica } from '@/components/features/home/Okolica';
import { Testimonial } from '@/components/features/home/Testimonial';
import { BookingCTA } from '@/components/features/home/BookingCTA';

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <Story />
      <FeatureGrid />
      <CottageAnatomy />
      <Okolica />
      <Testimonial />
      <BookingCTA />
    </>
  );
}
