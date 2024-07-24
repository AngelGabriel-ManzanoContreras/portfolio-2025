'use client';
import { useParams } from "next/navigation"

import { projects } from "@/src/data/data"

export default function page() {
  const { project } = useParams()

  return (
    <main>
      <h2>{ project }</h2>
    </main>
  )
}
