import type { EquipmentColumn, Room, RoomId } from '@/lib/types';

export const ROOMS: Record<RoomId, Room> = {
  salon: {
    name: 'Twój domek czeka na Twój pobyt',
    level: 'domek',
    size: '50 m²',
    photo: '/assets/domekUklad.png',
    desc: 'Otwarta przestrzeń z wygodną kanapą, jadalnią i w pełni wyposażoną kuchnią. Wnętrza wykończone z wysokiej jakości materiałów zapewniają komfortowy wypoczynek, a wygodne materace gwarantują dobry sen. Na zewnątrz czeka prywatny taras z grillem, basen oraz strefa aktywnego wypoczynku dla całej rodziny.',
    tags: ['Wysokiej jakości materace', 'Ekspress do kawy', 'Indukcja + zmywarka', 'Smart TV 50″'],
  },
  lazienka: {
    name: 'Łazienka',
    level: 'parter',
    size: '4 m²',
    photo: '/assets/lazienka.jpg',
    desc: 'Prysznic walk-in z deszczownią, ogrzewana podłoga i komplet kosmetyków w wielorazowych dozownikach. Suszarka i lustro z podświetleniem.',
    tags: ['Prysznic walk-in', 'Ogrzewanie podłogowe', 'Kosmetyki w komplecie'],
  },
  taras: {
    name: 'Taras z paleniskiem',
    level: 'parter',
    size: '14 m²',
    photo: '/assets/photo-6.png',
    desc: 'Drewniany taras z dużym stołem, leżakami i prywatnym paleniskiem. Drewno opałowe i węgiel do grilla są w cenie pobytu — gotowe codziennie wieczorem.',
    tags: ['Grill gazowy', 'Palenisko + drewno', 'Stół na 6 osób', 'Leżaki i hamak'],
  },
  sypialnia1: {
    name: 'Sypialnia główna',
    level: 'piętro',
    size: '14 m²',
    photo: '/assets/sypialnia1.jpeg',
    desc: 'Łóżko 160 × 200 z lnianą pościelą i wełnianym kocem. Skos z brzozowych desek, okno otwarte na sosny i prosto na wschód słońca.',
    tags: ['Łóżko 160 × 200', 'Lniana pościel', 'Szafa + lustro', 'Zaciemniające rolety'],
  },
  sypialnia2: {
    name: 'Sypialnia dziecięca',
    level: 'piętro',
    size: '10 m²',
    photo: '/assets/sypialnia2.jpg',
    desc: 'Dwa łóżka 90 × 200 z opcją dostawki dla najmłodszych. Ciepłe światło lampek, regał z książkami i grami planszowymi na deszczowy wieczór.',
    tags: ['2 × łóżko 90 × 200', 'Łóżeczko na życzenie', 'Lampki nocne'],
  },
};

export const ORDER: RoomId[] = ['salon', 'lazienka', 'taras', 'sypialnia1', 'sypialnia2'];

export const EQUIPMENT: EquipmentColumn[] = [
  {
    title: 'Kuchnia',
    items: [
      'Aneks z wyspą',
      'Płyta indukcyjna',
      'Zmywarka',
      'Lodówka z zamrażalnikiem',
      'Kapsułkowy ekspres do kawy',
      'Czajnik',
      'Zastawa dla 6 osób',
    ],
  },
  {
    title: 'Sypialnie',
    items: [
      'Łóżko 160 × 200',
      '2 × łóżko 90 × 200',
      'Bawełniana pościel',
      'Ręczniki',
      'Zaciemniające rolety',
      'Dostawka na życzenie',
    ],
  },
  {
    title: 'Łazienka',
    items: [
      'Prysznic walk-in',
      'Deszczownia',
      'Suszarka do włosów',
      'Kosmetyki w dozownikach',
      'Pralka na życzenie',
    ],
  },
  {
    title: 'Taras i ogród',
    items: [
      'Meble tarasowe',
      'Leżaki i hamak',
      'Prywatny grill',
      'Oświetlenie wieczorne',
      'Strefa basenowa',
      'Boisko do siatkówki',
    ],
  },
  {
    title: 'Komfort',
    items: [
      'Parking przy posesji',
      'Smart TV 50″',
      'Jonizacja domków',
      'Żelazko i deska do prasowania na życzenie',
      'Zwierzęta mile widziane',
    ],
  },
];
