export type DisplaySize = 'xl' | 'lg' | 'md' | 'sm';

export interface RoomCopy {
  name: string;
  planLabel: string;
  level: string;
  desc: string;
  tags: string[];
}

export interface StoryStat {
  n: string;
  label: string;
}

export interface FeatureItemText {
  id: number;
  title: string;
  sub: string;
}

export type IconName =
  | 'arrow-right'
  | 'arrow-left'
  | 'arrow-up-right'
  | 'menu'
  | 'close'
  | 'calendar'
  | 'users'
  | 'bed'
  | 'wifi'
  | 'fire'
  | 'tree'
  | 'pin'
  | 'star'
  | 'check'
  | 'mail'
  | 'phone'
  | 'sun'
  | 'heart'
  | 'brand-mark';

export type RoomId = 'salon' | 'lazienka' | 'taras' | 'sypialnia1' | 'sypialnia2';

export interface Room {
  name: string;
  level: string;
  size: string;
  photo: string;
  desc: string;
  tags: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NearbyPlace {
  place: string;
  dist: string;
  detail: string;
}

export interface TestimonialReview {
  quote: string;
  author: string;
  date: string;
  rating: number;
}

export interface FeatureItem {
  id: number;
  title: string;
  sub: string;
  photo: string;
  colSpan: string;
  rowSpan: string;
  tall?: boolean;
}

export interface EquipmentColumn {
  title: string;
  items: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
