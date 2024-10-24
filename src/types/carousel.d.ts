import { ReactNode } from 'react';

export interface CarouselProps {
  header: string;
  buttonText: string;
  buttonHref: string;
}

export interface CasinoSlideData {
  imagePath: string;
  description: string;
  badge: ReactNode;
  activityName: string;
}
