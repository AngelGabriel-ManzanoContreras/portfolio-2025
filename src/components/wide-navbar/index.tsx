import styles from './wide-navbar.module.css';
import NavbarItem from '../navbar-item';

export default function index() {
  return (
    <nav className={ styles[`wide-navbar`] }>
      <ul className={ styles[`wide-navbar__list`] }>
        <NavbarItem customClassName={ styles[`wide-navbar__item`] } href="/#about" text="Home" />
        <NavbarItem customClassName={ styles[`wide-navbar__item`] } href="/#skills" text="Skills" />
        <NavbarItem customClassName={ styles[`wide-navbar__item`] } href="/#experience" text="Experience" />
        <NavbarItem customClassName={ styles[`wide-navbar__item`] } href="/#education" text="Education" />
        <NavbarItem customClassName={ styles[`wide-navbar__item`] } href="/#projects" text="Projects" />
        <NavbarItem customClassName={ styles[`wide-navbar__item`] } href="/#contact" text="Contact" />
      </ul>
    </nav>
  )
}
