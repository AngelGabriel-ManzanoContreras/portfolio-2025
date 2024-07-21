import styles from "./page.module.css";

import Skills from "@/src/sections/skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <Skills />
    </main>
  );
}
