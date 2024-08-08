'use client';
import { useParams } from "next/navigation"

import { projects } from "@/src/data/data"

import styles from "./page.module.css"
import Introduction from "@/src/sections/(project)/introduction"
import Summary from "@/src/sections/(project)/summary"
import Tools from "@/src/sections/(project)/tools"

export default function page() {
  const { project } = useParams()
  const projectData = projects[ project ];

  return (
    <article className={ styles[`project-main`] }>
      <Introduction { ...projectData.introduction } />
      <Summary summary={ projectData.summary } />
      <Tools tools={ projectData.tools } />
    </article>
  )
}
