import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { BrandMark } from '@/components/brand/BrandMark';
import { SmallCap } from '@/components/brand/Typography';

interface FooterLink {
  href: string;
  label: string;
}

interface FooterColumn {
  links: FooterLink[];
  title: string;
}

export const Footer = async () => {
  const t = await getTranslations();
  const columns = t.raw('footerColumns') as FooterColumn[];
  const legal = t.raw('footerLegal') as string[];

  return (
    <footer id="kontakt" className="bg-[#1a2419] text-brand-sunlight px-16 pt-24 pb-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-16 pb-16 border-b border-brand-sunlight/10">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-brand-sunlight no-underline">
              <BrandMark size={48} color="#c79d09" />
              <div className="leading-[1.1]">
                <div className="text-[11px] tracking-[0.2em] uppercase text-brand-mustard-300 font-medium">Domki</div>
                <div className="text-[22px] font-bold tracking-[0.06em] uppercase">Na Pniu</div>
              </div>
            </Link>
            <p className="mt-6 text-sm leading-[1.7] text-brand-sunlight/70 max-w-[38ch]">
              {t('footerTagline')}
            </p>
            <div className="mt-8 flex gap-3">
              {['Instagram', 'Facebook', 'Booking'].map((s) => (
                <a key={s} href="#" className="px-4 py-2.5 border border-brand-sunlight/25 rounded-full text-xs tracking-[0.08em] text-brand-sunlight no-underline">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.slice(0, 2).map((col) => (
            <FooterCol key={col.title} items={col.links} title={col.title} />
          ))}

          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase font-bold text-brand-mustard-300 m-0 mb-6">
              {t('footerContactTitle')}
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {['ul. Morska 11', '76-107 Jarosławiec'].map((line) => (
                <li key={line} className="text-sm text-brand-sunlight/75">{line}</li>
              ))}
              {columns[2]?.links.map((lnk) => (
                <li key={lnk.label}>
                  <a href={lnk.href} className="text-sm text-brand-sunlight/75 no-underline">{lnk.label}</a>
                </li>
              ))}
              <li className="mt-5">
                <SmallCap tone="mustard-light">Check-in</SmallCap>
                <div className="text-sm mt-1.5 text-brand-sunlight/80">15:00 / 10:00</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-4 pt-8 text-xs text-brand-sunlight/50">
          <span>{t('copyright')}</span>
          <div className="flex gap-6">
            {legal.map((label) => (
              <a key={label} href="#" className="text-inherit">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function FooterCol({ items, title }: { items: FooterLink[]; title: string }) {
  return (
    <div>
      <h3 className="text-[11px] tracking-[0.2em] uppercase font-bold text-brand-mustard-300 m-0 mb-6">{title}</h3>
      <ul className="list-none m-0 p-0 flex flex-col gap-3">
        {items.map((lnk) => (
          <li key={lnk.label}>
            <a href={lnk.href} className="text-sm text-brand-sunlight/75 no-underline">{lnk.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
