import { StaticImageData } from "next/image";

export type ITool = {
  name  : string;
  icon  : string;
  img   : string | StaticImageData;
};

export interface ITools {
  tools : ITool[];
}