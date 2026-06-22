import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { buildPageMetadata } from '@/lib/seo';
import { Display, Italic, SmallCap } from '@/components/brand/Typography';
import { Icon } from '@/components/brand/Icon';
import { SubpageHero } from '@/components/layout/SubpageHero';
import { BookingCTA } from '@/components/features/home/BookingCTA';
import { SeasonTable } from '@/components/features/cennik/SeasonTable';
import { StepCards } from '@/components/features/cennik/StepCards';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return buildPageMetadata({
    locale,
    href: '/cennik',
    title: t('cennikMetaTitle'),
    description: t('cennikMetaDesc'),
  });
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
      <section className="bg-brand-eggshell pb-32">
        <svg className="block w-full h-12 md:h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,0 L0,0 Z" fill="#FFFCF5" />
        </svg>
        <div className="max-w-[1280px] mx-auto px-16 max-[600px]:px-8 mt-16 md:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 tablet:gap-16 items-start mb-14">
            <div>
              <SmallCap>{t('cennikTableEyebrow')}</SmallCap>
              <Display size="md" className="mt-6">
                {t('cennikTableTitle')}<br/>
                <Italic>{t('cennikTableItalic')}</Italic>
              </Display>
            </div>
            <p className="m-0 text-base leading-[1.7] text-brand-green-900/70 max-w-[48ch] tablet:justify-self-end">
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
              </div>
            </div>
            <a href="#rezerwacja" className="inline-flex items-center gap-2.5 bg-brand-green-900 text-brand-sunlight px-7 py-4 rounded-full text-[13px] font-bold tracking-[0.12em] uppercase no-underline">
              {t('cennikLoyaltyCTA')} <Icon name="arrow-right" size={14}/>
            </a>
          </div>
        </div>
      </section>

      {/* ── W CENIE ── */}
      <section className="bg-brand-sunlight px-16 max-[600px]:px-8 py-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-20">
            <SmallCap>{t('cottageIncludedEyebrow')}</SmallCap>
            <Display size="md" className="mt-6">
              {t('cottageIncludedHeadline')}{' '}
              <Italic>{t('cottageIncludedHeadlineItalic')}</Italic>
            </Display>
          </div>

          <div className="flex flex-wrap gap-10 lg:grid lg:grid-cols-5">
            {equipment.map(col => (
              <div key={col.title} className="flex-1 basis-[160px]">
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
      <section className="bg-brand-eggshell px-8 tablet:px-16 py-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <SmallCap>{t('cennikStepsEyebrow')}</SmallCap>
            <Display size="md" className="mt-6">
              {t('cennikStepsTitle')}<br/>
              <Italic>{t('cennikStepsItalic')}</Italic>
            </Display>
          </div>

          <StepCards steps={steps} />

          <div className="flex justify-center mt-12 gap-4 flex-wrap">
            <Link href="/regulamin" className="inline-flex items-center gap-2 bg-transparent text-brand-green-900 border-[1.5px] border-brand-green-900/25 px-6 py-3.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase no-underline">
              {t('cennikLinksRegulamin')} <Icon name="arrow-right" size={14}/>
            </Link>
            <Link href="/faq" className="inline-flex items-center gap-2 bg-brand-black text-brand-sunlight border-[1.5px] border-brand-black px-6 py-3.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase no-underline">
              {t('cennikLinksFaq')} <Icon name="arrow-right" size={14}/>
            </Link>
          </div>
        </div>
      </section>

      <BookingCTA/>
    </>
  );
}
