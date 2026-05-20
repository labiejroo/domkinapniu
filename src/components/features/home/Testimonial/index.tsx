'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { Stars } from '@/components/ui/Stars';
import { SmallCap } from '@/components/ui/Typography';
import { copy } from '@/lib/eng';
import { REVIEWS } from './constants';

const getQuoteStyle = (text: string): { fontSize: string; maxWidth: string } => {
  const len = text.length;
  if (len < 100) return { fontSize: 'clamp(22px, 3.4vw, 42px)', maxWidth: '20ch' };
  if (len < 300) return { fontSize: 'clamp(16px, 2vw, 26px)', maxWidth: '17ch' };
  return { fontSize: 'clamp(15px, 1.6vw, 19px)', maxWidth: '100%' };
};

export const Testimonial = () => {
  const [idx, setIdx] = useState(0);
  const review = REVIEWS[idx];

  return (
    <section
      className={`bg-brand-eggshell py-24 md:py-32 lg:py-40 relative ${review.quote.length >= 300 ? 'px-2 md:px-4 lg:px-8' : 'px-5 md:px-8 lg:px-16'}`}
    >
      <div className="max-w-[960px] mx-auto text-center relative">
        <span
          className="absolute font-serif italic leading-none opacity-30 md:opacity-50 text-brand-brown pointer-events-none hidden sm:block"
          style={{
            top: -60,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 'clamp(100px, 14vw, 200px)',
          }}
          aria-hidden
        >
          &ldquo;
        </span>

        <SmallCap className="text-mustard-700">{copy.testimonialEyebrow}</SmallCap>

        <div className="my-8 flex items-center justify-center" style={{ height: '170px' }}>
          <p
            className="font-serif text-green-900 italic font-normal mx-auto leading-snug"
            style={{
              fontSize: getQuoteStyle(review.quote).fontSize,
              maxWidth: getQuoteStyle(review.quote).maxWidth,
            }}
          >
            {review.quote}
          </p>
        </div>

        <div className="flex flex-col gap-1.5 items-center">
          <Stars n={5} size={18} />
          <div className="mt-3 text-[14px] font-semibold text-green-900">{review.author}</div>
          <div className="text-[13px] text-green-900/55">{review.date}</div>
        </div>

        <div className="mt-10 md:mt-16 inline-flex gap-3 items-center">
          <button
            type="button"
            aria-label={copy.prevReview}
            onClick={() => setIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)}
            className="w-11 h-11 rounded-full border border-green-900/25 bg-transparent inline-flex items-center justify-center cursor-pointer text-green-900 transition-colors duration-150 hover:bg-green-900/5"
          >
            <Icon name="arrow-left" size={16} color="#1a2419" />
          </button>
          <button
            type="button"
            aria-label={copy.nextReview}
            onClick={() => setIdx((i) => (i + 1) % REVIEWS.length)}
            className="w-11 h-11 rounded-full border border-green-900/25 bg-transparent inline-flex items-center justify-center cursor-pointer text-green-900 transition-colors duration-150 hover:bg-green-900/5"
          >
            <Icon name="arrow-right" size={16} color="#1a2419" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
