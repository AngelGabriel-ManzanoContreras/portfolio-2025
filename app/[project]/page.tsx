'use client';
import { useParams, useRouter } from "next/navigation"

import { projects } from "@/src/data/data"

import Head from "next/head";

import styles from "./page.module.css"
import Introduction from "@/src/sections/(project)/introduction"
import Summary from "@/src/sections/(project)/summary"
import Contribution from "@/src/sections/(project)/contribution"
import Tools from "@/src/sections/(project)/tools"
import { ITool } from "@/src/sections/(project)/tools/Itools";

export default function page() {
  const { project } = useParams();
  const router = useRouter();
  const projectKey: string = Array.isArray(project) ? project[0] : project;
  const projectData = projects[ projectKey ];

  if ( !projectData ) {
    router.push("/");
    return null;
  }

  return (
    <>
      <Head>
        <title>{ projectData.introduction.title } - Angel Manzano - Software Developer Portfolio</title>
        <meta name="description" content={ projectData.contribution.description } />
        { /* TODO : <meta name="keywords" content={ projectData.keywords } /> */}
        <meta property="og:title" content={ projectData.introduction.title } />
        <meta property="og:description" content={ projectData.contribution.description } />
        <meta property="og:url" content={ `https://angel-manzano-portfolio.netlify.app/${ projectKey }` } />
      </Head>
      <main className={ styles[`project-main`] }>
        <Introduction { ...projectData.introduction } />
        <Summary summary={ projectData.summary } />
        <Contribution { ...projectData.contribution } />
        <Tools tools={ projectData.tools as ITool[] } />
      </main>
    </>
  )
}
