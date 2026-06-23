'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';
import { Display, Italic, SmallCap } from '@/components/ui/Typography';
import { cn } from '@/lib/utils';
import type { StatItem } from '@/lib/types';

const StatStrip = () => {
  const t = useTranslations();
  const heroStats = t.raw('heroStats') as StatItem[];
  return (
    <div className="bg-green-500 text-brand-sunlight border-t border-white/10">
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-16">
        <div
          className="grid border-r border-white/10"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)', borderRight: 'none' }}
        >
          {/* Mobile: 2x2 grid */}
          <div className="contents lg:hidden">
            {heroStats.map((s, i) => (
              <div
                key={i}
                className="px-5 py-7 border-b border-r border-l border-white/10 flex flex-col gap-2"
              >
                <div className="text-[26px] font-medium font-display tracking-[-0.02em] text-brand-sunlight leading-none">
                  {s.value}
                </div>
                <div className="text-[12px] leading-snug text-brand-sunlight/65">{s.label}</div>
              </div>
            ))}
            <a
              href="#rezerwacja"
              className="col-span-2 flex items-center justify-between px-5 py-5 bg-mustard-500 text-green-900 no-underline"
            >
              <span className="text-[14px] font-bold tracking-wider">{t('checkAvailability')}</span>
              <Icon name="arrow-right" size={18} color="#1a2419" />
            </a>
          </div>

          {/* Desktop: 4 stats + CTA */}
          <div className="hidden lg:contents" style={{ display: 'contents' }}>
            <div
              className="hidden lg:grid items-stretch col-span-full"
              style={{ gridTemplateColumns: 'repeat(4, 1fr) auto' }}
            >
              {heroStats.map((s, i) => (
                <div key={i} className="px-6 py-10 border-r border-white/10 flex flex-col gap-3">
                  <span className="inline-flex gap-1.5">
                    {heroStats.map((_, j) => (
                      <span
                        key={j}
                        className="w-1.5 h-1.5 rounded-full border border-mustard-300"
                        style={{
                          background: j === i ? '#e3c66e' : 'transparent',
                          opacity: j === i ? 1 : 0.5,
                        }}
                      />
                    ))}
                  </span>
                  <div className="text-[32px] font-medium font-display tracking-[-0.02em] text-brand-sunlight leading-none">
                    {s.value}
                  </div>
                  <div className="text-[13px] leading-relaxed text-brand-sunlight/65">
                    {s.label}
                  </div>
                </div>
              ))}
              <a
                href="#rezerwacja"
                className="flex flex-col justify-center px-9 py-10 bg-mustard-500 text-green-900 no-underline gap-1.5 transition-colors duration-200 min-w-[220px] xl:min-w-[240px] hover:bg-mustard-400"
              >
                <span className="text-[11px] tracking-widest2 uppercase font-semibold opacity-70">
                  {t('summerSeason')}
                </span>
                <span className="text-[17px] font-bold tracking-wider inline-flex items-center gap-3">
                  {t('checkAvailability')} <Icon name="arrow-right" size={18} color="#1a2419" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  const t = useTranslations();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [canLoadVideo, setCanLoadVideo] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setCanLoadVideo(true);
      return;
    }
    const handleLoad = () => setCanLoadVideo(true);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!canLoadVideo || !video) return;
    video.load();
    void video.play().catch(() => {});
  }, [canLoadVideo]);

  return (
    <section id="top" className="relative bg-green-900 text-brand-sunlight">
      <div className="relative h-[480px] sm:h-[580px] md:h-[660px] lg:h-[760px] overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload={canLoadVideo ? 'auto' : 'none'}
          poster="/assets/hero-beach.jpg"
          aria-hidden="true"
          onCanPlay={() => setIsVideoReady(true)}
          onPlaying={() => setIsVideoReady(true)}
          onLoadedData={() => setIsVideoReady(true)}
          onError={() => setIsVideoReady(true)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          {canLoadVideo && <source src="/assets/heroMovie.mp4" type="video/mp4" />}
        </video>
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 flex items-center justify-center transition-opacity duration-500',
            isVideoReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
          )}
        >
          <span className="w-10 h-10 rounded-full border-2 border-brand-sunlight/30 border-t-brand-sunlight animate-spin" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(26,36,25,0.3) 0%, transparent 35%, rgba(26,36,25,0.75) 100%)',
          }}
        />

        <div className="relative h-full max-w-container mx-auto px-5 md:px-8 lg:px-16 py-10 md:py-14 lg:py-20 flex flex-col justify-between">
          <div className="flex justify-between items-start gap-4">
            <span className="hidden sm:block" style={{ color: '#e3c66e' }}>
              <SmallCap className="text-mustard-300">
                <span className="inline-flex items-center gap-2">
                  <span className="w-6 h-px bg-mustard-300" /> {t('siteTagline')}
                </span>
              </SmallCap>
            </span>
            <div className="flex flex-col gap-1 items-end shrink-0">
              <span className="text-[11px] tracking-[0.24em] uppercase text-mustard-300">
                {t('season')}
              </span>
              <a
                href="#rezerwacja"
                className="hidden sm:block text-[13px] font-semibold text-brand-sunlight no-underline hover:text-mustard-300 transition-colors duration-150"
              >
                {t('openBookings')}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-16">
            <Display as="h1" size="xl" className="text-brand-sunlight max-w-[14ch]">
              {t('heroHeadline')}
              <br />
              <Italic className="text-mustard-300">{t('heroHeadlineItalic')}</Italic>
            </Display>

            <div className="max-w-[46ch]">
              <p className="text-[15px] md:text-[17px] leading-relaxed m-0 text-brand-sunlight text-left whitespace-pre-line">
                {t('heroDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <StatStrip />
    </section>
  );
};

export default Hero;
