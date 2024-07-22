import Image from "next/image";

import { ISkill } from "./Iskill";

import styles from './skill.module.css';

export default function index({ img, name } : ISkill) {
  return (
    <article className={ styles[`skill`] }>
      <figure className={ styles[`skill--icon`] }>
        <Image 
          src={ img } 
          alt={ name } 
          width={ 100 }
          height={ 100 }
          />
      </figure>

      <p className={ styles[`skill--title`] }>{ name }</p>
    </article>
  )
}
