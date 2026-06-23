import type { RoomId } from '@/lib/types';

export const ROOM_ASSETS: Record<RoomId, { photo: string; size: string }> = {
  salon: { photo: '/assets/living-room.jpg', size: '52 m²' },
  lazienka: { photo: '/assets/bathroom.jpg', size: '4 m²' },
  taras: { photo: '/assets/tarrace2.jpeg', size: '14 m²' },
  sypialnia1: { photo: '/assets/masterbedroom2.jpeg', size: '14 m²' },
  korytarz: { photo: '/assets/hallway.jpg', size: '3 m²' },
  sypialnia2: { photo: '/assets/kidsbedroom2.jpeg', size: '10 m²' },
};

export const ORDER: RoomId[] = ['salon', 'lazienka', 'taras', 'sypialnia1', 'korytarz', 'sypialnia2'];

export const ROOM_IMAGE_SIZES = '(max-width: 1024px) 100vw, 55vw';
