import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { button } from './constants';

type ButtonVariant = NonNullable<VariantProps<typeof button>['variant']>;

interface ButtonProps extends VariantProps<typeof button> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
}

export const Button = ({ children, className, onClick, type = 'button', variant }: ButtonProps) => (
  <button type={type} onClick={onClick} className={cn(button({ variant }), className)}>
    {children}
  </button>
);

export default Button;
