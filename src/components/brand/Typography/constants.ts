import { cva } from 'class-variance-authority';

export const displayVariants = cva('font-display font-light text-balance text-brand-green-900 m-0', {
  variants: {
    size: {
      xl: 'text-[clamp(48px,7vw,112px)] leading-[0.95] tracking-[-0.03em]',
      lg: 'text-[clamp(40px,5vw,80px)] leading-[1.0] tracking-[-0.025em]',
      md: 'text-[clamp(32px,3.6vw,56px)] leading-[1.05] tracking-[-0.02em]',
      sm: 'text-[clamp(24px,2.6vw,40px)] leading-[1.1] tracking-[-0.015em]',
    },
  },
  defaultVariants: { size: 'xl' },
});

export const italicVariants = cva('font-serif italic font-normal', {
  variants: {
    tone: {
      mustard: 'text-brand-mustard-700',
      'mustard-light': 'text-brand-mustard-300',
    },
  },
  defaultVariants: { tone: 'mustard' },
});

export const smallCapVariants = cva('text-xs font-medium uppercase tracking-[0.24em]', {
  variants: {
    tone: {
      mustard: 'text-brand-mustard-700',
      'mustard-light': 'text-brand-mustard-300',
      muted: 'text-brand-sunlight/50',
    },
  },
  defaultVariants: { tone: 'mustard' },
});
