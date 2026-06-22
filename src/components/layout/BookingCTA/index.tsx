import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Icon } from '@/components/brand/Icon';
import { Display, Italic, SmallCap } from '@/components/brand/Typography';

export const BookingCTA = async () => {
  const t = await getTranslations();
  return (
    <section
      id="rezerwacja"
      className="relative overflow-hidden text-brand-sunlight px-16 py-[120px]"
      style={{ background: 'color-mix(in oklab, #865F36 32%, #000)' }}
    >
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/assets/wood-texture.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ filter: 'saturate(0.9) contrast(1.05) brightness(1.05)' }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at center, color-mix(in oklab, #865F36 28%, #000) 0%, transparent 45%, color-mix(in oklab, #865F36 32%, #000) 100%)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto text-center">
        <SmallCap tone="mustard-light">{t('bookingEyebrow')}</SmallCap>
        <Display size="lg" className="mt-6 !text-brand-sunlight">
          {t('bookingHeadline')}
          <br />
          <Italic tone="mustard-light">{t('bookingHeadlineItalic')}</Italic>
        </Display>

        <div className="mt-14 grid grid-cols-[repeat(3,1fr)_auto] gap-px max-w-[960px] mx-auto bg-brand-sunlight/20 rounded-sm overflow-hidden">
          <BookField icon="calendar" label={t('bookingArrival')} value={t('bookingArrivalSample')} />
          <BookField icon="calendar" label={t('bookingDeparture')} value={t('bookingDepartureSample')} />
          <BookField icon="users" label={t('bookingGuests')} value={t('bookingGuestsSample')} />
          <button
            type="button"
            className="bg-brand-mustard-500 text-brand-black px-9 border-0 text-sm font-bold tracking-[0.12em] uppercase cursor-pointer inline-flex items-center gap-3 whitespace-nowrap"
          >
            {t('checkAvailability')} <Icon name="arrow-right" size={16} />
          </button>
        </div>

        <p className="mt-7 text-[13px] text-brand-sunlight/60">
          {t('bookingPhoneNote')}
          <span className="font-semibold">{t('bookingPhoneNoteBold')}</span>{' '}
          <a href="tel:+48506141730" className="text-brand-mustard-300 font-semibold no-underline">
            +48 506 141 730
          </a>
          {' '}{t('bookingPhoneSpeed')}
        </p>
      </div>
    </section>
  );
};

export default BookingCTA;

function BookField({ icon, label, value }: { icon: 'calendar' | 'users'; label: string; value: string }) {
  return (
    <label className="bg-brand-black px-7 py-6 flex flex-col gap-2 text-left cursor-pointer hover:bg-brand-black/80 transition-colors">
      <span className="text-[11px] text-brand-mustard-300 tracking-[0.16em] font-semibold uppercase">{label}</span>
      <span className="inline-flex items-center gap-2 text-sm text-brand-sunlight">
        <Icon name={icon} size={14} color="rgba(255,252,245,0.6)" /> {value}
      </span>
    </label>
  );
}
