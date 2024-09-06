'use client';
import { useEffect } from 'react'

import Link from 'next/link'

import styles from './navbar.module.css'

export default function index({ menuOpen, closeMenu }) {
  useEffect(() => {
    if ( menuOpen ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <nav className={ `${ styles[`navbar`] } ${ menuOpen && styles[`navbar--show-up`] }` }>
      <ul className={ styles[`navbar__list`] }>
        <li>
          <Link className={ styles[`navbar__list-item`] } href="/#" onClick={ closeMenu }>About me</Link>
        </li>
        <li>
          <Link className={ styles[`navbar__list-item`] } href="/#skills" onClick={ closeMenu }>Skills</Link>
        </li>
        <li>
          <Link className={ styles[`navbar__list-item`] } href="/#experience" onClick={ closeMenu }>Experience</Link>
        </li>
        <li>
          <Link className={ styles[`navbar__list-item`] } href="/#education" onClick={ closeMenu }>Education</Link>
        </li>
        <li>
          <Link className={ styles[`navbar__list-item`] } href="/#projects" onClick={ closeMenu }>Projects</Link>
        </li>
        <li>
          <Link className={ styles[`navbar__list-item`] } href="/#contact" onClick={ closeMenu }>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
