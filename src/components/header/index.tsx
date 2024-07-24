import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={ styles[`header`] }>
      {/* <h1>Angel Manzano</h1> */}
      <nav className={ styles[`header__navbar`] }>
        <ul className={ styles[`header__list`] }>
          <li>
            <Link className={ styles[`header__list-item`] } href="#">About me</Link>
          </li>
          <li>
            <Link className={ styles[`header__list-item`] } href="#skills">Skills</Link>
          </li>
          <li>
            <Link className={ styles[`header__list-item`] } href="#experience">Experience</Link>
          </li>
          <li>
            <Link className={ styles[`header__list-item`] } href="#education">Education</Link>
          </li>
          <li>
            <Link className={ styles[`header__list-item`] } href="#projects">Projects</Link>
          </li>
          <li>
            <Link className={ styles[`header__list-item`] } href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
