import styles from "./page.module.css";

import About from "@/src/sections/about";
import Skills from "@/src/sections/skills";
import Experience from "@/src/sections/experience";
import Education from "@/src/sections/education";
import Projects from "@/src/sections/projects";
import Contact from "@/src/sections/contact";
import { Fragment } from "react";

export default function Home() {
  return (
    <article className={styles.main}>
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </article>
  );
}
