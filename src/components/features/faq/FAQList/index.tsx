'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/brand/Icon';
import { Italic, SmallCap } from '@/components/brand/Typography';

export interface FAQGroup {
  cat: string;
  items: { a: string; q: string }[];
}

interface FAQListProps {
  groups: FAQGroup[];
}

export const FAQList = ({ groups }: FAQListProps) => {
  const t = useTranslations();
  const [filter, setFilter] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  const flatCount = useMemo(() => groups.reduce((sum, g) => sum + g.items.length, 0), [groups]);

  const filtered = filter === null ? groups : groups.filter((g) => g.cat === filter);
  const filteredCount = filtered.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <>
      <section className="sticky top-[88px] z-30 bg-brand-sunlight px-5 md:px-8 tablet:px-16 py-5 md:py-6 tablet:py-8 border-b border-brand-green-900/15">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4 md:gap-6 flex-wrap">
          <div className="flex flex-wrap gap-2">
            {[null, ...groups.map((g) => g.cat)].map((c) => {
              const active = c === filter;
              const count = c === null ? flatCount : groups.find((g) => g.cat === c)?.items.length ?? 0;
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
                  {c === null ? t('faqFilterAll') : c}
                  <span
                    className={cn(
                      'text-[10px] opacity-70 px-1.5 py-0.5 rounded-full tabular-nums',
                      active ? 'bg-brand-sunlight/25' : 'bg-green-900/10'
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="text-xs tracking-[0.16em] uppercase text-brand-green-900/55 font-semibold">
            {t('faqShowing', { filtered: filteredCount, total: flatCount })}
          </div>
        </div>
      </section>

      <section className="bg-brand-eggshell px-5 md:px-8 tablet:px-16 pt-16 md:pt-20 tablet:pt-24 pb-20 md:pb-24 tablet:pb-32">
        <div className="max-w-[1280px] mx-auto">
          {filtered.map((group, gi) => (
            <div key={group.cat} className={gi === filtered.length - 1 ? '' : 'mb-12 md:mb-20'}>
              <div className="grid grid-cols-1 tablet:grid-cols-[280px_1fr] gap-6 tablet:gap-24 items-start">
                <div className="tablet:sticky tablet:top-[160px]">
                  <SmallCap>{t('faqCategoryLabel')} {String(gi + 1).padStart(2, '0')}</SmallCap>
                  <h2 className="m-0 mt-5 font-display text-[26px] md:text-[38px] font-normal tracking-[-0.02em] text-brand-green-900 leading-[1.15]">
                    {group.cat}
                  </h2>
                  <div className="mt-3 text-[13px] text-brand-green-900/60">
                    {t('faqQuestionCount', { count: group.items.length })}
                  </div>
                </div>

                <div className="bg-brand-sunlight border border-brand-green-900/15 rounded-sm px-5 md:px-8 pt-2 pb-5 md:pb-8">
                  {group.items.map((it, i) => {
                    const key = `${group.cat.toLowerCase()}-${i}`;
                    return (
                      <FAQItem
                        key={key}
                        a={it.a}
                        idKey={key}
                        open={openId}
                        q={it.q}
                        setOpen={setOpenId}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}

          <div className="mt-16 md:mt-24 bg-brand-green-900 text-brand-sunlight px-6 md:px-10 tablet:px-14 py-10 md:py-12 tablet:py-16 grid grid-cols-1 tablet:grid-cols-[1.2fr_1fr] gap-8 tablet:gap-16 items-center rounded-sm">
            <div>
              <SmallCap tone="mustard-light">{t('faqCtaEyebrow')}</SmallCap>
              <h3 className="m-0 mt-5 font-display text-[28px] md:text-[40px] font-normal tracking-[-0.02em] text-brand-sunlight leading-[1.1]">
                {t('faqCtaTitle')} <Italic tone="mustard-light">{t('faqCtaTitleItalic')}</Italic>
              </h3>
              <p className="mt-5 text-base leading-[1.7] max-w-[46ch] text-brand-sunlight/75">
                {t('faqCtaDesc')}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+48506141730"
                className="grid grid-cols-[40px_1fr_auto] gap-4 items-center px-6 py-5 bg-brand-sunlight/5 border border-brand-sunlight/20 rounded-sm no-underline text-brand-sunlight"
              >
                <Icon name="phone" size={20} color="#e3c66e" />
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase font-bold text-brand-mustard-300">{t('faqCtaPhone')}</div>
                  <div className="font-display text-[22px] font-medium mt-1">+48 506 141 730</div>
                </div>
                <Icon name="arrow-up-right" size={18} color="rgba(255,252,245,0.65)" />
              </a>
              <a
                href="mailto:domkinapniu@gmail.com"
                className="grid grid-cols-[40px_1fr_auto] gap-4 items-center px-6 py-5 bg-brand-sunlight/5 border border-brand-sunlight/20 rounded-sm no-underline text-brand-sunlight"
              >
                <Icon name="mail" size={20} color="#e3c66e" />
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase font-bold text-brand-mustard-300">{t('faqCtaEmail')}</div>
                  <div className="font-display text-lg font-medium mt-1">domkinapniu@gmail.com</div>
                </div>
                <Icon name="arrow-up-right" size={18} color="rgba(255,252,245,0.65)" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQList;

interface FAQItemProps {
  a: string;
  idKey: string;
  open: string | null;
  q: string;
  setOpen: (v: string | null) => void;
}

function FAQItem({ a, idKey, open, q, setOpen }: FAQItemProps) {
  const isOpen = open === idKey;
  return (
    <div className="border-b border-brand-green-900/15">
      <button
        type="button"
        onClick={() => setOpen(isOpen ? null : idKey)}
        className="w-full text-left bg-transparent border-0 py-5 md:py-7 cursor-pointer grid grid-cols-[1fr_auto] gap-4 md:gap-8 items-center text-brand-green-900"
      >
        <span
          className={cn(
            'font-display text-[17px] md:text-[22px] font-medium tracking-[-0.01em] leading-[1.3]',
            isOpen ? 'text-brand-green-900' : 'text-brand-green-900/85'
          )}
        >
          {q}
        </span>
        <span
          className={cn(
            'w-[34px] h-[34px] md:w-[42px] md:h-[42px] shrink-0 rounded-full inline-flex items-center justify-center transition-all',
            'border border-brand-green-900/25',
            isOpen ? 'bg-brand-mustard-500 rotate-45' : 'bg-transparent'
          )}
        >
          <Icon name="plus" size={16} />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-[350ms]"
        style={{
          maxHeight: isOpen ? 600 : 0,
          transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
        }}
      >
        <p className="m-0 pt-1 pb-7 max-w-[62ch] text-base leading-[1.7] text-brand-green-900/80">{a}</p>
      </div>
    </div>
  );
}
