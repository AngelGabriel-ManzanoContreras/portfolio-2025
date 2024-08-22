import Image from "next/image";

import { ISkill } from "./Iskill";

import styles from './skill.module.css';

export default function index({ img, name } : ISkill) {
  return (
    <article className={ styles[`skill`] }>
      <figure className={ styles[`skill__icon`] }>
        <Image 
          src={ img } 
          alt={ name } 
          fill={ true }
          />
      </figure>

      <p className={ styles[`skill__title`] }>{ name }</p>
    </article>
  )
}
