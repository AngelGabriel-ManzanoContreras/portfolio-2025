import { StaticImageData } from "next/image";

export interface IProjectCard {
  url     : string;
  title   : string;
  fragment: string;
  jobrole : string;
  img     : string|StaticImageData;
}