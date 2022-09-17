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
    <Project title="Online store" stack="Next.js, Typescript, Redux Toolkit" imgsrc="/Store.PNG" imgalt="E-Store project" url="https://online-store-mickencz.vercel.app/" />
    <Project title="School reminder tracker" stack="Next.js, MongoDB, SSR, Serverless" imgsrc="/Reminder.PNG" imgalt="reminder project" url="https://pripominac.netlify.app/"  />
    <Project title="Javascript Calculator" stack="React, Hooks, ES6, Math" imgsrc="/Calculator.PNG" imgalt="Calculator project" url="https://codepen.io/MickenCZ/full/JjLQYKO" />
  </motion.div>
  <motion.div id={styles.projects} variants={fadeInRight} >
    <Project title="React To-Do App" stack="React, LocalStorage, ES6" imgsrc="/Todo.PNG" imgalt="Todo App" url="http://todoaplikace.wz.cz/" />
    <Project title="25 + 5 Clock" stack="React, useRef, Audio, Time" imgsrc="/Clock.PNG" imgalt="25+5 Clock Project" url="https://codepen.io/MickenCZ/full/NWYZRPb" />
    <Project stack="React, useRef, useCallback, Audio" title="Drum Machine" imgsrc="/Drum.PNG" imgalt="Drum machine project"  url="https://codepen.io/MickenCZ/full/MWVxpdw" />
  </motion.div>
    </motion.main>
    </>
  )
}