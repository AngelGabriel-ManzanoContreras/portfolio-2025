import { ITools } from "./Itools";

import styles from"./tools.module.css";
import Skill from "@/src/components/skill";

export default function index({ tools } : ITools) {
  return (
    <section className={ styles[`project-tools`] }>
      <h3 className={ styles[`project-tools__title`] }>Tools used</h3>

      <section className={ styles[`project-tools__container`] }>
        {
          tools.map((tool, index) => ( <Skill key={index} {...tool} /> ))
        }
      </section>

    </section>
  )
}
