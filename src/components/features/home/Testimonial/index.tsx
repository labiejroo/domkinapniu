'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';
import { Stars } from '@/components/ui/Stars';
import { SmallCap } from '@/components/ui/Typography';
import { STATIC_REVIEWS } from './constants';

const getQuoteFontSize = (len: number): string => {
  if (len < 100) return 'clamp(22px, 3.4vw, 42px)';
  if (len < 300) return 'clamp(16px, 2vw, 26px)';
  return 'clamp(15px, 1.6vw, 19px)';
};

export const Testimonial = () => {
  const t = useTranslations();
  const [idx, setIdx] = useState(0);

  const reviews = [
    { quote: t('testimonialQuote'), author: t('testimonialAuthor'), date: t('testimonialDate') },
    ...STATIC_REVIEWS,
  ];

  const review = reviews[idx];

  return (
    <section className="bg-brand-eggshell min-h-[600px] pt-24 md:pt-32 lg:pt-20 pb-8 px-5 md:px-8 lg:px-16 flex flex-col">
      <div className="max-w-[960px] w-full mx-auto flex flex-col flex-1">
        <div className="relative inline-flex items-center justify-center w-full">
          <span
            aria-hidden="true"
            className="absolute font-serif italic text-mustard-700/25 select-none leading-none"
            style={{ fontSize: 'clamp(80px, 14vw, 160px)', top: '-0.35em' }}
          >
            "
          </span>
          <SmallCap className="text-mustard-700 text-center relative z-10">
            {t('testimonialEyebrow')}
          </SmallCap>
        </div>

        <div className="mt-8 mb-10 min-h-[100px]">
          <p
            className="font-serif text-green-900 italic font-normal leading-snug text-center"
            style={{ fontSize: getQuoteFontSize(review.quote.length) }}
          >
            {review.quote}
          </p>
        </div>

        <div className="flex flex-col items-center gap-1.5 text-center">
          <Stars n={5} size={18} />
          <div className="mt-3 text-[14px] font-semibold text-green-900">{review.author}</div>
          <div className="text-[13px] text-green-900/55">{review.date}</div>
        </div>

        <div className="mt-auto pt-2 md:mt-0 md:pt-12 flex justify-center gap-3 items-center">
          <button
            type="button"
            aria-label={t('prevReview')}
            onClick={() => setIdx((i) => (i - 1 + reviews.length) % reviews.length)}
            className="w-11 h-11 rounded-full border border-green-900/25 bg-transparent inline-flex items-center justify-center cursor-pointer text-green-900 transition-colors duration-150 hover:bg-green-900/5"
          >
            <Icon name="arrow-left" size={16} color="#1a2419" />
          </button>
          <button
            type="button"
            aria-label={t('nextReview')}
            onClick={() => setIdx((i) => (i + 1) % reviews.length)}
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
