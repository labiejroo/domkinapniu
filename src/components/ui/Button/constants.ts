import { cva } from 'class-variance-authority';

export const button = cva(
  'inline-flex items-center gap-2.5 font-bold uppercase cursor-pointer transition-all duration-200 border-0 min-h-[44px]',
  {
    variants: {
      variant: {
        dark: 'bg-green-900 text-brand-sunlight rounded-full px-7 py-4 text-[13px] tracking-wider2 hover:bg-green-800 hover:-translate-y-px',
        mustard:
          'bg-mustard-500 text-green-900 rounded-full px-6 py-3.5 text-[13px] tracking-wider2 hover:bg-mustard-400 hover:-translate-y-px',
        outline:
          'bg-transparent border border-green-900/25 text-green-900 rounded-full px-4 py-2.5 text-xs tracking-wider',
        ghost: 'bg-transparent text-current text-[13px] tracking-wider2 p-0',
      },
    },
    defaultVariants: { variant: 'dark' },
  }
);
