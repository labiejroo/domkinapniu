'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';
import { Display, Italic, SmallCap } from '@/components/ui/Typography';
import { BASE_URL, FIELD, LABEL, VALUE } from './constants';

interface CounterProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}

const Counter = ({ label, value, min, max, onChange }: CounterProps) => {
  const t = useTranslations();
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <span className="text-[14px] text-brand-sunlight">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={t('decreaseLabel', { label })}
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-8 h-8 rounded-full border border-white/25 text-brand-sunlight flex items-center justify-center hover:border-white/50 transition-colors duration-150 text-lg leading-none"
        >
          −
        </button>
        <span className="w-5 text-center text-[15px] text-brand-sunlight tabular-nums font-semibold">{value}</span>
        <button
          type="button"
          aria-label={t('increaseLabel', { label })}
          onClick={() => onChange(Math.min(max, value + 1))}
          className="w-8 h-8 rounded-full border border-white/25 text-brand-sunlight flex items-center justify-center hover:border-white/50 transition-colors duration-150 text-lg leading-none"
        >
          +
        </button>
      </div>
    </div>
  );
};

export const BookingCTA = () => {
  const t = useTranslations();
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [showGuests, setShowGuests] = useState(false);
  const guestsMobileRef = useRef<HTMLDivElement>(null);
  const guestsDesktopRef = useRef<HTMLDivElement>(null);

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideMobile = guestsMobileRef.current?.contains(target);
      const insideDesktop = guestsDesktopRef.current?.contains(target);
      if (!insideMobile && !insideDesktop) setShowGuests(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const adultsText = t('adultsCountLabel', { adults });
  const childrenText = t('childrenCountLabel', { children });
  const guestsLabel = children > 0 ? `${adultsText} · ${childrenText}` : adultsText;

  const bookingUrl = (() => {
    const url = new URL(BASE_URL);
    if (arrival) url.searchParams.set('checkin', arrival);
    if (departure) url.searchParams.set('checkout', departure);
    url.searchParams.set('group_adults', String(adults));
    if (children > 0) url.searchParams.set('group_children', String(children));
    return url.toString();
  })();

  const GuestsPopover = () => (
    <div className="absolute left-0 right-0 top-full z-20 bg-[#1a1a1a] border border-white/15 rounded-lg mt-1 p-4 shadow-xl">
      <Counter label={t('adultsLabel')} value={adults} min={1} max={6} onChange={setAdults} />
      <div className="border-t border-white/10 my-1" />
      <Counter label={t('childrenLabel')} value={children} min={0} max={4} onChange={setChildren} />
    </div>
  );

  const inputStyle = { colorScheme: 'dark' as const };

  return (
    <section
      id="rezerwacja"
      className="relative text-brand-sunlight py-20 md:py-24 lg:py-[120px] px-5 md:px-8 lg:px-16 overflow-hidden"
      style={{ background: 'color-mix(in oklab, #865F36 32%, #000)' }}
    >
      <div className="absolute inset-0 opacity-[0.42]">
        <Image src="/assets/wood-texture.jpg" alt="" fill aria-hidden className="object-cover"
          style={{ filter: 'saturate(0.9) contrast(1.05) brightness(1.05)' }} sizes="100vw" />
      </div>
      <div className="absolute inset-0 opacity-60"
        style={{ background: 'radial-gradient(ellipse at center, rgba(134,95,54,0.28) 0%, transparent 45%, rgba(134,95,54,0.32) 100%)' }} />

      <div className="relative max-w-layout mx-auto text-center">
        <SmallCap className="text-mustard-300">{t('bookingEyebrow')}</SmallCap>
        <Display size="lg" className="mt-5 text-brand-sunlight">
          {t('bookingHeadline')}
          <br />
          <Italic className="text-mustard-300">{t('bookingHeadlineItalic')}</Italic>
        </Display>

        {/* Mobile */}
        <div className="mt-10 md:hidden flex flex-col gap-px bg-white/20 rounded overflow-visible max-w-md mx-auto">
          <label className={FIELD}>
            <span className={LABEL}>{t('bookingArrival')}</span>
            <div className={VALUE}>
              <Icon name="calendar" size={14} color="rgba(255,252,245,0.6)" />
              <input type="date" value={arrival} min={today}
                onChange={(e) => setArrival(e.target.value)}
                style={inputStyle}
                className="bg-transparent border-0 text-brand-sunlight text-[14px] cursor-pointer w-full" />
            </div>
          </label>
          <label className={FIELD}>
            <span className={LABEL}>{t('bookingDeparture')}</span>
            <div className={VALUE}>
              <Icon name="calendar" size={14} color="rgba(255,252,245,0.6)" />
              <input type="date" value={departure} min={arrival || today}
                onChange={(e) => setDeparture(e.target.value)}
                style={inputStyle}
                className="bg-transparent border-0 text-brand-sunlight text-[14px] cursor-pointer w-full" />
            </div>
          </label>
          <div ref={guestsMobileRef} className="relative">
            <button
              type="button"
              aria-expanded={showGuests}
              aria-haspopup="true"
              onClick={() => setShowGuests((v) => !v)}
              className={`w-full ${FIELD}`}
            >
              <span className={LABEL}>{t('bookingGuests')}</span>
              <div className={VALUE}>
                <Icon name="users" size={14} color="rgba(255,252,245,0.6)" />
                {guestsLabel}
              </div>
            </button>
            {showGuests && <GuestsPopover />}
          </div>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
            className="bg-mustard-500 text-brand-black px-6 py-5 text-[14px] font-bold tracking-wider2 uppercase inline-flex items-center justify-center gap-3 transition-colors duration-150 hover:bg-mustard-400 min-h-[56px] no-underline">
            {t('checkAvailability')} <Icon name="arrow-right" size={16} color="#242F25" />
          </a>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid mt-14 gap-px bg-white/20 rounded overflow-visible max-w-[960px] mx-auto"
          style={{ gridTemplateColumns: 'repeat(3, 1fr) auto' }}>
          <label className={FIELD}>
            <span className={LABEL}>{t('bookingArrival')}</span>
            <div className={VALUE}>
              <Icon name="calendar" size={14} color="rgba(255,252,245,0.6)" />
              <input type="date" value={arrival} min={today}
                onChange={(e) => setArrival(e.target.value)}
                style={inputStyle}
                className="bg-transparent border-0 text-brand-sunlight text-[14px] cursor-pointer w-full" />
            </div>
          </label>
          <label className={FIELD}>
            <span className={LABEL}>{t('bookingDeparture')}</span>
            <div className={VALUE}>
              <Icon name="calendar" size={14} color="rgba(255,252,245,0.6)" />
              <input type="date" value={departure} min={arrival || today}
                onChange={(e) => setDeparture(e.target.value)}
                style={inputStyle}
                className="bg-transparent border-0 text-brand-sunlight text-[14px] cursor-pointer w-full" />
            </div>
          </label>
          <div ref={guestsDesktopRef} className="relative">
            <button
              type="button"
              aria-expanded={showGuests}
              aria-haspopup="true"
              onClick={() => setShowGuests((v) => !v)}
              className={`h-full w-full text-left ${FIELD}`}
            >
              <span className={LABEL}>{t('bookingGuests')}</span>
              <div className={VALUE}>
                <Icon name="users" size={14} color="rgba(255,252,245,0.6)" />
                {guestsLabel}
              </div>
            </button>
            {showGuests && <GuestsPopover />}
          </div>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
            className="bg-mustard-500 text-brand-black px-8 text-[14px] font-bold tracking-wider2 uppercase inline-flex items-center gap-3 whitespace-nowrap transition-colors duration-150 hover:bg-mustard-400 min-h-[44px] no-underline">
            {t('checkAvailability')} <Icon name="arrow-right" size={16} color="#242F25" />
          </a>
        </div>

        <p className="mt-6 text-[21px] text-brand-sunlight">
          {t.rich('bookingPhoneNote', { b: (chunks) => <span className="font-bold">{chunks}</span> })}
          <span className="font-bold">{t('bookingPhoneNoteBold')}</span>{' '}
          <a href={`tel:${t('phone').replace(/\s/g, '')}`} className="text-mustard-300 font-semibold no-underline">
            {t('phoneDisplay')}
          </a>.
          <br />
          {t('bookingPhoneSpeed')}
        </p>
      </div>
    </section>
  );
};

export default BookingCTA;
