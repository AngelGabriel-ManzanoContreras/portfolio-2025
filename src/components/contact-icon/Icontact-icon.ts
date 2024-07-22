import { StaticImageData } from "next/image";

export interface IContactIcon {
  link : string;
  image: string | StaticImageData;
  name : string;
}