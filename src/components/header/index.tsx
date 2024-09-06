'use client';

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";
import menuIcon from "../../../assets/icons/menu.webp";
import xIcon from "../../../assets/icons/x.webp";

import Navbar from "../navbar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={ styles[`header`] }>
      
      <button className={ styles[`header__menu-icon`] }>
        <Image src={ menuOpen ? xIcon : menuIcon } alt="Menu icon" fill={true} onClick={ handleMenu } />
      </button>

      <nav className={ styles[`header__navbar`] }>
        <ul className={ styles[`header__list`] }>
          <li>
            <Link className={ styles[`header__list-item`] } href="/#">About me</Link>
          </li>
          <li>
            <Link className={ styles[`header__list-item`] } href="/#skills">Skills</Link>
          </li>
          <li>
            <Link className={ styles[`header__list-item`] } href="/#experience">Experience</Link>
          </li>
          <li>
            <Link className={ styles[`header__list-item`] } href="/#education">Education</Link>
          </li>
          <li>
            <Link className={ styles[`header__list-item`] } href="/#projects">Projects</Link>
          </li>
          <li>
            <Link className={ styles[`header__list-item`] } href="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Navbar menuOpen={ menuOpen } closeMenu={ handleMenu } />

    </header>
  )
}
