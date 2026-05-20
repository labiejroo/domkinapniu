import { MARK_PATH } from './constants';

interface BrandMarkProps {
  color?: string;
  size?: number;
}

export const BrandMark = ({ color = '#C79D09', size = 40 }: BrandMarkProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 135 135"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path fillRule="evenodd" clipRule="evenodd" d={MARK_PATH} fill={color} />
  </svg>
);

export default BrandMark;
