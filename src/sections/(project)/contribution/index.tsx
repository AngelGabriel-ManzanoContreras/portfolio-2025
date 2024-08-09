'use client';
import { useState } from "react";

import Image from "next/image"

import styles from "./contribution.module.css"
import MainButton from "@/src/components/main-button"

export default function index({ description, workSamples, url, uxcase }) {
  const [ currentSample, setCurrentSample ] = useState(0);
  const [ currentPosition, setCurrentPosition ] = useState({ transform : `translateX(0)`, transition : `transform ${ currentSample * .75 }s ease-in-out` });

  const viewMore = ( place ) => {
    window.open(place, `_blank`);
  }

  const handleClick = ( nextSample : number ) => {
    setCurrentSample(nextSample);
    setCurrentPosition({ transform : `translateX(-${ nextSample * 100 }%)`, transition : `transform ${ Math.abs( nextSample - currentSample ) * .75 }s ease-in-out` });
  }

  return (
    <section className={ styles[`contribution`] }>
      <section className={ styles[`contribution__text`] }>
        <h3 className={ styles[`contribution__title`] }>My contribution</h3>
        <p className={ styles[`contribution__summary`] }>{ description }</p>
      </section>

      <section className={ styles[`contribution__work-samples`] }>
        <figure className={ styles[`contribution__carousel`] }>
          {
            workSamples.map((sample, index) => (
              <Image
                key={ index }
                fill={ true}
                className={ styles[`contribution__work-sample`] }
                style={ currentPosition }
                src={ sample }
                alt={ `Work sample ${ index + 1 }` }
              />
            ))
          }
        </figure>
        <section className={ styles[`contribution__dashes`] }>
          {
            workSamples.map((_, index : number) => (
              <button
                key={ index }
                className={ `${ styles[`contribution__dash`] } ${ currentSample === index ? styles[`contribution__dash--active`] : ''}` }
                onClick={ () => handleClick( index ) }
              ></button>
            ))
          }
        </section>

        <section className={ styles[`contribution__buttons`] }>
          {
            url &&
            <MainButton
              onClick={ () => viewMore( url ) }
              text={ `View project` }
            />
          }
          {
            uxcase &&
            <MainButton
              onClick={ () => viewMore( uxcase ) }
              text={ `View UX case` }
            />
          }
        </section>

      </section>

    </section>
  )
}
