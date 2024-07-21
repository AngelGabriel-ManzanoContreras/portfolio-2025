'use client'
import { useState } from 'react'

import { skills } from '@/src/data/data'

import styles from './skills.module.css'
import Skill from '@/src/components/skill'

export default function Skills() {
  const [category, setCategory] = useState('');
  const [ skillsToDisplay, setSkillsToDisplay ] = useState( skills );

  const categoryStyleHandler = ( inputCategory: string ) => {
    return [
      styles[`skills-section--category`],
      category === inputCategory ? styles[`skills-section--category__selected`] : ''
    ].join(' ');
  }

  const handleCategory = ( inputCategory: string ) => {
    if ( category === inputCategory ) {
      // Clear the category if it's already set
      setCategory( '' );
      setSkillsToDisplay( skills );
    } else {
      setCategory( inputCategory );
      setSkillsToDisplay( skills.filter( skill => skill.category === inputCategory ) );
    }
  }

  return (
    <section className={ styles[`skills-section`] }>
      <h2 className={ styles[`skills-section--title`] }>Skills</h2>

      <section className={ styles[`skills-section--categories`] }>
        <span 
          className={ categoryStyleHandler('technical') }
          onClick={ () => handleCategory('technical') }
          >Technical</span>
        <span 
          className={ categoryStyleHandler('professional') }
          onClick={ () => handleCategory('professional') }
          >Professional</span>
      </section>

      <section className={ styles[`skills-section--skill-list`] }>
        { skillsToDisplay.map( ( skill, index ) => ( <Skill key={ index } { ...skill}/> ) )
        }
      </section>
    </section>
  )
}