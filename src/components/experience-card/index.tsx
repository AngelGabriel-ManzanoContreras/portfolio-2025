import Image from 'next/image';
import styles from './experience.module.css';

export default function index({ title, duration, ubication, company, companyImg, description }) {
  return (
    <article className={ styles[`experience-card`] }>
      <section className={ styles[`experience-card__header`] }>

        <figure className={ styles[`experience-card__image`] }>
          <Image
            src={ companyImg }
            alt={ company }
            width={ 150 }
            height={ 150 }
          />
        </figure>

        <section className={ styles[`experience-card__summary`] }>
          <h3 className={ styles[`experience-card__title`] }>{ title }</h3>
          <p className={ styles[`experience-card__company`] }>{ company }</p>
          <p className={ styles[`experience-card__duration`] }>{ duration }</p>
          <p className={ styles[`experience-card__ubication`] }>{ ubication }</p>
        </section>

      </section>

      <h4 className={ styles[`experience-card__description-title`] }>Description</h4>

      <pre className={ styles[`experience-card__description`]}>{ description }</pre>
    </article>
  )
}
