import { BrandMark } from '@/components/ui/Brand';
import { SmallCap } from '@/components/ui/Typography';
import { copy } from '@/lib/eng';
import { COLUMNS, SOCIALS } from './constants';

export const Footer = () => (
  <footer id="Kontakt" className="bg-green-900 text-brand-sunlight pt-16 md:pt-20 lg:pt-24 pb-8 px-5 md:px-8 lg:px-16">
    <div className="max-w-layout mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-16 pb-12 md:pb-16 border-b border-white/12">
        {/* Brand column spans full width on mobile */}
        <div className="col-span-2 md:col-span-1 md:col-[1/2]" style={{ gridColumn: undefined }}>
          <a href="#top" className="inline-flex items-center gap-3 text-brand-sunlight no-underline">
            <BrandMark size={48} color="#c79d09" />
            <div className="leading-[1.1]">
              <div className="text-[11px] tracking-widest2 uppercase text-mustard-300 font-medium">Domki</div>
              <div className="text-[20px] font-bold tracking-[0.06em] uppercase">Na Pniu</div>
            </div>
          </a>
          <p className="mt-5 text-[14px] leading-loose text-white/70 max-w-[38ch]">
            {copy.footerTagline}
          </p>
          <div className="mt-6 flex gap-2.5 flex-wrap">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 border border-white/25 rounded-full text-[12px] tracking-wider text-brand-sunlight no-underline transition-colors duration-150 hover:border-white/50"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-[11px] tracking-widest2 uppercase font-bold text-mustard-300 m-0 mb-5">
              {col.title}
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] md:text-[14px] text-white/75 no-underline transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {col.title === 'Kontakt' && (
                <li className="mt-4">
                  <SmallCap className="text-mustard-300">{copy.checkinLabel}</SmallCap>
                  <div className="text-[14px] mt-1.5 text-white/80">{copy.checkinValue}</div>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-[12px] text-white/50">
        <span>{copy.copyright}</span>
        <div className="flex gap-5">
          {['Polityka prywatności', 'Cookies', 'Regulamin'].map((l) => (
            <a key={l} href="#" className="text-inherit no-underline hover:text-white/80 transition-colors duration-150">
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
