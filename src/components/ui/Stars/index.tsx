'use client';

import { useTranslations } from 'next-intl';
import { Icon } from '@/components/ui/Icon';

interface StarsProps {
  n?: number;
  size?: number;
}

export const Stars = ({ n = 5, size = 14 }: StarsProps) => {
  const t = useTranslations();
  return (
    <div
      role="img"
      aria-label={t('starsLabel', { n })}
      className="inline-flex gap-0.5 text-mustard-500"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size={size}
          color={i < n ? '#c79d09' : '#e2e8f0'}
        />
      ))}
    </div>
  );
};

export default Stars;
