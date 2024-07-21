import Image from "next/image";

import styles from './skill.module.css';

export default function index({ img, name }) {
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
