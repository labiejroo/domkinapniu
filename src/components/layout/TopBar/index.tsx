import { Icon } from '@/components/ui/Icon';
import { copy } from '@/lib/eng';

export const TopBar = () => (
  <div className="bg-brand-black text-green-200/70 text-[13px] border-b border-white/[0.08]">
    <div className="max-w-container mx-auto px-5 md:px-8 lg:px-16 py-3 flex items-center justify-between gap-4">
      <div className="hidden md:flex gap-5 lg:gap-7 items-center">
        <span className="hidden lg:inline-flex items-center gap-2">
          <Icon name="pin" size={14} color="#d6b13e" />
          {copy.address}
        </span>
        <span className="inline-flex items-center gap-2">
          <Icon name="mail" size={14} color="#d6b13e" />
          <span className="hidden xl:inline">{copy.email}</span>
          <span className="xl:hidden">Email</span>
        </span>
        <span className="inline-flex items-center gap-2">
          <Icon name="phone" size={14} color="#d6b13e" />
          {copy.phone}
        </span>
      </div>

      <div className="flex md:hidden items-center gap-2">
        <Icon name="phone" size={14} color="#d6b13e" />
        <a href={`tel:${copy.phone.replace(/\s/g, '')}`} className="text-brand-sunlight font-semibold no-underline">
          {copy.phone}
        </a>
      </div>

      <div className="flex gap-4 items-center">
        <button
          type="button"
          className="bg-transparent border-0 text-inherit cursor-pointer inline-flex gap-1.5 items-center text-[13px]"
        >
          <span className="text-mustard-300 font-semibold">{copy.langPl}</span> · {copy.langEn}
        </button>
        <span className="w-px h-3.5 bg-white/20" />
        <span className="inline-flex items-center gap-1.5 text-white">
          <Icon name="star" size={12} color="#d6b13e" />
          <strong>{copy.ratingScore}</strong>
          <span className="hidden sm:inline opacity-60">· {copy.ratingCount}</span>
        </span>
      </div>
    </div>
  </div>
);

export default TopBar;
