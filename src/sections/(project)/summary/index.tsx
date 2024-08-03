import Image from "next/image"

import styles from "./summary.module.css"

import helperImage from "@/assets/icons/project-summary.png"

export default function index({ summary }) {
  return (
    <section className={ styles[`project-summary`] }>
      <h3 className={ styles[`project-summary__title`] }>Project Summary</h3>

      <section className={ styles[`project-summary__container`] }>
        <pre className={ styles[`project-summary__summary`]}>{ summary }</pre>

        <figure className={ styles[`project-summary__image`] }>
          <Image 
            src={ helperImage }
            alt="Project Summary"
            
            height={ 250 }
            width={ 250 }
          />
        </figure>

      </section>

    </section>
  )
}
