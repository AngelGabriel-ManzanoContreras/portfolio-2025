'use client';
import { useParams, useRouter } from "next/navigation"

import { projects } from "@/src/data/data"

import styles from "./page.module.css"
import Introduction from "@/src/sections/(project)/introduction"
import Summary from "@/src/sections/(project)/summary"
import Contribution from "@/src/sections/(project)/contribution"
import Tools from "@/src/sections/(project)/tools"

export default function page() {
  const { project } = useParams();
  const router = useRouter();
  const projectData = projects[ project ];

  if ( !projectData ) {
    router.push("/");
    return null;
  }

  return (
    <main className={ styles[`project-main`] }>
      <Introduction { ...projectData.introduction } />
      <Summary summary={ projectData.summary } />
      <Contribution { ...projectData.contribution } />
      <Tools tools={ projectData.tools } />
    </main>
  )
}
