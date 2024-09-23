'use client';

import { INavbar } from './Inavbar';
import useNavbar from './useNavbar';

import NavbarItem from '../navbar-item';

import styles from './navbar.module.css'

export default function index({ menuOpen, closeMenu } : INavbar) {
  useNavbar( menuOpen );

  return (
    <nav className={ `${ styles[`navbar`] } ${ menuOpen && styles[`navbar--show-up`] }` }>
      <ul className={ styles[`navbar__list`] }>
        <NavbarItem customClassName={ styles[`navbar__list-item`] } href="/#home" onClick={ closeMenu } text="Home" />
        <NavbarItem customClassName={ styles[`navbar__list-item`] } href="/#skills" onClick={ closeMenu } text="Skills" />
        <NavbarItem customClassName={ styles[`navbar__list-item`] } href="/#experience" onClick={ closeMenu } text="Experience" />
        <NavbarItem customClassName={ styles[`navbar__list-item`] } href="/#education" onClick={ closeMenu } text="Education" />
        <NavbarItem customClassName={ styles[`navbar__list-item`] } href="/#projects" onClick={ closeMenu } text="Projects" />
        <NavbarItem customClassName={ styles[`navbar__list-item`] } href="/#contact" onClick={ closeMenu } text="Contact" />
      </ul>
    </nav>
  )
}
