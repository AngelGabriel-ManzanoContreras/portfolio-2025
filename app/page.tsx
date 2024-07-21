import styles from "./page.module.css";

import About from "@/src/sections/about";
import Skills from "@/src/sections/skills";
import Experience from "@/src/sections/experience";

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Skills />
      <Experience />
    </main>
  );
}
