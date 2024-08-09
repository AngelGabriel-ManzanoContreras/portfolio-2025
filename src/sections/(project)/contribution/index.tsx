
import Image from "next/image"

import { IContribution } from "./Icontribution"
import useContribution from "./useContribution";

import styles from "./contribution.module.css"
import MainButton from "@/src/components/main-button"

export default function index({ description, workSamples, url, uxcase } : IContribution) {
  const { currentSample, currentPosition, viewMore, handleClick } = useContribution();
  const viewProject = () => viewMore(url as string);
  const viewUxCase = () => viewMore(uxcase as string);

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
              onClick={ viewProject }
              text={ `View project` }
            />
          }
          {
            uxcase &&
            <MainButton
              onClick={ viewUxCase }
              text={ `View UX case` }
            />
          }
        </section>

      </section>

    </section>
  )
}
