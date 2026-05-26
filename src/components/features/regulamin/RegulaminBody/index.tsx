'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { SmallCap } from '@/components/brand/Typography';
import { Icon } from '@/components/brand/Icon';

export interface Section {
  id: string;
  items: string[];
  rom: string;
  title: string;
}

interface RegulaminBodyProps {
  sections: Section[];
}

export const RegulaminBody = ({ sections }: RegulaminBodyProps) => {
  const t = useTranslations();
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const handler = () => {
      const offsets = sections.map((s) => {
        const el = document.getElementById('r-' + s.id);
        if (!el) return { id: s.id, top: Infinity };
        return { id: s.id, top: el.getBoundingClientRect().top };
      });
      const visible = offsets.filter((o) => o.top < 200).sort((a, b) => b.top - a.top)[0];
      if (visible) setActive(visible.id);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [sections]);

  return (
    <section className="bg-brand-sunlight px-16 pt-24 pb-32">
      <div className="max-w-[1280px] mx-auto grid grid-cols-[280px_1fr] gap-24 items-start">
        <aside className="sticky top-[120px] self-start">
          <SmallCap>{t('regulaminToc')}</SmallCap>
          <ol className="m-0 mt-6 p-0 list-none border-t border-brand-green-900/15">
            {sections.map((s) => {
              const isActive = s.id === active;
              return (
                <li key={s.id} className="border-b border-brand-green-900/10">
                  <a
                    href={'#r-' + s.id}
                    onClick={() => setActive(s.id)}
                    className={cn(
                      'grid grid-cols-[36px_1fr] gap-3 items-baseline py-3 no-underline transition-colors',
                      'text-[13px] leading-[1.4] tracking-[0.01em]',
                      isActive
                        ? 'text-brand-green-900 font-semibold'
                        : 'text-brand-green-900/60 font-medium'
                    )}
                  >
                    <span
                      className={cn(
                        'font-serif italic text-lg',
                        isActive ? 'text-brand-mustard-700' : 'text-brand-green-900/40'
                      )}
                    >
                      {s.rom}.
                    </span>
                    <span>{s.title}</span>
                  </a>
                </li>
              );
            })}
          </ol>
          <div className="mt-8 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => typeof window !== 'undefined' && window.print()}
              className="inline-flex items-center gap-2 bg-transparent text-brand-green-900 border-[1.5px] border-brand-green-900/25 px-5 py-3.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase cursor-pointer"
            >
              <Icon name="arrow-up-right" size={12} /> {t('regulaminDownloadPdf')}
            </button>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-brand-green-900 px-5 py-3.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase no-underline"
            >
              <Icon name="arrow-right" size={12} /> {t('regulaminFaqLink')}
            </Link>
          </div>
        </aside>

        <div className="max-w-[760px]">
          <div
            className="p-6 mb-16 rounded-sm border border-brand-mustard-700/30"
            style={{ background: 'color-mix(in oklab, #c79d09 12%, #FFFCF5)' }}
          >
            <div className="text-[11px] tracking-[0.24em] uppercase font-bold text-brand-mustard-700 mb-3">
              {t('regulaminSummaryLabel')}
            </div>
            <p className="m-0 font-serif italic text-[22px] leading-[1.4] text-brand-green-900">
              {t('regulaminSummary')}
            </p>
          </div>

          {sections.map((s) => (
            <article
              key={s.id}
              id={'r-' + s.id}
              className="pb-14 mb-14 border-b border-brand-green-900/15 scroll-mt-[120px]"
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif italic text-[42px] font-medium text-brand-mustard-700 leading-none">
                  {s.rom}.
                </span>
                <h2 className="m-0 font-display text-[32px] font-normal tracking-[-0.015em] text-brand-green-900 leading-[1.15]">
                  {s.title}
                </h2>
              </div>
              <ol className="m-0 p-0 list-none flex flex-col gap-[18px]">
                {s.items.map((it, i) => (
                  <li key={i} className="grid grid-cols-[42px_1fr] gap-3">
                    <span className="text-[11px] tracking-[0.16em] tabular-nums font-bold text-brand-mustard-700 pt-1.5">
                      § {i + 1}
                    </span>
                    <span className="text-[15px] leading-[1.7] text-brand-green-900/85">{it}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}

          <div className="py-8 mt-6 grid grid-cols-[1fr_auto] gap-6 items-center text-[13px] text-brand-green-900/60">
            <div>{t('regulaminFooterNote')}</div>
            <div className="flex gap-3">
              <a
                href="tel:+48506141730"
                className="inline-flex items-center gap-2 bg-brand-green-900 text-brand-sunlight px-7 py-4 rounded-full text-[13px] font-bold tracking-[0.12em] uppercase no-underline"
              >
                <Icon name="phone" size={14} /> {t('regulaminCallBtn')}
              </a>
              <a
                href="mailto:domkinapniu@gmail.com"
                className="inline-flex items-center gap-2 bg-transparent text-brand-green-900 border-[1.5px] border-brand-green-900/25 px-5 py-3.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase no-underline"
              >
                <Icon name="mail" size={14} /> {t('regulaminWriteBtn')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulaminBody;
