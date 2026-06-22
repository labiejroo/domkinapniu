'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface Season {
  dates: string;
  highlight: boolean;
  min: string;
  name: string;
  note: string;
  price: string;
}

interface SeasonTableProps {
  seasons: Season[];
}

export const SeasonTable = ({ seasons }: SeasonTableProps) => {
  const t = useTranslations();
  return (
    <div>
      <div className="grid grid-cols-[1.6fr_1.2fr_0.9fr_auto] gap-8 max-[700px]:gap-4 max-[600px]:gap-2 items-center pb-4 px-3 border-b-2 border-brand-green-900 text-[11px] max-[700px]:text-[9px] max-[600px]:text-[8px] tracking-[0.2em] uppercase font-bold text-brand-green-900/65">
        <span>{t('cennikColSeason')}</span>
        <span>{t('cennikColDates')}</span>
        <span>{t('cennikColMin')}</span>
        <span className="text-right">{t('cennikColPrice')}</span>
      </div>
      <div>
        {seasons.map((s, i) => (
          <SeasonRow key={i} s={s} />
        ))}
      </div>
    </div>
  );
};

export default SeasonTable;

function SeasonRow({ s }: { s: Season }) {
  const t = useTranslations();
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="grid grid-cols-[1.6fr_1.2fr_0.9fr_auto] gap-8 max-[700px]:gap-4 max-[600px]:gap-2 items-center py-7 border-b border-brand-green-900/15 transition-all"
      style={{
        background: s.highlight
          ? 'color-mix(in oklab, #c79d09 8%, transparent)'
          : hover
            ? 'color-mix(in oklab, #c79d09 4%, transparent)'
            : 'transparent',
        paddingLeft: hover ? '24px' : '12px',
        paddingRight: '12px',
      }}
    >
      <div>
        <div className="font-serif italic text-[30px] max-[700px]:text-[20px] max-[600px]:text-[16px] font-medium text-brand-green-900 leading-[1.1] inline-flex items-baseline gap-3 max-[600px]:gap-1.5 flex-wrap">
          {s.name}
          {s.highlight && (
            <span className="not-italic font-body text-[10px] max-[700px]:text-[8px] max-[600px]:text-[7px] tracking-[0.2em] uppercase font-bold px-2.5 py-1 max-[700px]:px-2 max-[700px]:py-0.5 max-[600px]:px-1.5 rounded-full bg-brand-mustard-500 text-brand-green-900">
              {t('cennikHighSeason')}
            </span>
          )}
        </div>
        <div className="text-[13px] max-[700px]:text-[11px] max-[600px]:text-[10px] mt-1.5 text-brand-green-900/60">{s.note}</div>
      </div>

      <div className="text-sm max-[700px]:text-[12px] max-[600px]:text-[10px] text-brand-green-900/75 tabular-nums">{s.dates}</div>
      <div className="text-[13px] max-[700px]:text-[11px] max-[600px]:text-[10px] text-brand-green-900/70 font-semibold tabular-nums">min. {s.min}</div>

      <div className="text-right">
        <div
          className={cn(
            'font-display text-[38px] max-[700px]:text-[24px] max-[600px]:text-[19px] font-normal tracking-[-0.02em] leading-none tabular-nums inline-flex items-baseline gap-1.5 max-[600px]:gap-1',
            s.highlight ? 'text-brand-mustard-700' : 'text-brand-green-900'
          )}
        >
          {s.price}
          <span className="text-lg max-[700px]:text-xs max-[600px]:text-[10px] text-brand-green-900/60">{t('cennikPriceCurrency')}</span>
        </div>
        <div className="mt-1 text-[11px] max-[700px]:text-[8px] max-[600px]:text-[7px] tracking-[0.16em] uppercase text-brand-green-900/55 font-semibold">
          {t('cennikPriceUnit')}
        </div>
      </div>
    </div>
  );
}
