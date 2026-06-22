'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';
import { Display, Italic, SmallCap } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import type { FeatureItemText } from '@/lib/types';

const FEATURE_LAYOUT = [
  {
    id: 1,
    photo: '/assets/photo-salon.jpg',
    colSpan: '1 / span 7',
    rowSpan: '1 / span 3',
    tall: true,
  },
  { id: 2, photo: '/assets/grill.jpg', colSpan: '8 / span 5', rowSpan: '1 / span 2' },
  { id: 3, photo: '/assets/basen.jpg', colSpan: '8 / span 5', rowSpan: '3 / span 2' },
  { id: 4, photo: '/assets/altana2.jpg', colSpan: '1 / span 5', rowSpan: '4 / span 3', tall: true },
  { id: 5, photo: '/assets/boisko.jpg', colSpan: '6 / span 7', rowSpan: '5 / span 2' },
];

export const FeatureGrid = () => {
  const t = useTranslations();
  const featureItems = t.raw('featureItems') as FeatureItemText[];

  const items = FEATURE_LAYOUT.map((layout) => ({
    ...layout,
    ...featureItems.find((f) => f.id === layout.id)!,
  }));

  return (
    <section id="galeria" className="bg-brand-eggshell pt-16 md:pt-24 lg:pt-32">
      <div className="max-w-layout mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end mb-10 md:mb-16">
          <div>
            <SmallCap className="text-mustard-700">{t('featureEyebrow')}</SmallCap>
            <Display size="md" className="mt-5 text-green-900">
              {t('featureHeadline')}
              <br />
              <Italic className="text-mustard-700">{t('featureHeadlineItalic')}</Italic>
            </Display>
          </div>
        </div>

        {/* Mobile: simple 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {items.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-lg bg-green-900 cursor-pointer group ${item.tall ? 'sm:row-span-2' : ''}`}
              style={{ aspectRatio: item.tall ? '3/4' : '4/3' }}
            >
              <Image
                src={item.photo}
                alt={item.title}
                fill
                className="object-cover transition-all duration-700 brightness-90 group-hover:scale-[1.04] group-hover:brightness-110"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none"
                style={{
                  mixBlendMode: 'color',
                  background:
                    'linear-gradient(to bottom left, rgba(128,128,128,0.18) 0%, rgba(128,128,128,0.30) 100%)',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, transparent 40%, rgba(26,36,25,0.88) 100%)',
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-brand-sunlight">
                <h3 className="m-0 font-display font-medium text-[18px] tracking-[-0.015em]">
                  {item.title}
                </h3>
                <p className="mt-1 m-0 text-[12px] leading-relaxed text-brand-sunlight/80">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: complex 12-col grid */}
        <div
          className="hidden lg:grid gap-5"
          style={{ gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: '160px' }}
        >
          {items.map((item) => (
            <article
              key={item.id}
              className="relative overflow-hidden rounded-lg bg-green-900 cursor-pointer group"
              style={{ gridColumn: item.colSpan, gridRow: item.rowSpan }}
            >
              <Image
                src={item.photo}
                alt={item.title}
                fill
                className="object-cover transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] brightness-90 group-hover:scale-[1.04] group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none"
                style={{
                  mixBlendMode: 'color',
                  background:
                    'linear-gradient(to bottom left, rgba(128,128,128,0.18) 0%, rgba(128,128,128,0.30) 100%)',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, transparent 40%, rgba(26,36,25,0.88) 100%)',
                }}
              />
              <div
                className={`absolute bottom-0 left-0 right-0 text-brand-sunlight ${item.tall ? 'p-6 lg:p-7' : 'px-5 py-4 lg:px-6 lg:py-5'}`}
              >
                <h3
                  className={`m-0 font-display font-medium tracking-[-0.015em] ${item.tall ? 'text-[22px] lg:text-[28px]' : 'text-[17px] lg:text-[20px]'}`}
                >
                  {item.title}
                </h3>
                <p className="mt-1.5 m-0 text-[12px] lg:text-[13px] leading-relaxed text-brand-sunlight/80 max-w-[30ch]">
                  {item.sub}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-10 md:mt-16">
          <Link href="/galeria">
            <Button variant="dark">
              {t('fullGallery')} <Icon name="arrow-right" size={14} color="#FFFCF5" />
            </Button>
          </Link>
        </div>
      </div>
      <svg
        className="block w-full h-12 md:h-20 mt-16 md:mt-24 lg:mt-32"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="#FFFCF5"
        />
      </svg>
    </section>
  );
};

export default FeatureGrid;
