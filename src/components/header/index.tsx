"use client";

import useHeader from "./useHeader";

import Image from "next/image";

import styles from "./header.module.css";
import menuIcon from "../../../assets/icons/menu.webp";
import xIcon from "../../../assets/icons/x.webp";

import WideNavbar from "../wide-navbar";
import Navbar from "../navbar";

export default function Header() {
  const { menuOpen, handleMenu } = useHeader();

  return (
    <header className={ styles[`header`] }>
      
      <button className={ styles[`header__menu-icon`] } title="Toggle menu">
        <Image src={ menuOpen ? xIcon : menuIcon } alt="Menu icon" fill={true} onClick={ handleMenu } />
      </button>

      <WideNavbar />

      <Navbar menuOpen={ menuOpen } closeMenu={ handleMenu } />

    </header>
  )
}
