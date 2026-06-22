import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { DisplaySize } from '@/lib/types';
import { displayVariants } from './constants';

type DisplayVariantProps = VariantProps<typeof displayVariants>;

interface DisplayProps extends DisplayVariantProps {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
}

export const Display = ({ as: Tag = 'h2', children, className, size }: DisplayProps) => (
  <Tag className={cn(displayVariants({ size }), className)}>{children}</Tag>
);

interface ItalicProps {
  children: React.ReactNode;
  className?: string;
}

export const Italic = ({ children, className }: ItalicProps) => (
  <em
    className={cn(
      'font-serif not-italic font-normal text-mustard-300',
      'italic',
      className
    )}
    style={{ fontStyle: 'italic' }}
  >
    {children}
  </em>
);

interface SmallCapProps {
  children: React.ReactNode;
  className?: string;
}

export const SmallCap = ({ children, className }: SmallCapProps) => (
  <span
    className={cn(
      'text-[12px] tracking-[0.24em] uppercase font-medium text-mustard-700',
      className
    )}
  >
    {children}
  </span>
);

export default Display;
