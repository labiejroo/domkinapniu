'use client';

import { useState } from 'react';

interface Step {
  body: string;
  meta: string;
  n: string;
  title: string;
}

interface StepCardsProps {
  steps: Step[];
}

export const StepCards = ({ steps }: StepCardsProps) => (
  <div className="flex flex-col gap-6 tablet:grid tablet:grid-cols-2">
    {steps.map((c) => (
      <StepCard key={c.n} c={c} />
    ))}
  </div>
);

export default StepCards;

function StepCard({ c }: { c: Step }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="bg-brand-sunlight border border-brand-green-900/15 pt-10 pb-9 flex flex-col gap-4 transition-all"
      style={{
        background: hover ? 'color-mix(in oklab, #c79d09 4%, #FFFCF5)' : '#FFFCF5',
        paddingLeft: hover ? '40px' : '32px',
        paddingRight: '32px',
      }}
    >
      <div className="text-[11px] tracking-[0.24em] uppercase font-bold text-brand-mustard-700 tabular-nums">
        {c.n}
      </div>
      <h3 className="m-0 font-display text-[28px] font-medium tracking-[-0.015em] text-brand-green-900 leading-[1.15]">
        {c.title}
      </h3>
      <p className="m-0 text-[15px] leading-[1.65] text-brand-green-900/80">{c.body}</p>
      <div className="mt-auto pt-5 border-t border-brand-green-900/15 font-serif italic text-sm text-brand-green-900/65">
        {c.meta}
      </div>
    </div>
  );
}
