import { experience } from '@/src/data/data';

import styles from './experience.module.css';
import ExperienceCard from '@/src/components/experience-card';

export default function index() {
  return (
    <section className={ styles[`experience`] } id='experience'>

      <h2 className={ styles[`experience__title`] }>Experience</h2>
      
      <section className={ styles[`experience__list`] }>
        {
          experience.map((exp, index) => {
            return (
              <ExperienceCard
                key={ index }
                { ...exp }
              />
            )
          })
        }
      </section>
    </section>
  )
}
