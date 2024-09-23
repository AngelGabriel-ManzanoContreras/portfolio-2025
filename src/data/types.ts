import { StaticImageData } from "next/image";
import { ITool } from "@/src/sections/(project)/tools/Itools";

export interface ProjectData {
  introduction: {
    title: string;
    fragment: string;
    jobrole: string;
    img: StaticImageData;
  };
  summary: string;
  contribution: {
    description: string;
    workSamples: StaticImageData[];
    url: string;
  };
  tools: ITool[];
}

export interface Projects {
  [key: string]: ProjectData;
}