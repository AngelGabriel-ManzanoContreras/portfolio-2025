import { education } from '@/src/data/data';

import styles from './education.module.css';
import ExperienceCard from '@/src/components/experience-card';

export default function index() {
  return (
    <section className={ styles[`education`] } id='education'>
      
      <h2 className={ styles[`education__title`] }>Education</h2>
      
      <section className={ styles[`education__list`] }>
        {
          education.map((cert, index) => ( 
            <ExperienceCard 
              key={ index } 
              { ...cert } 
            />) 
          )
        }
      </section>

    </section>
  )
}
