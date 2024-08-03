'use client';
import { useParams } from "next/navigation"

import { projects } from "@/src/data/data"

import styles from "./page.module.css"
import Tools from "@/src/sections/(project)/tools"
import Summary from "@/src/sections/(project)/summary"

export default function page() {
  const { project } = useParams()
  const projectData = projects[ project ];

  return (
    <main className={ styles[`project-main`] }>
      <h2>{ project }</h2>
      <Summary summary={ projectData.summary } />
      <Tools tools={ projectData.tools } />
    </main>
  )
}
