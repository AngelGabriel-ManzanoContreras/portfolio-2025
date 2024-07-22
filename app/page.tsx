import styles from "./page.module.css";

import About from "@/src/sections/about";
import Skills from "@/src/sections/skills";
import Experience from "@/src/sections/experience";
import Education from "@/src/sections/education";
import Contact from "@/src/sections/contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
