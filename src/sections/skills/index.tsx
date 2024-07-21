'use client'
import { useState } from 'react'

import styles from './skills.module.css'

export default function Skills() {
  const [category, setCategory] = useState('');

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
    } else {
      setCategory( inputCategory );
    }
  }

  return (
    <section className={ styles[`skills-section`] }>
      <h2 className={ styles[`skills-section--title`] }>Skills</h2>

      <section className={ styles[`skills-section--categories`] }>
        <span 
          className={ categoryStyleHandler('Technical') }
          onClick={ () => handleCategory('Technical') }
          >Technical</span>
        <span 
          className={ categoryStyleHandler('Soft') }
          onClick={ () => handleCategory('Soft') }
          >Soft</span>
      </section>

      <section className={ styles[`skills-section--skill-list`] }>
      </section>
    </section>
  )
}