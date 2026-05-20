import { Display, Italic, SmallCap } from '@/components/ui/Typography';
import { copy } from '@/lib/eng';
import type { NearbyPlace } from '@/lib/types';

const NEARBY: NearbyPlace[] = [
  { place: 'Plaża strzeżona z białym piaskiem', dist: '180 m', detail: 'spacerem w 8 minut' },
  { place: 'Promenada nadmorska', dist: '5 min', detail: 'restauracje, lody, sklepy' },
  { place: 'Latarnia morska z XIX w.', dist: '800 m', detail: '33 m wysokości, taras widokowy' },
  { place: 'Aquapark Jarosławiec', dist: '1,2 km', detail: 'baseny, zjeżdżalnie, sauna' },
  { place: 'Rezerwat Jezioro Wicko', dist: '15 min', detail: 'rowery, ptaki, kąpielisko' },
  { place: 'Ustka i Darłowo', dist: '40 min', detail: 'porty, stare miasta, marina' },
];

export const Okolica = () => (
  <section id="Okolica" className="bg-green-900 text-brand-sunlight relative">
    <svg className="block w-full h-12 md:h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
      <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z" fill="#FFFCF5" />
    </svg>

    <div className="max-w-layout mx-auto px-5 md:px-8 lg:px-16 pb-16 md:pb-24 lg:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-start">
        <div>
          <SmallCap className="text-mustard-300">{copy.okoliceEyebrow}</SmallCap>
          <Display size="md" className="mt-5 text-brand-sunlight">
            {copy.okoliceHeadline}
            <br />
            <Italic className="text-mustard-300">{copy.okoliceHeadlineItalic}</Italic>
          </Display>
          <p className="mt-6 text-[15px] md:text-[16px] leading-loose text-brand-eggshell text-justify">
            {copy.okoliceDescription}
          </p>

          <div
            className="mt-8 relative rounded overflow-hidden border border-white/15"
            style={{ aspectRatio: '4/3' }}
          >
            <iframe
              src="https://maps.google.com/maps?q=ul.+Morska+11,+76-107+Jaros%C5%82awiec&output=embed&z=16&hl=pl"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Domki Na Pniu – ul. Morska 11, Jarosławiec"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-baseline border-b border-white/18 pb-3 mb-1">
            <SmallCap className="text-white/50">{copy.placeHeader}</SmallCap>
            <SmallCap className="text-white/50">{copy.distanceHeader}</SmallCap>
          </div>
          {NEARBY.map((row, i) => (
            <a
              key={i}
              href="#"
              className="grid gap-4 md:gap-6 items-baseline py-5 md:py-6 border-b border-white/12 no-underline text-inherit transition-[padding] duration-200 hover:pl-2 group"
              style={{ gridTemplateColumns: '1fr auto' }}
            >
              <div>
                <div className="text-[17px] md:text-[22px] font-display font-normal tracking-[-0.01em] inline-flex items-center gap-3 text-brand-eggshell">
                  {row.place}
                </div>
                <div className="text-[12px] md:text-[13px] text-white/55 mt-1">{row.detail}</div>
              </div>
              <div className="tabular-nums font-display text-[18px] md:text-[22px] font-normal text-mustard-300 tracking-[-0.01em]">
                {row.dist}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Okolica;
