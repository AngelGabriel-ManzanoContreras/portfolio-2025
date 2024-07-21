import styles from "./page.module.css";

import About from "@/src/sections/about";
import Skills from "@/src/sections/skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Skills />
    </main>
  );
}
