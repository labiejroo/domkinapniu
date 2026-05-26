import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { displayVariants, italicVariants, smallCapVariants } from './constants';

type DisplaySize = VariantProps<typeof displayVariants>['size'];
type ItalicTone = VariantProps<typeof italicVariants>['tone'];
type SmallCapTone = VariantProps<typeof smallCapVariants>['tone'];

interface DisplayProps {
  children: React.ReactNode;
  className?: string;
  size?: DisplaySize;
}

export const Display = ({ children, className, size }: DisplayProps) => (
  <h2 className={cn(displayVariants({ size }), className)}>{children}</h2>
);

interface ItalicProps {
  children: React.ReactNode;
  className?: string;
  tone?: ItalicTone;
}

export const Italic = ({ children, className, tone }: ItalicProps) => (
  <em className={cn(italicVariants({ tone }), className)}>{children}</em>
);

interface SmallCapProps {
  children: React.ReactNode;
  className?: string;
  tone?: SmallCapTone;
}

export const SmallCap = ({ children, className, tone }: SmallCapProps) => (
  <span className={cn(smallCapVariants({ tone }), className)}>{children}</span>
);

export default Display;
