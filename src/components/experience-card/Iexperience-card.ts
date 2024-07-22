import { StaticImageData } from "next/image";

export interface IExperienceCard {
  title       : string;
  duration?   : string;
  ubication?  : string;
  company     : string;
  image       : string | StaticImageData;
  description : string;
  badge?      : string;
}