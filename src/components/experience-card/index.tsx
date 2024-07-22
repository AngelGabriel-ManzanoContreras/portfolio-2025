'use client';
import Image from 'next/image';

import { IExperienceCard } from './Iexperience-card';

import styles from './experience.module.css';
import MainButton from '@/src/components/main-button';

export default function index({ title, duration, ubication, company, image, description, badge } : IExperienceCard) {
  const goToCertificate = () => {
    window.open(badge, '_blank');
  }

  return (
    <article className={ styles[`experience-card`] }>
      <section className={ styles[`experience-card__header`] }>

        <figure className={ styles[`experience-card__image`] }>
          <Image
            src={ image }
            alt={ company }
            width={ 150 }
            height={ 150 }
          />
        </figure>

        <section className={ styles[`experience-card__summary`] }>
          <h3 className={ styles[`experience-card__title`] }>{ title }</h3>
          <p className={ styles[`experience-card__company`] }>{ company }</p>
          { duration && <p className={ styles[`experience-card__duration`] }>{ duration }</p> }
          { ubication && <p className={ styles[`experience-card__ubication`] }>{ ubication }</p> }
        </section>

      </section>

      <h4 className={ styles[`experience-card__description-title`] }>Description</h4>

      <pre className={ styles[`experience-card__description`]}>{ description }</pre>

      { badge && <MainButton text='View certificate' onClick={ goToCertificate } /> }

    </article>
  )
}
