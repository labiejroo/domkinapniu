export const copy = {
  siteName: 'Domki Na Pniu',
  siteSubtitle: 'Domki',
  siteTagline: 'Premium domki letniskowe · Jarosławiec, ul. Morska 11',
  season: 'Sezon 2026',
  summerSeason: 'Lato 2026',
  openBookings: 'otwarte rezerwacje →',

  address: 'ul. Morska 11, 76-107 Jarosławiec',
  email: 'domkinapniu@gmail.com',
  phone: '+48 506 141 730',
  phoneDisplay: '+48 506 141 730',

  heroHeadline: 'Twoja cisza.',
  heroHeadlineItalic: 'nad wodą.',
  heroDescription:
    'Dwanaście drewnianych domków w cichej, spokojnej okolicy, 180 m od plaży „Dubaj" w Jarosławcu.\n\nWitamy gości osobiście. Wymeldowanie bez pośpiechu.',

  checkAvailability: 'Sprawdź dostępność',
  bookStay: 'Rezerwuj pobyt',
  fullGallery: 'Zobacz całą galerię',
  fullSpec: 'Pełna specyfikacja',
  learnHistory: 'Poznaj naszą historię',

  storyEyebrow: '— O miejscu',
  storyHeadline: 'Postawione',
  storyHeadlineItalic: 'na pniu',
  storyHeadlineEnd: 'dosłownie.',
  storyQuote: '„Zbudowaliśmy je z modrzewia, w cieniu brzóz, które tu już były."',
  storyBody1:
    'Nasze domki to komfortowe, całoroczne przestrzenie o powierzchni 50 m². Na piętrze znajdują się dwie przytulne sypialnie, a na parterze salon z w pełni wyposażonym aneksem kuchennym oraz drewnianym tarasem, idealnym do porannej kawy i wieczornego odpoczynku.\n\nNa terenie obiektu czeka na Was basen, boisko do siatkówki oraz atrakcje dla najmłodszych. Wieczory można spędzać w klimatycznej drewnianej altanie, stworzonej do wspólnego relaksu i długich rozmów.\n\nZwierzęta są u nas mile widziane — wiemy, że wakacje najlepiej smakują w komplecie.',
  storyBody2:
    'Od 2022 roku prowadzimy to miejsce z pasją i zaangażowaniem, tworząc przestrzeń idealną dla rodzin, par oraz kilkuosobowych grup, które szukają prawdziwego wypoczynku nad morzem — w naturalnej atmosferze, bez pośpiechu i sztucznego klimatu.',

  featureEyebrow: '— Wnętrza i okolica',
  featureHeadline: 'Wszystko, czego potrzeba,',
  featureHeadlineItalic: 'żeby już nigdzie nie jechać.',

  cottageEyebrow: '— Twój domek',
  cottageHeadline: 'Jedna koncepcja.',
  cottageHeadlineItalic: 'Dwanaście wyjątkowych domków.',
  cottageDescription:
    'Dwanaście domków utrzymanych w jednym standardzie, o tej samej powierzchni i cenie. Bez podziału na „lepsze" i „gorsze" oraz bez dopłat za widok. Każdy z nich oferuje tę samą jakość wypoczynku — 50 m² na dwóch poziomach, prywatny taras oraz komfortową przestrzeń dla 4 + 2 osób.',
  cottageIncludedEyebrow: '— W cenie pobytu',
  cottageIncludedHeadline: 'Wszystko, co czeka',
  cottageIncludedHeadlineItalic: 'na miejscu.',
  clickRoomHint: 'Kliknij pomieszczenie, aby zobaczyć zdjęcie',

  okoliceEyebrow: '— Okolica i atrakcje',
  okoliceHeadline: 'Wszystko ważne',
  okoliceHeadlineItalic: 'w zasięgu spaceru.',
  okoliceDescription:
    'Jarosławiec to kameralna nadmorska miejscowość między Ustką a Darłowem, znana z szerokiej plaży, klifowego wybrzeża, latarni morskiej oraz pobliskiego jeziora Wicko. W okolicy znajduje się również Aquapark, promenada nadmorska i liczne trasy spacerowe.',
  placeHeader: 'Miejsce',
  distanceHeader: 'Dystans',

  testimonialEyebrow: '— Słowa gości',
  testimonialQuote:
    'Super miejsce dla rodzin z dziećmi, sympatyczna obsługa. Miejsce godne polecenia.',
  testimonialAuthor: 'Joanna',
  testimonialDate: '19 sierpnia 2025',
  testimonialCounter: '01 / 187',
  prevReview: 'Poprzednia opinia',
  nextReview: 'Następna opinia',

  bookingEyebrow: '— Lato 2026 jest otwarte',
  bookingHeadline: 'Twoje wakacje',
  bookingHeadlineItalic: 'są jeden klik stąd.',
  bookingArrival: 'Przyjazd',
  bookingArrivalValue: 'sob, 12 lipca',
  bookingDeparture: 'Wyjazd',
  bookingDepartureValue: 'sob, 19 lipca',
  bookingGuests: 'Goście',
  bookingGuestsValue: '2 dorosłych, 2 dzieci',
  bookingPhoneNote: 'Lub zadzwoń bezpośrednio:',
  bookingPhoneSpeed: '· szybki kontakt bez czekania',

  footerTagline: 'Drewniane domki letniskowe w Jarosławcu. 180 m od plaży, dla 4–6 osób. Witamy gości osobiście.',
  checkinLabel: 'Zameldowanie / Wyjazd',
  checkinValue: '15:00 / 10:00',
  copyright: '© 2026 Domki Na Pniu',

  ratingScore: '8,7',
  ratingCount: '81 opinii',
  langPl: 'PL',
  langEn: 'ENG',
} as const;

export const fmt = {
  starsLabel: (n: number) => `${n} z 5`,
  roomCounter: (idx: number, total: number) =>
    `${String(idx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`,
};
