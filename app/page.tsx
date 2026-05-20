import { TopBar } from '@/components/layout/TopBar';
import { NavBar } from '@/components/layout/NavBar';
import { Hero } from '@/components/features/home/Hero';
import { Story } from '@/components/features/home/Story';
import { FeatureGrid } from '@/components/features/home/FeatureGrid';
import { CottageAnatomy } from '@/components/features/home/CottageAnatomy';
import { Okolica } from '@/components/features/home/Okolica';
import { Testimonial } from '@/components/features/home/Testimonial';
import { BookingCTA } from '@/components/features/home/BookingCTA';
import { Footer } from '@/components/features/home/Footer';

export default function HomePage() {
  return (
    <main className="font-body bg-brand-sunlight text-green-900 min-h-screen">
      <TopBar />
      <NavBar />
      <Hero />
      <Story />
      <FeatureGrid />
      <CottageAnatomy />
      <Okolica />
      <Testimonial />
      <BookingCTA />
      <Footer />
    </main>
  );
}
