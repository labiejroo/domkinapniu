import type { RoomId } from '@/lib/types';

export const ROOM_ASSETS: Record<RoomId, { photo: string; size: string }> = {
  salon: { photo: '/assets/domekUklad.png', size: '50 m²' },
  lazienka: { photo: '/assets/lazienka.jpg', size: '4 m²' },
  taras: { photo: '/assets/photo-6.png', size: '14 m²' },
  sypialnia1: { photo: '/assets/sypialnia1.jpeg', size: '14 m²' },
  sypialnia2: { photo: '/assets/sypialnia2.jpg', size: '10 m²' },
};

export const ORDER: RoomId[] = ['salon', 'lazienka', 'taras', 'sypialnia1', 'sypialnia2'];
