import type { RoomId, NavItem, StatItem, NearbyPlace, EquipmentColumn, FooterColumn } from './types';

export type Lang = 'pl' | 'en' | 'de';

export interface StoryStat {
  n: string;
  label: string;
}

export interface FeatureItemText {
  id: number;
  title: string;
  sub: string;
}

export interface RoomCopy {
  name: string;
  planLabel: string;
  level: string;
  desc: string;
  tags: string[];
}

export interface Copy {
  siteName: string;
  siteSubtitle: string;
  siteTagline: string;
  season: string;
  summerSeason: string;
  openBookings: string;

  address: string;
  email: string;
  phone: string;
  phoneDisplay: string;

  navItems: NavItem[];

  heroHeadline: string;
  heroHeadlineItalic: string;
  heroDescription: string;
  heroStats: StatItem[];

  checkAvailability: string;
  bookStay: string;
  fullGallery: string;
  fullSpec: string;
  learnHistory: string;

  storyEyebrow: string;
  storyHeadline: string;
  storyHeadlineItalic: string;
  storyHeadlineEnd: string;
  storyQuote: string;
  storyBody1: string;
  storyStats: StoryStat[];

  featureEyebrow: string;
  featureHeadline: string;
  featureHeadlineItalic: string;
  featureItems: FeatureItemText[];

  cottageEyebrow: string;
  cottageHeadline: string;
  cottageHeadlineItalic: string;
  cottageDescription: string;
  cottageChips: string[];
  cottageIncludedEyebrow: string;
  cottageIncludedHeadline: string;
  cottageIncludedHeadlineItalic: string;
  clickRoomHint: string;
  floorGround: string;
  floorUpper: string;
  groundFloorMeta: string;
  upperFloorMeta: string;
  stairsLabel: string;
  rooms: Record<RoomId, RoomCopy>;
  equipment: EquipmentColumn[];

  okoliceEyebrow: string;
  okoliceHeadline: string;
  okoliceHeadlineItalic: string;
  okoliceDescription: string;
  placeHeader: string;
  distanceHeader: string;
  nearbyPlaces: NearbyPlace[];

  testimonialEyebrow: string;
  prevReview: string;
  nextReview: string;

  bookingEyebrow: string;
  bookingHeadline: string;
  bookingHeadlineItalic: string;
  bookingArrival: string;
  bookingDeparture: string;
  bookingGuests: string;
  bookingPhoneNote: string;
  bookingPhoneSpeed: string;
  adultsLabel: string;
  childrenLabel: string;

  footerTagline: string;
  footerColumns: FooterColumn[];
  footerLegal: string[];
  checkinLabel: string;
  checkinValue: string;
  copyright: string;

  ratingScore: string;
  ratingCount: string;

  langPl: string;
  langEn: string;
  langDe: string;
}

export interface Fmt {
  starsLabel: (n: number) => string;
  roomCounter: (idx: number, total: number) => string;
  guestsLabel: (adults: number, children: number) => string;
}

export interface LangBundle {
  copy: Copy;
  fmt: Fmt;
}
