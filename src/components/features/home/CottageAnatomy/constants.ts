import type { RoomId } from '@/lib/types';

export const ROOM_ASSETS: Record<RoomId, { photo: string; size: string }> = {
  salon: { photo: '/assets/photo-salon.jpg', size: '52 m²' },
  lazienka: { photo: '/assets/lazienka.jpg', size: '4 m²' },
  taras: { photo: '/assets/grill.jpg', size: '14 m²' },
  sypialnia1: { photo: '/assets/sypialnia.jpg', size: '14 m²' },
  korytarz: { photo: '/assets/przedsionek.jpg', size: '3 m²' },
  sypialnia2: { photo: '/assets/sypialnia2.jpg', size: '10 m²' },
};

export const ORDER: RoomId[] = ['salon', 'lazienka', 'taras', 'sypialnia1', 'korytarz', 'sypialnia2'];
