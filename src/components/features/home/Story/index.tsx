import { Display, Italic, SmallCap } from '@/components/ui/Typography';
import { copy } from '@/lib/eng';

interface StoryStatProps {
  label: string;
  n: string;
}

const StoryStat = ({ label, n }: StoryStatProps) => (
  <div>
    <div className="font-display text-[40px] md:text-[48px] font-light tracking-[-0.02em] leading-none text-green-900">
      {n}
    </div>
    <div className="mt-2 text-[11px] tracking-[0.16em] uppercase font-semibold text-green-900/55">
      {label}
    </div>
  </div>
);

export const Story = () => (
  <section id="O-nas" className="bg-brand-sunlight text-green-900 px-5 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32">
    <div className="max-w-layout mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-start">
        <div className="lg:sticky lg:top-[120px]">
          <SmallCap className="text-mustard-700">
            <span className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-mustard-700" /> O miejscu
            </span>
          </SmallCap>
          <Display size="lg" className="mt-6 text-green-900">
            {copy.storyHeadline}
            <br />
            <Italic className="text-mustard-700">{copy.storyHeadlineItalic}<span className="not-italic">.</span></Italic>
            <br />
            {copy.storyHeadlineEnd}
          </Display>
        </div>

        <div className="flex flex-col gap-2 md:gap-3">
          <p className="font-serif text-[22px] md:text-[28px] italic font-normal leading-snug m-0 max-w-[24ch] text-green-500">
            {copy.storyQuote}
          </p>

          {copy.storyBody1.split('\n\n').map((para, i) => (
            <p key={i} className="text-[16px] md:text-[17px] leading-loose m-0 max-w-[52ch] text-brand-black">
              {para}
            </p>
          ))}

          <div
            className="grid grid-cols-3 gap-6 md:gap-8 mt-6 pt-8 border-t border-green-900/15"
          >
            <StoryStat n="2022" label="Rok otwarcia" />
            <StoryStat n="12" label="Domków" />
            <StoryStat n="50 m²" label="Powierzchni" />
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default Story;
