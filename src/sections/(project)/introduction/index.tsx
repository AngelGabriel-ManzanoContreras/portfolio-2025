import Image from 'next/image'

import { IIntroduction } from './Iintroduction'

import styles from './introduction.module.css'

export default function index({ title, fragment, img, jobrole } : IIntroduction) {
  return (
    <section className={ styles[`introduction`] }>
      <section className={ styles[`introduction__text`] }>
        <h2 className={ styles[`introduction__title`] }>{ title }</h2>
        <h3 className={ styles[`introduction__fragment`] }>{ fragment }</h3>
        <h4 className={ styles[`introduction__jobrole`] }>{ jobrole }</h4>
      </section>
      
      <section className={ styles[`introduction__cover`] }>
        <div className={ styles[`introduction__shape`] }>
          <div className={ styles[`introduction__long-shape`] }></div>
          <div className={ styles[`introduction__short-shape`] }></div>
        </div>

        <figure className={ styles[`introduction__image`] }>
          <Image 
            src={ img }
            alt={ title}
            fill={true}
          />
        </figure>
      </section>

    </section>
  )
}
