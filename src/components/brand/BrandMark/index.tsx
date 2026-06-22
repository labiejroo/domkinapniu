interface BrandMarkProps {
  circle?: boolean;
  color?: string;
  size?: number;
}

export const BrandMark = ({ circle = false, color = '#c79d09', size = 40 }: BrandMarkProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
    {circle && <circle cx="50" cy="50" r="48" fill={color} />}
    <g
      fill="none"
      stroke={circle ? '#FFFCF5' : color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 70 L22 50 L36 36 L50 50" />
      <path d="M78 70 L78 50 L64 36 L50 50" />
      <path d="M36 70 L36 56 L50 42 L64 56 L64 70" />
      <path d="M50 70 L50 28 M44 38 L50 30 L56 38" />
      <path d="M16 70 L84 70" />
    </g>
  </svg>
);

export default BrandMark;
