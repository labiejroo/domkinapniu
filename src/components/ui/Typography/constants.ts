import { cva } from 'class-variance-authority';
import type { DisplaySize } from '@/lib/types';

export const displayVariants = cva('font-display text-balance font-light text-green-900 m-0', {
  variants: {
    size: {
      xl: 'text-[clamp(48px,7vw,112px)] leading-[0.95] tracking-[-0.03em]',
      lg: 'text-[clamp(40px,5vw,80px)] leading-none tracking-[-0.025em]',
      md: 'text-[clamp(32px,3.6vw,56px)] leading-[1.05] tracking-[-0.02em]',
      sm: 'text-[clamp(24px,2.6vw,40px)] leading-[1.1] tracking-[-0.015em]',
    } satisfies Record<DisplaySize, string>,
  },
  defaultVariants: { size: 'xl' },
});
