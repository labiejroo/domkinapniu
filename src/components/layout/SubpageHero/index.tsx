import { Link } from '@/i18n/navigation';
import { Display, Italic, SmallCap } from '@/components/brand/Typography';

export interface HeroMeta {
  label: string;
  value: string;
}

interface SubpageHeroProps {
  current: string;
  eyebrow?: string;
  italic: string;
  lede?: string;
  meta?: HeroMeta[];
  title: string;
}

export const SubpageHero = ({ current, eyebrow, italic, lede, meta, title }: SubpageHeroProps) => (
  <section className="bg-brand-sunlight text-brand-green-900 px-16 max-[600px]:px-8 pt-[88px] pb-24">
    <div className="max-w-[1280px] mx-auto">
      <div className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-brand-green-900/55 font-semibold mb-14">
        <Link href="/" className="text-inherit no-underline">Domki Na Pniu</Link>
        <span className="opacity-40">/</span>
        <span className="text-brand-mustard-700">{current}</span>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-[1.2fr_1fr] gap-12 tablet:gap-24 items-start">
        <div>
          {eyebrow && (
            <SmallCap>
              <span className="inline-flex items-center gap-2">
                <span className="w-8 h-px bg-brand-mustard-700" />
                {eyebrow}
              </span>
            </SmallCap>
          )}
          <Display as="h1" size="xl" className="mt-6">
            {title}
            <br />
            <Italic>{italic}</Italic>
          </Display>
        </div>

        <div>
          {lede && (
            <p className="m-0 text-[17px] leading-[1.7] text-brand-green-900/80 max-w-[42ch]">{lede}</p>
          )}
          {meta && meta.length > 0 && (
            <div className="mt-6 pt-5 border-t border-brand-green-900/15 flex gap-8 flex-wrap">
              {meta.map((m) => (
                <div key={m.label}>
                  <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-brand-green-900/55">{m.label}</div>
                  <div className="font-display text-[22px] font-medium text-brand-green-900 mt-1 tracking-[-0.015em]">{m.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default SubpageHero;
