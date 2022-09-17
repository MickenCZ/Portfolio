import Head from "next/head"
import styles from "../styles/Contact.module.css"
import { motion } from "framer-motion"

export default function Contact() {
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
        <title>Contact Me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <main id={styles.main}>
    <section id={styles.contact}>
      <motion.div id={styles.textContainer} exit={{opacity:0}}  initial={"initial"} animate={"animate"} variants={stagger}>
        <motion.h1 variants={fadeInRight}>Let&apos;s work together...</motion.h1>
        <motion.p variants={fadeInRight}>Are you interested?</motion.p>
      </motion.div>
      <div id={styles.links}>
        
        
      <a href="https://github.com/MickenCZ" target="_blank" rel="noreferrer" ><i className="fab fa-github" ></i> Github</a>
        
      <a href="https://www.linkedin.com/in/michael-cirkl-1b7832250/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>

        <a href="mailto:MickenCZ@seznam.cz" target="_blank" rel="noreferrer" title="MickenCZ@seznam.cz"><i className="fas fa-at"></i> Send a mail</a>
        
      </div>
    </section>
    </main>
    </>
  )
}
