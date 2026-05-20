'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { Display, Italic, SmallCap } from '@/components/ui/Typography';
import { copy, fmt } from '@/lib/eng';
import type { Room, RoomId, EquipmentColumn } from '@/lib/types';
import { ORDER, EQUIPMENT, ROOMS } from './constants';

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
  level: 'Parter' | 'Piętro';
  onSelect: (id: RoomId) => void;
}

const FloorPlan = ({ active, level, onSelect }: FloorPlanProps) => {
  const isPietro = level === 'Piętro';
  const labelFont = '"Cormorant Garamond", Georgia, serif';

  const parterRooms: Array<{ id: RoomId; d: string; label: string; cx: number; cy: number }> = [
    {
      id: 'salon',
      d: 'M 40 40 L 400 40 L 400 290 L 40 290 Z',
      label: 'Salon + Kuchnia',
      cx: 220,
      cy: 168,
    },
    {
      id: 'lazienka',
      d: 'M 400 40 L 570 40 L 570 160 L 400 160 Z',
      label: 'Łazienka',
      cx: 485,
      cy: 105,
    },
    { id: 'taras', d: 'M 40 290 L 570 290 L 570 360 L 40 360 Z', label: 'Taras', cx: 305, cy: 328 },
  ];
  const pietroRooms: Array<{ id: RoomId; d: string; label: string; cx: number; cy: number }> = [
    {
      id: 'sypialnia1',
      d: 'M 40 40 L 310 40 L 310 290 L 40 290 Z',
      label: 'Sypialnia główna',
      cx: 175,
      cy: 165,
    },
    {
      id: 'sypialnia2',
      d: 'M 310 40 L 570 40 L 570 290 L 310 290 Z',
      label: 'Sypialnia dziecięca',
      cx: 440,
      cy: 165,
    },
  ];

  const rooms = isPietro ? pietroRooms : parterRooms;
  const vbH = isPietro ? 320 : 390;
  const meta = isPietro ? '24 m² · 2 sypialnie' : '24 m² + 14 m² taras';

  return (
    <div className="bg-brand-eggshell border border-green-900/14 rounded p-4 md:p-5">
      <div className="flex justify-between items-baseline mb-3">
        <SmallCap className="text-mustard-700">— {level}</SmallCap>
        <span className="text-[12px] text-green-900/60 font-serif italic">{meta}</span>
      </div>
      <svg viewBox={`0 0 610 ${vbH}`} className="w-full block" aria-label={`Plan – ${level}`}>
        <defs>
          <filter id={`shadow-${level}`} x="-5%" y="-5%" width="110%" height="115%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#243026" floodOpacity="0.08" />
          </filter>
        </defs>
        {!isPietro && (
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
              schody
            </text>
          </g>
        )}
        {isPietro && (
          <rect
            x="295"
            y="240"
            width="30"
            height="50"
            fill="rgba(26,36,25,0.05)"
            stroke="rgba(26,36,25,0.3)"
            strokeWidth="0.8"
          />
        )}
        {rooms.map((r) => {
          const isActive = r.id === active;
          return (
            <g key={r.id} onClick={() => onSelect(r.id)} style={{ cursor: 'pointer' }}>
              <path
                d={r.d}
                fill={isActive ? '#c79d09' : 'rgba(255,252,245,0.6)'}
                stroke="#1a2419"
                strokeWidth={isActive ? 2.2 : 1.5}
                filter={isActive ? `url(#shadow-${level})` : undefined}
                style={{ transition: 'fill 0.25s ease' }}
              />
              <text
                x={r.cx}
                y={r.cy}
                textAnchor="middle"
                fontSize={r.id === 'lazienka' ? 13 : 17}
                fill="#1a2419"
                style={{ fontFamily: labelFont, fontStyle: 'italic', pointerEvents: 'none' }}
              >
                {r.label}
              </text>
              <text
                x={r.cx}
                y={r.cy + 18}
                textAnchor="middle"
                fontSize="10"
                fill="rgba(26,36,25,0.55)"
                style={{
                  pointerEvents: 'none',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {ROOMS[r.id].size}
              </text>
            </g>
          );
        })}
        {!isPietro && (
          <g fill="none" stroke="rgba(26,36,25,0.35)" strokeWidth="1">
            <line x1="210" y1="290" x2="270" y2="290" stroke="#F0EFED" strokeWidth="3" />
            <path d="M 210 290 A 60 60 0 0 1 270 290" strokeDasharray="2 2" />
            <line x1="400" y1="90" x2="400" y2="130" stroke="#F0EFED" strokeWidth="3" />
            <path d="M 400 90 A 40 40 0 0 0 400 130" strokeDasharray="2 2" />
          </g>
        )}
        {isPietro && (
          <g fill="none" stroke="rgba(26,36,25,0.35)" strokeWidth="1">
            <line x1="280" y1="260" x2="310" y2="260" stroke="#F0EFED" strokeWidth="3" />
            <path d="M 280 260 A 30 30 0 0 1 310 260" strokeDasharray="2 2" />
            <line x1="310" y1="260" x2="340" y2="260" stroke="#F0EFED" strokeWidth="3" />
            <path d="M 310 260 A 30 30 0 0 0 340 260" strokeDasharray="2 2" />
          </g>
        )}
        {!isPietro && (
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
  const [active, setActive] = useState<RoomId>('salon');
  const room = ROOMS[active];
  const idx = ORDER.indexOf(active);

  return (
    <section id="Domki" className="bg-brand-sunlight px-5 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32">
      <div className="max-w-layout mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-10 md:mb-20">
          <div>
            <SmallCap className="text-mustard-700">{copy.cottageEyebrow}</SmallCap>
            <Display size="md" className="mt-5 text-green-900">
              {copy.cottageHeadline}
              <br />
              <Italic className="text-mustard-700">{copy.cottageHeadlineItalic}</Italic>
            </Display>
          </div>
          <div className="text-[15px] md:text-[16px] leading-loose text-green-900/75">
            <p className="m-0">{copy.cottageDescription}</p>
            <div className="mt-5 flex gap-2 flex-wrap">
              {['50 m²', '4 + 2 osoby', '2 sypialnie', 'od 420 zł / noc'].map((chip) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <div
              className={`relative rounded overflow-hidden ${active === 'salon' ? 'bg-brand-sunlight' : 'bg-green-800'}`}
              style={{ aspectRatio: '4/5' }}
            >
              <Image
                key={active}
                src={room.photo}
                alt={room.name}
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
              <div className="absolute top-4 left-4 md:top-5 md:left-5 inline-flex items-center gap-2 px-3 py-1.5 bg-brand-sunlight/94 text-green-900 text-[11px] font-bold tracking-[0.16em] uppercase rounded-full">
                {room.level} · {room.size}
              </div>
            </div>
            <div
              className="mt-6 grid gap-4 items-baseline"
              style={{ gridTemplateColumns: '1fr auto' }}
            >
              <h3 className="m-0 font-display text-[28px] md:text-[36px] font-medium tracking-[-0.02em] text-green-900">
                {room.name}
              </h3>
              <span className="text-[11px] tracking-[0.16em] text-green-900/55 font-bold uppercase tabular-nums">
                {fmt.roomCounter(idx, ORDER.length)}
              </span>
            </div>
            <p className="mt-3 text-[15px] md:text-[16px] leading-loose text-green-900/80">
              {room.desc}
            </p>
            <ul className="mt-5 p-0 list-none flex flex-wrap gap-2">
              {room.tags.map((t) => (
                <li
                  key={t}
                  className="px-3 py-1.5 border border-green-900/18 rounded-full text-[12px] font-medium text-green-900/82 inline-flex items-center gap-1.5"
                >
                  <Icon name="check" size={11} color="#9a7807" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 lg:sticky lg:top-[120px]">
            <FloorPlan level="Piętro" active={active} onSelect={setActive} />
            <FloorPlan level="Parter" active={active} onSelect={setActive} />
            <div className="flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-green-900/55 font-semibold">
              <span className="w-3 h-3 bg-mustard-500 rounded-sm shrink-0" />
              {copy.clickRoomHint}
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-32 pt-10 md:pt-16 border-t border-green-900/14">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-8 md:mb-12">
            <div>
              <SmallCap className="text-mustard-700">{copy.cottageIncludedEyebrow}</SmallCap>
              <Display size="sm" className="mt-4 text-green-900">
                {copy.cottageIncludedHeadline}{' '}
                <Italic className="text-mustard-700">{copy.cottageIncludedHeadlineItalic}</Italic>
              </Display>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wider2 uppercase text-mustard-700 no-underline shrink-0"
            >
              {copy.fullSpec} <Icon name="arrow-right" size={14} color="#9a7807" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
            {EQUIPMENT.map((col) => (
              <EqCol key={col.title} title={col.title} items={col.items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CottageAnatomy;
