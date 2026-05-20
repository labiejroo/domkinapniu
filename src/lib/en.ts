import type { LangBundle } from './i18n';

export const en: LangBundle = {
  copy: {
    siteName: 'Domki Na Pniu',
    siteSubtitle: 'Cottages',
    siteTagline: 'Premium holiday cottages · Jarosławiec, ul. Morska 11',
    season: 'Season 2026',
    summerSeason: 'Summer 2026',
    openBookings: 'open bookings →',

    address: 'ul. Morska 11, 76-107 Jarosławiec',
    email: 'domkinapniu@gmail.com',
    phone: '+48 506 141 730',
    phoneDisplay: '+48 506 141 730',

    heroHeadline: 'Your silence.',
    heroHeadlineItalic: 'by the water.',
    heroDescription:
      'Twelve wooden cottages in a quiet, peaceful setting, 180 m from "Dubai" beach in Jarosławiec. We welcome our guests personally. Checkout without rushing.',
    heroStats: [
      { value: '180 m', label: 'to the beach, forest path' },
      { value: '50 m²', label: 'two-storey cottage with terrace' },
      { value: '12 cottages', label: 'intimate, private grounds' },
      { value: '4.96 / 5', label: 'based on 187 reviews' },
    ],

    checkAvailability: 'Check availability',
    bookStay: 'Book your stay',
    fullGallery: 'View full gallery',
    fullSpec: 'Full specification',
    learnHistory: 'Our story',

    storyEyebrow: 'About the place',
    storyHeadline: 'Built',
    storyHeadlineItalic: 'on stumps',
    storyHeadlineEnd: 'literally.',
    storyQuote: '"We built them from larch, in the shade of the birches that were already here."',
    storyBody1:
      'Our cottages are comfortable, year-round spaces of 50 m². Upstairs are two cosy bedrooms, and downstairs a living room with a fully equipped kitchen and a wooden terrace — perfect for morning coffee and evening relaxation.\n\nOn the grounds, a pool, volleyball court and attractions for the youngest await. Evenings can be spent in the charming wooden gazebo, made for shared relaxation and long conversations.\n\nPets are very welcome — we know that holidays are always better together.',
    storyStats: [
      { n: '2019', label: 'Year opened' },
      { n: '12', label: 'Cottages' },
      { n: '50 m²', label: 'Floor area' },
    ],

    featureEyebrow: '— Interiors & surroundings',
    featureHeadline: 'Everything you need,',
    featureHeadlineItalic: 'to never leave.',
    featureItems: [
      { id: 1, title: 'Wood & linen', sub: 'Natural interiors, oak floors, linen curtains.' },
      { id: 2, title: 'Evening by the fire', sub: 'Firepit + firewood included in price.' },
      { id: 3, title: 'Pine forest', sub: 'Walk to the beach through the forest: 4 minutes.' },
      { id: 4, title: 'Private veranda', sub: 'Each cottage has its own terrace with tree views.' },
      { id: 5, title: 'AC + WiFi 300 Mb/s', sub: 'Remote work on holiday — no excuses.' },
    ],

    cottageEyebrow: '— Your cottage',
    cottageHeadline: 'All the same.',
    cottageHeadlineItalic: "That's why perfect.",
    cottageDescription:
      'Twelve identical cottages — same character, same size, same price. No "better" or "worse" category, no view surcharge. Every booking delivers the same quality — 50 m² on two levels, private terrace, space for 4 + 2 guests.',
    cottageChips: ['50 m²', '4 + 2 guests', '2 bedrooms', 'from €98 / night'],
    cottageIncludedEyebrow: '— Included in your stay',
    cottageIncludedHeadline: 'Everything waiting',
    cottageIncludedHeadlineItalic: 'for you here.',
    clickRoomHint: 'Click a room to see a photo',
    floorGround: 'Ground floor',
    floorUpper: 'Upper floor',
    stairsLabel: 'stairs',
    groundFloorMeta: '24 m² + 14 m² terrace',
    upperFloorMeta: '24 m² · 2 bedrooms',
    rooms: {
      salon: {
        name: 'Living room + kitchen',
        planLabel: 'Living Room',
        level: 'ground floor',
        desc: 'Open-plan space with a soft sofa, dining table for six and a fully equipped kitchen. A tall window framing the trees; fireplace ready for cool evenings.',
        tags: ['Wood-burning fireplace', 'Table for 6', 'Induction + dishwasher', 'Smart TV 50″'],
      },
      lazienka: {
        name: 'Bathroom',
        planLabel: 'Bathroom',
        level: 'ground floor',
        desc: 'Walk-in shower with rainfall head, heated floor and a full set of toiletries in refillable dispensers. Hairdryer and backlit mirror.',
        tags: ['Walk-in shower', 'Heated floor', 'Toiletries included'],
      },
      taras: {
        name: 'Terrace with firepit',
        planLabel: 'Terrace',
        level: 'ground floor',
        desc: 'Wooden terrace with a large table, sun loungers and a private firepit. Firewood and charcoal are included — prepared every evening.',
        tags: ['Gas BBQ', 'Firepit + wood', 'Table for 6', 'Loungers & hammock'],
      },
      sypialnia1: {
        name: 'Main bedroom',
        planLabel: 'Main Bedroom',
        level: 'upper floor',
        desc: 'King bed 160 × 200 with linen bedding and a wool blanket. Birch-plank ceiling slope, window opening to the pines and east sunrise.',
        tags: ['King bed 160 × 200', 'Linen bedding', 'Wardrobe + mirror', 'Blackout blinds'],
      },
      sypialnia2: {
        name: "Children's bedroom",
        planLabel: "Children's Room",
        level: 'upper floor',
        desc: 'Two beds 90 × 200 with an optional cot for the youngest. Warm lamplight, a shelf with books and board games for a rainy evening.',
        tags: ['2 × bed 90 × 200', 'Cot on request', 'Night lights'],
      },
    },
    equipment: [
      {
        title: 'Kitchen',
        items: ['Island kitchen', 'Induction hob', 'Dishwasher', 'Fridge-freezer', 'Coffee machine', 'Toaster + kettle', 'Tableware for 6'],
      },
      {
        title: 'Bedrooms',
        items: ['King bed 160 × 200', '2 × bed 90 × 200', 'Linen bedding', 'Towels + bathrobes', 'Blackout blinds', 'Cot on request'],
      },
      {
        title: 'Bathroom',
        items: ['Walk-in shower', 'Rainfall head', 'Hairdryer', 'Toiletries in dispensers', 'Heated floor', 'Washing machine on request'],
      },
      {
        title: 'Terrace & garden',
        items: ['Table for 6', 'Loungers & hammock', 'Gas BBQ', 'Firepit + wood', 'Evening lighting', 'Volleyball court'],
      },
      {
        title: 'Comfort',
        items: ['WiFi 300 Mb/s', 'Smart TV 50″', 'Air conditioning', 'Winter heating', 'Private parking', 'Pets welcome'],
      },
    ],

    okoliceEyebrow: '— Area & attractions',
    okoliceHeadline: 'Everything important',
    okoliceHeadlineItalic: 'within walking distance.',
    okoliceDescription:
      'Jarosławiec is a small seaside town between Ustka and Darłowo, known for its wide beach, cliff coastline, historic lighthouse and the nearby Lake Wicko. The area also boasts a waterpark, seaside promenade and numerous walking trails.',
    placeHeader: 'Place',
    distanceHeader: 'Distance',
    nearbyPlaces: [
      { place: 'Guarded beach with white sand', dist: '180 m', detail: 'forest walk, 4 min' },
      { place: 'Seaside promenade', dist: '5 min', detail: 'restaurants, ice cream, shops' },
      { place: '19th-century lighthouse', dist: '800 m', detail: '33 m height, viewing platform' },
      { place: 'Jarosławiec Waterpark', dist: '1.2 km', detail: 'pools, slides, sauna' },
      { place: 'Lake Wicko Nature Reserve', dist: '15 min', detail: 'cycling, birds, swimming' },
      { place: 'Ustka & Darłowo', dist: '40 min', detail: 'harbours, old towns, marina' },
    ],

    testimonialEyebrow: '— Guest reviews',
    prevReview: 'Previous review',
    nextReview: 'Next review',

    bookingEyebrow: '— Summer 2026 is open',
    bookingHeadline: 'Your holiday',
    bookingHeadlineItalic: 'is one click away.',
    bookingArrival: 'Arrival',
    bookingDeparture: 'Departure',
    bookingGuests: 'Guests',
    bookingPhoneNote: 'Or call us directly:',
    bookingPhoneSpeed: '· fast contact, no waiting',
    adultsLabel: 'Adults',
    childrenLabel: 'Children',

    footerTagline:
      'Wooden holiday cottages in Jarosławiec. 180 m from the beach, for 4–6 guests. We welcome you personally.',
    footerColumns: [
      {
        title: 'Site',
        links: [
          { label: 'About', href: '#O-nas' },
          { label: 'Cottages', href: '#Domki' },
          { label: 'Gallery', href: '#galeria' },
          { label: 'Area', href: '#Okolica' },
          { label: 'Pricing', href: '#cennik' },
          { label: 'FAQ', href: '#faq' },
          { label: 'Blog', href: '#blog' },
        ],
      },
      {
        title: 'Booking',
        links: [
          { label: 'Check availability', href: '#rezerwacja' },
          { label: 'Terms', href: '#regulamin' },
          { label: 'Cancellation policy', href: '#anulacja' },
          { label: 'Gift voucher', href: '#voucher' },
          { label: 'Contact', href: '#Kontakt' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: 'ul. Morska 11', href: '#' },
          { label: '76-107 Jarosławiec', href: '#' },
          { label: '+48 506 141 730', href: 'tel:+48506141730' },
          { label: 'domkinapniu@gmail.com', href: 'mailto:domkinapniu@gmail.com' },
        ],
      },
    ],
    footerLegal: ['Privacy policy', 'Cookies', 'Terms'],
    checkinLabel: 'Check-in / Check-out',
    checkinValue: '15:00 / 10:00',
    copyright: '© 2026 Domki Na Pniu',

    ratingScore: '8.7',
    ratingCount: '81 reviews',

    langPl: 'PL',
    langEn: 'ENG',
    langDe: 'DE',

    navItems: [
      { label: 'About', href: '#O-nas' },
      { label: 'Cottages', href: '#Domki' },
      { label: 'Gallery', href: '#galeria' },
      { label: 'Area', href: '#Okolica' },
      { label: 'Pricing', href: '#cennik' },
      { label: 'Contact', href: '#Kontakt' },
    ],
  },
  fmt: {
    starsLabel: (n: number) => `${n} of 5`,
    roomCounter: (idx: number, total: number) =>
      `${String(idx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`,
  },
};
