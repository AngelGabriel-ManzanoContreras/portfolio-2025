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

  const paragraph = `Frontend Developer | UX/UI Designer | P-TECH (IBM) - 2nd Generation
  
  I am a Software Developer with experience in UX/UI Design, passionate about creating digital experiences that are both visually appealing and user-friendly. I am always looking for new challenges and opportunities to grow professionally.
  `;

  return (
    <section className={ styles[`about`] } id='about'>

      <article className={ styles[`about__article`]}>
        <h1 className={ styles[`about__title`] }>Angel Manzano</h1>
        <pre className={ styles[`about__description`] }>{ paragraph }</pre>
        <MainButton text="Contact me" onClick={ goToContact } />
      </article>
      
      <figure className={ styles[`about__image`] }>
        <Image  src={myImage} alt="Angel Manzano" fill={true} />
      </figure>

    </section>
  )
}
