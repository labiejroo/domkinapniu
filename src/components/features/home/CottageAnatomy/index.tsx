'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';
import { Display, Italic, SmallCap } from '@/components/ui/Typography';
import { roomCounter } from '@/lib/utils';
import type { RoomId, RoomCopy, EquipmentColumn } from '@/lib/types';
import { ORDER, ROOM_ASSETS } from './constants';

interface EqColProps {
  items: string[];
  title: string;
}

const EqCol = ({ items, title }: EqColProps) => (
  <div>
    <h4 className="m-0 mb-5 pb-3.5 border-b border-green-900/18 text-[11px] tracking-widest2 uppercase font-bold text-mustard-700">
      {title}
    </h4>
    <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="text-[13px] md:text-[14px] leading-snug text-green-900/85 flex gap-2 items-start"
        >
          <span className="mt-1 shrink-0">
            <Icon name="check" size={13} color="#9a7807" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface FloorPlanProps {
  active: RoomId;
  isUpper: boolean;
  rooms: Record<RoomId, RoomCopy>;
  onSelect: (id: RoomId) => void;
}

const FloorPlan = ({ active, isUpper, rooms, onSelect }: FloorPlanProps) => {
  const t = useTranslations();
  const labelFont = '"Cormorant Garamond", Georgia, serif';

  const parterRooms: Array<{ id: RoomId; d: string; label: string; cx: number; cy: number }> = [
    { id: 'salon', d: 'M 40 40 L 400 40 L 400 290 L 40 290 Z', label: rooms.salon.planLabel, cx: 220, cy: 168 },
    { id: 'lazienka', d: 'M 400 40 L 570 40 L 570 160 L 400 160 Z', label: rooms.lazienka.planLabel, cx: 485, cy: 105 },
    { id: 'taras', d: 'M 40 290 L 570 290 L 570 360 L 40 360 Z', label: rooms.taras.planLabel, cx: 305, cy: 328 },
  ];
  const pietroRooms: Array<{ id: RoomId; d: string; label: string; cx: number; cy: number }> = [
    { id: 'sypialnia1', d: 'M 40 40 L 260 40 L 260 290 L 40 290 Z', label: rooms.sypialnia1.planLabel, cx: 150, cy: 165 },
    { id: 'korytarz', d: 'M 260 40 L 360 40 L 360 290 L 260 290 Z', label: rooms.korytarz.planLabel, cx: 310, cy: 165 },
    { id: 'sypialnia2', d: 'M 360 40 L 570 40 L 570 290 L 360 290 Z', label: rooms.sypialnia2.planLabel, cx: 465, cy: 165 },
  ];

  const roomList = isUpper ? pietroRooms : parterRooms;
  const vbH = isUpper ? 320 : 390;
  const meta = isUpper ? t('upperFloorMeta') : t('groundFloorMeta');
  const floorLabel = isUpper ? t('floorUpper') : t('floorGround');

  return (
    <div className="bg-brand-eggshell border border-green-900/14 rounded p-4 md:p-5">
      <div className="flex justify-between items-baseline mb-3">
        <SmallCap className="text-mustard-700">— {floorLabel}</SmallCap>
        <span className="text-[12px] text-green-900/60 font-serif italic">{meta}</span>
      </div>
      <svg viewBox={`0 0 610 ${vbH}`} className="w-full block" aria-label={`Plan – ${floorLabel}`}>
        <defs>
          <filter id={`shadow-${isUpper ? 'upper' : 'ground'}`} x="-5%" y="-5%" width="110%" height="115%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#243026" floodOpacity="0.08" />
          </filter>
        </defs>
        {!isUpper && (
          <g>
            <path
              d="M 400 160 L 570 160 L 570 290 L 400 290 Z"
              fill="rgba(26,36,25,0.05)"
              stroke="rgba(26,36,25,0.4)"
              strokeWidth="1.5"
            />
            {[180, 198, 216, 234, 252, 270].map((y) => (
              <line
                key={y}
                x1="420"
                y1={y}
                x2="555"
                y2={y}
                stroke="rgba(26,36,25,0.3)"
                strokeWidth="0.8"
              />
            ))}
            <text
              x="485"
              y="288"
              textAnchor="middle"
              fontSize="11"
              fill="rgba(26,36,25,0.55)"
              style={{ fontFamily: labelFont, fontStyle: 'italic', letterSpacing: '0.05em' }}
            >
              {t('stairsLabel')}
            </text>
          </g>
        )}
        {roomList.map((r) => {
          const isActive = r.id === active;
          return (
            <g
              key={r.id}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              aria-label={r.label}
              onClick={() => onSelect(r.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelect(r.id);
                }
              }}
              style={{ cursor: 'pointer' }}
            >
              <path
                d={r.d}
                fill={isActive ? '#c79d09' : 'rgba(255,252,245,0.6)'}
                stroke="#1a2419"
                strokeWidth={isActive ? 2.2 : 1.5}
                filter={isActive ? `url(#shadow-${isUpper ? 'upper' : 'ground'})` : undefined}
                style={{ transition: 'fill 0.25s ease' }}
              />
              <text
                x={r.cx}
                y={r.cy}
                textAnchor="middle"
                fontSize={r.id === 'lazienka' || r.id === 'korytarz' ? 13 : 17}
                fill="#1a2419"
                style={{ fontFamily: labelFont, fontStyle: 'italic', pointerEvents: 'none' }}
              >
                {r.label}
              </text>
            </g>
          );
        })}
        {!isUpper && (
          <g fill="none" stroke="rgba(26,36,25,0.35)" strokeWidth="1">
            <line x1="210" y1="290" x2="270" y2="290" stroke="#F0EFED" strokeWidth="3" />
            <path d="M 210 290 A 60 60 0 0 1 270 290" strokeDasharray="2 2" />
            <line x1="400" y1="90" x2="400" y2="130" stroke="#F0EFED" strokeWidth="3" />
            <path d="M 400 90 A 40 40 0 0 0 400 130" strokeDasharray="2 2" />
          </g>
        )}
        {isUpper && (
          <g fill="none" stroke="rgba(26,36,25,0.35)" strokeWidth="1" style={{ pointerEvents: 'none' }}>
            <line x1="260" y1="145" x2="260" y2="185" stroke="#F0EFED" strokeWidth="3" />
            <path d="M 260 145 A 40 40 0 0 0 260 185" strokeDasharray="2 2" />
            <line x1="360" y1="145" x2="360" y2="185" stroke="#F0EFED" strokeWidth="3" />
            <path d="M 360 145 A 40 40 0 0 1 360 185" strokeDasharray="2 2" />
          </g>
        )}
        {!isUpper && (
          <g transform="translate(545, 18)">
            <circle r="9" fill="#FFFCF5" stroke="rgba(26,36,25,0.35)" strokeWidth="0.8" />
            <path d="M 0 -6 L 2 0 L 0 -2 L -2 0 Z" fill="#1a2419" />
            <text
              y="3"
              textAnchor="middle"
              fontSize="6"
              fontWeight="700"
              fill="#1a2419"
              style={{ letterSpacing: '0.05em' }}
            >
              N
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export const CottageAnatomy = () => {
  const t = useTranslations();
  const [active, setActive] = useState<RoomId>('salon');
  const imageRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (id: RoomId) => {
    setActive(id);
    if (typeof window !== 'undefined' && window.innerWidth < 800) {
      // allow image to update then scroll
      setTimeout(() => {
        imageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  };
  const rooms = t.raw('rooms') as Record<RoomId, RoomCopy>;
  const equipment = t.raw('equipment') as EquipmentColumn[];
  const cottageChips = t.raw('cottageChips') as string[];
  const roomCopy = rooms[active];
  const roomAsset = ROOM_ASSETS[active];
  const idx = ORDER.indexOf(active);

  return (
    <section id="domki" className="bg-brand-sunlight px-5 md:px-8 tablet:px-16 py-16 md:py-24 tablet:py-32">
      <div className="max-w-layout mx-auto">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 items-start mb-10 tablet:mb-20">
          <div>
            <SmallCap className="text-mustard-700">{t('cottageEyebrow')}</SmallCap>
            <Display size="md" className="mt-5 text-green-900">
              {t('cottageHeadline')}
              <br />
              <Italic className="text-mustard-700">{t('cottageHeadlineItalic')}</Italic>
            </Display>
          </div>
          <div className="text-[15px] md:text-[16px] leading-loose text-green-900/75">
            <p className="m-0">{t('cottageDescription')}</p>
            <div className="mt-5 flex gap-2 flex-wrap">
              {cottageChips.map((chip) => (
                <span
                  key={chip}
                  className="px-3.5 py-1.5 border border-green-900/18 rounded-full text-[12px] tracking-wider font-semibold text-green-900 bg-mustard-500/10 tabular-nums"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-[1.15fr_1fr] gap-10 tablet:gap-16 items-start">
          <div>
            <div
              ref={imageRef}
              className={`relative rounded overflow-hidden ${active === 'salon' ? 'bg-brand-sunlight' : 'bg-green-800'}`}
              style={{ aspectRatio: '4/5' }}
            >
              <Image
                key={active}
                src={roomAsset.photo}
                alt={roomCopy.name}
                fill
                className={`${active === 'salon' ? 'object-contain p-6' : 'object-cover'} animate-anatomy-fade`}
                style={active === 'salon' ? { mixBlendMode: 'multiply' } : undefined}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              {active !== 'salon' && (
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 70%, rgba(26,36,25,0.5) 100%)',
                  }}
                />
              )}
            </div>
            <div
              className="mt-6 grid gap-4 items-baseline"
              style={{ gridTemplateColumns: '1fr auto' }}
            >
              <h3 className="m-0 font-display text-[28px] md:text-[36px] font-medium tracking-[-0.02em] text-green-900">
                {roomCopy.name}
              </h3>
              <span className="text-[11px] tracking-[0.16em] text-green-900/55 font-bold uppercase tabular-nums">
                {roomCounter(idx, ORDER.length)}
              </span>
            </div>
            <p className="mt-3 text-[15px] md:text-[16px] leading-loose text-green-900/80">
              {roomCopy.desc}
            </p>
            <ul className="mt-5 p-0 list-none flex flex-wrap gap-2">
              {roomCopy.tags.map((tag) => (
                <li
                  key={tag}
                  className="px-3 py-1.5 border border-green-900/18 rounded-full text-[12px] font-medium text-green-900/82 inline-flex items-center gap-1.5"
                >
                  <Icon name="check" size={11} color="#9a7807" /> {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 tablet:sticky tablet:top-[120px]">
            <FloorPlan isUpper={true} active={active} rooms={rooms} onSelect={handleSelect} />
            <FloorPlan isUpper={false} active={active} rooms={rooms} onSelect={handleSelect} />
            <div className="flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-green-900/55 font-semibold">
              <span className="w-3 h-3 bg-mustard-500 rounded-sm shrink-0" />
              {t('clickRoomHint')}
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-32 pt-10 md:pt-16 border-t border-green-900/14">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-8 md:mb-12">
            <div>
              <SmallCap className="text-mustard-700">{t('cottageIncludedEyebrow')}</SmallCap>
              <Display size="sm" className="mt-4 text-green-900">
                {t('cottageIncludedHeadline')}{' '}
                <Italic className="text-mustard-700">{t('cottageIncludedHeadlineItalic')}</Italic>
              </Display>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 tablet:grid-cols-5 gap-8 md:gap-10">
            {equipment.map((col) => (
              <EqCol key={col.title} title={col.title} items={col.items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CottageAnatomy;
