import type { LangBundle } from './i18n';

export const pl: LangBundle = {
  copy: {
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
    heroStats: [
      { value: '180 m', label: 'do plaży oraz promenady' },
      { value: '50 m²', label: 'piętrowego domku z tarasem' },
      { value: '12 domków', label: 'kameralna, prywatna posesja' },
      { value: '8,7', label: 'na podstawie 81 opinii Booking' },
    ],

    checkAvailability: 'Sprawdź dostępność',
    bookStay: 'Rezerwuj pobyt',
    fullGallery: 'Zobacz całą galerię',
    fullSpec: 'Pełna specyfikacja',
    learnHistory: 'Poznaj naszą historię',

    storyEyebrow: 'O miejscu',
    storyHeadline: 'Postawione',
    storyHeadlineItalic: 'na pniu',
    storyHeadlineEnd: 'dosłownie.',
    storyQuote: '„Zbudowaliśmy je z modrzewia, w cieniu brzóz, które tu już były."',
    storyBody1:
      'Nasze domki to komfortowe, całoroczne przestrzenie o powierzchni 50 m². Na piętrze znajdują się dwie przytulne sypialnie, a na parterze salon z w pełni wyposażonym aneksem kuchennym oraz drewnianym tarasem, idealnym do porannej kawy i wieczornego odpoczynku.\n\nNa terenie obiektu czeka na Was basen, boisko do siatkówki oraz atrakcje dla najmłodszych. Wieczory można spędzać w klimatycznej drewnianej altanie, stworzonej do wspólnego relaksu i długich rozmów.\n\nZwierzęta są u nas mile widziane — wiemy, że wakacje najlepiej smakują w komplecie.',
    storyStats: [
      { n: '2022', label: 'Rok otwarcia' },
      { n: '12', label: 'Domków' },
      { n: '50 m²', label: 'Powierzchni' },
    ],

    featureEyebrow: '— Wnętrza i okolica',
    featureHeadline: 'Wszystko, czego potrzeba,',
    featureHeadlineItalic: 'żeby już nigdzie nie jechać.',
    featureItems: [
      { id: 1, title: 'Drewno i natura', sub: 'Naturalne wnętrza, drewno i materiały najwyższej jakości.' },
      { id: 2, title: 'Prywatny grill i taras', sub: 'Idealne miejsce na spokojne wieczory.' },
      { id: 3, title: 'Strefa basenowa', sub: 'Komfortowe miejsce do odpoczynku w słoneczne, letnie dni.' },
      { id: 4, title: 'Drewniana altana', sub: 'Kameralna przestrzeń na poranną kawę i wieczorny relaks.' },
      { id: 5, title: 'Boisko i atrakcje', sub: 'Strefa aktywności dla całej rodziny.' },
    ],

    cottageEyebrow: '— Twój domek',
    cottageHeadline: 'Jedna koncepcja.',
    cottageHeadlineItalic: 'Dwanaście wyjątkowych domków.',
    cottageDescription:
      'Dwanaście domków utrzymanych w jednym standardzie, o tej samej powierzchni i cenie. Bez podziału na „lepsze" i „gorsze" oraz bez dopłat za widok. Każdy z nich oferuje tę samą jakość wypoczynku — 50 m² na dwóch poziomach, prywatny taras oraz komfortową przestrzeń dla 4 + 2 osób.',
    cottageChips: ['50 m²', '4 + 2 osoby', '2 sypialnie', 'od 420 zł / noc'],
    cottageIncludedEyebrow: '— W cenie pobytu',
    cottageIncludedHeadline: 'Wszystko, co czeka',
    cottageIncludedHeadlineItalic: 'na miejscu.',
    clickRoomHint: 'Kliknij pomieszczenie, aby zobaczyć zdjęcie',
    floorGround: 'Parter',
    floorUpper: 'Piętro',
    stairsLabel: 'schody',
    groundFloorMeta: '24 m² + 14 m² taras',
    upperFloorMeta: '24 m² · 2 sypialnie',
    rooms: {
      salon: {
        name: 'Salon + aneks kuchenny',
        planLabel: 'Salon + Kuchnia',
        level: 'parter',
        desc: 'Otwarta przestrzeń z miękką kanapą, jadalnią dla sześciu osób i w pełni wyposażoną kuchnią. Wysokie okno na drzewa, kominek gotowy na chłodne wieczory.',
        tags: ['Wysokiej jakości materace', 'Ekspress do kawy', 'Indukcja + zmywarka', 'Smart TV 50″'],
      },
      lazienka: {
        name: 'Łazienka',
        planLabel: 'Łazienka',
        level: 'parter',
        desc: 'Prysznic walk-in z deszczownią, ogrzewana podłoga i komplet kosmetyków w wielorazowych dozownikach. Suszarka i lustro z podświetleniem.',
        tags: ['Prysznic walk-in', 'Ogrzewanie podłogowe', 'Kosmetyki w komplecie'],
      },
      taras: {
        name: 'Taras z paleniskiem',
        planLabel: 'Taras',
        level: 'parter',
        desc: 'Drewniany taras z dużym stołem, leżakami i prywatnym paleniskiem. Drewno opałowe i węgiel do grilla są w cenie pobytu — gotowe codziennie wieczorem.',
        tags: ['Grill gazowy', 'Palenisko + drewno', 'Stół na 6 osób', 'Leżaki i hamak'],
      },
      sypialnia1: {
        name: 'Sypialnia główna',
        planLabel: 'Sypialnia główna',
        level: 'piętro',
        desc: 'Łóżko 160 × 200 z lnianą pościelą i wełnianym kocem. Skos z brzozowych desek, okno otwarte na sosny i prosto na wschód słońca.',
        tags: ['Łóżko 160 × 200', 'Lniana pościel', 'Szafa + lustro', 'Zaciemniające rolety'],
      },
      sypialnia2: {
        name: 'Sypialnia dziecięca',
        planLabel: 'Sypialnia dziecięca',
        level: 'piętro',
        desc: 'Dwa łóżka 90 × 200 z opcją dostawki dla najmłodszych. Ciepłe światło lampek, regał z książkami i grami planszowymi na deszczowy wieczór.',
        tags: ['2 × łóżko 90 × 200', 'Łóżeczko na życzenie', 'Lampki nocne'],
      },
    },
    equipment: [
      {
        title: 'Kuchnia',
        items: ['Aneks z wyspą', 'Płyta indukcyjna', 'Zmywarka', 'Lodówka z zamrażalnikiem', 'Kapsułkowy ekspres do kawy', 'Czajnik', 'Zastawa dla 6 osób'],
      },
      {
        title: 'Sypialnie',
        items: ['Łóżko 160 × 200', '2 × łóżko 90 × 200', 'Bawełniana pościel', 'Ręczniki + szlafroki', 'Zaciemniające rolety', 'Dostawka na życzenie'],
      },
      {
        title: 'Łazienka',
        items: ['Prysznic walk-in', 'Deszczownia', 'Suszarka do włosów', 'Kosmetyki w dozownikach', 'Pralka na życzenie'],
      },
      {
        title: 'Taras i ogród',
        items: ['Meble tarasowe', 'Leżaki i hamak', 'Prywatny grill', 'Oświetlenie wieczorne', 'Strefa basenowa', 'Boisko do siatkówki'],
      },
      {
        title: 'Komfort',
        items: ['Parking przy posesji', 'Smart TV 50″', 'Jonizacja domków', 'Żelazko i deska do prasowania na życzenie', 'Zwierzęta mile widziane'],
      },
    ],

    okoliceEyebrow: '— Okolica i atrakcje',
    okoliceHeadline: 'Wszystko ważne',
    okoliceHeadlineItalic: 'w zasięgu spaceru.',
    okoliceDescription:
      'Jarosławiec to kameralna nadmorska miejscowość między Ustką a Darłowem, znana z szerokiej plaży, klifowego wybrzeża, latarni morskiej oraz pobliskiego jeziora Wicko. W okolicy znajduje się również Aquapark, promenada nadmorska i liczne trasy spacerowe.',
    placeHeader: 'Miejsce',
    distanceHeader: 'Dystans',
    nearbyPlaces: [
      { place: 'Plaża strzeżona z białym piaskiem', dist: '180 m', detail: 'spacerem w 8 minut' },
      { place: 'Promenada nadmorska', dist: '5 min', detail: 'restauracje, lody, sklepy' },
      { place: 'Latarnia morska z XIX w.', dist: '800 m', detail: '33 m wysokości, taras widokowy' },
      { place: 'Aquapark Jarosławiec', dist: '1,2 km', detail: 'baseny, zjeżdżalnie, sauna' },
      { place: 'Rezerwat Jezioro Wicko', dist: '15 min', detail: 'rowery, ptaki, kąpielisko' },
      { place: 'Ustka i Darłowo', dist: '40 min', detail: 'porty, stare miasta, marina' },
    ],

    testimonialEyebrow: '— Słowa gości',
    prevReview: 'Poprzednia opinia',
    nextReview: 'Następna opinia',

    bookingEyebrow: '— Lato 2026 jest otwarte',
    bookingHeadline: 'Twoje wakacje',
    bookingHeadlineItalic: 'są jeden klik stąd.',
    bookingArrival: 'Przyjazd',
    bookingDeparture: 'Wyjazd',
    bookingGuests: 'Goście',
    bookingPhoneNote: 'Lub zadzwoń bezpośrednio:',
    bookingPhoneSpeed: '· szybki kontakt bez czekania',
    adultsLabel: 'Dorośli',
    childrenLabel: 'Dzieci',

    footerTagline:
      'Drewniane domki letniskowe w Jarosławcu. 180 m od plaży, dla 4–6 osób. Witamy gości osobiście.',
    footerColumns: [
      {
        title: 'Strona',
        links: [
          { label: 'O nas', href: '#O-nas' },
          { label: 'Domki', href: '#Domki' },
          { label: 'Galeria', href: '#galeria' },
          { label: 'Okolica', href: '#Okolica' },
          { label: 'Cennik', href: '#cennik' },
          { label: 'FAQ', href: '#faq' },
          { label: 'Blog', href: '#blog' },
        ],
      },
      {
        title: 'Rezerwacja',
        links: [
          { label: 'Sprawdź dostępność', href: '#rezerwacja' },
          { label: 'Regulamin', href: '#regulamin' },
          { label: 'Polityka anulacji', href: '#anulacja' },
          { label: 'Voucher prezentowy', href: '#voucher' },
          { label: 'Kontakt', href: '#Kontakt' },
        ],
      },
      {
        title: 'Kontakt',
        links: [
          { label: 'ul. Morska 11', href: '#' },
          { label: '76-107 Jarosławiec', href: '#' },
          { label: '+48 506 141 730', href: 'tel:+48506141730' },
          { label: 'domkinapniu@gmail.com', href: 'mailto:domkinapniu@gmail.com' },
        ],
      },
    ],
    footerLegal: ['Polityka prywatności', 'Cookies', 'Regulamin'],
    checkinLabel: 'Zameldowanie / Wyjazd',
    checkinValue: '15:00 / 10:00',
    copyright: '© 2026 Domki Na Pniu',

    ratingScore: '8,7',
    ratingCount: '81 opinii',

    langPl: 'PL',
    langEn: 'ENG',
    langDe: 'DEU',

    navItems: [
      { label: 'O nas', href: '#O-nas' },
      { label: 'Domki', href: '#Domki' },
      { label: 'Galeria', href: '#galeria' },
      { label: 'Okolica', href: '#Okolica' },
      { label: 'Cennik', href: '#cennik' },
      { label: 'Kontakt', href: '#Kontakt' },
    ],
  },
  fmt: {
    starsLabel: (n: number) => `${n} z 5`,
    roomCounter: (idx: number, total: number) =>
      `${String(idx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`,
    guestsLabel: (adults: number, children: number) =>
      `${adults} ${adults === 1 ? 'dorosły' : 'dorosłych'}` +
      (children > 0 ? `, ${children} ${children === 1 ? 'dziecko' : 'dzieci'}` : ''),
  },
};
