import { StaticImageData } from 'next/image';
export interface IIntroduction {
  title    : string;
  fragment : string;
  img      : string | StaticImageData;
  jobrole  : string;
}