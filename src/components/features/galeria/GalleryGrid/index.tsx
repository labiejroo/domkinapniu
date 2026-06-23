'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { SmallCap } from '@/components/brand/Typography';
import { Icon } from '@/components/brand/Icon';

export interface Photo {
  cap: string;
  cat: string;
  id: string;
  src: string;
  title: string;
}

interface GalleryGridProps {
  photos: Photo[];
}

const CATEGORY_ORDER = ['Domki', 'Posesja', 'Wieczory', 'Plaża'];

export const GalleryGrid = ({ photos }: GalleryGridProps) => {
  const t = useTranslations();
  const [filter, setFilter] = useState<string | null>(null);
  const [open, setOpen] = useState<Photo | null>(null);

  const cats = useMemo(() => {
    const present = new Set(photos.map((p) => p.cat));
    return CATEGORY_ORDER.filter((c) => present.has(c));
  }, [photos]);

  const filtered = filter === null ? photos : photos.filter((p) => p.cat === filter);

  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    for (const p of photos) m[p.cat] = (m[p.cat] || 0) + 1;
    return m;
  }, [photos]);

  const openIdx = open ? filtered.findIndex((p) => p.id === open.id) : -1;
  const handlePrev = () => {
    setOpen(openIdx <= 0 ? filtered[filtered.length - 1] : filtered[openIdx - 1]);
  };
  const handleNext = () => {
    setOpen(openIdx === filtered.length - 1 ? filtered[0] : filtered[openIdx + 1]);
  };

  return (
    <>
      <section className="top-[88px] z-30 bg-brand-sunlight px-5 py-5 lg:px-16 lg:py-8 border-b border-brand-green-900/15">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4 lg:gap-6 flex-wrap">
          <div className="flex flex-wrap gap-2">
            {[null, ...cats].map((c) => {
              const active = c === filter;
              return (
                <button
                  key={c ?? '__all__'}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={cn(
                    'rounded-full border border-brand-green-900/20',
                    'text-xs font-semibold tracking-[0.06em] cursor-pointer',
                    'inline-flex items-center gap-2 transition-colors px-[18px] py-[10px]',
                    active
                      ? 'bg-brand-black text-brand-sunlight border-brand-black'
                      : 'bg-transparent text-green-900'
                  )}
                >
                  {c === null ? t('galeriaAll') : c}
                  <span
                    className={cn(
                      'text-[10px] opacity-70 px-1.5 py-0.5 rounded-full tabular-nums',
                      active ? 'bg-brand-sunlight/25' : 'bg-green-900/10'
                    )}
                  >
                    {c === null ? photos.length : counts[c] || 0}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="text-xs tracking-[0.16em] uppercase text-brand-green-900/55 font-semibold">
            {t('galeriaPhotoCount', { count: filtered.length })}
          </div>
        </div>
      </section>

      <section className="bg-brand-eggshell px-5 pt-8 pb-20 lg:px-16 lg:pt-16 lg:pb-32">
        <div className="max-w-[1280px] mx-auto">
          {filter === null ? (
            <div className="grid grid-cols-2 gap-2.5 [grid-auto-rows:56px] sm:gap-4 lg:grid-cols-12 lg:[grid-auto-rows:90px]">
              {filtered.map((p) => (
                <GalleryTile
                  key={p.id}
                  extraClass="row-span-3 lg:col-span-4"
                  photo={p}
                  onOpen={() => setOpen(p)}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2.5 [grid-auto-rows:230px] sm:grid-cols-3 sm:gap-5 sm:[grid-auto-rows:320px]">
              {filtered.map((p) => (
                <GalleryTile key={p.id} extraClass="" photo={p} onOpen={() => setOpen(p)} />
              ))}
            </div>
          )}

          <div className="mt-12 lg:mt-20 text-center">
            <SmallCap className="text-brand-black">{t('galeriaInstagramEyebrow')}</SmallCap>
            <p className="mx-auto mt-4 max-w-[40ch] font-serif italic text-xl lg:text-2xl leading-[1.35] text-brand-green-900/75">
              {t('galeriaInstagramDesc')}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://www.instagram.com/domki_napniu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-brand-green-900 border-[1.5px] border-brand-green-900/25 px-5 py-3.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase no-underline"
              >
                {t('galeriaInstagramCTA')} <Icon name="arrow-up-right" size={14} />
              </a>
              <Link
                href="/cennik"
                className="inline-flex items-center gap-2 bg-brand-black text-brand-sunlight border-[1.5px] border-brand-black px-5 py-3.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase no-underline"
              >
                {t('galeriaPricingCTA')} <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <Lightbox
          photo={open}
          onClose={() => setOpen(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
};

export default GalleryGrid;

interface GalleryTileProps {
  extraClass: string;
  photo: Photo;
  onOpen: () => void;
}

function GalleryTile({ extraClass, photo, onOpen }: GalleryTileProps) {
  return (
    <article
      onClick={onOpen}
      className={cn(
        'group relative overflow-hidden cursor-zoom-in bg-brand-green-900 rounded-[2px]',
        extraClass
      )}
    >
      <Image
        src={photo.src}
        alt={photo.title}
        fill
        loading="lazy"
        className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
        style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
      />
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-brand-sunlight/90 text-brand-green-900 text-[10px] font-bold tracking-[0.16em] uppercase">
        {photo.cat}
      </div>
    </article>
  );
}

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({ onClose, onNext, onPrev, photo }: LightboxProps) {
  const t = useTranslations();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex flex-col justify-center items-center px-4 py-12 sm:px-24 animate-[lbFade_.25s_ease_both]"
      style={{ background: 'color-mix(in oklab, #1a2419 96%, transparent)' }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label={t('galeriaClose')}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-sunlight/10 text-brand-sunlight border-0 cursor-pointer inline-flex items-center justify-center"
      >
        <Icon name="close" size={20} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label={t('galeriaPrev')}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-brand-sunlight/10 text-brand-sunlight border-0 cursor-pointer inline-flex items-center justify-center"
      >
        <Icon name="arrow-left" size={22} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label={t('galeriaNext')}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-brand-sunlight/10 text-brand-sunlight border-0 cursor-pointer inline-flex items-center justify-center"
      >
        <Icon name="arrow-right" size={22} />
      </button>

      <div onClick={(e) => e.stopPropagation()} className="relative w-[90vw] h-[72vh] sm:h-[78vh]">
        <Image src={photo.src} alt={photo.title} fill className="object-contain" />
      </div>
      <div className="mt-5 sm:mt-6 text-brand-sunlight text-center max-w-[720px]">
        <div className="text-[11px] tracking-[0.24em] uppercase text-brand-mustard-300 font-semibold">
          {photo.cat}
        </div>
        <div className="mt-2 font-serif italic text-xl sm:text-[26px]">{photo.title}</div>
        <div className="mt-1.5 text-sm text-brand-sunlight/65">{photo.cap}</div>
      </div>

      <style>{`@keyframes lbFade { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}
