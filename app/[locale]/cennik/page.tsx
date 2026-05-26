import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { Display, Italic, SmallCap } from '@/components/brand/Typography';
import { Icon } from '@/components/brand/Icon';
import { SubpageHero } from '@/components/layout/SubpageHero';
import { BookingCTA } from '@/components/features/home/BookingCTA';
import { SeasonTable } from '@/components/features/cennik/SeasonTable';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: t('cennikMetaTitle'),
    description: t('cennikMetaDesc'),
  };
}

export default async function CennikPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const seasons = t.raw('cennikSeasons') as Array<{ name: string; dates: string; min: string; price: string; highlight: boolean; note: string }>;
  const equipment = t.raw('equipment') as Array<{ title: string; items: string[] }>;
  const steps = t.raw('cennikSteps') as Array<{ n: string; title: string; body: string; meta: string }>;
  const heroMeta = t.raw('cennikHeroMeta') as Array<{ label: string; value: string }>;

  return (
    <>
      <SubpageHero
        current={t('cennikHeroCurrent')}
        title={t('cennikHeroTitle')}
        italic={t('cennikHeroItalic')}
        lede={t('cennikHeroLede')}
        meta={heroMeta}
      />

      {/* ── PRICING TABLE ── */}
      <section className="bg-brand-eggshell px-16 py-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 gap-16 items-end mb-14">
            <div>
              <SmallCap>{t('cennikTableEyebrow')}</SmallCap>
              <Display size="md" className="mt-6">
                {t('cennikTableTitle')}<br/>
                <Italic>{t('cennikTableItalic')}</Italic>
              </Display>
            </div>
            <p className="m-0 text-base leading-[1.7] text-brand-green-900/70 max-w-[48ch] justify-self-end">
              {t('cennikTableNote')}
            </p>
          </div>

          <SeasonTable seasons={seasons}/>

          <div className="mt-8 p-6 bg-brand-sunlight border border-brand-green-900/15 rounded-sm flex gap-6 items-center justify-between flex-wrap">
            <div className="flex items-center gap-4">
              <Icon name="star" size={20} color="#c79d09"/>
              <div>
                <div className="font-serif italic text-[22px] text-brand-green-900 leading-tight">
                  {t('cennikLoyaltyText')}
                </div>
                <div className="text-[13px] text-brand-green-900/60 mt-1">
                  {t('cennikLoyaltyNote')}
                </div>
              </div>
            </div>
            <a href="#rezerwacja" className="inline-flex items-center gap-2.5 bg-brand-green-900 text-brand-sunlight px-7 py-4 rounded-full text-[13px] font-bold tracking-[0.12em] uppercase no-underline">
              {t('cennikLoyaltyCTA')} <Icon name="arrow-right" size={14}/>
            </a>
          </div>
        </div>
      </section>

      {/* ── W CENIE ── */}
      <section className="bg-brand-sunlight px-16 py-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-20">
            <SmallCap>{t('cottageIncludedEyebrow')}</SmallCap>
            <Display size="md" className="mt-6">
              {t('cottageIncludedHeadline')}{' '}
              <Italic>{t('cottageIncludedHeadlineItalic')}</Italic>
            </Display>
          </div>

          <div className="grid grid-cols-5 gap-10">
            {equipment.map(col => (
              <div key={col.title}>
                <h4 className="m-0 mb-5 pb-3.5 border-b border-brand-green-900/20 text-[11px] tracking-[0.2em] uppercase font-bold text-brand-mustard-700">{col.title}</h4>
                <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
                  {col.items.map(item => (
                    <li key={item} className="text-sm leading-[1.45] text-brand-green-900/85 flex gap-2.5 items-start">
                      <span className="mt-1 shrink-0 inline-flex">
                        <Icon name="check" size={13} color="#9a7807"/>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WARUNKI REZERWACJI ── */}
      <section className="bg-brand-eggshell px-16 py-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <SmallCap>{t('cennikStepsEyebrow')}</SmallCap>
            <Display size="md" className="mt-6">
              {t('cennikStepsTitle')}<br/>
              <Italic>{t('cennikStepsItalic')}</Italic>
            </Display>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {steps.map(c => (
              <div key={c.n} className="bg-brand-sunlight border border-brand-green-900/15 px-8 pt-10 pb-9 flex flex-col gap-4">
                <div className="text-[11px] tracking-[0.24em] uppercase font-bold text-brand-mustard-700 tabular-nums">{c.n} · {t('cennikStepLabel')}</div>
                <h3 className="m-0 font-display text-[28px] font-medium tracking-[-0.015em] text-brand-green-900 leading-[1.15]">{c.title}</h3>
                <p className="m-0 text-[15px] leading-[1.65] text-brand-green-900/80">{c.body}</p>
                <div className="mt-auto pt-5 border-t border-brand-green-900/15 font-serif italic text-sm text-brand-green-900/65">
                  {c.meta}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 gap-4 flex-wrap">
            <Link href="/regulamin" className="inline-flex items-center gap-2 bg-transparent text-brand-green-900 border-[1.5px] border-brand-green-900/25 px-6 py-3.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase no-underline">
              {t('cennikLinksRegulamin')} <Icon name="arrow-right" size={14}/>
            </Link>
            <Link href="/faq" className="inline-flex items-center gap-2 bg-transparent text-brand-green-900 border-[1.5px] border-brand-green-900/25 px-6 py-3.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase no-underline">
              {t('cennikLinksFaq')} <Icon name="arrow-right" size={14}/>
            </Link>
          </div>
        </div>
      </section>

      <BookingCTA/>
    </>
  );
}
