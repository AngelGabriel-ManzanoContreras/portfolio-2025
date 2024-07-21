import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={ styles[`header`] }>
      <h1>Manzano</h1>
    </header>
  )
}
