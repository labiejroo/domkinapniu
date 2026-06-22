type BrandIconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'calendar'
  | 'check'
  | 'close'
  | 'fire'
  | 'heart'
  | 'mail'
  | 'menu'
  | 'phone'
  | 'pin'
  | 'plus'
  | 'star'
  | 'tree'
  | 'users'
  | 'wave'
  | 'wifi';

interface IconProps {
  className?: string;
  color?: string;
  name: BrandIconName;
  size?: number;
  stroke?: number;
}

export const Icon = ({ className, color = 'currentColor', name, size = 20, stroke = 1.6 }: IconProps) => {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24' as const,
    fill: 'none' as const,
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
    className,
  };

  switch (name) {
    case 'arrow-right':
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case 'arrow-left':
      return <svg {...common}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>;
    case 'arrow-up-right':
      return <svg {...common}><path d="M7 17 17 7M8 7h9v9" /></svg>;
    case 'menu':
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case 'close':
      return <svg {...common}><path d="M6 6l12 12M18 6 6 18" /></svg>;
    case 'calendar':
      return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>;
    case 'users':
      return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case 'pin':
      return <svg {...common}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    case 'star':
      return <svg {...common} fill={color}><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
    case 'check':
      return <svg {...common}><path d="M20 6 9 17l-5-5" /></svg>;
    case 'plus':
      return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>;
    case 'mail':
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case 'phone':
      return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
    case 'heart':
      return <svg {...common}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
    case 'wifi':
      return <svg {...common}><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" /></svg>;
    case 'fire':
      return <svg {...common}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.66 0 3-1.34 3-3 0-1.93-1.5-3.5-1.5-5.5a3.5 3.5 0 0 0-7 0c0 2 2 3.5 2 5.5a2.5 2.5 0 0 0 1 1.5" /><path d="M12 22c5 0 9-3.58 9-8 0-3.5-2-6-4-8 0 3-2 5-5 5s-5-2-5-5c-2 2-4 4.5-4 8 0 4.42 4 8 9 8z" /></svg>;
    case 'tree':
      return <svg {...common}><path d="M12 2 6 9h3l-4 5h3l-3 4h14l-3-4h3l-4-5h3z" /><path d="M12 18v4" /></svg>;
    case 'wave':
      return (
        <svg {...common}>
          <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
          <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
          <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
