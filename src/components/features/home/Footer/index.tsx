'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { BrandMark } from '@/components/ui/Brand';
import { SmallCap } from '@/components/ui/Typography';
import { SOCIALS } from './constants';
import type { FooterColumn, FooterLink } from '@/lib/types';

export const Footer = () => {
  const t = useTranslations();
  const footerColumns = t.raw('footerColumns') as FooterColumn[];
  const footerLegal = t.raw('footerLegal') as FooterLink[];
  return (
    <footer id="kontakt" className="bg-green-900 text-brand-sunlight pt-16 md:pt-20 lg:pt-24 pb-8 px-5 md:px-8 lg:px-16">
      <div className="max-w-layout mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-16 pb-12 md:pb-16 border-b border-white/12">
          <div className="col-span-2 md:col-span-1 md:col-[1/2]" style={{ gridColumn: undefined }}>
            <a href="#top" className="inline-flex items-center gap-3 text-brand-sunlight no-underline">
              <BrandMark size={48} color="#c79d09" />
              <div className="leading-[1.1]">
                <div className="text-[11px] tracking-widest2 uppercase text-mustard-300 font-medium">Domki</div>
                <div className="text-[20px] font-bold tracking-[0.06em] uppercase">Na Pniu</div>
              </div>
            </a>
            <p className="mt-5 text-[14px] leading-loose text-white/70 max-w-[38ch]">
              {t('footerTagline')}
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

          {footerColumns.map((col, i) => (
            <div key={col.title}>
              <h3 className="text-[11px] tracking-widest2 uppercase font-bold text-mustard-300 m-0 mb-5">
                {col.title}
              </h3>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                {i === footerColumns.length - 1 && (
                  <li className="mb-1">
                    <div className="text-[13px] md:text-[14px] text-white/75 leading-relaxed">
                      {t('address').split(', ').map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </div>
                    <a
                      href="https://www.google.com/maps/place/Domki+Na+Pniu/@54.5370599,16.5381777,18z/data=!4m18!1m8!3m7!1s0x46fe316cbf34409b:0x5286d3045529062c!2sMorska+11,+76-107+Jaros%C5%82awiec!3b1!8m2!3d54.5378973!4d16.5377928!16s%2Fg%2F11s2pwcrq4!3m8!1s0x46fe31dec270688f:0xe8da0b47622cd486!5m2!4m1!1i2!8m2!3d54.5375831!4d16.5391826!16s%2Fg%2F11t0s_3gt4?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 bg-mustard-500 text-green-900 font-bold uppercase text-[11px] tracking-wider px-4 py-2 rounded-full no-underline hover:bg-mustard-400 transition-colors duration-150"
                    >
                      {t('navigateLabel')}
                    </a>
                  </li>
                )}
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] md:text-[14px] text-white/75 no-underline transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : link.href.startsWith('tel:') || link.href.startsWith('mailto:') ? (
                      <a
                        href={link.href}
                        className="text-[13px] md:text-[14px] text-white/75 no-underline transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[13px] md:text-[14px] text-white/75 no-underline transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
                {i === footerColumns.length - 1 && (
                  <li className="mt-4">
                    <SmallCap className="text-mustard-300">{t('checkinLabel')}</SmallCap>
                    <div className="text-[14px] mt-1.5 text-white/80">{t('checkinValue')}</div>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-[12px] text-white/50">
          <span>{t('copyright')}</span>
          <div className="flex gap-5">
            {footerLegal.map((l) => (
              <Link key={l.label} href={l.href} className="text-inherit no-underline hover:text-white/80 transition-colors duration-150">
                {l.label}
              </Link>
            ))}
          </div>
          <a
            href="https://wizjaikod.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-inherit no-underline hover:text-white/80 transition-colors duration-150"
          >
            <span>{t('madeByLabel')}</span>
            <span className="inline-flex items-center bg-brand-sunlight rounded-sm px-2 py-1">
              <Image src="/assets/logo-ink.png" alt="WizjaKod" width={893} height={209} className="h-3.5 w-auto" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
