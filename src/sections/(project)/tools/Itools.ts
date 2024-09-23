import { StaticImageData } from "next/image";

export type ITool = {
  name  : string;
  icon? : string;
  img   : string | StaticImageData;
};

export type ITools = {
  tools: ITool[];
}