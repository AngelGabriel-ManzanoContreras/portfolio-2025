'use client';
import { useRouter } from 'next/navigation';

import Image from 'next/image'

import styles from './about.module.css'
import MainButton from '@/src/components/main-button'

import myImage from '@/assets/imgs/angel.webp'

export default function index() {
  const router = useRouter();
  const goToContact = () => {
    router.push('/#contact');
  }

  return (
    <section className={ styles[`about`] } id='about'>

      <article className={ styles[`about__article`]}>
        <h1 className={ styles[`about__title`] }>Angel Manzano</h1>
        <p className={ styles[`about__description`] }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <MainButton text="Contact me" onClick={ goToContact } />
      </article>
      
      <figure className={ styles[`about__image`] }>
        <Image  src={myImage} alt="Angel Manzano" height={524} width={524} />
      </figure>

    </section>
  )
}
