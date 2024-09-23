import { StaticImageData } from "next/image";

export interface IContribution {
  description : string;
  workSamples : string[] | StaticImageData[];
  url?        : string;
  uxcase?     : string;
}