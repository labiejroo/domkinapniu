import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function roomCounter(idx: number, total: number): string {
  return `${String(idx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
}
