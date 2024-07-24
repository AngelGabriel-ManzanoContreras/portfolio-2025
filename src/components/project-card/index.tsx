'use client';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

import styles from './project-card.module.css'
import MainButton from '@/src/components/main-button'

export default function index({ url, title, fragment, jobrole, img }) {
  const router = useRouter()

  const navigate = () => {
    router.push(`/${url}`)
  }
  
  return (
    <article className={ styles[`project-card`] }>

      <figure className={ styles[`project-card__image`] }>
        <Image 
          src={img} 
          alt={title} 
          fill={true}
        />
      </figure>

      <section className={ styles[`project-card__summary`] }>
        <h3 className={ styles[`project-card__title`] }>{ title }</h3>
        <h4 className={ styles[`project-card__jobrole`] }>{ jobrole }</h4>
        <p>{ fragment }</p>

      </section>

      <MainButton
        onClick={ navigate }
        text="View project"
      />

    </article>
  )
}
