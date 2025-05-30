import Head from "next/head"
import styles from "../styles/Work.module.css"
import Project from "../components/Project"
import { motion } from "framer-motion"

export default function Work() {
  const fadeInRight = {
    initial:{
      x:-60,
      opacity:0
    },
    animate: {
      x:0,
      opacity:1,
      transition:{
        duration:0.6,
        ease:[0.6, -0.05, 0.01, 0.99]
      }
    }
  }
  const stagger = {
    animate: {
      transition:{
        staggerChildren: 0.15
      }
    }
  }
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <motion.main id={styles.main} initial={"initial"} animate={"animate"} exit={{opacity:0}} variants={stagger} >
      <h1 id={styles.header}>
        These are some of my projects
      </h1>
<motion.div id={styles.projects} variants={fadeInRight} >
    <Project title="Fighting game" stack="Canvas API, Animations, OOP" imgsrc="/Assassin.PNG" imgalt="Assassin fighting game" url="https://assassinfighter.netlify.app/" />
    <Project title="Recipe sharing app" stack="CSS, JS, PHP" imgsrc="/recipe.png" imgalt="Recipe sharing app" url="https://zwa.toad.cz/~cirklmic/receptarSemestralka/" />  
    <Project title="Window Manager UI" stack="React, TypeScript, Context API" imgsrc="/windowmanager.png" imgalt="window manager project" url="https://windowmanager.netlify.app/"  />
  </motion.div>
  <motion.div id={styles.projects} variants={fadeInRight} >
    <Project title="Farm planting simulator" stack="Browser APIs, SVG " imgsrc="/Farm.png" imgalt="Farm planting simulator" url="https://farmplantingsimulator.netlify.app/" />
    <Project title="School reminder tracker" stack="Next.js, MongoDB, SSR, Serverless" imgsrc="/Reminder.PNG" imgalt="reminder project" url="https://pripominac.netlify.app/"  />
    <Project title="Online store" stack="Next.js, Typescript, Redux Toolkit" imgsrc="/Store.PNG" imgalt="E-Store project" url="https://online-store-mickencz.vercel.app/" />
  </motion.div>
    <div id={styles.note}>Or check out this Java REST API on my <a href="https://github.com/MickenCZ/Gardening-Rental-IS" id={styles.link}>Github</a></div>
    </motion.main>
    </>
  )
}
