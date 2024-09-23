'use client';
import Image from 'next/image';

import useExperienceCard from './useExperienceCard';
import { IExperienceCard } from './Iexperience-card';

import styles from './experience.module.css';
import MainButton from '@/src/components/main-button';

export default function index({ title, duration, ubication, company, image, description, badge } : IExperienceCard) {
  const { isLargeScreen, cardStyle, goToCertificate, onCardClick } = useExperienceCard( badge );

  return (
    <article className={ styles[`experience-card`] } style={ cardStyle } onClick={ !isLargeScreen && onCardClick }>
      <section className={ styles['experience-card__header'] }>

        <figure className={ styles['experience-card__image'] }>
          <Image
            className={ styles['experience-card__inner-image'] }
            src={ image }
            alt={ company }
            fill={ true }
          />
        </figure>

        <section className={ styles['experience-card__summary'] }>
          <h3 className={ styles['experience-card__title'] }>{ title }</h3>
          <p className={ styles['experience-card__company'] }>{ company }</p>
          { duration && <p className={ styles['experience-card__duration'] }>{ duration }</p> }
          { ubication && <p className={ styles['experience-card__ubication'] }>{ ubication }</p> }
        </section>

      </section>

      <details className={styles[`experience-card__details`]} open={isLargeScreen} onClick={ onCardClick }>
        <summary className={styles[`experience-card__summary-title`]}>
          <h4 className={styles[`experience-card__description-title`]}>Description</h4>
        </summary>
        <pre className={styles[`experience-card__description`]}>{description}</pre>
      </details>

      { badge && <MainButton text='View certificate' onClick={ goToCertificate } /> }

    </article>
  )
}