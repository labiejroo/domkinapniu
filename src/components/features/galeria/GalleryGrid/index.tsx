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

const MOSAIC: Record<string, { col: string; emph?: boolean; row: string }> = {
  g01: { col: 'col-start-1 col-end-8',  emph: true, row: 'row-span-4' },
  g02: { col: 'col-start-8 col-end-13', row: 'row-span-3' },
  g03: { col: 'col-start-8 col-end-13', row: 'row-span-1' },
  g04: { col: 'col-start-1 col-end-5',  row: 'row-span-3' },
  g05: { col: 'col-start-5 col-end-9',  row: 'row-span-3' },
  g06: { col: 'col-start-9 col-end-13', row: 'row-span-3' },
  g07: { col: 'col-start-1 col-end-6',  row: 'row-span-3' },
  g08: { col: 'col-start-6 col-end-10', row: 'row-span-3' },
  g09: { col: 'col-start-10 col-end-13', row: 'row-span-3' },
  g10: { col: 'col-start-1 col-end-4',  row: 'row-span-2' },
  g11: { col: 'col-start-4 col-end-9',  emph: true, row: 'row-span-2' },
  g12: { col: 'col-start-9 col-end-13', row: 'row-span-2' },
  g13: { col: 'col-start-1 col-end-13', emph: true, row: 'row-span-2' },
};

export const GalleryGrid = ({ photos }: GalleryGridProps) => {
  const t = useTranslations();
  const [filter, setFilter] = useState<string | null>(null);
  const [open, setOpen] = useState<Photo | null>(null);

  const cats = useMemo(
    () => Array.from(new Set(photos.map((p) => p.cat))),
    [photos]
  );

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
      <section className="sticky top-[88px] z-30 bg-brand-sunlight px-16 py-8 border-b border-brand-green-900/15">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-6 flex-wrap">
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
                    active ? 'bg-brand-black text-brand-sunlight border-brand-black' : 'bg-transparent text-green-900'
                  )}
                >
                  {c === null ? t('galeriaAll') : c}
                  <span
                    className={cn(
                      'text-[10px] opacity-70 px-1.5 py-0.5 rounded-full tabular-nums',
                      active ? 'bg-brand-sunlight/25' : 'bg-green-900/10'
                    )}
                  >
                    {c === null ? photos.length : (counts[c] || 0)}
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

      <section className="bg-brand-eggshell px-16 pt-16 pb-32">
        <div className="max-w-[1280px] mx-auto">
          {filter === null ? (
            <div className="grid grid-cols-12 gap-4" style={{ gridAutoRows: '90px' }}>
              {filtered.map((p) => {
                const m = MOSAIC[p.id];
                return (
                  <GalleryTile
                    key={p.id}
                    emph={!!m?.emph}
                    extraClass={m ? `${m.col} ${m.row}` : 'col-span-4 row-span-3'}
                    photo={p}
                    onOpen={() => setOpen(p)}
                  />
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-5" style={{ gridAutoRows: '320px' }}>
              {filtered.map((p) => (
                <GalleryTile key={p.id} emph={false} extraClass="" photo={p} onOpen={() => setOpen(p)} />
              ))}
            </div>
          )}

          <div className="mt-20 text-center">
            <SmallCap className="text-brand-black">{t('galeriaInstagramEyebrow')}</SmallCap>
            <p className="mx-auto mt-4 max-w-[40ch] font-serif italic text-2xl leading-[1.35] text-brand-green-900/75">
              {t('galeriaInstagramDesc')}
            </p>
            <div className="mt-8 inline-flex gap-3">
              <a
                href="https://instagram.com/domkinapniu"
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
        <Lightbox photo={open} onClose={() => setOpen(null)} onNext={handleNext} onPrev={handlePrev} />
      )}
    </>
  );
};

export default GalleryGrid;

interface GalleryTileProps {
  emph: boolean;
  extraClass: string;
  photo: Photo;
  onOpen: () => void;
}

function GalleryTile({ emph, extraClass, photo, onOpen }: GalleryTileProps) {
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
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(26,36,25,0.88) 100%)' }}
      />
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-brand-sunlight/90 text-brand-green-900 text-[10px] font-bold tracking-[0.16em] uppercase">
        {photo.cat}
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 text-brand-sunlight opacity-0 group-hover:opacity-100 transition-opacity"
        style={emph ? { padding: '24px 28px' } : { padding: '16px 18px' }}
      >
        <div className={cn('font-display font-medium tracking-[-0.015em]', emph ? 'text-[26px]' : 'text-lg')}>
          {photo.title}
        </div>
        <div className="mt-1 text-xs text-brand-sunlight/75">{photo.cap}</div>
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
      className="fixed inset-0 z-[100] flex flex-col justify-center items-center px-24 py-12 animate-[lbFade_.25s_ease_both]"
      style={{ background: 'color-mix(in oklab, #1a2419 96%, transparent)' }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label={t('galeriaClose')}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-sunlight/10 text-brand-sunlight border-0 cursor-pointer inline-flex items-center justify-center"
      >
        <Icon name="close" size={20} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label={t('galeriaPrev')}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-sunlight/10 text-brand-sunlight border-0 cursor-pointer inline-flex items-center justify-center"
      >
        <Icon name="arrow-left" size={22} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label={t('galeriaNext')}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-sunlight/10 text-brand-sunlight border-0 cursor-pointer inline-flex items-center justify-center"
      >
        <Icon name="arrow-right" size={22} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90vw] h-[78vh]"
      >
        <Image src={photo.src} alt={photo.title} fill className="object-contain" />
      </div>
      <div className="mt-6 text-brand-sunlight text-center max-w-[720px]">
        <div className="text-[11px] tracking-[0.24em] uppercase text-brand-mustard-300 font-semibold">{photo.cat}</div>
        <div className="mt-2 font-serif italic text-[26px]">{photo.title}</div>
        <div className="mt-1.5 text-sm text-brand-sunlight/65">{photo.cap}</div>
      </div>

      <style>{`@keyframes lbFade { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}
